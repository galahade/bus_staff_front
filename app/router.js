import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('show-driver', function() {
    this.route('show', {path: '/:id'});
  });
  this.route('buses', function() {
    this.route('show', {path: '/:license'});
    this.route('create-bus');
  });
});

export default Router;
