import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts', {path: '/'});
  this.route('help');
  this.route('post', {
    path: 'posts/:post_id'
  });
  this.route('find');
});

export default Router;
