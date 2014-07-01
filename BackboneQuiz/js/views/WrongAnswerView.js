//Wrong answer View
quiz.views.WrongAnswerView = Backbone.View.extend({
    tagName: 'div',

    template: template('feedbackTemplate'),

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