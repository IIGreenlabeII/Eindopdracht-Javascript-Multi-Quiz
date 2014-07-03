(function () {
    quiz.init = function() {
        // een nieuwe constructor
        var questionRouter = new quiz.routers.QuestionId();
        var wrongAnswer = new quiz.models.WrongAnswer();
        var correctAnswer = new quiz.models.CorrectAnswer();
        var result = new quiz.models.Result();

        new quiz.views.QuestionView({el: '#question', router: questionRouter, collection: questions});      //Question view
        new quiz.views.WrongAnswerView({el: '#feedback', model: wrongAnswer});      //Wrong answer view
        new quiz.views.CorrectAnswerView({el: '#results', model: correctAnswer});   //Correct answer view
        new quiz.views.ResultView({el: '#end', model: result});     //Result view

        Backbone.history.start();
    };
    //Collection where all the Questions are defined
    var questions = new quiz.collections.Questions([
        {
            id: 1,
            question: 'Who are the 2 brothers?',
            serie: 'Supernatural',
            'options': [
                'There are no brothers.',
                'Dean and Sam Winchester.',
                'Castiel and Uriel.',
                'Lucifer and Gabriel.'
            ],
            answer: 'Dean and Sam Winchester.',
            score: 30
        },
        {
            id: 2,
            question: 'What is a Grimm?',
            serie: 'Grimm',
            'options': [
                'A Grimm is a special person who can transform into a powerful being.',
                'A Grimm is a special person who possesses incredible powers such as being able to see the true form.',
                'A Grimm is a special person who can see peoples true feelings.',
                'A Grimm is a special person who can tell the difference between a lair and someone who tells the truth.'
            ],
            answer: 'A Grimm is a special person who possesses incredible powers such as being able to see the true form.',
            score: 10
        },
        {
            id: 3,
            question: 'In which movie did Agent Coulson play?',
            serie: 'Marvel Agents Of Shield',
            'options': [
                'The Avengers.',
                'The Fantastic Four.',
                'Spiderman.',
                'Ghostrider.'
            ],
            answer: 'The Avengers.',
            score: 20
        },
        {
            id: 4,
            question: 'What does Dean drive?',
            serie: 'Supernatural',
            'options': [
                'A Impala.',
                'A Mustang.',
                'A Porsche.',
                'A Classic.'
            ],
            answer: 'A Impala.',
            score: 10
        },
        {
            id: 5,
            question: 'For which organisation does Agent Grant Ward actually work?',
            serie: 'Marvel Agents Of Shield',
            'options': [
                'Deep Six.',
                'Shield.',
                'The Conspiracy.',
                'Hydra.'
            ],
            answer: 'Hydra.',
            score: 30
        },
        {
            id: 6,
            question: 'What is a Wesen?',
            serie: 'Grimm',
            'options': [
                'Wesen is a human that can transform in a powerful creature.',
                'Wesen is creature that eats humans.',
                'Wesen is a collective term used to describe the creatures visible to the Grimms.',
                'Wesen is a term for humans who can become a different being.'
            ],
            answer: 'Wesen is a collective term used to describe the creatures visible to the Grimms.',
            score: 30
        },
        {
            id: 7,
            question: 'In which facility did Shield revive Agent Coulsen?',
            serie: 'Marvel Agents Of Shield',
            'options': [
                'A.R.E.A 6.3.',
                'L.E.V.E.L 42',
                'Sleepy Town.',
                'H.A.I.T.I.'
            ],
            answer: 'H.A.I.T.I.',
            score: 30
        },
        {
            id: 8,
            question: 'Who is the king of HELL?',
            serie: 'Supernatural',
            'options': [
                'Lucifer.',
                'Crowley.',
                'Yellow Eyed Demon.',
                'Raphael.'
            ],
            answer: 'Crowley.',
            score: 30
        },
        {
            id: 9,
            question: 'Which wesen is Monroe?',
            serie: 'Grimm',
            'options': [
                'Mellifers.',
                'Wendigo',
                'Spinnetods.',
                'Blutbad.'
            ],
            answer: 'Blutbad.',
            score: 30
        },
        {
            id: 10,
            question: 'Who was Sam\'s vessel?',
            serie: 'Supernatural',
            'options': [
                'Micheal.',
                'Lucifer.',
                'Castiel.',
                'Raphael.'
            ],
            answer: 'Lucifer.',
            score: 30
        },
        {
            id: 11,
            question: 'What was Skye before she joined Shield?',
            serie: 'Marvel Agents Of Shield',
            'options': [
                'A Dancer.',
                'A Hacker.',
                'A Robber.',
                'A Developer.'
            ],
            answer: 'A Hacker.',
            score: 30
        },
        {
            id: 12,
            question: 'What does the Grimm search for in the series?',
            serie: 'Grimm',
            'options': [
                'For his parents.',
                'For a skill that he needs.',
                'For a map to a hidden treasure.',
                'For the four keys.'
            ],
            answer: 'For the four keys.',
            score: 30
        },
        {
            id: 13,
            question: 'Which angel is the friend of Dean and Sam?',
            serie: 'Supernatural',
            'options': [
                'Zachariah.',
                'Lilith.',
                'Castiel.',
                'Micheal.'
            ],
            answer: 'Castiel.',
            score: 30
        },
        {
            id: 14,
            question: 'Who does Sam run away with?',
            serie: 'Supernatural',
            'options': [
                'Ruby.',
                'Meg.',
                'Mary.',
                'Gwen.'
            ],
            answer: 'Ruby.',
            score: 30
        },
        {
            id: 15,
            question: 'What job has Juliette?',
            serie: 'Grimm',
            'options': [
                'A Shopowner.',
                'A Vet.',
                'A Model.',
                'A Secretary.'
            ],
            answer: 'A Vet.',
            score: 30
        },
        {
            id: 16,
            question: 'How many teamplayer does the maingroup have?',
            serie: 'Marvel Agents Of Shield',
            'options': [
                '10.',
                '6.',
                '4.',
                '7.'
            ],
            answer: '6.',
            score: 30
        },
        {

            id: 17,
            question: 'How many seasons does Supernatural have?',
            serie: 'Supernatural',
            'options': [
                '5 seasons.',
                '6 seasons.',
                '10 seasons.',
                '16 seasons.'
            ],
            answer: '10 seasons.',
            score: 30
        },
        {

            id: 18,
            question: 'With which movies does the series collide?',
            serie: 'Marvel Agents Of Shield',
            'options': [
                'Thor.',
                'Spiderman.',
                'The Hulk.',
                'DareDevil.'
            ],
            answer: 'Thor.',
            score: 30
        },
        {

            id: 19,
            question: 'How does Dean escape hell?',
            serie: 'Supernatural',
            'options': [
                'With the help from his father.',
                'With the help from Crowley.',
                'With the help of an angel.',
                'With the help of his brother.'
            ],
            answer: 'With the help of an angel.',
            score: 30
        },
        {

            id: 20,
            question: 'From which country came the name Grimm?',
            serie: 'Grimm',
            'options': [
                'Germany.',
                'Sweden.',
                'Denmark.',
                'The Netherlands.'
            ],
            answer: 'Germany.',
            score: 30
        }
    ]);

    quiz.$document.on('ready', quiz.init);

})();
