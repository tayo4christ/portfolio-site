/* ----- NAVIGATION BAR FUNCTION ----- */
    function myMenuFunction(){
      var menuBtn = document.getElementById("myNavMenu");
      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    }
/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    window.onscroll = function() {headerShadow()};
    function headerShadow() {
      const navHeader =document.getElementById("header");
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
      } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
      }
    }
/* ----- TYPING EFFECT ----- */
   var typingEffect = new Typed(".typedText",{
      strings : ["Educational Technologist","AI Researcher","Inclusive Tech Designer"],
      loop : true,
      typeSpeed : 100, 
      backSpeed : 80,
      backDelay : 2000
   })
/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true     
   })
  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  
  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})

  /* -- CAROUSEL -- */
  const track = document.querySelector('.carousel-track');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const dotsContainer = document.getElementById('carousel-dots');
  const cards = document.querySelectorAll('.carousel-card');

  let index = 0;
  let autoSlideInterval;
  let isHovered = false;

  function updateDots() {
    dotsContainer.innerHTML = '';
    cards.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.classList.add('carousel-dot');
      if (i === index) dot.classList.add('active');
      dot.addEventListener('click', () => {
        index = i;
        scrollToCard(i);
        updateDots();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function scrollToCard(i) {
    const scrollX = cards[i].offsetLeft - track.offsetLeft;
    track.scrollTo({ left: scrollX, behavior: 'smooth' });
    fadeVisibleCards();
  }

  function nextCard() {
    if (!isHovered) {
      index = (index + 1) % cards.length;
      scrollToCard(index);
      updateDots();
    }
  }

  function prevCard() {
    index = (index - 1 + cards.length) % cards.length;
    scrollToCard(index);
    updateDots();
  }

  function fadeVisibleCards() {
    const containerLeft = track.scrollLeft;
    const containerRight = containerLeft + track.offsetWidth;

    cards.forEach((card) => {
      const cardLeft = card.offsetLeft;
      const cardRight = cardLeft + card.offsetWidth;
      if (cardRight > containerLeft && cardLeft < containerRight) {
        card.classList.add('fade-in');
      }
    });
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextCard, 5000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  nextBtn.addEventListener('click', nextCard);
  prevBtn.addEventListener('click', prevCard);

  track.addEventListener('mouseover', () => {
    isHovered = true;
  });

  track.addEventListener('mouseout', () => {
    isHovered = false;
  });

  updateDots();
  fadeVisibleCards();
  startAutoSlide();

  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})
/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})
  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  
/* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll('section[id]')
  function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
      }  else {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
    })
  }
  window.addEventListener('scroll', scrollActive)