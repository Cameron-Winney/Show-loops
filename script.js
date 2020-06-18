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
        data.append(counter + " ")

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
function loop6() {
    const kataHeading = document.createElement('h3')
    kataHeading.append('Kata 6')
    data.append(kataHeading)

    for(let counter = 20; counter >= 0; counter --) {
        data.append(counter + " ")
    }
}
function loop7() {
    const kataHeading = document.createElement('h3')
    kataHeading.append('Kata 7')
    data.append(kataHeading)
    
    for(let counter = 20; counter >= 0; counter -= 2) {
        data.append(counter + " ")
        }
}
function loop8() {
    const kataHeading = document.createElement('h3')
    kataHeading.append('Kata 8')
    data.append(kataHeading)

    for(let counter = 19; counter >= 0; counter -= 2) {
        data.append(counter + " ")
      }
}
function loop9() {
    const kataHeading = document.createElement('h3')
    kataHeading.append('Kata 9')
    data.append(kataHeading)

    for(let counter = 100; counter >= 0; counter -= 5) {
        data.append(counter + " ")
      }
}
function loop10() {
    const kataHeading = document.createElement('h3')
    kataHeading.append('Kata 10')
    data.append(kataHeading)

    for(let counter = 100; counter >= 0; counter --) {
        const isSquare = Number.isInteger(Math.sqrt(counter));
        if (isSquare) {
          data.append(counter + " ")
        }
      
      }
}
function loop11() {
    const kataHeading = document.createElement('h3')
    kataHeading.append('Kata 11')
    data.append(kataHeading)

    for(x = 0; x <= sampleArray.length - 1;x++) {
        data.append(sampleArray[x] + " ")
    }
}
function loop12() {
    const kataHeading = document.createElement('h3')
    kataHeading.append('Kata 12')
    data.append(kataHeading)

    for(let x = 0;x <= sampleArray.length - 1;x++) {
        if(sampleArray[x] % 2 == 0) {
            data.append(sampleArray[x] + " ")
        }
    }
}
function loop13() {
    const kataHeading = document.createElement('h3')
    kataHeading.append('Kata 13')
    data.append(kataHeading)

    for(let x = 0;x <= sampleArray.length - 1;x++) {
        if(sampleArray[x] % 2 !== 0) {
            data.append(sampleArray[x] + " ")
        }
    }
}
function loop14() {
    const kataHeading = document.createElement('h3')
    kataHeading.append('Kata 14')
    data.append(kataHeading)

    for(let x = 0;x <= sampleArray.length - 1;x++) {
        data.append(Math.pow(sampleArray[x], 2) + " ")
    }
}
function loop15() {
    const kataHeading = document.createElement('h3')
    kataHeading.append('Kata 15')
    data.append(kataHeading)
    
    let sum = 0
    for(let x = 1; x <= 20; x++) {
        sum += x
    }
    data.append(sum)
}

function loop16() {
    const kataHeading = document.createElement('h3')
    kataHeading.append('Kata 16')
    data.append(kataHeading)

    let sum = 0
    for(let x = 0; x <= sampleArray.length - 1;x++) {
        sum += sampleArray[x]
    }
    data.append(sum)
}
function loop17() {
    const kataHeading = document.createElement('h3')
    kataHeading.append('Kata 17')
    data.append(kataHeading)

    let lowest = sampleArray[0]
    for(let x = 0; x <= sampleArray.length - 1; x++) {
        if(sampleArray[x] <= lowest) {
            lowest = sampleArray[x]
        }
    }
    data.append(lowest)
}


function loop18() {
    const kataHeading = document.createElement('h3')
    kataHeading.append('Kata 18')
    data.append(kataHeading)

    let highest = sampleArray[0]
    for(let x = 0; x <= sampleArray.length - 1; x++) {
        if(sampleArray[x] >= highest) {
            highest = sampleArray[x]
        }
    }
    data.append(highest)
}