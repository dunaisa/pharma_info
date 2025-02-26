const interactiveBlocks = document.querySelectorAll('.white-block');

interactiveBlocks.forEach((block) => {
  block.addEventListener(('click'), () => {
    block.classList.remove('white-block');
  })
})

// line 1

const startBtnOne = document.querySelector('#step-one-line-01');
const startArrow = document.querySelector('.line-first__step-arrow');
const blockLineOne = document.querySelector('.line-first__step-01');


startBtnOne.addEventListener('click', () => {
  startArrow.classList.add('visible');
  blockLineOne.classList.add('visible');
});


// line 2

// step 01

const startBtnTwo = document.querySelector('#step-one-line-02');
const arrow_01_01 = document.querySelector('.arrow-01_01');
const arrow_02_01 = document.querySelector('.arrow-02_01');
const arrow_04_01 = document.querySelector('.arrow-04_01');
const arrow_vertical_10 = document.querySelector('.block-10-vertical');

const block_01 = document.querySelector('.block-01');
const block_03 = document.querySelector('.block-03');
const block_10 = document.querySelector('.block-10');


startBtnTwo.addEventListener('click', () => {
  arrow_01_01.classList.add('visible');
  arrow_02_01.classList.add('visible');
  arrow_04_01.classList.add('visible');
  arrow_vertical_10.classList.add('visible');
  block_01.classList.add('visible');
  block_03.classList.add('visible');
  block_10.classList.add('visible');
  
});

// step 02

const block_07 = document.querySelector('.block-07');
const arrow_03_01 = document.querySelector('.arrow-03_01');
const arrow_vertical_07 = document.querySelector('.block-07-vertical');

block_03.addEventListener('click', () => {
  block_07.classList.add('visible');
  arrow_03_01.classList.add('visible');
  arrow_vertical_07.classList.add('visible');
});

// step 03

const block_14 = document.querySelector('.block-14');
const arrow_05_01 = document.querySelector('.arrow-05_01');
const arrow_vertical_14 = document.querySelector('.block-14-vertical');

block_10.addEventListener('click', () => {
  block_14.classList.add('visible');
  arrow_05_01.classList.add('visible');
  arrow_vertical_14.classList.add('visible');
});

// step 04

const block_02 = document.querySelector('.block-02');
const arrow_vertical_01 = document.querySelector('.block-01-vertical');
const arrow_01_02 = document.querySelector('.arrow-01_02');


block_01.addEventListener('click', () => {
  block_02.classList.add('visible');
  block_14.classList.add('visible');
  arrow_01_02.classList.add('visible');
  arrow_vertical_01.classList.add('visible');
});

// step 05

const block_04 = document.querySelector('.block-04');
const block_05 = document.querySelector('.block-05');
const arrow_vertical_04 = document.querySelector('.block-04-vertical');
const arrow_vertical_05 = document.querySelector('.block-05-vertical');

block_02.addEventListener('click', () => {
  block_04.classList.add('visible');
  block_05.classList.add('visible');
  arrow_vertical_04.classList.add('visible');
  arrow_vertical_05.classList.add('visible');
});

// step 05

const block_08 = document.querySelector('.block-08');
const arrow_02_04 = document.querySelector('.arrow-02_04');
const arrow_vertical_08 = document.querySelector('.block-08-vertical');

block_04.addEventListener('click', () => {
  block_08.classList.add('visible');
  arrow_02_04.classList.add('visible');
  arrow_vertical_08.classList.add('visible');
});

// step 05

const arrow_03_02 = document.querySelector('.arrow-03_02');
const block_09 = document.querySelector('.block-09');

block_08.addEventListener('click', () => {
  arrow_03_02.classList.add('visible');
  block_09.classList.add('visible');
});

// step 06
const block_11 = document.querySelector('.block-11');
const block_12 = document.querySelector('.block-12');
const block_13 = document.querySelector('.block-13');

const arrow_vertical_11 = document.querySelector('.block-11-vertical');
const arrow_vertical_12 = document.querySelector('.block-12-vertical');
const arrow_vertical_09 = document.querySelector('.block-09-vertical');
const arrow_03_03 = document.querySelector('.arrow-03_03');


block_09.addEventListener('click', () => { 
  block_11.classList.add('visible');
  block_12.classList.add('visible');
  block_13.classList.add('visible');

  arrow_vertical_11.classList.add('visible');
  arrow_vertical_12.classList.add('visible');
  arrow_vertical_09.classList.add('visible');
  arrow_03_03.classList.add('visible');
});

// step 07
const block_15 = document.querySelector('.block-15');
const arrow_vertical_15 = document.querySelector('.block-15-vertical');

block_11.addEventListener('click', () => { 
  block_15.classList.add('visible');
  arrow_vertical_15.classList.add('visible');
});

// step 08
const block_16 = document.querySelector('.block-16');
const arrow_vertical_16 = document.querySelector('.block-16-vertical');

block_12.addEventListener('click', () => { 
  block_16.classList.add('visible');
  arrow_vertical_16.classList.add('visible');
});

// step 09
const block_17 = document.querySelector('.block-17');
const arrow_vertical_17 = document.querySelector('.block-17-vertical');

block_13.addEventListener('click', () => { 
  block_17.classList.add('visible');
  arrow_vertical_17.classList.add('visible');
});

// step 10
const block_06 = document.querySelector('.block-06');
const arrow_vertical_13 = document.querySelector('.block-13-vertical');

block_13.addEventListener('click', () => { 
  block_06.classList.add('visible');
  arrow_vertical_13.classList.add('visible');
  if (!block_06.classList.contains('.visible')) {
    block_06.classList.add('visible');
  }
});

// step 11
const arrow_02_02 = document.querySelector('.arrow-02_02');

block_05.addEventListener('click', () => {
  arrow_02_02.classList.add('visible');
  if (!block_06.classList.contains('.visible')) {
    block_06.classList.add('visible');
  }
});


// line 3

const startBtnThree = document.querySelector('#step-one-line-03');
const startBtnTreeArrow = document.querySelector('.line-third__step-arrow');

const block_18 = document.querySelector('.block-18');
const block_19 = document.querySelector('.block-19');
const block_20 = document.querySelector('.block-20');
const block_21 = document.querySelector('.block-21');

const arrow_vertical_18 = document.querySelector('.block-18-vertical');
const arrow_vertical_19 = document.querySelector('.block-19-vertical');
const arrow_vertical_20 = document.querySelector('.block-20-vertical');
const arrow_vertical_21 = document.querySelector('.block-21-vertical');

startBtnThree.addEventListener('click', () => {
  startBtnTreeArrow.classList.add('visible');
  block_18.classList.add('visible');
  block_19.classList.add('visible');
  block_20.classList.add('visible');
  block_21.classList.add('visible');
  arrow_vertical_18.classList.add('visible');
  arrow_vertical_19.classList.add('visible');
  arrow_vertical_20.classList.add('visible');
  arrow_vertical_21.classList.add('visible');
});