import { module, test } from 'qunit';
import { setupTest } from 'life/tests/helpers';

module('Unit | Controller | create', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:create');
    assert.ok(controller);
  });
});
