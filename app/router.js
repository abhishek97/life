import EmberRouter from '@ember/routing/router';
import config from 'life/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('create');

  this.route('projects', function () {
    this.route('id', { path: '/:id' });
  });
});
