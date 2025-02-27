gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  const block = document.querySelector('.tera-complex');
  const animateItems = document.querySelectorAll('.element');

  const mobBlock = document.querySelector('.tera-complex-mob');
  const mobAnimateItems = document.querySelectorAll('.product-mob__element');

  if (!block) {
    console.error('Элемент .tera-complex не найден!');
    return;
  }

  if (!mobBlock) {
    console.error('Элемент .tera-complex не найден!');
    return;
  }

  const totalScrollDistance = animateItems.length * 8;

  gsap.to(block, {
    scrollTrigger: {
      trigger: block,
      start: "center center",
      end: `+=${totalScrollDistance}%`,
      pin: true,
      scrub: true,
      onEnter: () => {
        animateItems.forEach(item => {
          gsap.set(item, {
            top: '50%',
            left: '50%',
            xPercent: -50,
            yPercent: -50,
            opacity: 0
          });
        });
      },
      onLeave: () => {
        gsap.set(block, { clearProps: "all" });
      },
      onLeaveBack: () => {
        gsap.set(block, { clearProps: "all" })
        ;
      },
      onUpdate: (self) => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;

      if (self.direction === -1 && currentScroll < self.end) {
        self.kill();
        gsap.set(block, { clearProps: "all" });
      }
      },
      toggleActions: "play none none none"
    }
  });

  animateItems.forEach((item, index) => {
    const targetId = item.dataset.target;
    const hiddenTarget = document.getElementById(targetId);

    if (!hiddenTarget) {
      console.error(`Скрытый блок с ID "${targetId}" не найден.`);
      return;
    }
    gsap.to(item, {
      x: () => {
        const targetRect = hiddenTarget.getBoundingClientRect();
        const parentRect = item.parentElement.getBoundingClientRect();
        const currentCenterX = parentRect.width / 2;
        const itemRect = item.getBoundingClientRect();
        return targetRect.left - parentRect.left - currentCenterX + itemRect.width / 2;
      },
      y: () => {
        const targetRect = hiddenTarget.getBoundingClientRect();
        const parentRect = item.parentElement.getBoundingClientRect();
        const currentCenterY = parentRect.height / 2;
        const itemRect = item.getBoundingClientRect();
        return targetRect.top - parentRect.top - currentCenterY + itemRect.height / 2;
      },
      opacity: 1,
      duration: 1,
      ease: "none",

      scrollTrigger: {
        trigger: '.tera-complex__wrapper',
        start: `center+=${index * 8}% center`,
        end: `center+=${(index + 1) * 8}% center`,
        toggleActions: "play none none none",
      },
    });
  });

  gsap.to(mobBlock, {
    scrollTrigger: {
      trigger: mobBlock,
      start: "center center",
      end: `+=${totalScrollDistance}%`,
      pin: true,
      scrub: true,
      onEnter: () => {
        mobAnimateItems.forEach(item => {
          gsap.set(item, {
            opacity: 0,
            y: 20,
          });
        });
      },
      onLeave: () => {
        console.log('onLeave')
        gsap.set(mobBlock, { clearProps: "all" });
      },
      onLeaveBack: () => {
        console.log('onLeaveBack')
        gsap.set(mobBlock, { clearProps: "all" })
        ;
      },
      onUpdate: (self) => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      if (self.direction === -1 && currentScroll < self.end) {
        self.kill();
        gsap.set(mobBlock, { clearProps: "all" });
      }
      },

      toggleActions: "play none none none"
    }
  });

  mobAnimateItems.forEach((item, index) => {
    gsap.to(item, {
      opacity: 1,
      y: 0,
      duration: 2.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.product-mob__elements-wrapper',
        start: `center+=${index * 8}% center`,
        end: `center+=${(index + 1) * 8}% center`,
        toggleActions: "play none none none",
      },
    });
  });
});



// // // // // // // // // // // // // // // // // // // 

let newWidth;

const painTooltip = document.querySelector('#pain-tooltip');
const painTooltipContent = document.querySelector('.pain-tooltip-content');

const risksTooltip = document.querySelector('#risks-tooltip');
const risksTooltipContent = document.querySelector('.risks-tooltip-content');

const chronicTooltip = document.querySelector('#chronic-tooltip');
const chronicTooltipContent = document.querySelector('.chronic-tooltip-content');
const chronicTooltipMob = document.querySelector('#chronic-tooltip-mob');
const chronicTooltipContentMob = document.querySelector('.chronic-tooltip-content-mob');

const factorsTooltip = document.querySelector('#factors-tooltip');
const factorsTooltipContent = document.querySelector('.factors-tooltip-content');

const rowBlockTooltip = document.querySelector('#row-block-tooltip');
const rowBlockTooltipContent = document.querySelector('.row__block-tooltip-content');

const promoTooltip = document.querySelector('#promo-tooltip');
const promoTooltipContent = document.querySelector('.promo-tooltip-content');

const teraflexTooltip = document.querySelector('#teraflex-tooltip');
const teraflexTooltipContent = document.querySelector('.teraflex-tooltip-content');

const researchTooltip01 = document.querySelector('#research-tooltip-01');
const researchTooltip01Content = document.querySelector('.research__tooltip-content_01');

const researchTooltip02 = document.querySelector('#research-tooltip-02');
const researchTooltip02Content = document.querySelector('.research__tooltip-content_02');

const researchTooltip03 = document.querySelector('#research-tooltip-03');
const researchTooltip03Content = document.querySelector('.research__tooltip-content_03');

const researchTooltip04 = document.querySelector('#research-tooltip-04');
const researchTooltip04Content = document.querySelector('.research__tooltip-content_04');

const researchTooltipMob01 = document.querySelector('#research-mob-tooltip-01');
const researchTooltipMob01Content = document.querySelector('.research-mob__tooltip-content_01');

const researchTooltipMob02 = document.querySelector('#research-mob-tooltip-02');
const researchTooltipMob02Content = document.querySelector('.research-mob__tooltip-content_02');

const researchTooltipMob03 = document.querySelector('#research-mob-tooltip-03');
const researchTooltipMob03Content = document.querySelector('.research-mob__tooltip-content_03');

const researchTooltipMob04 = document.querySelector('#research-mob-tooltip-04');
const researchTooltipMob04Content = document.querySelector('.research-mob__tooltip-content_04');

const teraUltraTooltipMob = document.querySelector('#tera-ultra-tooltip');
const teraUltraTooltipMobContent = document.querySelector('.tera-ultra__tooltip-content');


promoTooltip.addEventListener('click', () => {
  promoTooltipContent.classList.toggle('active')
});

painTooltip.addEventListener('click', () => {
  painTooltipContent.classList.toggle('active')
});

risksTooltip.addEventListener('click', () => {
  risksTooltipContent.classList.toggle('active')
});

chronicTooltip.addEventListener('click', () => {
  chronicTooltipContent.classList.toggle('active')
});

chronicTooltipMob.addEventListener('click', () => {
  chronicTooltipContentMob.classList.toggle('active')
});

factorsTooltip.addEventListener('click', () => {
  factorsTooltipContent.classList.toggle('active')
});

rowBlockTooltip.addEventListener('click', () => {
  rowBlockTooltipContent.classList.toggle('active')
});

teraflexTooltip.addEventListener('click', () => {
  teraflexTooltipContent.classList.toggle('active')
});

researchTooltip01.addEventListener('click', () => {
  researchTooltip01Content.classList.toggle('active')
});

researchTooltip02.addEventListener('click', () => {
  researchTooltip02Content.classList.toggle('active')
});

researchTooltip03.addEventListener('click', () => {
  researchTooltip03Content.classList.toggle('active')
});

researchTooltip04.addEventListener('click', () => {
  researchTooltip04Content.classList.toggle('active')
});

researchTooltipMob01.addEventListener('click', () => {
  researchTooltipMob01Content.classList.toggle('active')
});

researchTooltipMob02.addEventListener('click', () => {
  researchTooltipMob02Content.classList.toggle('active')
});

researchTooltipMob03.addEventListener('click', () => {
  researchTooltipMob03Content.classList.toggle('active')
});

researchTooltipMob04.addEventListener('click', () => {
  researchTooltipMob04Content.classList.toggle('active')
});

teraUltraTooltipMob.addEventListener('click', () => {
  teraUltraTooltipMobContent.classList.toggle('active')
});

function updateTooltipWidth() {
  const windowWidth = window.innerWidth; 

  if (windowWidth >= 1920) {
    promoTooltipContent.style.width = 920 + 'px';
        painTooltipContent.style.width = 811 + 'px';
            risksTooltipContent.style.width = 811 + 'px';
                chronicTooltipContent.style.width = 811 + 'px';
                    factorsTooltipContent.style.width = 811 + 'px';
                        rowBlockTooltipContent.style.width = 447 + 'px';
                        teraflexTooltipContent.style.width = 920 + 'px';
                          researchTooltip03Content.style.width = 452 + 'px';
                          researchTooltip04Content.style.width = 529 + 'px';
                          teraUltraTooltipMobContent.style.width = 920 + 'px';
                          console.log(promoTooltipContent.style.width)
                          
  }
  if (windowWidth < 1919 && windowWidth >= 1101) {
    newWidth = windowWidth * 0.48;
    promoTooltipContent.style.width = `${newWidth}px`;
        painTooltipContent.style.width = `${newWidth - 0.06}px`;
            risksTooltipContent.style.width = `${(newWidth - 0.06)}px`;
                chronicTooltipContent.style.width = `${(newWidth - 0.06)}px`;
                    factorsTooltipContent.style.width = `${(newWidth - 0.06)}px`;
                        rowBlockTooltipContent.style.width = `auto`;
                          teraflexTooltipContent.style.width = `${(newWidth - 0.06)}px`;
                        researchTooltip03Content.style.width = `${(windowWidth * 0.3)}px`;
                        researchTooltip04Content.style.width = `${(windowWidth * 0.3)}px`;
                        teraUltraTooltipMobContent.style.width = `${(windowWidth * 0.6)}px`;
                          
  }

  if (windowWidth < 1100 && windowWidth >= 791) {
    newWidth = windowWidth * 0.6;
    promoTooltipContent.style.width = `${newWidth}px`;
        painTooltipContent.style.width = `${newWidth - 0.06}px`;
            risksTooltipContent.style.width = `${(newWidth - 0.06)}px`;
                chronicTooltipContent.style.width = `${(windowWidth * 0.4)}px`;
                    factorsTooltipContent.style.width = `${(newWidth - 0.06)}px`;
                    rowBlockTooltipContent.style.width = `auto`;
                    teraflexTooltipContent.style.width = `${(windowWidth * 0.45)}px`;
                        teraUltraTooltipMobContent.style.width = `${(newWidth - 0.06)}px`;
  }

  if (windowWidth <= 790) {
    newWidth = windowWidth * 0.8;
    promoTooltipContent.style.width = `${newWidth}px`;
        painTooltipContent.style.width = `${newWidth}px`;
            risksTooltipContent.style.width = `${newWidth}px`;
            chronicTooltipContent.style.width = `${(windowWidth * 0.4)}px`;
            chronicTooltipContentMob.style.width = `${(windowWidth * 0.8)}px`;
                    factorsTooltipContent.style.width = `${windowWidth * 0.63}px`;
                    rowBlockTooltipContent.style.width = `auto`;
                          teraflexTooltipContent.style.width = `${(newWidth)}px`;
                          teraUltraTooltipMobContent.style.width = `${(windowWidth * 0.6)}px`;
  }

  if (windowWidth <= 600) {
    teraUltraTooltipMobContent.style.width = `${(windowWidth * 0.85)}px`;

  }
}

function updateTooltipPosition() {
  const windowWidth = window.innerWidth; 

  updateTooltipWidth();

  if (windowWidth < 1919 && windowWidth >= 791) {

    const promoTooltipRect = promoTooltipContent.getBoundingClientRect();

    const distanceToLeftPromo = promoTooltipRect.left;
    const pathTooltipPromo = windowWidth - distanceToLeftPromo;
    const overflowOffsetPromo = pathTooltipPromo - promoTooltipRect.width;
    promoTooltipContent.style.left = `${overflowOffsetPromo}px`;
  }

    if (windowWidth < 1290 && windowWidth >= 791) {
    const risksTooltipRect = risksTooltipContent.getBoundingClientRect();

    const distanceToLeftRisks = risksTooltipRect.left;
    const pathTooltipRisks = windowWidth - distanceToLeftRisks;
    const overflowOffsetRisks = pathTooltipRisks - risksTooltipRect.width;
    risksTooltipContent.style.left = `${overflowOffsetRisks}px`;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  updateTooltipPosition();
});
window.addEventListener('resize', () => {
  updateTooltipPosition();
});


// // // // // // // // // // // // // // // 

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('btn-prev');
  const closeBtn = document.getElementById('btn-cancel');
  let history = [];

  function showSlide(slideId, isGoingBack = false) {
    slides.forEach(slide => {
      slide.classList.remove('active')
    })

    const currentSlide = document.getElementById(slideId);
    if (currentSlide) {
      currentSlide.classList.add('active');
    }

    if (!isGoingBack) {
      history.push(slideId);
    }
  }

  function showPrevSlide() {
    if (history.length > 1) {
      history.pop();
      const prevSlideId = history[history.length - 1];
      showSlide(prevSlideId, true)
    }
  }

    slides.forEach(slide => {
      const btns = slide.querySelectorAll('button');
      btns.forEach(btn => {
        btn.addEventListener('click', () => {
          const slideId = btn.getAttribute('data-slide');
          showSlide(slideId)
        });
      })
    })

    function closeAllSlides(slideId) {
      history = ['start-slide'];
      showSlide('start-slide');
    }

    closeBtn.addEventListener('click', closeAllSlides)
    prevBtn.addEventListener('click', showPrevSlide)
    showSlide('start-slide')
})

// // // // // // // // // // // // // // // 


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
