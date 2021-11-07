import { LitElement, html, css } from 'lit';
import '@material/mwc-textfield/mwc-textfield.js';
import '@material/mwc-select/mwc-select.js';
import '@material/mwc-icon-button';
import { Fab } from "@material/mwc-fab/mwc-fab";
import { Button } from "@material/mwc-button/mwc-button";
export class Dropdown extends LitElement {
    static styles = css`
        @import "https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css";
        @import "https://unpkg.com/@material/button@11.0.0/dist/mdc.button.min.css";
        @import "@material/button/mdc-button";
        @import "@material/fab/mdc-fab;
        @use "@material/button/styles";
           
            .mdc-button{
                height:57px ;
            }
            .add-icon{
                position:absolute;
                z-index: -1;
                top: 8px;
                right: 10px;
            }
            .list{
                overflow: auto;
                height: 200px;
            }
        `
    ;

    constructor(){
        super();
        this.items = ['Mortgage', 'Groceries', 'Utilities', 'Insurance', 'Transportation'];
    }

    static get properties(){
        return {
            items: Array,
            selectedItem: String
        }
    }

    handleSelectClick(event)  {
        //event.stopPropagation();
        console.log('Event.targetvalue', event.target.value);
    }

    handleBtnClick(event){
        event.stopPropagation();
        console.log('event executed');
    }

    renderSelectItems(data = []){
        /*
        <div>
        <button class="mdc-button mdc-button--outlined">
    <span class="mdc-button__ripple"></span>
    <span class="mdc-button__touch"></span>
    <i class="material-icons mdc-button__icon" aria-hidden="true">add</i>
    <span class="mdc-button__label">
    ADD
    </span>
  </button>
  </div>

        */
        // <mwc-fab mini icon="add"></mwc-fab>
        return html`
            ${data.map((item, idx) =>  html`<mwc-list-item value="${idx}">${item}</mwc-list-item>`)}
        `; 
    }

    render(){
        return html`
        <link rel="stylesheet" href="https://unpkg.com/@material/button@11.0.0/dist/mdc.button.min.css">
        <link rel="stylesheet" href="https://unpkg.com/@material/button@11.0.0/dist/mdc.fab.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <mwc-select id="test" label="Behavior" @click="${this.handleSelectClick}">
        <mwc-list-item>
            <slot name="meta"> <mwc-fab mini icon="add" @click="${this.handleBtnClick}"></mwc-fab></slot>
        </mwc-list-item>
        <mwc-list-item value="test" selected=${false}>Test</mwc-list-item>
        ${this.renderSelectItems(this.items)}
       
        
        </mwc-select>
        `;
    }

    /*
    render() {
        <div class="add-icon" >
        <mwc-fab mini icon="add" @click="${this.handleBtnClick}"></mwc-fab>
        </div>
        return html`
        <link rel="stylesheet" href="https://unpkg.com/@material/button@11.0.0/dist/mdc.button.min.css">
        <link rel="stylesheet" href="https://unpkg.com/@material/button@11.0.0/dist/mdc.fab.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <div>
        <mwc-select id="t1" label="Category" @click="${this.handleSelectClick}">
            <mwc-list-item>
           
            </mwc-list-item>
            <div class="add-icon">
            <mwc-fab mini icon="add"></mwc-fab>
            </div>
            <div class="list>
            ${this.renderSelectItems(this.items)}
            </div>
           
        </mwc-select>
        </div>
        <h2>Test</h2>
        <div>
        <mwc-select id="test" label="Behavior" @click="${this.handleSelectClick}">
        <mwc-list-item>
       
        </mwc-list-item>
        
        <div class="list">
        ${this.renderSelectItems(this.items)}
        </div>
        <div class="add-icon">
        <mwc-fab mini icon="add"></mwc-fab>
        </div>
       
       
    </mwc-select>
    </div>
    

        `;
    }*/
}
customElements.define('drop-down', Dropdown);
