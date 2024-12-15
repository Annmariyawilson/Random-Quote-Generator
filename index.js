const quotes = [

    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can, and you're halfway there.",
    "Do what you can, with what you have, where you are.",
    "It always seems impossible until it’s done.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "The best way to predict the future is to create it.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Happiness is not something ready made. It comes from your own actions."
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {

    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIndex = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIndex)) continue

        const quote = quotes[randomIndex]
        quoteElement.innerHTML = quote
        usedIndexes.add(randomIndex)
        break
    }
}