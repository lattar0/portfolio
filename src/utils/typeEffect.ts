let i = 0
let timer

export function typingEffect(words: string[]) {
  let word = words[i].split('')

  const loopTyping = function () {
    if (word.length > 0) {
      document.getElementById('name')!.innerHTML += word.shift()
    } else {
      setTimeout(() => deletingEffect(words), 4000)
      return false
    }
    timer = setTimeout(loopTyping, 500)
  }
  loopTyping()
}

function deletingEffect(words: string[]) {
  let word = words[i].split('')

  const loopDeleting = function () {
    if (word.length > 0) {
      word.pop()
      document.getElementById('name')!.innerHTML = word.join("")
    } else {
      if (words.length > (i + 1)) {
        i++
      } else {
        i = 0;
      }
      typingEffect(words)
      return false
    }
    timer = setTimeout(loopDeleting, 200)
  }
  loopDeleting()
}
