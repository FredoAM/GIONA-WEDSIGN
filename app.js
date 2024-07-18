const main = document.querySelector('main');
const footer = document.querySelector('footer');

const header = document.querySelector('header');

const headerMedia = document.querySelector('.header-media');


const bars = document.querySelector('.fa-bars');

const x = document.querySelector('.fa-x');

bars.addEventListener('click', (e) => {
    main.style.display = 'none';
    footer.style.display = 'none';
    header.style.display = 'none';
    headerMedia.style.display = 'flex';
  });

x.addEventListener('click', (e) => {
    main.style.display = 'block';
    footer.style.display = 'block';
    header.style.display = 'block';
    headerMedia.style.display = 'none';
  });
