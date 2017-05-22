var SearchTextSyncBehavior = {
  ready : function() {
    window.addEventListener('ui-search-text-change', this._setSearchText.bind(this));
  },
  _tiggerTextChange : function() {
    this.fire('ui-search-text-change', {value: this.$.input.value});
  },
  _setSearchText : function(e) {
    this.$.input.value = e.detail.value;
    this._onChange();
  }
}