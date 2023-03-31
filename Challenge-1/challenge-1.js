const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = typeof 1 === typeof parseInt(primaryPhone) && !isNaN(parseInt(primaryPhone))
const secondaryValid = typeof 1 === typeof parseInt(secondaryPhone) && !isNaN(parseInt(secondaryPhone))

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )