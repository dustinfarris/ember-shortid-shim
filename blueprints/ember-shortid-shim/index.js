/*jshint node:true*/
module.exports = {
  description: 'Installation blueprint for ember-shortid-shim',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addPackagesToProject([
      { name: 'shortid', target: '^2.2.6' }
    ]);
  }
};
