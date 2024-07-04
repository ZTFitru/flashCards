const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');


describe('round', function() {
    it('should be a function', function() {
        expect(createRound).to.be.a('function');
    });

    it('should return the required object', function() {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array')
        const card3 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')

        const decks = [card1, card2, card3]
        const myDeck = createDeck(decks)

        const round = createRound(myDeck)
        expect(round).to.be.a('object')
    });
});

describe('turn', function() {
    it('should be a function', function() {
        expect(takeTurn).to.be.a('function');
    });

    it('should update turn count regardless of whether the guess is correct or incorrect', function() {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array')
        const card3 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')

        const decks = [card1, card2, card3]
        const myDeck = createDeck(decks)
        const round = createRound(myDeck)

        takeTurn('object', round)
        expect(round.turns).to.equal(1)

        takeTurn('array', round)
        expect(round.turns).to.equal(2)
    });

    it('should make next card become current card', function() {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array')
        const card3 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')

        const decks = [card1, card2, card3]
        const myDeck = createDeck(decks)
        const round = createRound(myDeck)

        takeTurn('object', round)
        expect(round.currentCard.id).to.equal(card2.id)

        takeTurn('array', round)
        expect(round.currentCard.id).to.equal(card3.id)
    });

    it('should evaluate the guess. Incorrect guesses are stored in incorrectGuesses array', function() {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array')
        const card3 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')

        const decks = [card1, card2, card3]
        const myDeck = createDeck(decks)
        const round = createRound(myDeck)

        takeTurn('name', round)
        takeTurn('age', round)
        takeTurn('mutator method', round)

        expect(round.incorrectGuesses).to.deep.equal([1, 2])
    });
   
});

describe('calculate', function () {
    it('should calculate and return the percentage of correct guesses', function() {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array')
        const card3 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')

        const decks = [card1, card2, card3]
        const myDeck = createDeck(decks)
        const round = createRound(myDeck)

        takeTurn('name', round)
        takeTurn('age', round)
        takeTurn('mutator method', round)

        const correctPercentage = calculatePercentCorrect(round)
        expect(correctPercentage).to.equal(33)
    });
});

describe('end round', function() {
    it('should print **Round over!** You answered <>% of the questions correctly!', function() {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array')
        const card3 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')

        const decks = [card1, card2, card3]
        const myDeck = createDeck(decks)
        const round = createRound(myDeck)

        takeTurn('name', round)
        takeTurn('age', round)
        takeTurn('mutator method', round)

        calculatePercentCorrect(round)
        const endRoundMessage = endRound(round)
        expect(endRoundMessage).to.equal(true)
    });
});
