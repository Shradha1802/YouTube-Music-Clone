const mainContent = document.querySelector('.mainContent');
const nav = document.querySelector('nav');
const YTMusic = document.querySelector('.sidebarHeading');

mainContent.addEventListener('scroll', () => {
  if (mainContent.scrollTop > 0) {
    nav.style.backgroundColor = 'black';
    nav.style.borderBottom = '1px solid rgb(68,68,68)';
    YTMusic.style.borderRight = 'none';
    YTMusic.style.borderBottom = '1px solid rgb(68,68,68)';
    mainContent.style.background='black';
  } else {
    nav.style.backgroundColor = 'transparent';
    YTMusic.style.borderRight = '1px solid rgb(68,68,68)'; // <-- Reset the border
    YTMusic.style.borderBottom = 'none';
    nav.style.borderBottom = 'none';

    mainContent.style.background = `
    radial-gradient(circle at 15% 2%,
        rgba(137, 86, 101, 0.8) 0%,
        #11313E 10%,
        #252028 20%,
        rgba(0, 0, 0, 0.1) 35%,
        rgba(0, 0, 0, 0) 45%),
    #000000`;

  }
});


const cardContainers = document.querySelectorAll('.cardContainer');
const leftBtns = document.querySelectorAll('.iconBodyleft');
const rightBtns = document.querySelectorAll('.iconBodyright')
cardContainers.forEach((container, index) => {
  const leftBtn = leftBtns[index]; // matching button by index
  const rightBtn = rightBtns[index];
  container.addEventListener('scroll', () => {
    const atEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 1; // small margin fix
    if (atEnd) {
      leftBtn.style.opacity = 0.7;
      rightBtn.style.opacity=0.2;
    } else {
      leftBtn.style.opacity = 0.2;
      rightBtn.style.opacity=0.7;
    }
  });
});

