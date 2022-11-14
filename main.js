const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

const animation1 = alice1.animate(aliceTumbling, aliceTiming);
const animation1Promise = animation1.finished;

animation1Promise.then(() => {
  const animation2 = alice2.animate(aliceTumbling, aliceTiming);
  const animation2Promise = alice2.animation2.finished;
  animation2Promise.then(() => {
    alice3.animate(aliceTumblng, aliceTiming);
  });
});
