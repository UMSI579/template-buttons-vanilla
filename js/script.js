const problem1 = () => {
  console.log('problem 1');
}

const problem2 = () => {
  console.log('problem 2');
}

const problem3 = () => {
  console.log('problem 3');
}

const problem4 = () => {
  console.log('problem 4');
}







// Don't change below.
for (let i = 1; i < 5; i++) {
  document.querySelector(`#button-${i}`)
    .addEventListener('click', () => {
      eval(`problem${i}()`)
    });
}

if(typeof module !== 'undefined') {
  module.exports = {
    addNumbers
  }
}

