const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards } = require('../src/deck');
const { createCard } = require('../src/card');

describe('deck', function() {
    it('should be a function', function() {
        expect(createDeck).to.be.a('function');
    });

    it('should return an object', function() {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array')
        const card3 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')

        const decks = [card1, card2, card3]
        const myDeck = createDeck(decks)

        expect(myDeck).to.be.a('object')
    });

    it('should know how many cards are in the deck', function() {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array')
        const card3 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')

        const decks = [card1, card2, card3]
        const totalDeck = countCards(decks)
        
        expect(totalDeck).to.equal(3)
    });
});







