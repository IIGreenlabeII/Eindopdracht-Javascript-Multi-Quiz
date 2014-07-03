//Model for the Questions
quiz.models.Question = Backbone.Model.extend({
    //Default values
    defaults: {
        title: '',
        score: 0,
        id: 0,
        question: ' ',
        options: [],
        serie: 'Tv serie',
        answer: '...'
    }
});