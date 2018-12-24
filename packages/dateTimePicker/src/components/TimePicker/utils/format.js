const addZeroToString = (num) => {
  return num < 10 ? `0${num}` : `${num}`
}

export const checkAcceptingType = (validValues, formatString, fallbackValue) => {
  if (!validValues || !formatString || !formatString.length) { return '' }
  for (let i = 0; i < validValues.length; i++) {
    if (formatString.indexOf(validValues[i]) > -1) {
      return validValues[i]
    }
  }
  return fallbackValue || ''
}

export const formatValue = (type, startPosition) => {
  switch (type) {
    case 'H':
    case 'm':
    case 's':
      return `${startPosition}`
    case 'HH':
    case 'mm':
    case 'ss':
      return addZeroToString(startPosition)
    case 'h':
    case 'k':
      return `${startPosition + 1}`
    case 'hh':
    case 'kk':
      return addZeroToString(startPosition+1)
    default:
      return ''
  }
}

export const initHours = (hourType) => {
  const hoursCount = (hourType === 'h' || hourType === 'hh') ? 12 : 24
  return [...Array(hoursCount).keys()].map(i => formatValue(hourType, i))
}

export const initApm = (apmType) => {
  if (!apmType) { return }

  return (apmType === 'A') ? ['AM', 'PM'] : ['am', 'pm']
}

export const initUnitWithInterval = (type, interval = 1, min = 0, max = 60, ) => {
  const items = []
  for (let i = min; i < max; i += interval ) {
    items.push(formatValue(type, i))
  }
  return items
}