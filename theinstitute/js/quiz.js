/**
 * Created by elliotcobb on 9/25/15.
 */

const STORED_PEOPLE =
[
    {name : 'Elliot Cobb', answers : [1, 1, 1]},
    {name : 'Jacob Barr', answers : [2, 2, 2]},
    {name : 'Sam Zinn', answers : [3, 3, 3]},
    {name : 'Elaine Bledsoe', answers : [4, 4, 4]}
];

const NUM_PEOPLE = 4;
const NUM_QUESTIONS = 3;
const Q_COLOR = 'rgba(10, 200, 10, 0.2)';
const SELECTED_Q_COLOR = 'rgba(10, 10, 200, 0.2)'

$('.submit-quiz').click( function( event ) {
    findMatch();
    event.preventDefault();
});

function findMatch() {
    var userAnswers = new Array();
    userAnswers = $('form.quiz-form').serializeArray();
    var userMatches = countAnswerMatches(userAnswers);
    var matchIndexArray = getMatchIndex(userMatches);
    console.log("your matches are:");
    for (var i = 0; i < matchIndexArray.length; i++) {
        console.log(STORED_PEOPLE[matchIndexArray[i]].name);
    }
}

function countAnswerMatches(userAnswers) {

    // creates zero-filled array of length NUM_PEOPLE
    var userMatches = Array.apply(null, Array(NUM_PEOPLE)).map(Number.prototype.valueOf,0);

    for (var i = 0; i < NUM_PEOPLE; i++) {
        for (var j = 0; j < NUM_QUESTIONS; j++) {

            if (STORED_PEOPLE[i].answers[j] == userAnswers[j].value) {
                userMatches[i]++;
            }
        }
    }
    return userMatches;
}

function getMatchIndex(userMatches) {
    var max = Math.max.apply(null, userMatches);
    var matchIndexArray = new Array();
    for (var i = 0; i < NUM_PEOPLE; i++) {
        if (userMatches[i] == max) {
            matchIndexArray.push(i);
        }
    }
    return matchIndexArray;
}

$(document).ready( function() {
    //highlight answers to questions on mouseover
    $('.question-body .answer')
        .mouseenter( function() {
            $(this).addClass('hover-answer');
        })
        .mouseleave( function () {
            $(this).removeClass('hover-answer');
        })
    ;

    $('.question-body .answer').click( function () {
        $(this).find('input.answer-radio').prop("checked", true);

        var selectedAnswerNum = $(this).closest('.question-body').attr('data-selected-answer');
        if (selectedAnswerNum != "") {
            $(this).closest('.question-body').find('div.answer[data-answer-num=' + selectedAnswerNum + ']').removeClass('chosen-answer');
        }

        $(this).closest('.question-body').attr('data-selected-answer', $(this).attr('data-answer-num'));
        $(this).addClass('chosen-answer');
    });

    $('input.answer-radio').on('change', function() {
       console.log('moochie');
    });
});