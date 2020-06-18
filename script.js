//group members:  Malachi Luck, Marcus Merrick

let data = document.getElementById('data')
const sampleArray = [469, 755, 244, 245, 758, 450, 302,
    20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535,
    940, 472]
function reset() {
    data.innerHTML = null
}

function loop1() {
    const kata1Heading = document.createElement('h3')
    kata1Heading.append('Kata 1')
    data.append(kata1Heading)
    
  let counter = 1
  while (counter <= 20) {
    data.append(counter + " ")
    counter += 1
  }

    
}
function loop2() {
    const kataHeading = document.createElement('h3')
    kataHeading.append('Kata 2')
    data.append(kataHeading)

    for(let counter = 0; counter <= 20; counter += 2) {
        let newElement = document.createElement('p')

        newElement.append(counter + " ")
        data.append(newElement)

      }

}
function loop3() {
    const kataHeading = document.createElement('h3')
    kataHeading.append('Kata 3')
    data.append(kataHeading)

    for (let index = 1; index <= 20; index += 2) {
        data.append(index + " ")
      }
    
}
function loop4() {
    const kataHeading = document.createElement('h3')
    kataHeading.append('Kata 4')
    data.append(kataHeading)

    for(let counter4 = 0; counter4 <= 100; counter4 += 5) {
        data.append(counter4 + " ")
      }
}
function loop5() {
    const kataHeading = document.createElement('h3')
    kataHeading.append('Kata 5')
    data.append(kataHeading)

    for(let counter = 0; counter <= 100; counter++) {
        const isSquare = Number.isInteger(Math.sqrt(counter));
        if (isSquare) {
          data.append(counter + " ")
        }
      }
}