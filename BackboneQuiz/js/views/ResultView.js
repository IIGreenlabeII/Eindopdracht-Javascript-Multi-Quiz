//View for the result
quiz.views.ResultView = Backbone.View.extend({
    tagName: 'div',

    template: template('resultTemplate'),

    //Execute
    initialize: function(){
        this.render();
    },

    //Draw on the view
    render: function(){
        this.$el.append(this.model.get('title') + " " + this.model.get('series'));
        return this;
    }
});