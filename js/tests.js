console.log('Browse Subject');
console.log(primoUtils.createPrimoLink({
  query : 'test',
  mode : primoUtils.MODES.BROWSE,
  browseScope : primoUtils.BROWSE_SCOPES.SUBJECT
}));

console.log('\nBrowse Author');
console.log(primoUtils.createPrimoLink({
  query : 'test',
  mode : primoUtils.MODES.BROWSE,
  browseScope : primoUtils.BROWSE_SCOPES.AUTHOR
}));

console.log('\nSearch Catalog Basic');
console.log(primoUtils.createPrimoLink({
  query : 'test',
  tab : primoUtils.TABS.CATALOG,
  mode : primoUtils.MODES.BASIC
}));

console.log('\nSearch All Basic');
console.log(primoUtils.createPrimoLink({
  query : 'test',
  tab : primoUtils.TABS.DEFAULT,
  mode : primoUtils.MODES.BASIC
}));

console.log('\nSearch Reserves Basic');
console.log(primoUtils.createPrimoLink({
  query : 'test',
  tab : primoUtils.TABS.RESERVES,
  mode : primoUtils.MODES.BASIC
}));

console.log('\nSearch Catalogs Advanced');
console.log(primoUtils.createPrimoLink({
  query : 'test',
  tab : primoUtils.TABS.CATALOG,
  mode : primoUtils.MODES.ADVANCED
}));

console.log('\nSearch All Advanced');
console.log(primoUtils.createPrimoLink({
  query : 'test',
  tab : primoUtils.TABS.DEFAULT,
  mode : primoUtils.MODES.ADVANCED
}));

console.log('\nSearch Reserves Advanced');
console.log(primoUtils.createPrimoLink({
  query : 'test',
  tab : primoUtils.TABS.RESERVES,
  mode : primoUtils.MODES.ADVANCED
}));