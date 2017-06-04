var console = require('console');
var $ = require('jquery');

class FlashCard {
    constructor(hint, answer) {
        this.hint = hint;
        this.answer = answer;
    }
};

class FlashCardGame {
    constructor() {
        this.cards = [];
        this.score = {correct: 0, wrong: 0 };
        this.index = 0;
    }

    addCard(card) { this.cards.push(card); }
    getCard(index) { return this.cards[index]; }

    cardMove(count) {
        this.index += count;
        if (this.index >= this.cards.length) {
            this.index = 0;
        }
        if (this.index < 0) {
            this.index = 0;
        }
        this.cardUpdate();
    }

    cardUpdate() {
        var curCard = this.cards[this.index];
        console.log(curCard.hint);
        $("#card #hint").text(curCard.hint);
        $("#score #right").text(this.score.correct.toString());
        $("#score #wrong").text(this.score.wrong.toString());
    }

    checkAnswer() {
        var guess = $("#card #answer").val();
        var answer = this.cards[this.index].answer;
        if (guess === answer) {
            this.score.correct++;
            console.log("you got it!!");
        } else {
            this.score.wrong++;
            console.log("nahh you got it wrong!");
        }
        console.log(this.score);
    }
};

var game = new FlashCardGame();
game.addCard(new FlashCard("dog", "bark"));
game.addCard(new FlashCard("cat", "meouw"));

console.log(game.getCard(1));
$(document).ready(function() {
  game.cardUpdate();

  $("#card #submit").click(function() {
      game.checkAnswer();
      game.cardMove(1);
  });
});
