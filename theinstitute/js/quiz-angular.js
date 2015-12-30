const QUESTIONS_DB =
[
    {qid : '0', question : 'What is your dream date?' , answers : ['Ice skating in the park', 'Streaking in the park', 'Starting fires in the park', 'Waterboarding in the park']},
    {qid : '1', question : 'Do you have lice?' , answers : ['Yes', 'No']},
    {qid : '2', question : 'Which pasta shape best describes your political affiliation?' , answers : ['Angel hair', 'Wagon wheels', 'Elbows', 'Bowties']},
    {qid : '3', question : 'How often do you floss?' , answers : ['Once in a lifetime', 'Three times everyday, no more, no less', 'Never, flossing is for the weak', 'Right before I go to the dentist']},
    {qid : '4', question : 'What is your favorite substitute for a swear word? ' , answers : ['Dangit', 'Muffins', 'Poop', 'Fudge']},
    {qid : '5', question : 'What do you do at the zoo?' , answers : ['Go to all the animals and use silly voices to pretend like you are that animal.  Narrate what they think and do.', 'Lure the spider monkeys to the fence and then when they get close enough reach through and touch them.', 'Hop the fence of the Mexican Grey Wolves and submit to the alpha, hoping he will allow you into the wolf pack.  The Alpha does let you in because he sees you understand how the pack operates and also you have the courage of a wolf.  The alpha teaches you to hunt with the ancient stealth of wolves of millennium past.  You both bay at the moon each night, a call to your ancestors.  AWHOOOOO.', 'Release all the animals because you can\'t own nature, man.  Zoos are the incarnation of human greed and their assumed but BACKWARD dominion of the natural world.  But you\'ll show them who\'s in charge when the majestic snow leopards devour the zoo workers, then flee into the Massachusetts woods. ']},
    {qid : '6', question : 'What is your ideal date?' , answers : ['Friday the 13th', 'A romantic candlelit dinner which you awkwardly split the bill for', 'An overly intellectual conversation over coffee', 'Flip cup in a fraternity basement']},
    {qid : '7', question : 'Are you a good person?' , answers : ['Yes', 'No', 'I was not prepared for such heavyhanded questioning ', 'My morality is more or less in line with Batman\'s']},
    {qid : '8', question : 'What\'s a boy gotta do to get a malt around here?' , answers : ['Pay Ol\' Willy a nickel and tell him to keep the change.', 'Not bother Ol\' Willy that\'s for sure! He\'s busy singing some tunes with the Laramie boys again. Have his son young Willy make you a malt instead.', 'Empty your pockets: you have a length of twine, your trusty sack of marbles, and some snap n\'pops.Try bartering with one of the Willys in exchange for multiple malts.', 'Throw a snap n\' pop at Young Willy\'s face to disorient him. While he\'s blinded, attach your twine to the sack of marbles to create a makeshift sheapard\'s sling. Hit Young Willy between the eyes and watch him tumble. At this point the commotion has reached Ol\' Willy who\'s stopped singing and made his way over. Tell him that if he doesn\'t make you a chocolate malt he\'s next.']},
    {qid : '9', question : 'Where are you most likely to be found on a Saturday night?' , answers : ['Grinding all up on some hot dude/girl (from The Institute) in a basement that smells like tomatoes and piss.', 'Putting some finishing touches on the shrine to your crush a la Helga from Hey Arnold.', 'Writing sweet, sweet sketch comedy.', 'Telling yourself you\'re worth it in the bathroom mirror in between shots of vodka.']},
    {qid : '10', question : 'If you were a troll, which troll would you be?' , answers : ['Larry, the troll under the bridge.', 'Gary, the troll in the dungeon. ', 'Marie, the troll who operates the trollercoaster. ', 'Terri, a Furby. ']},
    {qid : '11', question : '\"I\'m sorry. I know we were supposed to go to the Harvest Dance together on Friday but now I can\'t make it.\"' , answers : ['\"Sorry, who are you?\"', '\"You\'re going with that rat Dominic instead, aren\'t you!?\"', '\"But if you don\'t go who will play \"The Accountant of the Gourds\" in the Harvest show?\"', 'Take the \"Accountant of the Gourds\" costume from Jessica\'s trembling hands. Tonight at the Harvest Dance you will grace the stage. You will tabulate the ceremonial gourd tax. This is your moment.']},
    {qid : '12', question : 'How great is the scowl you direct at the world?' , answers : ['I drown my distaste for humanity underneath blankets of ability and self-confidence, and so am able to grin toothily at the world.', 'By reminding myself of the few tolerable people I know, I am able to conceal my scowl and present a weak smile to the world.', 'I have not yet mastered the art of deceit, and so the immense disappointment I feel when considering how pitiful humanity\'s example of itself is in the twenty-first century sometimes shows in my eyes, but I still keep my jaw tight and resist the scowl.', 'My scowl is impossible to conceal, but my tactics and cunning are formidable. I am often able to play it off as a nervous tic or a facial disorder when I glare challengingly at the cosmos.']},
    {qid : '13', question : 'When you get a little schwasty, what\'s your language of choice?' , answers : ['Interpretive dance', 'Murican', 'Français (franglais variation included)', 'The language of the hill folk']},
    {qid : '14', question : 'How do you shave?' , answers : ['Up then down', 'Down then up', 'Side to side', 'Inside then out']},
    {qid : '15', question : 'What would you rather have stuck to your fingers?' , answers : ['Other people\'s fingers', 'Magnets', 'Knives', 'The souls of your enemies']},
    {qid : '16', question : 'If you were to have just realized you were in love and that the love of your life was right there in front of you the whole time (probably performing and writing sketch comedy on your college campus) what song would be playing as you marched with purpose to go to them?' , answers : ['\"Signed, Sealed, Delivered (I\'m Yours)\" Tom Hanks is a PRINCE among men.', '\"It Must Have Been Love\" Richard Gere is climbin\' his way up that fire escape, umbrella and flowers in hand, TO YOU.', '\"Ain\'t No Mountain High Enough\" - Marvin Gaye and Tammi Terrell (or \"Ain\'t No Mountain High Enough\" - Diana Ross) Honestly, you don\'t have to be in love for this to be the perfect song for literally every occasion, but yes, that is Renee Zellwegger running towards you through the snow. Go to her.']},
    {qid : '17', question : 'How enthusiastic are you about playing the interactive video game Rock Band with your pals?' , answers : ['lol it\'s not 2008', 'Maybe I would do one song?', 'I like to sing', 'give me Rock Band or give me death!!!!']},
];

var questionsArray =
    [
        {qid : '0', question : 'What is your ultra-dream date?' , answers : ['Ice skating in the park', 'Streaking in the park', 'Waterboarding in the park', 'Saturday in the Park']},
        {qid : '1', question : 'Do you have lice?' , answers : ['Yes', 'No']},
        {qid : '2', question : 'Which pasta shape best describes your political affiliation?' , answers : ['Angel hair', 'Wagon wheels', 'Elbows', 'Bowties', 'Anything gluten free!!!']},
        {qid : '3', question : 'How often do you floss?' , answers : ['Once in a lifetime', 'Three times everyday, no more, no less', 'Never, flossing is for the weak', 'On Wednesdays from 4-6']},
        {qid : '4', question : 'What is your favorite substitute for a swear word? ' , answers : ['Dangit', 'Muffins', 'Poop', 'Fudge', 'nibblets', 'doogie', 'wigglenutz', 'corncobbers', 'riflesticks', 'fudgenuts', 'eek', 'uggl', 'nabbit', 'nibbit', 'darnit', 'doogit', 'doogy', 'sheiz', 'sheiza', 'frick']},
        {qid : '5', question : 'What do you do at the zoo?' , answers : ['Go to all the animals and use silly voices to pretend like you are that animal.  Narrate what they think and do.', 'Lure the spider monkeys to the fence and then when they get close enough reach through and touch them.', 'Hop the fence of the Mexican Grey Wolves and submit to the alpha, hoping he will allow you into the wolf pack.  The Alpha does let you in because he sees you understand how the pack operates and also you have the courage of a wolf.  The alpha teaches you to hunt with the ancient stealth of wolves of millennium past.  You both bay at the moon each night, a call to your ancestors.  AWHOOOOO.', 'Release all the animals because you can\'t own nature, man.  Zoos are the incarnation of human greed and their assumed but BACKWARD dominion of the natural world.  But you\'ll show them who\'s in charge when the majestic snow leopards devour the zoo workers, then flee into the Massachusetts woods. ']},
        {qid : '6', question : 'What is your dream date?' , answers : ['Friday the 13th', 'An overly intellectual conversation over coffee', 'Flip cup in a fraternity basement', 'Charades!']},
        {qid : '7', question : 'Are you a good person?' , answers : ['Yes', 'No', 'I was not prepared for such heavy-handed questioning ', 'My morality is more or less in line with Batman\'s']},
        {qid : '8', question : 'What\'s a boy gotta do to get a malt around here?' , answers : ['Pay Ol\' Willy a nickel and tell him to keep the change.', 'Not bother Ol\' Willy that\'s for sure! He\'s busy singing some tunes with the Laramie boys again. Have his son young Willy make you a malt instead.', 'Empty your pockets: you have a length of twine, your trusty sack of marbles, and some snap n\'pops.Try bartering with one of the Willys in exchange for multiple malts.', 'Throw a snap n\' pop at Young Willy\'s face to disorient him. While he\'s blinded, attach your twine to the sack of marbles to create a makeshift sheapard\'s sling. Hit Young Willy between the eyes and watch him tumble. At this point the commotion has reached Ol\' Willy who\'s stopped singing and made his way over. Tell him that if he doesn\'t make you a chocolate malt he\'s next.']},
        {qid : '9', question : 'Where are you most likely to be found on a Saturday night?' , answers : ['Grinding all up on some hot dude/girl in a basement that smells like tomatoes and piss.', 'Telling yourself you\'re worth it in between shots of vodka.','Downtown with a 30 year old investment banker you met on Tinder', 'Downtown with a 30 year old investment banker you met on Grindr']},
        {qid : '10', question : 'If you were a troll, which troll would you be?' , answers : ['Larry, the troll under the bridge.', 'Gary, the troll in the dungeon. ', 'Marie, the troll who operates the trollercoaster. ', 'Terri, a Furby. ']},
        {qid : '11', question : '\"I\'m sorry. I know we were supposed to go to the Harvest Dance together on Friday but now I can\'t make it.\"' , answers : ['\"Sorry, who are you?\"', '\"You\'re going with that rat Dominic instead, aren\'t you!?\"', '\"But if you don\'t go who will play \"The Accountant of the Gourds\" in the Harvest show?\"', 'Take the \"Accountant of the Gourds\" costume from Jessica\'s trembling hands. Tonight at the Harvest Dance you will grace the stage. You will tabulate the ceremonial gourd tax. This is your moment.']},
        {qid : '12', question : 'How great is the scowl you direct at the world?' , answers : ['I drown my distaste for humanity underneath blankets of ability and self-confidence, and so am able to grin toothily at the world.', 'By reminding myself of the few tolerable people I know, I am able to conceal my scowl and present a weak smile to the world.', 'I have not yet mastered the art of deceit, and so the immense disappointment I feel when considering how pitiful humanity\'s example of itself is in the twenty-first century sometimes shows in my eyes, but I still keep my jaw tight and resist the scowl.', 'My scowl is impossible to conceal, but my tactics and cunning are formidable. I am often able to play it off as a nervous tic or a facial disorder when I glare challengingly at the cosmos.']},
        {qid : '13', question : 'When you get a little schwasty, what\'s your language of choice?' , answers : ['Interpretive dance', 'Murican', 'Français (franglais variation included)', 'The language of the hill folk']},
        {qid : '14', question : 'How do you shave?' , answers : ['Up then down', 'Down then up', 'Side to side', 'Inside then out']},
        {qid : '15', question : 'What would you rather have stuck to your fingers?' , answers : ['Other people\'s fingers', 'Magnets', 'Knives', 'The souls of your enemies']},
        {qid : '16', question : 'If you were to have just realized you were in love and that the love of your life was right there in front of you the whole time (probably performing and writing sketch comedy on your college campus) what song would be playing as you marched with purpose to go to them?' , answers : ['\"Signed, Sealed, Delivered (I\'m Yours)\" Tom Hanks is a PRINCE among men.', '\"It Must Have Been Love\" Richard Gere is climbin\' his way up that fire escape, umbrella and flowers in hand, TO YOU.', '\"Ain\'t No Mountain High Enough\" - Marvin Gaye and Tammi Terrell (or \"Ain\'t No Mountain High Enough\" - Diana Ross) Honestly, you don\'t have to be in love for this to be the perfect song for literally every occasion, but yes, that is Renee Zellwegger running towards you through the snow. Go to her.']},
        {qid : '17', question : 'How enthusiastic are you about playing the interactive video game Rock Band with your pals?' , answers : ['lol it\'s not 2008', 'Maybe I would do one song?', 'I like to sing', 'give me Rock Band or give me death!!!!']}
    ];

var INSTITUTE_PEOPLE =
    [
        {name : 'Elliot Cobb', answers : [0, 0, 0], bio : "Giddy up! You're an Elliot Cobb. Elliot's have never been filmed in the wild. You're probably very skittish around people because every time you see them, they scream \"Oh my god, is that a squatch ordering a caramel Frappuccino?\" Then you maul them and spray fair trade whipped cream into their ear holes. This ringing any bells?"},
        {name : 'Sarah Gruen', answers : [0, 0, 0], bio : ""},
        {name : 'Elaine', answers : [0, 0, 0], bio : ""},
        {name : 'Elaine', answers : [0, 0, 0], bio : ""},
        {name : 'Elaine', answers : [0, 0, 0], bio : ""},
        {name : 'Elaine', answers : [0, 0, 0], bio : ""},
        {name : 'Elaine', answers : [0, 0, 0], bio : ""},
        {name : 'Elaine', answers : [0, 0, 0], bio : ""},
        {name : 'Elaine', answers : [0, 0, 0], bio : ""},
        {name : 'Elaine', answers : [0, 0, 0], bio : ""},
        {name : 'Elaine', answers : [0, 0, 0], bio : ""},
        {name : 'Elaine', answers : [0, 0, 0], bio : ""},
        {name : 'Elaine', answers : [0, 0, 0], bio : ""},
        {name : 'Elaine', answers : [0, 0, 0], bio : ""},
        {name : 'Elaine', answers : [0, 0, 0], bio : ""},
        {name : 'Elaine', answers : [0, 0, 0], bio : ""}
    ];

// initialize AngularJS
var quizApp = angular.module('quizApp', []);

quizApp.controller('QuizCtrl', function ($scope, $timeout) {

    $scope.INSTITUTE_PEOPLE = INSTITUTE_PEOPLE;
    $scope.questions = questionsArray;
    $scope.answers = new Array();
    $scope.question = "";

    $scope.currentQuizStage = 0;
    $scope.currentQuestionNum = 0;
    $scope.NUM_PEOPLE = 4;
    $scope.NUM_QUESTIONS = 18;

    $scope.userAnswers = new Array();
    $scope.yourMatch = "";

    $scope.scrollHeight = $('.header').position().top + $('.header').height();


    $scope.scrollToHeaderBottom = function() {
        $(document).scrollTop($scope.scrollHeight);
    };

    $scope.startQuiz = function() {
        $scope.currentQuizStage++;
        $scope.fadeInQuestion = true;
        $scope.resetFadeEffects();
        $scope.getQuestion();
    };

    $scope.nextQuestion = function(answerNumber) {
        $scope.fadeOutQuestion = true;
        $scope.submitAnswer(answerNumber);

        // wait for previous question to fade out before changing the model
        $timeout( function() {
            if ($scope.isEndOfQuiz()) {
                $scope.currentQuizStage++;
                $scope.submitQuiz();
            } else {
                    $scope.getQuestion();
                    $scope.scrollToHeaderBottom();
                    $scope.fadeInQuestion = true;
                    $scope.resetFadeEffects();
            }
        }, 1000);
    };

    $scope.isEndOfQuiz = function() {
        return $scope.currentQuestionNum >= $scope.NUM_QUESTIONS;
    };

    $scope.submitAnswer = function(answerNumber) {
        $scope.userAnswers.push(answerNumber);
        $scope.currentQuestionNum++;
    };

    $scope.getQuestion = function() {
        $scope.question = $scope.questions[$scope.currentQuestionNum].question;
        $scope.answers = $scope.questions[$scope.currentQuestionNum].answers;
    };

    $scope.submitQuiz = function() {
        $scope.yourMatch = $scope.findMatch();
        console.log("your match is:");
        console.log($scope.yourMatch);
    };

    $scope.resetFadeEffects = function() {
        $timeout( function() {
            $scope.fadeInQuestion = false;
            $scope.fadeOutQuestion = false;
        }, 1000);
    };

    $scope.findMatch = function() {

        //$scope.userAnswers = $('form.quiz-form').serializeArray();
        var userMatches = $scope.countAnswerMatches($scope.userAnswers);
        var matchIndexArray = $scope.getMatchIndex(userMatches);

        var yourMatch = "";
        for (var i = 0; i < matchIndexArray.length; i++) {
            yourMatch += "\n";
            yourMatch += $scope.INSTITUTE_PEOPLE[matchIndexArray[i]].name;
        }

        return yourMatch;
    };

    $scope.countAnswerMatches = function(userAnswers) {

        // creates zero-filled array of length NUM_PEOPLE
        var userMatches = Array.apply(null, Array($scope.NUM_PEOPLE)).map(Number.prototype.valueOf,0);

        for (var i = 0; i < $scope.NUM_PEOPLE; i++) {
            for (var j = 0; j < $scope.NUM_QUESTIONS; j++) {

                if ($scope.INSTITUTE_PEOPLE[i].answers[j] == userAnswers[j]) {
                    userMatches[i]++;
                }
            }
        }
        return userMatches;
    };

    $scope.getMatchIndex = function(userMatches) {
        var max = Math.max.apply(null, userMatches);
        var matchIndexArray = new Array();
        for (var i = 0; i < $scope.NUM_PEOPLE; i++) {
            if (userMatches[i] == max) {
                matchIndexArray.push(i);
            }
        }
        return matchIndexArray;
    };

    angular.element(document).ready(function () {
        $('body').css('margin-bottom', $(window).height());
        $timeout( function() {
            $scope.scrollToHeaderBottom();
        }, 40);
    });
});


