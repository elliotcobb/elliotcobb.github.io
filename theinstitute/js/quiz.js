/**
 * Created by elliotcobb on 9/25/15.
 */
//
//const STORED_PEOPLE =
//[
//    {name : 'Elaine Bledsoe', answers : [0, 0, 0]},
//    {name : 'Elliot Cobb', answers : [1, 1, 1]},
//    {name : 'Jacob Barr', answers : [2, 2, 2]},
//    {name : 'Sam Zinn', answers : [3, 3, 3]}
//];
//
//const NUM_PEOPLE = 4;
//const NUM_QUESTIONS = 3;
//
//function findMatch() {
//    var userAnswers = new Array();
//    userAnswers = $('form.quiz-form').serializeArray();
//    var userMatches = countAnswerMatches(userAnswers);
//    var matchIndexArray = getMatchIndex(userMatches);
//
//    // output match content.
//    // congrats, you're a ____ !
//    console.log("your matches are:");
//    for (var i = 0; i < matchIndexArray.length; i++) {
//        console.log(STORED_PEOPLE[matchIndexArray[i]].name);
//    }
//}
//
//function countAnswerMatches(userAnswers) {
//
//    // creates zero-filled array of length NUM_PEOPLE
//    var userMatches = Array.apply(null, Array(NUM_PEOPLE)).map(Number.prototype.valueOf,0);
//
//    for (var i = 0; i < NUM_PEOPLE; i++) {
//        for (var j = 0; j < NUM_QUESTIONS; j++) {
//
//            if (STORED_PEOPLE[i].answers[j] == userAnswers[j].value) {
//                userMatches[i]++;
//            }
//        }
//    }
//    return userMatches;
//}
//
//function getMatchIndex(userMatches) {
//    var max = Math.max.apply(null, userMatches);
//    var matchIndexArray = new Array();
//    for (var i = 0; i < NUM_PEOPLE; i++) {
//        if (userMatches[i] == max) {
//            matchIndexArray.push(i);
//        }
//    }
//    return matchIndexArray;
//}

$(document).ready( function() {

    // TODO move answer highlighting to angular js

    //// highlight selected answers, un-highlight old selected answers
    //$('.question-body .answer').click( function () {
    //    $(this).find('input.answer-radio').prop("checked", true);
    //
    //    var selectedAnswerNum = $(this).closest('.question-body').attr('data-selected-answer');
    //    if (selectedAnswerNum != "") {
    //        $(this).closest('.question-body').find('div.answer[data-answer-num=' + selectedAnswerNum + ']').removeClass('chosenAnswer');
    //    }
    //
    //    $(this).closest('.question-body').attr('data-selected-answer', $(this).attr('data-answer-num'));
    //    $(this).addClass('chosenAnswer');
    //});

    // scroll down window to only show jumbotron
    $('body').css('margin-bottom', $(window).height());
    setTimeout( function() {
        $(document).scrollTop($('.jumbotron').position().top);
    }, 40);

    $('.submit-quiz').click( function( event ) {
        findMatch();
        event.preventDefault();
    });
});