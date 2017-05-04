import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('staffs', function() {
    this.route('show', {path: '/:id'});
    this.route('drivers', function() {});
    this.route('supports', function() {});
    this.route('create');
  });
  this.route('buses', function() {
    this.route('show', {path: '/:id'});
    this.route('create-bus');
  });

  this.route('charge-record', function() {
    this.route('show', {path: '/:id'});
    this.route('create');
  });
});

export default Router;
