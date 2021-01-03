let counter = 0

function clickCounter() {
  if (counter < 50) {
    counter = counter + 1
    console.log(counter)
  } else {
    return console.log('You clicked ' + counter + ' times!')
  }
}