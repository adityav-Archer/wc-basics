import { LitElement , html, css} from "lit";

export class CustomTable extends LitElement{

    static get properties(){
        return{
            actions: Array,
            rowItems: Array,
            headerItems: Array
        }
    }

    constructor(){
        super();
        this.actions = [
            {
              "actionId": "ai.GreetUser",
              "groupIndex": 0,
              "input": null
            },
            {
                "actionId": "client.IntroduceExperience",
                "groupIndex": 0,
                "input": null
            },
            {
                "actionId": "client.PlayVisual",
                "groupIndex": 0,
                "input": {
                    "visual": "Confetti",
                    "location": "CenterStage"
                }
            },
            {
                "actionId": "client.DirectStage",
                "groupIndex": 4,
                "input": {
                    "behavior": "Mid-stage",
                    "character": "Walbot"
                }
            },
            {
              "actionId": "client.UpdateUI",
              "groupIndex": 1,
              "input": {
                  "action": "Show",
                  "ui": "ShoppingList"
              }
            }
          ];
  
        this.rowItems = Array(this.getNumberOfRows(this.actions)).fill().map((item, idx) => ({ id: idx}));
        this.headerItems = [{
            id: 1, 
            name: "Client",
            color: "gray"
        },{
            id: 2,
            name: "Cloud",
            color: "orange"
        }, {
            id: 3, 
            name: "Text Interaction",
            color: "red"
        },{
            id:4, 
            name: "DirectStage"
        }, {
            id: 5,
            name: "Animation"
        }, {
            id: 6, 
            name: "PlaySound"
        }, {
            id: 7,
            name: "PlayVisual"
        }, {
            id: 8,
            name: "UpdateUI"
        }]
    }

    static get styles(){
        return css`
            .actions-table{
                width: 100%;
            }
            .actions-table th{
                border: 1px solid #ddd;
                width: 100px;
                padding: 8px;
            }
            .actions-table td{
                border: 1px solid #ddd;
                width: 100px;
                height: 50px;
                padding: 8px;
            }}
            .actions-table tr:nth-child(even){background-color: #f2f2f2;}
        `
    }

    findActionMapping(actionItem, headerItem){
        let { actionId } = actionItem;
        
        const actionItemList = actionId.split(".");
        if(actionId.startsWith("ai.") && headerItem.id === 3){
            return true;
        } else if(actionItemList.length === 2 && actionItemList[1] === "PlayVisual" && headerItem.id === 7){
            return true;
        } else if(actionItemList.length === 2 && actionItemList[1] === "UpdateUI" && headerItem.id === 8) {
            return true;
        } else if(actionItemList.length === 2 && actionItemList[1] === "DirectStage" && headerItem.id === 4) {
            return true;
        } else if(actionId.startsWith("client") && (actionItemList[1] !== "UpdateUI" && actionItemList[1] !== "DirectStage") && headerItem.id === 1) {
            return true;
        } else {
            return false;
        }
    }

    renderDataItem(rowIndex, colIndex, headerItm){
        console.log(rowIndex, colIndex);
        const items = this.actions.filter(currentValue => currentValue.groupIndex === rowIndex && colIndex === headerItm.id - 1 && this.findActionMapping(currentValue , headerItm));
        console.log(`the parent index is:`, rowIndex , colIndex , items);
        return items.length > 0 ? items[0].actionId : colIndex + 1;
    }

    addRowItem(event){
         this.rowItems.push({ id: this.rowItems.length});
        console.log(`the row items are:` , this.rowItems);
        this.rowItems = [...this.rowItems];
        //this.requestUpdate();
    }

    handleActionItemClick(event , colIndex, rowIndex){
        console.log('the index is: ' , rowIndex, colIndex);
    }

    getNumberOfRows(actionItems = []) {
        if(actionItems.length > 5){
            let numberOfRows = actionItems.reduce((rows, item) => item.groupIndex > rows  ? item.groupIndex  : rows
            , -1);
            console.log('the number of rows are :' , numberOfRows);
            return numberOfRows;
        } else {
            return 5;
        }
    }

    render(){
        
        return html`
        <button type="button" @click=${this.addRowItem}>Add Row</button>
            <table class="actions-table">
            <thead><tr>
               
                    ${this.headerItems.map(item => html`<th>${item.name}</th>`)}
            </tr>
                </thead>
                <tbody>
                    ${this.rowItems.map((item, rowIndex) => 
                         html`<tr>
                                ${this.headerItems.map((col, colIndex) => 
                                     html`<td @click=${event => this.handleActionItemClick(event, colIndex, rowIndex)}>${this.renderDataItem(rowIndex, colIndex, col)}</td>`
                                )}
                                </tr>`
                    )}
                </tbody>
            </table>
        `;
    }
}

customElements.define('custom-table' , CustomTable);