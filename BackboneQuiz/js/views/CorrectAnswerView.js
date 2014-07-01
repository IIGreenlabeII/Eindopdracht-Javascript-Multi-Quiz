//Correct answer view
quiz.views.CorrectAnswerView = Backbone.View.extend({
    tagName: 'div',

    template: template('correctTemplate'),

    events: {
        'click .hide': 'hideFeedback'
    },

    initialize: function(){
        this.render();
    },

    render: function(){
        this.$el.append(this.model.get('title') + " " + this.model.get('feedback'));
        return this;
    }
});