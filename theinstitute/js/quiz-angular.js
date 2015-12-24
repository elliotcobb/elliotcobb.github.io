const QUESTIONS_ARRAY =
[
    {qid : '1', question : 'What is your favorite song?' , answers : ['Anything by Nirvana', 'Beethoven definitely', 'Squalor of Postulates', 'Baba oReilly']},
    {qid : '2', question : 'b' , answers : ['b', 'bb', 'bbb']},
    {qid : '3', question : 'c' , answers : ['c', 'cc', 'ccc', 'cccc']},
    {qid : '4', question : 'd' , answers : ['d', 'dd', 'ddd', 'dddd']},
    {qid : '5', question : 'e' , answers : ['']},
    {qid : '6', question : '' , answers : ['Smith', 'Glock', 'Stall', 'WHOFNDVNNjvnjnvkjnfskjdajkndkjnsjknKNKJNFJKNKN']},
    {qid : '7', question : '' , answers : ['', '', '', '']},
    {qid : '8', question : '' , answers : ['', '', '', '']},
    {qid : '9', question : '' , answers : ['', '', '', '']},
    {qid : '10', question : '' , answers : ['', '', '', '']},
    {qid : '11', question : '' , answers : ['', '', '', '']},
    {qid : '12', question : '' , answers : ['', '', '', '']},
    {qid : '13', question : '' , answers : ['', '', '', '']},
    {qid : '14', question : '' , answers : ['', '', '', '']},
    {qid : '15', question : '' , answers : ['', '', '', '']},
    {qid : '16', question : '' , answers : ['', '', '', '']},
    {qid : '17', question : '' , answers : ['', '', '', '']},
    {qid : '18', question : '' , answers : ['', '', '', '']},
];

// initialize AngularJS
var quizApp = angular.module('quizApp', []);

quizApp.controller('QuizCtrl', function ($scope) {

        $scope.questions = QUESTIONS_ARRAY;
});
