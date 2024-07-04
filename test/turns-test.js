const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turns');
const { createCard } = require('../src/card');


describe('evaluate', function() {
    it('should be a function', function() {
      expect(evaluateGuess).to.be.a('function');
    });
  
    it('should evaluate if a guess to a flashcard question is correct or incorrect', function() {
      const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  
      const correctGuess = evaluateGuess('object', card.correctAnswer);
      const wrongGuessOne = evaluateGuess('array', card.correctAnswer);
      const wrongGuessTwo = evaluateGuess('function', card.correctAnswer)
  
      expect(correctGuess).to.equal('correct!');
      expect(wrongGuessOne).to.equal('incorrect!');
      expect(wrongGuessTwo).to.equal('incorrect!')
    });
});
  
  