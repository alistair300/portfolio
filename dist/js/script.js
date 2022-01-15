function delay(n) {
  n = n || 2000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, n);
  });
}

function pageTransition() {
  let tl = gsap.timeline();
  tl.to('.loading-screen', {
    duration: 0.5,
    width: '100%',
    left: '0%',
    ease: 'Expo.easeInOut',
  });

  tl.to('.loading-screen', {
    duration: 0.5,
    width: '100%',
    left: '100%',
    ease: 'Expo.easeInOut',
    delay: 0.3,
  });

  tl.set('.loading-screen', {
    left: '-100%',
  });
}

function contentAnimation() {
  let tl = gsap.timeline();
  tl.from('.animation', {
    duration: 0.5,
    y: 30,
    opacity: 0,
    stagger: 0.4,
    delay: 0.2,
  });
}

$(function () {
  barba.init({
    sync: true,

    transitions: [
      {
        async leave(data) {
          const done = this.async();

          pageTransition();
          await delay(1000);
          done();
        },

        async enter(data) {
          contentAnimation();
        },

        async once(data) {
          contentAnimation();
        },
      },
    ],
  });
});

// particles js
particlesJS.load('particles-js', './js/particlesjs-config.json', () => {
  console.log('Particles JS Loaded...');
});

// cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.setAttribute(
    'style',
    'top: ' + (e.pageY - 20) + 'px; left: ' + (e.pageX - 20) + 'px;'
  );
});

// nav bar
const header = document.getElementById('header');
const toggleBtn = document.getElementById('toggle-btn');

console.log(toggleBtn);

toggleBtn.addEventListener('click', () => {
  header.classList.toggle('open');
});
