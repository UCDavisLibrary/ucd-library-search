import {PolymerElement} from "@polymer/polymer/polymer-element"
import UCDLibrarySearchBase from "../utils/ucd-library-search-base"
import LightDom from "../utils/light-dom"

import template from "./ucd-library-search-guide.html"

class UCDLibrarySearchGuide extends Mixin(PolymerElement)
  .with(UCDLibrarySearchBase, LightDom) {

  static get properties() {
    return {
      rootUrl : {
        type : String,
        value : ''
      }
    }
  }

  static get template() {
    return template;
  }

  _onBrowse(e) {
    this.sendGAEvent({eventAction: 'guide-browse', eventLabel: e.currentTarget.getAttribute('type')});
  }

  _search() {
    this.sendGAEvent({eventAction: 'guide-search', eventLabel: this.$.input.value});
    window.location = (this.rootUrl || '') + '/?post_type=article&s=' + this.$.input.value;
  }
}

customElements.define('ucd-library-search-guide', UCDLibrarySearchGuide);