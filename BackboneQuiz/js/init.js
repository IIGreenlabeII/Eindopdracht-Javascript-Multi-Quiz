//self invoking function, automatisch wordt uitgevoerd en is weg
(function () {
    window.quiz = {};
    quiz.$document = $(document);
    quiz.views = {};
    quiz.models = {};
    quiz.routers = {};
    quiz.collections = {};
    quiz.events = _.clone(Backbone.Events);
    window.template = function(id){
        return _.template( $('#' + id).html() );
    };
})();
