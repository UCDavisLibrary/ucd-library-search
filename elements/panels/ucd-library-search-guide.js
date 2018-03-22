import {Element as PolymerElement} from "@polymer/polymer"
import UCDLibrarySearchBase from "../utils/ucd-library-search-base"
import LightDom from "../utils/light-dom"
import PrimoUtils from "../utils/primo"

import template from "./ucd-library-search-guide.html"

class UCDLibrarySearchCatalog extends Mixin(PolymerElement)
  .with(UCDLibrarySearchBase, LightDom) {

  static get properties() {
    return {
      rootUrl : {
        type : String,
        value : ''
      }
    }
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