import { LitElement, html } from 'lit-element';
import { LandingPage } from '../components/landing_page/landing-page';
 
class MyApp extends LitElement {
    render() {
        return html`<h1>Hello World Again</h1><landing-page></landing-page>`;
    }
}
 
customElements.define('my-app', MyApp);
