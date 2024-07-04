

const createCard = (id, question, possibleAnswers, correctAnswer) => {
    const card = {
        id: id,
        question: question,
        possibleAnswers: possibleAnswers,
        correctAnswer: correctAnswer
    }
    return card;
}


module.exports = { createCard }