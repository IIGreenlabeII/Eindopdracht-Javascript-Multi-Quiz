//Correct answer view
quiz.views.CorrectAnswerView = Backbone.View.extend({
    tagName: 'div',

    template: template('correctTemplate'),

    //Execute
    initialize: function(){
        this.render();
    },

    //Draw on the view
    render: function(){
        this.$el.append(this.model.get('title') + " " + this.model.get('feedback'));
        return this;
    }
});