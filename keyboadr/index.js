const CharLineOne = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61 , 8]
const CodeClassOne = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace']
const CharLineTwo = [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221,220, 46]
const CodeClassTwo = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight','Backslash', 'Delete']
const CharLineThree = [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13]
const CodeClassThree = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter']
const CharLineFour = [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16]
const CodeClassFour = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight']
const CharLineFive = [17, 91, 18, 32, 18, 37, 40, 39, 17]
const CodeClassFive = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']
const KeyBoardBody = document.getElementById('keyboard')

 const getKeyBoardContent = () => {

  const KeyBoardBlock = document.createElement('div')
  KeyBoardBlock.className = 'key-board-content'

  const KeyBoardTitle = document.createElement('p')
  KeyBoardTitle.className = 'title'
  KeyBoardTitle.innerText = 'RSS Виртуальная клавиатура'
  KeyBoardBlock.appendChild(KeyBoardTitle)

  const TextArea = document.createElement('textarea')
  TextArea.className = 'textarea'
  TextArea.cols = '50'
  TextArea.rows = '5'
  
  KeyBoardBlock.appendChild(TextArea)

  const KeyBoard = document.createElement('div')
  KeyBoard.className = 'k-key-block'
  KeyBoardBlock.appendChild(KeyBoard)

  const KeyBoardInfo = document.createElement('p')
  KeyBoardInfo.className = 'info'
  KeyBoardInfo.innerText = 'Клавиатура создана в операционной системе Windows'
  KeyBoardBlock.appendChild(KeyBoardInfo)

  const KeyBoardLanguage = document.createElement('p')
  KeyBoardLanguage.className = 'language'
  KeyBoardLanguage.innerText = 'Для переключения языка комбинация: левыe ctrl + alt'
  KeyBoardBlock.appendChild(KeyBoardLanguage)

  const KeyLineOne = document.createElement('div')
  KeyLineOne.className = 'line-one line'

  for (let i = 0 ; i < CharLineOne.length ; i++) {
    const KeyCypOne = document.createElement('div')
    KeyCypOne.className = `key ${CodeClassOne[i]}`
    KeyCypOne.innerText = String.fromCharCode(CharLineOne[i])
    if (i === 13) {
      KeyCypOne.innerText = 'Backspace'
    }

    KeyLineOne.append(KeyCypOne)

  }

  const KeyLineTwo = document.createElement('div')
  KeyLineTwo.className = 'line-two line'

  for (let i = 0 ; i < CharLineTwo.length ; i++) {
    const KeyCypTwo = document.createElement('div')
    const classAtribut = CodeClassTwo[i].slice(0,3)
    KeyCypTwo.className = `key ${CodeClassTwo[i]} ${classAtribut}`
    KeyCypTwo.innerText = String.fromCharCode(CharLineTwo[i]).toLocaleLowerCase()
    
    if (i === 0) {
      KeyCypTwo.innerText = 'Tab'
    }

    if (i === 14) {
      KeyCypTwo.innerText = 'Del'
    }

    if (i === 13) {
      KeyCypTwo.innerText = "\\"
    }

    if (i === 12) {
      KeyCypTwo.innerText = "]"
    }

    if (i === 11) {
      KeyCypTwo.innerText = "["
    }

    KeyLineTwo.append(KeyCypTwo)
  }

  const KeyLineThree = document.createElement('div')
  KeyLineThree.className = 'line-three line'

  for (let i = 0 ; i < CharLineThree.length ; i++) {
    const KeyCypThree = document.createElement('div')
    const classAtribut = CodeClassThree[i].slice(0,3)
    KeyCypThree.className = `key ${CodeClassThree[i]} ${classAtribut}`
    KeyCypThree.innerText = String.fromCharCode(CharLineThree[i]).toLocaleLowerCase()

    if (i === 0) {
      KeyCypThree.innerText = 'Caps Lock'
    }

    if (i === 10) {
      KeyCypThree.innerText = ';'
    }

    if (i === 11) {
      KeyCypThree.innerText = "'"
    }

    if (i === 12) {
      KeyCypThree.innerText = 'Enter'
    }

    KeyLineThree.append(KeyCypThree)

  }


  const KeyLineFour = document.createElement('div')
  KeyLineFour.className = 'line-four line'

  for (let i = 0 ; i < CharLineFour.length ; i++) {
    const KeyCypFour = document.createElement('div')
    const classAtribut = CodeClassFour[i].slice(0,3)
    KeyCypFour.className = `key ${CodeClassFour[i]} ${classAtribut}`
    KeyCypFour.innerText = String.fromCharCode(CharLineFour[i]).toLocaleLowerCase()

    if (i === 0 || i === 12) {
      KeyCypFour.innerText = 'Shift'
    }

    if (i === 8) {
      KeyCypFour.innerText = ','
    }

    if (i === 9) {
      KeyCypFour.innerText = "."
    }

    if (i === 10) {
      KeyCypFour.innerText = '/'
    }

    if (i === 11) {
      KeyCypFour.innerText = '▲'
    }

    KeyLineFour.append(KeyCypFour)

  }

  const KeyLineFive = document.createElement('div')
  KeyLineFive.className = 'line-five line'

  for (let i = 0 ; i < CharLineFive.length ; i++) {
    const KeyCypFive = document.createElement('div')
    const classAtribut = CodeClassFive[i].slice(0,3)
    KeyCypFive.className = `key ${CodeClassFive[i]} ${classAtribut}`
    KeyCypFive.innerText = String.fromCharCode(CharLineFive[i])

    if (i === 0 || i === 8) {
      KeyCypFive.innerText = 'Ctrl'
    }

    if (i === 1) {
      KeyCypFive.innerText = 'Win'
    }

    if (i === 3) {
      KeyCypFive.innerText = ' '
    }

    if (i === 2 || i === 4) {
      KeyCypFive.innerText = 'Alt'
    }

    if (i === 7) {
      KeyCypFive.innerText = '►'
    }

    if (i === 6) {
      KeyCypFive.innerText = '▼'
    }

    if (i === 5) {
      KeyCypFive.innerText = '◄'
    }

    KeyLineFive.append(KeyCypFive)

  }

  KeyBoard.appendChild(KeyLineOne)
  KeyBoard.appendChild(KeyLineTwo)
  KeyBoard.appendChild(KeyLineThree)
  KeyBoard.appendChild(KeyLineFour)
  KeyBoard.appendChild(KeyLineFive)

  return KeyBoardBlock
}

KeyBoardBody.appendChild(getKeyBoardContent())

const TextArea = document.querySelector('.textarea')
const NodeKeys =  document.querySelectorAll('.key')
const ArrayKeys = Array.from(NodeKeys)

ArrayKeys.forEach((el) => {
  let result = ''

  el.addEventListener('click' , (event) => {
    if (event.target.innerHTML === "Caps Lock" ||
        event.target.innerHTML === "Ctrl" ||
        event.target.innerHTML === "Alt" ||
        event.target.innerHTML === "Shift" ||
        event.target.innerHTML === "Backspace" ||
        event.target.innerHTML === "Del"  ||
        event.target.innerHTML === "Enter" ||
        event.target.innerHTML === "Tab" ||
        event.target.innerHTML === "Win") {

        result += ''
    } else {
        result += event.target.innerHTML
        TextArea.textContent += result
        result=''
    }

    if (event.target.classList[1] === "Backspace") {
      TextArea.textContent = TextArea.textContent.slice(0, -1)
    }

  })

  el.addEventListener('mousedown' ,() => {el.classList.add('active')})
  el.addEventListener('mouseup' ,() => {el.classList.remove('active')})

})

document.addEventListener('keydown' , (event) => {

  for (let i = 0; i < ArrayKeys.length; i++) {

  if (ArrayKeys[i].classList[1] === event.code) {
    ArrayKeys[i].classList.add('active')
    document.addEventListener('keyup', () => {ArrayKeys[i].classList.remove('active')})
    if (ArrayKeys[i].classList[1] === "CapsLock" ||
    ArrayKeys[i].classList[1] === "ControlLeft" ||
    ArrayKeys[i].classList[1] === "ControlRight" ||
    ArrayKeys[i].classList[1] === "AltRight" ||
    ArrayKeys[i].classList[1] === "AltLeft" ||
    ArrayKeys[i].classList[1] === "ShiftLeft" ||
    ArrayKeys[i].classList[1] === "ShiftRight" ||
    ArrayKeys[i].classList[1] === "Backspace" ||
    ArrayKeys[i].classList[1] === "Delete"  ||
    ArrayKeys[i].classList[1] === "MetaLeft"  ||
    ArrayKeys[i].classList[1] === "Enter" ||
    ArrayKeys[i].classList[1] === "Tab" ||
    ArrayKeys[i].classList[1] === "Win"){
      TextArea.textContent += ''
    } else {
      TextArea.textContent += ArrayKeys[i].textContent
    }

    if (ArrayKeys[i].classList[1] === "Backspace") {
      TextArea.textContent = TextArea.textContent.slice(0, -1)
    }
  }
 }
})

const lettersKey = document.querySelectorAll('.Key')
const ArrayLettersKey = Array.from(lettersKey)


document.addEventListener('keyup', (event) => {

 if (event.key === "CapsLock") {
      document.querySelector('.CapsLock').classList.toggle('activecaps')
      ArrayLettersKey.forEach((el) => {
      el.textContent = el.textContent.toLocaleUpperCase()

 if (!document.querySelector('.CapsLock').classList.contains('activecaps')) {
      el.textContent = el.textContent.toLocaleLowerCase()
     }
  })
 }
})

document.querySelector('.CapsLock').addEventListener('click', () => {
  document.querySelector('.CapsLock').classList.toggle('activecaps')
  if (document.querySelector('.CapsLock').classList.contains('activecaps')) {
       ArrayLettersKey.forEach((el) => {
       el.textContent = el.textContent.toLocaleUpperCase()
      })
    } else {
      ArrayLettersKey.forEach((el) => {
        el.textContent = el.textContent.toLocaleLowerCase()
      })
    }
 })



