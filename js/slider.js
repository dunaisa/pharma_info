// const sliderStart = document.querySelector('#start-slide');

// const firstStartBtn = document.querySelector('#start-btn-line-01');

// const slide_01_line_01 = document.querySelector('#slide-01-line-01');

// firstStartBtn.addEventListener('click', () => {
//   sliderStart.classList.add('hide')
//   slide_01_line_01.classList.add('active')

// })

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('btn-prev');
  const closeBtn = document.getElementById('btn-cancel');
  let history = [];

  function showSlide(slideId, isGoingBack = false) {
    slides.forEach(slide => {
      slide.classList.remove('active')
    })

    // const defaultSlide = document.getElementById('start-slide');

    // if (defaultSlide) {
    //   defaultSlide.classList.add('active')
    // }

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



