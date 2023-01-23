export const lowerator = (text: string) => {
  const textArr = text.split(' ')

  const firtLetterUp = textArr.map(word => {
    const firstLetter = word[0].toUpperCase()
    return firstLetter + word.slice(1).toLowerCase()
  })

  return firtLetterUp.join(' ')
}