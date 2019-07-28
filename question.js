"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//שאלה 1
var Question = /** @class */ (function () {
    function Question(_qText) {
        this.qText = _qText;
    }
    Object.defineProperty(Question.prototype, "qText", {
        get: function () {
            return this._qText;
        },
        set: function (_qText) {
            this._qText = _qText;
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.toString = function () {
        return this.qText;
    };
    return Question;
}());
var ShortAnswerQuestion = /** @class */ (function (_super) {
    __extends(ShortAnswerQuestion, _super);
    function ShortAnswerQuestion(qText, _answer) {
        var _this = _super.call(this, qText) || this;
        _this.answer = _answer;
        return _this;
    }
    Object.defineProperty(ShortAnswerQuestion.prototype, "answer", {
        get: function () {
            return this._answer;
        },
        set: function (_answer) {
            this._answer = _answer;
        },
        enumerable: true,
        configurable: true
    });
    ShortAnswerQuestion.prototype.getCorrectAnswer = function () {
        return this.answer;
    };
    ShortAnswerQuestion.prototype.addCorrectAnswer = function (answer) {
        this.answer = answer;
    };
    return ShortAnswerQuestion;
}(Question));
var MultipleChoiceQuestion = /** @class */ (function (_super) {
    __extends(MultipleChoiceQuestion, _super);
    function MultipleChoiceQuestion(qText, _answers, numberOfAnswers, correctAnswerIndex) {
        var _this = _super.call(this, qText) || this;
        _this._answers = _answers;
        _this.numberOfAnswers = numberOfAnswers;
        _this.correctAnswerIndex = correctAnswerIndex;
        return _this;
    }
    MultipleChoiceQuestion.prototype.toString = function () {
        var _questAndAnswers = this.qText;
        for (var i = 0; i < this._answers.length; i++) {
            _questAndAnswers += '/n' + this._answers[i];
        }
        return _questAndAnswers;
    };
    MultipleChoiceQuestion.prototype.getCorrectAnswer = function () {
        return this._answers[this.correctAnswerIndex];
    };
    MultipleChoiceQuestion.prototype.addCorrectAnswer = function (answer) {
        if (this._answers.length < 7) {
            this._answers.push(answer);
            this.correctAnswerIndex = this._answers.length - 1;
        }
    };
    MultipleChoiceQuestion.prototype.addAnswer = function (answer) {
        if (this._answers.length < 7) {
            this._answers.push(answer);
        }
    };
    return MultipleChoiceQuestion;
}(Question));
//שאלה 2
var QuestionsCatalog = /** @class */ (function () {
    function QuestionsCatalog() {
        this.questionsLength = 20;
        this.questions = [];
        this.currentQuestions = 0;
    }
    QuestionsCatalog.prototype.addQuestion = function (q) {
        if (this.questions.length < this.questionsLength) {
            this.questions.push(q);
        }
    };
    QuestionsCatalog.prototype.generateQuestionnaire = function (num, type) {
        var questionnaire = [];
        var indexesUsed = [];
        if (type === 1) { //short
            for (var i = 0; i < num; i++) {
                indexesUsed.push(Math.floor(Math.random() * num));
                //questionnaire.push(this.questions[]);
            }
        }
        else if (type === 2) { //multiple{
        }
        else if (type === 3) { //both
        }
        return questionnaire;
    };
    QuestionsCatalog.SHORT = 1;
    QuestionsCatalog.MULTIPLE = 2;
    QuestionsCatalog.BOTH = 3;
    return QuestionsCatalog;
}());
