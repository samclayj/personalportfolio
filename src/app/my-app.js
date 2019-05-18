import { LitElement, html } from 'lit-element';
 
class MyApp extends LitElement {
    render() {
        return html`<h1>Hello World Again</h1>`;
    }
}
 
customElements.define('my-app', MyApp);
