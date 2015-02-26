import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        mycall: function() {
            return $.ajax({
                url: "http://localhost:3000/api/somecall",
                type: "POST",
                data: JSON.stringify({})
            }).then(function(response) {
                return response;
            });
        }
    }

});
