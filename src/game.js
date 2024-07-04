const data = require('./data');
const { createDeck } = require('./deck');
const { createRound } = require('./round');
const { countCards } = require('./deck')

const prototypeQuestions = data.prototypeData;
const util = require('./util');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck.cards)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

const start = () => {
  const deck = createDeck(prototypeQuestions)
  const round = createRound(deck)
  printMessage(deck)
  printQuestion(round)
}

module.exports = { printMessage, printQuestion, start};
