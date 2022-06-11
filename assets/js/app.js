import { phraseArray } from './phrasesArray.js'

const phrase = document.querySelector('#phraseContainer')
const btnShowPhrase = document.querySelector('#btnShowPhrase')

btnShowPhrase.addEventListener('click', showPhrase)

phrase.classList.add('display')

function showPhrase() {

  phrase.classList.remove('display')

  btnShowPhrase.setAttribute('disabled', true)

  const totalPhrases = phraseArray.length

  const randomSortPhrases = Math.floor(Math.random() * totalPhrases)
  console.log(randomSortPhrases)

  phrase.innerHTML = `<p>${phraseArray[randomSortPhrases]}</p>`

  phrase.style.opacity = 1

  setTimeout(function () {
    phrase.style.opacity = 0
    btnShowPhrase.removeAttribute('disabled')
  }, 5000)
}
