import { html, css, LitElement } from 'lit';
import { Dropdown } from './Dropdown';
import { CustomTable } from './CustomTable';
export class WcBasics extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--wc-basics-text-color, #000);
        --mdc-theme-primary: #6200ee;
        --mdc-theme-secondary: #018786;
        --mdc-theme-background: #fff;
        --mdc-theme-surface: #fff;
        --mdc-theme-error: #b00020;
        --mdc-theme-on-primary: #fff;
        --mdc-theme-on-secondary: #fff;
        --mdc-theme-on-surface: #000;
        --mdc-theme-on-error: #fff;
        --mdc-theme-text-primary-on-background: rgba(0, 0, 0, 0.87);
        --mdc-theme-text-secondary-on-background: rgba(0, 0, 0, 0.54);
        --mdc-theme-text-hint-on-background: rgba(0, 0, 0, 0.38);
        --mdc-theme-text-disabled-on-background: rgba(0, 0, 0, 0.38);
        --mdc-theme-text-icon-on-background: rgba(0, 0, 0, 0.38);
        --mdc-theme-text-primary-on-light: rgba(0, 0, 0, 0.87);
        --mdc-theme-text-secondary-on-light: rgba(0, 0, 0, 0.54);
        --mdc-theme-text-hint-on-light: rgba(0, 0, 0, 0.38);
        --mdc-theme-text-disabled-on-light: rgba(0, 0, 0, 0.38);
        --mdc-theme-text-icon-on-light: rgba(0, 0, 0, 0.38);
        --mdc-theme-text-primary-on-dark: white;
        --mdc-theme-text-secondary-on-dark: rgba(255, 255, 255, 0.7);
        --mdc-theme-text-hint-on-dark: rgba(255, 255, 255, 0.5);
        --mdc-theme-text-disabled-on-dark: rgba(255, 255, 255, 0.5);
        --mdc-theme-text-icon-on-dark: rgba(255, 255, 255, 0.5);
      }
      h2{
        color: red;
      }
      
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
    <link
        rel="stylesheet"
        href="https://unpkg.com/@material/typography@11.0.0/dist/mdc.typography.min.css"
      />
      ${ false && html` <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>` || '' } 
       <drop-down></drop-down>
      <custom-table></custom-table>
    `;
  }
}
