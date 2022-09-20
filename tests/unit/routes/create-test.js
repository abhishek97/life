import { module, test } from 'qunit';
import { setupTest } from 'life/tests/helpers';

module('Unit | Route | create', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:create');
    assert.ok(route);
  });
});
