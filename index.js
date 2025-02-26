import './js/scheme.js'
import './js/slider.js'
import './js/tooltips.js'

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
        console.log('onLeave')
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




