const { evaluateGuess } = require('./turns')

const createRound = (deck) => {
    const round = {
        deck: deck,
        currentCard: deck.cards[0],
        turns: 0,
        incorrectGuesses: []
    }
    return round;
};

const takeTurn = (guess, round) => {
    round.turns++
    
    const feedBack = evaluateGuess(guess, round.currentCard.correctAnswer);
    if(feedBack === 'incorrect!') {
        round.incorrectGuesses.push(round.currentCard.id);
        round.currentCard = round.deck.cards[round.turns];
        return feedBack;
    } else {
        round.currentCard = round.deck.cards[round.turns];
        return feedBack;
    }
    
}

const calculatePercentCorrect = (round) => {
    
    const correctPercentage = ((round.turns - round.incorrectGuesses.length) / round.turns);
    const percentAnswer = Math.round(correctPercentage * 100);
    return percentAnswer;
}

const endRound = (round) => {
    const total = calculatePercentCorrect(round);
    const endRoundMessage = `**Round over!** You answered ${total}% of the questions correctly!`;
    return endRoundMessage;
}

module.exports = { 
    createRound, 
    takeTurn, 
    calculatePercentCorrect,
    endRound
}