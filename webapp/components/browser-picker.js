import '../node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '../node_modules/@polymer/paper-item/paper-icon-item.js';
import '../node_modules/@polymer/paper-listbox/paper-listbox.js';
import '../node_modules/@polymer/polymer/lib/elements/dom-repeat.js';
import { html, PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';
import './display-logo.js';
import { DefaultBrowserNames, DefaultProducts, ProductInfo } from './product-info.js';

class BrowserPicker extends ProductInfo(PolymerElement) {
  static get is() {
    return 'browser-picker';
  }

  static get template() {
    return html`
  <paper-dropdown-menu label="Browser" no-animations>
    <paper-listbox slot="dropdown-content" selected="{{ browser }}" attr-for-selected="value">
      <template is="dom-repeat" items="[[defaultProducts]]" as="product">
        <paper-icon-item value="[[product.browser_name]]">
          <display-logo slot="item-icon" product="[[product]]" small></display-logo>
          [[displayName(product.browser_name)]]
        </paper-icon-item>
      </template>
    </paper-listbox>
  </paper-dropdown-menu>
`;
  }

  static get properties() {
    return {
      browser: {
        type: String,
        value: DefaultBrowserNames[0],
        notify: true,
      },
      defaultProducts: {
        type: Array,
        value: DefaultProducts.map(p => Object.assign({}, p)),
      },
    };
  }
}
window.customElements.define(BrowserPicker.is, BrowserPicker);
export { BrowserPicker };
