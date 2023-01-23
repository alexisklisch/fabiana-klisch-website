export const spacesRemover = (text: string, point?: boolean) => {
  const replacedText = text.replace('\n', '').trim().replaceAll('  ', ' ')
  if (point) {
    return replacedText.replaceAll('.', '')
  }
  return replacedText
}