import { module, test } from 'ember-qunit';

import shortid from 'shortid';


module('Unit | vendor imports | shortid');


test('it exports shortid', function(assert) {
  assert.ok(shortid);
});
