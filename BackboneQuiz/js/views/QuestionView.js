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
      'click .checkResult': 'checkResult',          //Check result event
      'click .nextQuestion': 'nextQuestion',        //Next question event
      'click .prevButton': 'prevQuestion',          //Previous question event
      'click .resetButton': 'resetQuiz',            //Reset quiz event
      'click .endQuiz': 'endQuiz'                   //End quiz event
    },

    //Function for which question
    whichQuestion: function(data){
        //Which question is going te show
        this.currentQuestion = this.collection.find(function(item){
            return item.get('id') == data.id;

        });
        this.$el.html(this.template(this.currentQuestion.attributes));
        return this;
    },

    //Function next question
    nextQuestion: function(e){
        $("#feedback").css("display", "none");
        $("#results").css("display", "none");
        e.preventDefault();
        //URL for which question
        var id = this.currentQuestion.attributes.id + 1;
        var $target = $(e.currentTarget);
        var url = 'question/' + id;
        this.router.navigate(url, {trigger: true, replace: true});
    },

    //Function for the correct answer
    checkResult: function(){
        var selected = this.$el.find('input:radio:checked').val();
        if(this.$el.find('input:radio:checked').length == 0){
        } else if(selected == this.currentQuestion.get('answer')){
            //Correct answer
            console.log(selected);
            $("#results").css("display", "block");
            $("#feedback").css("display", "none");
            $(".nextQuestion").css("display","block");
            $(".checkResult").css("display","none");
        } else {
            //Wrong answer
            $("#feedback").css("display", "block");
            $("#results").css("display", "none");
        }
        if(this.currentQuestion.attributes.id >= 20){
            //End quiz button
            $("#question").css("display", "none");
            $("#feedback").css("display", "none");
            $("#results").css("display", "none");
            $("#end").css("display", "block");
        }
        if(this.currentQuestion.attributes.id > 5 && this.currentQuestion.attributes.id < 20){
            //Reset quiz button
            $(".resetButton").css("display","block");
        }
    },

    //Function previous question
    prevQuestion: function(e){
        if(this.currentQuestion.attributes.id == 1){
            $(".prevButton").css("display","none");
        } else {
        var id = this.currentQuestion.attributes.id - 1;
        var $target = $(e.currentTarget);
        var url = 'question/' + id;
        console.log(id);
        this.router.navigate(url, {trigger: true, replace: true});
        }
    },

    //Function reset quiz
    resetQuiz: function(e){
        var id = this.currentQuestion.attributes.id = 1;
        var $target = $(e.currentTarget);
        var url = 'question/' + id;
        this.router.navigate(url, {trigger: true, replace: true});
    }
});