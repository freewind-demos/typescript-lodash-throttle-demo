import throttle from 'lodash/throttle';

const x = throttle(async () => {
  console.log(`${new Date()} hello x`)
}, 3000);

function y() {
  throttle(async () => {
    console.log(`${new Date()} hello y`)
  }, 3000)()
}

setInterval(async () => {
  x()
  y()
}, 1000);

console.log(new Date())


