const drawStars = () => {
  const starElem = document.querySelector('.star');

  for (let i = 0; i < 40; i++) {
    const cloneElem = starElem.cloneNode(true);

    const xpos = getRandomArbitrary(0, 97);
    const ypos = getRandomArbitrary(0, 80);

    cloneElem.style.left = `${xpos}%`;
    cloneElem.style.top = `${ypos}%`;

    if (i > 5 && i <= 10) {
      cloneElem.classList.add('small');
    } else if (i > 10 && i <= 18) {
      cloneElem.classList.add('x-small');
    } else if (i > 18) {
      cloneElem.classList.add('xx-small');
    }

    document.body.appendChild(cloneElem);
  }
  const starfield = document.querySelectorAll('.star');
  console.log(starfield);
}

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
}

drawStars();