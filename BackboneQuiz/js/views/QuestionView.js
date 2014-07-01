//View
quiz.views.QuestionView = Backbone.View.extend({
    tagName: 'div',
    template: template('questionTemplate'),

    initialize: function(properties) {
        quiz.events.on('toQuestion', this.whichQuestion, this);
        this.router = properties.router;
        $("#results").css("display", "none");
    },

    events: {
      'click .checkResult': 'checkResult',
      'click .nextQuestion': 'nextQuestion',
      'click .prevButton': 'prevQuestion',
      'click .resetButton': 'resetQuiz',
      'click .endQuiz': 'endQuiz'
    },

    whichQuestion: function(data){
        //console.log(this.collection);
        this.currentQuestion = this.collection.find(function(item){
            return item.get('id') == data.id;

        });
        //console.log(this.template(currentQuestion.attributes));
        //console.log(this.currentQuestion);
        this.$el.html(this.template(this.currentQuestion.attributes));
        return this;
    },

    nextQuestion: function(e){
        $("#feedback").css("display", "none");
        $("#results").css("display", "none");
        e.preventDefault();
        var id = this.currentQuestion.attributes.id + 1;
        var $target = $(e.currentTarget);
        var url = 'question/' + id;
        console.log(id);
        this.router.navigate(url, {trigger: true, replace: true});
    },

    checkResult: function(){
        var selected = this.$el.find('input:radio:checked').val();
        if(this.$el.find('input:radio:checked').length == 0){
            console.log('Nothing selected');
        } else if(selected == this.currentQuestion.get('answer')){
            console.log(selected);
            $("#results").css("display", "block");
            $("#feedback").css("display", "none");
            $(".nextQuestion").css("display","block");
            $(".checkResult").css("display","none");
        } else {
            console.log('Wrong answer');
            $("#feedback").css("display", "block");
            $("#results").css("display", "none");
        }
        if(this.currentQuestion.attributes.id >= 20){
            console.log('End');
            $("#question").css("display", "none");
            $("#feedback").css("display", "none");
            $("#results").css("display", "none");
            $("#end").css("display", "block");
        }
        if(this.currentQuestion.attributes.id > 5 && this.currentQuestion.attributes.id < 20){
            $(".resetButton").css("display","block");
        }
    },

    prevQuestion: function(e){
        if(this.currentQuestion.attributes.id == 1){
            console.log('No Questions');
            $(".prevButton").css("display","none");
        } else {
        var id = this.currentQuestion.attributes.id - 1;
        var $target = $(e.currentTarget);
        var url = 'question/' + id;
        console.log(id);
        this.router.navigate(url, {trigger: true, replace: true});
        }
    },

    resetQuiz: function(e){
        var id = this.currentQuestion.attributes.id = 1;
        var $target = $(e.currentTarget);
        var url = 'question/' + id;
        console.log(id + " " + 'Reset quiz');
        this.router.navigate(url, {trigger: true, replace: true});
    }
});