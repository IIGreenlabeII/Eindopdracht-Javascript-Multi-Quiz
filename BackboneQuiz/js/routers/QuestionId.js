//Router for the Question Id's
quiz.routers.QuestionId = Backbone.Router.extend({
    //The routes options
    routes: {
        'question/:id': 'whichQuestion',
        '*other/*id': 'default'
    },

    //Which question is going to show
    whichQuestion: function(id){
        quiz.events.trigger('toQuestion', {
            id: id
        });
    },

    //Default URL
    default: function(){
        console.log('Geen match');
    }
});