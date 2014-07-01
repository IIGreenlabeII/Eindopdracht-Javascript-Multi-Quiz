//View for the result
quiz.views.ResultView = Backbone.View.extend({
    tagName: 'div',

    template: template('resultTemplate'),

    initialize: function(){
        this.render();
    },

    render: function(){
        this.$el.append(this.model.get('title') + " " + this.model.get('series'));
        return this;
    }
});