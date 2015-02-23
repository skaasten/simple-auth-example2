import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('coffee');
  this.route('login');
  this.route('pizza');
  this.route('hi');
});

export default Router;
