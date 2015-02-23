import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
export default Ember.Route.extend(AuthenticatedRouteMixin, {
    // model: function() {
    //     var promise = Ember.$.getJSON('www.reddit.com/r/emberjs/.json?jsonp=?');
    //     console.log(promise);
    //     return promise;
    // }
});
