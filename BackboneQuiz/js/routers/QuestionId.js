//Router for the Question Id's
quiz.routers.QuestionId = Backbone.Router.extend({
    routes: {
        'question/:id': 'whichQuestion',
        '*other/*id': 'default'
    },

    whichQuestion: function(id){
        quiz.events.trigger('toQuestion', {
            id: id
        });
    },

    default: function(){
        console.log('Geen match');
    }
});