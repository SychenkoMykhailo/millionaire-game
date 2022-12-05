export const convertNumberToLetter = number =>
  String.fromCharCode(97 + number).toUpperCase()

export const formatNumberToNumberWithCommas = number => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
