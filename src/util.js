const inquirer = require('inquirer');
const { takeTurn, endRound } = require('./round');
const { createDeck } = require('./deck');
const { createRound } = require('./round');
const data = require('./data');
const prototypeQuestions = data.prototypeData;


const genList = (round) => {
  let card = round.currentCard;
  
  let choices = card.answers.map((answer, index) => {
    return {
      key: index,
      value: answer
    }
  });
  return {
    type: 'rawlist',
    message: card.question,
    name: 'answers',
    choices: choices
  };
}

const getRound = (round) => {
  return Promise.resolve(round);
}

const confirmUpdate = (id, round) => {
  const feedback = takeTurn(id, round);
  return {
    name: 'feedback',
    message: `Your answer of ${id} is ${feedback}`
  }
}

async function main(round) {
  const currentRound = await getRound(round);
  const getAnswer = await inquirer.prompt(genList(currentRound));
  const getConfirm = await inquirer.prompt(confirmUpdate(getAnswer.answers, round));

    if(!round.currentCard) {
      if(endRound(round)){
        const deck = createDeck(prototypeQuestions)
        const round = createRound(deck)
        main(round)
      } 
    } else {
      main(round);
    }
}

module.exports.main = main;