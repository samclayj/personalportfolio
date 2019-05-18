import { LitElement, html } from 'lit-element';
 
class LandingPage extends LitElement {
    render() {
        return html`<h1>I am a landing page hello  World Again</h1>`;
    }
}
 
customElements.define('landing-page', LandingPage);
