

const createDeck = (cards) => {
    deck = {
        cards: cards
    }
    return deck
}

const countCards = (deck) => {
    return deck.length
}

module.exports = { 
    createDeck, 
    countCards
}