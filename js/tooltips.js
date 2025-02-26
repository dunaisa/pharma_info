let newWidth;

const painTooltip = document.querySelector('#pain-tooltip');
const painTooltipContent = document.querySelector('.pain-tooltip-content');

const risksTooltip = document.querySelector('#risks-tooltip');
const risksTooltipContent = document.querySelector('.risks-tooltip-content');

const chronicTooltip = document.querySelector('#chronic-tooltip');
const chronicTooltipContent = document.querySelector('.chronic-tooltip-content');

const factorsTooltip = document.querySelector('#factors-tooltip');
const factorsTooltipContent = document.querySelector('.factors-tooltip-content');

const rowBlockTooltip = document.querySelector('.row__block-tt');
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
                        // rowBlockTooltipContent.style.width = 447 + 'px';
                        teraflexTooltipContent.style.width = 920 + 'px';
                          researchTooltip03Content.style.width = 452 + 'px';
                          researchTooltip04Content.style.width = 529 + 'px';
                          teraUltraTooltipMobContent.style.width = 920 + 'px';
  }
  if (windowWidth < 1919 || windowWidth >= 1101) {
    newWidth = windowWidth * 0.48;
    promoTooltipContent.style.width = `${newWidth}px`;
        painTooltipContent.style.width = `${newWidth - 0.06}px`;
            risksTooltipContent.style.width = `${(newWidth - 0.06)}px`;
                chronicTooltipContent.style.width = `${(newWidth - 0.06)}px`;
                    factorsTooltipContent.style.width = `${(newWidth - 0.06)}px`;
                        // rowBlockTooltipContent.style.width = `auto`;
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
                chronicTooltipContent.style.width = `${(newWidth - 0.06)}px`;
                    factorsTooltipContent.style.width = `${(newWidth - 0.06)}px`;
                        // rowBlockTooltipContent.style.width = `${(newWidth)}px`;
                          // teraflexTooltipContent.style.width = `${(newWidth - 0.06)}px`;
                        teraUltraTooltipMobContent.style.width = `${(newWidth - 0.06)}px`;
  }

  if (windowWidth <= 790) {
    newWidth = windowWidth * 0.8;
    promoTooltipContent.style.width = `${newWidth}px`;
        painTooltipContent.style.width = `${newWidth}px`;
            risksTooltipContent.style.width = `${newWidth}px`;
                chronicTooltipContent.style.width = `${windowWidth * 0.63}px`;
                    factorsTooltipContent.style.width = `${windowWidth * 0.63}px`;
                        // rowBlockTooltipContent.style.width = `${(windowWidth * 0.04)}px`;
                          teraflexTooltipContent.style.width = `${(newWidth)}px`;
                          teraUltraTooltipMobContent.style.width = `${(newWidth)}px`;
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

    if (windowWidth < 1097) {

    const chronicTooltip = chronicTooltipContent.getBoundingClientRect();
  
      const distanceToLeftChronic = chronicTooltip.left;
      const pathTooltipChronic = windowWidth - distanceToLeftChronic;
      const overflowOffsetChronic = pathTooltipChronic - chronicTooltip.width;
      chronicTooltipContent.style.left = `${overflowOffsetChronic}px`;
    }
}

window.addEventListener('DOMContentLoaded', () => {
  updateTooltipPosition();
});
window.addEventListener('resize', () => {
  updateTooltipPosition();
});