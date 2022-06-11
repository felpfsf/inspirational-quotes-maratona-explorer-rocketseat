import { quotesArray } from './quotesArray.js'

const quoteDivElement = document.querySelector('#quoteContainer')
const btnShowQuote = document.querySelector('#btnShowQuote')

btnShowQuote.addEventListener('click', showPhrase)

quoteDivElement.classList.add('display')

function showPhrase() {
  quoteDivElement.classList.remove('display')

  btnShowQuote.setAttribute('disabled', true)

  const totalNumberOfQuotes = quotesArray.length

  const randomSortQuotes = Math.floor(Math.random() * totalNumberOfQuotes)
  console.log(randomSortQuotes)

  quoteDivElement.innerHTML = `<p>${quotesArray[randomSortQuotes]}</p>`

  quoteDivElement.style.opacity = 1

  setTimeout(function () {
    quoteDivElement.style.opacity = 0
    btnShowQuote.removeAttribute('disabled')
  }, 5000)
}
