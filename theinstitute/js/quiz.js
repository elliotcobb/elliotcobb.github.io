const QUESTIONS_DB =
    [
        {qid : '0', question : 'What is your ideal platonic hangout?' , answers : ['Ice skating in the park', 'Streaking in the park', 'Waterboarding in the park', 'Saturday in the Park']},
        {qid : '1', question : 'Do you have lice?' , answers : ['Yes', 'No']},
        {qid : '2', question : 'Which pasta shape best describes your political affiliation?' , answers : ['Angel hair', 'Wagon wheels', 'Elbows', 'Bowties', 'Anything gluten free!!!']},
        {qid : '3', question : 'How often do you floss?' , answers : ['Once in a lifetime', 'Three times everyday, no more, no less', 'Never, flossing is for the weak', 'On Wednesdays from 4-6']},
        {qid : '4', question : 'What is your favorite substitute for a swear word? ' , answers : ['Dangit', 'Muffins', 'Poop', 'Fudge', 'nibblets', 'doogie', 'wigglenutz', 'corncobbers', 'riflesticks', 'fudgenuts', 'eek', 'uggl', 'nabbit', 'nibbit', 'darnit', 'doogit', 'doogy', 'sheiz', 'sheiza', 'frick']},
        {qid : '5', question : 'What do you do at the zoo?' , answers : ['Break into the Llama enclosure, join their herd', 'Pretend to be the director and answer people\'s questions on animals.', 'Release all the animals', 'Talk to the monkeys about their day to day lives (also in this one you can talk to animals)']},
        {qid : '6', question : 'What is your ideal date?' , answers : ['Friday the 13th', 'An overly intellectual conversation over coffee', 'Flip cup in a fraternity basement', 'Charades!']},
        {qid : '7', question : 'Are you a good person?' , answers : ['Yes', 'No', 'I was not prepared for such heavy-handed questioning ', 'My morality is more or less in line with Batman\'s']},
        {qid : '8', question : 'Will you marry the Duke, his royal Garret?' , answers : ['Of course. The alliance between our two houses will surely bring peace to the land.', 'And how! Our vows will make his kisses mine forever.', 'Never. For I am secretly wed to Sprooty Hangus, the tamer of wild crops.', 'I will wed no man. I am two peacocks in a fancy hat.']},
        {qid : '9', question : 'Where are you most likely to be found on a Saturday night?' , answers : ['Grinding all up on some hot dude/girl in a basement that smells like tomatoes and piss.', 'Telling yourself you\'re worth it in between shots of vodka.','Downtown with a 30 year old investment banker you met on Tinder', 'Downtown with a 30 year old investment banker you met on Grindr']},
        {qid : '10', question : 'If you were a troll, which troll would you be?' , answers : ['Larry, the troll under the bridge.', 'Gary, the troll in the dungeon. ', 'Mary, the troll who operates the trollercoaster. ', 'Terry, a Furby. ']},
        {qid : '11', question : '\"I\'m sorry. I know we were supposed to go to the Harvest Dance together on Friday but now I can\'t make it.\"' , answers : ['\"Sorry, who are you?\"', '\"You\'re going with that rat Dominic instead, aren\'t you!?\"', '\"But if you don\'t go who will play \"The Accountant of the Gourds\" in the Harvest show?\"', 'Take the \"Accountant of the Gourds\" costume from Jessica\'s trembling hands. Tonight at the Harvest Dance you will grace the stage. You will tabulate the ceremonial gourd tax. This is your moment.']},
        {qid : '12', question : 'What effect does the idea of women playing punk rock music have on your body?' , answers : ['Boils blood', 'Sends shivers down spine', 'Causes eardrums to bleed', 'Moves genitalia one centimeter to the left', 'Performs kidney surgery']},
        {qid : '13', question : 'When you get a little schwasty, what\'s your language of choice?' , answers : ['Interpretive dance', '\'Murican', 'Français (franglais variation included)', 'The language of the hill folk']},
        {qid : '14', question : 'How do you shave?' , answers : ['Up then down', 'Down then up', 'Side to side', 'Inside then out']},
        {qid : '15', question : 'What would you rather have stuck to your fingers?' , answers : ['Other people\'s fingers', 'Magnets', 'Knives', 'The souls of your enemies']},
        {qid : '16', question : 'Which hip, young hashtag best represents your spirit?' , answers : ['#millenial', '#brand', '#cool', '#hip']},
        {qid : '17', question : 'How enthusiastic are you about playing the interactive video game Rock Band with your pals?' , answers : ['lol it\'s not 2008', 'Maybe I would do one song?', 'I like to sing', 'give me Rock Band or give me death!!!!']}
    ];

var INSTITUTE_PEOPLE =
    [
        {name : 'Jacob Barr', hallOfFame : false, img : "content/jacobBarr.jpg", answers : [2, 1, 3, 2, 3, 2, 2, 3, 2, 0, 3, 1, 0, 0, 3, 1, 0, 2], bio : "Congrats!  You're a Jacob Barr.  You love dogs, the Grateful Dead, and dogs that love the Grateful Dead.  You like to have fun and not take anything too seriously.  Have fun coasting through life on your good looks and charm."},
        {name : 'Meghan Wales',  hallOfFame : false, img : "content/meghanWales.jpg", answers : [3, 1, 1, 2, 4, 2, 2, 3, 1, 0, 3, 3, 3, 0, 0, 2, 0, 1], bio : "You're a Meghan Wales! You like hiding under blankets and don't understand why strangers would ever hug each other. Meghans talk about genitalia all the time no matter the situation but most people find this incredibly endearing. Adult coloring books? Yes. Pigeons? Yes. Genitalia? WHY ARE YOU ASKING THAT? DID YOU NOT READ THE PREVIOUS SENTENCES? Ughhhhh... Over it."},
        {name : 'Greg Lehrhoff',  hallOfFame : false, img : "content/gregLehrhoff.jpg", answers : [2, 1, 1, 1, 6, 0, 1, 2, 3, 2, 0, 1, 3, 2, 0, 0, 0, 2], bio : "You're a Greg Lehrhoff! You go by many names (Gorg Leeroof is among them). Gorgs are playful, but serious. Kind, but angry. Giving, but always stingy. Human, definitely human. You are romantic, but not in a cutesy way. Your friends describe you as \"sexy and dangerous motorcycle boy.\" You may lose your head sometimes, but you always find it and continue on with your day! The last time you lost your wallet was in fifth grade, but it wasn't a very good wallet anyway. I sense prosperity in your future. A decent sum of money is coming your way. Be wary of references to the dead. And you're always smiling!"},
        {name : 'Sam Zinn',  hallOfFame : false, img : "content/samZinn.jpg", answers : [2, 0, 0, 0, 8, 0, 3, 3, 2, 2, 3, 3, 3, 3, 1, 0, 2, 3], bio : "Sam Zinnnnn!"},
        {name : 'Emily Baker',  hallOfFame : false, img : "content/emilyBaker.jpg", answers : [2, 1, 2, 1, 6, 3, 0, 2, 0, 3, 2, 1, 3, 2, 3, 1, 0, 1], bio : "You're an Emily Baker! You're mildly cool and majorly allergic to peanuts. You should avoid phone calls, the outdoors, UV rays and manta rays. In 15 years, you will be drunk on a Bravo show. Shine on, you crazy diamond."},
        {name : 'Sarah Gruen',  hallOfFame : false, img : "content/sarahGruen.jpg", answers : [0, 1, 1, 0, 6, 0, 3, 0, 3, 2, 2, 3, 4, 0, 0, 1, 0, 2], bio : "Congratulations! You're a Sarah Gruen! Sarahs are clever and hungry. The freeze-pop flavor that can best be used to described a Sarah is pink. Other Sarahs include the late Knut the polar bear, Stacy from \"What Not to Wear,\" and the narrator of Serial. The spirit shoe of a Sarah is a size 8 Birkenstock."},
        {name : 'Lily Blumkin',  hallOfFame : false, img : "content/lilyBlumkin.jpg", answers : [2, 1, 0, 1, 2, 2, 2, 2, 1, 0, 2, 3, 4, 3, 3, 3, 0, 3], bio : "You're a Lily! Congratulations, Lilys are the curliest people in the room! What does that mean? You tell us! Lilys always know the proper way to pick your nose, and would be happy to teach you if you would just muster up the courage to ask! Lilys never need to muster up any courage though; they pick their noses in public all the time! Rock on!"},
        {name : 'Elliot Cobb', hallOfFame : false, img : "content/elliotCobb.jpg", answers : [3, 0, 0, 1, 6, 3, 3, 0, 1, 3, 1, 3, 1, 0, 1, 1, 3, 1], bio : "Giddy up! You're an Elliot Cobb. You love old music, spicy food, and enjoying the outdoors. You currently own more sunscreen than alcohol, and you spent way too many hours making this online quiz. Congrats!"},
        {name : 'Ari Glasgow ',  hallOfFame : false, img : "content/ariGlasgow.jpg", answers : [2, 1, 3, 2, 1, 0, 0, 0, 2, 0, 0, 0, 4, 3, 1, 3, 2, 1], bio : "You're an Ari Glasgow! This is unfortunate for you. Aris are laid back 99.99% of the time, but insanely anxious that other .01%. You ate a cheeseburger every day for the first 25 days of college, and the biggest fan of your comedy is your mom! "},
        {name : 'Aliza Small ',  hallOfFame : true, img : "content/alizaSmall.jpg", answers : [0, 1, 2, 3, 8, 2, 0, 1, 1, 1, 0, 3, 0, 0, 1, 2, 0, 1], bio : "You bear an uncanny resemblance to one of the Institute's greatest leaders: Aliza Small! You're practically Catherine the Great."},
        {name : 'Ben Meyerson',  hallOfFame : true, img : "content/benMeyerson.jpg", answers :[2, 1, 0, 3, 5, 3, 1, 0, 1, 0, 2, 1, 2, 3, 3, 0, 0, 2], bio : "You're a Ben! Bens are an odd-toed ungulate mammal belonging to the taxonomic family Equidae. The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Hyracotherium, into the large, single-toed animal of today. Humans began to domesticate horses around 4000 BC, and their domestication is believed to have been widespread by 3000 BC. Horses in the subspecies caballus are domesticated, although some domesticated populations live in the wild as feral horses. These feral populations are not true wild horses, as this term is used to describe horses that have never been domesticated, such as the endangered Przewalski\'s horse, a separate subspecies, and the only remaining true wild horse. There is an extensive, specialized vocabulary used to describe equine-related concepts, covering everything from anatomy to life stages, size, colors, markings, breeds, locomotion, and behavior. Horses' anatomy enables them to make use of speed to escape predators and they have a well-developed sense of balance and a strong fight-or-flight response. Related to this need to flee from predators in the wild is an unusual trait: horses are able to sleep both standing up and lying down. Female horses, called mares, carry their young for approximately 11 months, and a young horse, called a foal, can stand and run shortly following birth. Most domesticated horses begin training under saddle or in harness between the ages of two and four. They reach full adult development by age five, and have an average lifespan of between 25 and 30 years. Horse breeds are loosely divided into three categories based on general temperament: spirited \"hot bloods\" with speed and endurance; \"cold bloods\", such as draft horses and some ponies, suitable for slow, heavy work; and \"warmbloods\", developed from crosses between hot bloods and cold bloods, often focusing on creating breeds for specific riding purposes, particularly in Europe. There are more than 300 breeds of horse in the world today, developed for many different uses. Horses and humans interact in a wide variety of sport competitions and non-competitive recreational pursuits, as well as in working activities such as police work, agriculture, entertainment, and therapy. Horses were historically used in warfare, from which a wide variety of riding and driving techniques developed, using many different styles of equipment and methods of control. Many products are derived from horses, including meat, milk, hide, hair, bone, and pharmaceuticals extracted from the urine of pregnant mares. Humans provide domesticated horses with food, water and shelter, as well as attention from specialists such as veterinarians and farriers."},
        {name : 'Jacob Hafey',  hallOfFame : false, img : "content/jacobHafey.jpg", answers : [2, 1, 1, 2, 1, 1, 2, 3, 3, 0, 1, 1, 3, 3, 3, 1, 2, 0], bio : "You're too Scoots for Tutes! You are most likely wanted by several government agencies for crimes you forget if you committed. If you see someone who wears glasses, make sure to point and laugh at them! You've earned it."},
        {name : 'Sam Gordon',  hallOfFame : false, img : "content/samGordon.jpg", answers : [0, 1, 3, 1, 0, 0, 3, 0, 3, 1, 0, 2, 1, 2, 0, 1, 2, 1], bio : "You're Sam Gordon. You like movies. You like skateboards. You like tiramisu. You like Tetris. You like warmth. You like Ike. You are white. You have hair. You are male. You are Jewish. You have chromosomes. You are reverent. You are aged."},
        {name : 'Céili Hale',  hallOfFame : false, img : "content/ceiliHale.jpg", answers : [0, 1, 3, 0, 6, 0, 3, 0, 1, 2, 2, 3, 4, 0, 0, 1, 0, 2], bio : "You're totally Ceili Hale! That means you're probably naked right now eating cold Chef Boyardee from the can. You're spunky and lovable but you're never 100% sure that you actually exist and the world isn't just some sort of virtual reality game or maybe an MTV dramedy. Your life motto is probably something along the lines of, \"FUCK OFF, COPS!\""},
        {name : 'Danny Garfield',  hallOfFame : false, img : "content/dannyGarfield.jpg", answers : [3, 0, 1, 3, 16, 3, 0, 2, 3, 1, 1, 1, 3, 3, 0, 1, 1, 2], bio : "You're Danny Garfield! Who am I to sum up an entire complex personality in just a few sentences?! And look at the questions that determined this result, they're heinous! I doubt this diagnosis would stand to the scrutiny of academic piers. Anyways, I'm guessing you enjoy taking online quizzes..."},
        {name : 'John C. Merfeld',  hallOfFame : false, img : "content/johnMerfeld.jpg", answers : [0, 1, 3, 3, 10, 2, 1, 1, 3, 0, 1, 3, 1, 0, 1, 3, 1, 2], bio : "Unfortunately, it seems you most resemble John C. Merfeld. You are simultaneously delighted and exhausted by those around you, and would like nothing more out of life than to take a red pen to the world and mark it up and down like the poorly written book report that it is. You appreciate verbosity, disdain, and probability distributions. Your therapist has told you that you are not literally a narcissist, but you may feel like one anyway. Your favorite color is green. Your cunnilingus receives positive feedback. Sorry."},
        {name : 'Elaine Bledsoe',  hallOfFame : false, img : "content/elaineBledsoe.jpg", answers : [0, 0, 3, 2, 14, 2, 3, 2, 3, 0, 3, 3, 3, 2, 0, 3, 3, 0], bio : "Ohemgee you're an Elaine Bledsoe! Elaines are usually over-caffeinated and are desperately trying avoid becoming the mom of the group. As the French say, Elaines \"boivent comme un trou.\" You should stay away from peanut butter at all costs, since you're deathly allergic, and come to think of it you may have middle child syndrome. Behind your fluffy and warm exterior you're secretly a conniving puppet master plotting to overthrow Anthony Monaco. Never forgive, never forget."},
        {name : 'Chloe Hyman',  hallOfFame : false, img : "content/chloeHyman.jpg", answers : [3, 1, 2, 3, 6, 0, 1, 0, 2, 2, 0, 3, 3, 3, 0, 3, 2, 2], bio : "You're a Chloe! Chloes have nine lives and can see in the dark. They have super fast reflexes and ALWAYS land on their feet, no matter what life throws at them. Depending on their breed, they sometimes shed. If you're a Chloe, you look great in pastels and terrible in earth tones. Your personality shines from within, so you don't need lightbulbs. Chloes are genuine and spunky. Never cross a Chloe- she'll tear your eyes out… in the dark!"},
        {name : 'Jehan Madhani',  hallOfFame : false, img : "content/jehanMadhani.jpg", answers : [3, 1, 1, 2, 11, 0, 0, 2, 1, 0, 2, 3, 4, 0, 3, 0, 3, 3], bio : "You're a Jehan Madhani! You're probably taking this quiz while watching a romantic comedy and happy crying just a little bit. Someday your prince will come, and by that we mean the Yoshi's delivery man who knows who you are. (You used to eat there alone instead of ordering delivery, until the day that you got a fortune cookie that said \"Everyone around you is rooting for you\" and became VERY paranoid.)"}
    ];

// initialize AngularJS
var quizApp = angular.module('quizApp', []);

quizApp.controller('QuizCtrl', function ($scope, $timeout, $window) {

    $scope.INSTITUTE_PEOPLE = INSTITUTE_PEOPLE;
    $scope.QUESTIONS_DB = QUESTIONS_DB;
    $scope.questions = new Array();
    $scope.questionsOrder = new Array();
    $scope.questionObject = "";

    $scope.currentQuizStep = 0;
    $scope.currentQuestionNum = 0;
    $scope.NUM_PEOPLE = 18;
    $scope.NUM_QUESTIONS_PER_QUIZ = 9;
    $scope.NUM_TOTAL_QUESTIONS = 18;

    // create array of length NUM_QUESTIONS_PER_QUIZ with all elements = -1
    $scope.userAnswers = Array.apply(null, Array($scope.NUM_QUESTIONS_PER_QUIZ)).map(Number.prototype.valueOf,-1);
    $scope.yourMatch = { name : "_@_", img : "content/meghanWales.jpg" , answers : [], bio : "_@_"};
    //$scope.yourMatch = {name : 'Aliza Small ',  hallOfFame : true, img : "content/alizaSmall.jpg", answers : [0, 1, 2, 3, 8, 2, 0, 1, 1, 1, 0, 3, 0, 0, 1, 2, 0, 1], bio : "You bear an uncanny resemblance to one of the Institute's greatest leaders: Aliza Small! You're practically Catherine the Great."};

    $scope.scrollHeight = $('.header').position().top + $('.header').height();


    // document ready function
    angular.element(document).ready(function () {

        $timeout( function() {
            $scope.scrollToHeaderBottom();
        }, 90);
    });

    $scope.scrollToHeaderBottom = function() {
        $(document).scrollTop($scope.scrollHeight);
    };

    $scope.startQuiz = function() {
        $scope.fillQuestionsArray();
        $scope.currentQuizStep = 1;
        $scope.fadeInQuestion = true;
        $scope.resetFadeEffects();
        $scope.getQuestion();
    };

    $scope.fillQuestionsArray = function() {
        $scope.initQuestionsOrder();
        var shuffledOrderArray = $scope.shuffleArray($scope.questionsOrder);
        var shuffledQuestionIndex;
        for (var i = 0; i < $scope.NUM_QUESTIONS_PER_QUIZ; i++) {
            shuffledQuestionIndex = shuffledOrderArray[i];
            $scope.QUESTIONS_DB[shuffledQuestionIndex].order = i;
            $scope.questions.push($scope.QUESTIONS_DB[shuffledQuestionIndex]);
        }
    };

    $scope.initQuestionsOrder = function() {
        for (var i = 0; i < $scope.NUM_TOTAL_QUESTIONS; i++) {
            $scope.questionsOrder.push(i);
        }
        return $scope.questionsOrder;
    };

    $scope.shuffleArray = function(o) {
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    $scope.nextQuestion = function() {
        $scope.fadeOutQuestion = true;

        // wait for previous question to fade out before changing the model
        $timeout( function() {
            $scope.changingQuestionModel = true;

            if ($scope.isEndOfQuiz()) {
                $scope.currentQuizStep = 2;
                $scope.submitQuiz();
            } else {
                $scope.getQuestion();
                $scope.scrollToHeaderBottom();
                $scope.fadeInQuestion = true;
                $scope.changingQuestionModel = false;
                $scope.resetFadeEffects();
            }
        }, 990);
    };

    $scope.isEndOfQuiz = function() {
        return $scope.currentQuestionNum >= $scope.NUM_QUESTIONS_PER_QUIZ;
    };

    $scope.submitAnswer = function(questionNumber, answerNumber) {
        $scope.userAnswers[questionNumber] = answerNumber;
        $scope.currentQuestionNum = questionNumber + 1;
        $scope.nextQuestion();
    };

    // changes the model to show the current question
    // currentQuestionNum is incremented before this call so that
    // getQuestion() shows a new question
    $scope.getQuestion = function() {
        $scope.questionObject = $scope.questions[$scope.currentQuestionNum];
    };

    // called after answering the last question
    // sets yourMatch in the model which is displayed
    $scope.submitQuiz = function() {
        $scope.yourMatch = $scope.findMatch();
        $scope.resetQuizData();
    };

    // sets neccesary data to init stages for when the
    // "retake quiz" button is clicked
    $scope.resetQuizData = function() {
        // create array of length NUM_QUESTIONS_PER_QUIZ with all elements = -1
        $scope.userAnswers = Array.apply(null, Array($scope.NUM_QUESTIONS_PER_QUIZ)).map(Number.prototype.valueOf,-1);
        $scope.currentQuestionNum = 0;
        $scope.changingQuestionModel = false;
        $scope.questions = new Array();
        $scope.questionsOrder = new Array();
    };

    // resets $scope.fadeInQuestion and $scope.fadeOutQuestion to false
    // these trigger a question fadeOut or fadeIn when set to true
    $scope.resetFadeEffects = function() {
        $timeout( function() {
            $scope.fadeInQuestion = false;
            $scope.fadeOutQuestion = false;
        }, 1000);
    };

    // returns a person object from INSTITUTE_PEOPLE which
    // includes a name, img filepath, bio, and answers
    $scope.findMatch = function() {

        var userMatches = $scope.countAnswerMatches($scope.userAnswers);
        var matchIndexArray = $scope.getMatchIndex(userMatches);

        // shuffle matches, return random one
        matchIndexArray = $scope.shuffleArray(matchIndexArray);

        console.log(matchIndexArray);

        return $scope.INSTITUTE_PEOPLE[matchIndexArray[0]];
    };

    // returns an array of length NUM_PEOPLE
    // each element of the array has an int signifying the number of matches
    // the user shared with that person
    $scope.countAnswerMatches = function(userAnswers) {

        // creates zero-filled array of length NUM_PEOPLE
        var userMatches = Array.apply(null, Array($scope.NUM_PEOPLE)).map(Number.prototype.valueOf,0);

        for (var i = 0; i < $scope.NUM_PEOPLE; i++) {
            for (var j = 0; j < $scope.NUM_QUESTIONS_PER_QUIZ; j++) {

                // get question j id/order
                var questionJOrder = $scope.questions[j].qid;

                if ($scope.INSTITUTE_PEOPLE[i].answers[questionJOrder] == userAnswers[j]) {
                    userMatches[i]++;
                }
            }
        }
        return userMatches;
    };

    // finds max of the array userMatches
    // returns an array of indices where that person has the maximum matching answers
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
});


