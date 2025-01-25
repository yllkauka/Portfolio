<!-- Home.vue -->
<template>
    <div class="home">
      <div class="ticker">
        <div class="ticker__list">
          <div class="ticker__item"><img src="../assets/1.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/2.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/3.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/4.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/5.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/6.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/7.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/8.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/1.jpg" alt="" /></div>
        </div>
        <div class="ticker__list">
          <div class="ticker__item"><img src="../assets/1.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/2.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/3.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/4.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/5.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/6.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/7.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/8.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/1.jpg" alt="" /></div>
        </div>
      </div>
      <section class="hero">
        <h1 class="centered" ref="heroTitleSection"><span class="highlight">Hello! I’m Yllka,</span> a Product Designer</h1>
        <p class="centered" ref="heroTextSection">
         I'm Yllka from Kosova, a product designer with nearly three years of experience. I focus on creating intuitive interfaces and refining digital products. I've worked with various companies, delivering impactful designs, and I'm also the proud founder of a growing design community.
        </p>
      </section>
      <section class="gallery" ref="gallerySection">

        <!-- Vivi Arkitekture -->
        <a href="/vivi" class="card">
          <div class="card-image">
            <img src="../assets/vivi_cover.jpg" alt="Vivi Arkitekture" />
          </div>
          <div class="card-info">
            <p class="card-type">UX/UI & Logo Design</p>
            <div class="card-title">
              <h3>Vivi Arkitekture</h3>
              <img class="arrow" src="../assets/arrow.svg" alt="" />
            </div>
          </div>
        </a>

        <!-- YLB Concept -->
        <a href="/ylb" class="card">
          <div class="card-image">
            <img src="../assets/ylb_cover.jpg" alt="YLB Concept" />
          </div>
          <div class="card-info">
            <p class="card-type">UX/UI & Logo Design</p>
            <div class="card-title">
              <h3>YLB Concept</h3>
              <img class="arrow" src="../assets/arrow.svg" alt="" />
            </div>
          </div>
        </a>

        <!-- Ares Tech -->
        <a href="/ares" class="card">
          <div class="card-image">
            <img src="../assets/ares_cover.jpg" alt="Ares Tech" />
          </div>
          <div class="card-info">
            <p class="card-type">UX/UI & Logo Design</p>
            <div class="card-title">
              <h3>Ares Tech</h3>
              <img class="arrow" src="../assets/arrow.svg" alt="" />
            </div>
          </div>
        </a>

        <!-- VM Premium Cars -->
        <a href="/vm" class="card">
          <div class="card-image">
            <img src="../assets/vm_cover.jpg" alt="VM Cars Premium" />
          </div>
          <div class="card-info">
            <p class="card-type">UX/UI & Logo Design</p>
            <div class="card-title">
              <h3>VM Cars Premium</h3>
              <img class="arrow" src="../assets/arrow.svg" alt="" />
            </div>
          </div>
        </a>

        <!-- Pixel Snap -->
        <a href="/pixel" class="card">
          <div class="card-image">
            <img src="../assets/pixel_cover.jpg" alt="Pixel Snap" />
          </div>
          <div class="card-info">
            <p class="card-type">UX/UI & Logo Design</p>
            <div class="card-title">
              <h3>Pixel Snap</h3>
              <img class="arrow" src="../assets/arrow.svg" alt="" />
            </div>
          </div>
        </a>

        <!-- Tifera Solutions -->
        <a href="/tifera" class="card">
          <div class="card-image">
            <img src="../assets/tifera_cover.jpg" alt="Tifera Solutions" />
          </div>
          <div class="card-info">
            <p class="card-type">UX/UI & Logo Design</p>
            <div class="card-title">
              <h3>Tifera Solutions</h3>
              <img class="arrow" src="../assets/arrow.svg" alt="" />
            </div>
          </div>
        </a>

        <!-- Digital Nugget -->
        <a href="/digital" class="card">
          <div class="card-image">
            <img src="../assets/digital_cover.jpg" alt="Digital Nugget" />
          </div>
          <div class="card-info">
            <p class="card-type">Product & Logo Design</p>
            <div class="card-title">
              <h3>Digital Nugget</h3>
              <img class="arrow" src="../assets/arrow.svg" alt="" />
            </div>
          </div>
        </a>

      </section>
      <ExperienceComponent></ExperienceComponent>

    </div>

  </template>
  
  <script>
  import ExperienceComponent from './Experience.vue';
  import ScrollReveal from 'scrollreveal';
  import { revealDefault } from '@/scrollAnimations';
 
  export default {
    components: {
      ExperienceComponent
    },
    
    mounted() {

      // Apply ScrollReveal 
      ScrollReveal().reveal(this.$refs.heroTitleSection, revealDefault);
      ScrollReveal().reveal(this.$refs.heroTextSection, revealDefault);

      const galleryImages = this.$refs.gallerySection.querySelectorAll('a');
        galleryImages.forEach((a, index) => {
          ScrollReveal().reveal(a, {
            duration: 400,
            origin: 'bottom',
            distance: '50px',
            scale: 0.85,
            delay: 150 + (index * 50), // Delay each card for a cascading effect
            easing: 'ease-out',
            reset: false,
          });
      });
    },
  };
  </script>
<style scoped>

.home{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
}

/***** Hero ******/

.hero {
  width: 100%; 
  max-width: 984px; /* Limit width for larger screens */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
}

/***** Gallery ******/

.gallery {
  max-width: 87rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}

.card {
  width: 400px;
  border-radius: 4px;
  display: block;
  overflow: hidden; /* Ensure content doesn’t overflow the card */
}

.card-image {
  width: 100%;
  height: 220px; 
  overflow: hidden;
  position: relative;
}

.card img {
  width: 100%;
  object-fit: cover; /* Cover the container while preserving aspect ratio */
  transition: transform 0.3s ease; /* Smooth transition for image shift */
  transform: translateY(0); 
}

.card:hover .card-image img {
  transform: translateY(-5%); /* Move the image up on hover */
}

.card-type {
  font-size: 0.87rem;
  color: var(--secondary-color);
}

.card-info {
  background-color: var(--support-color);
  padding: 1rem;
}

.card-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-title img {
  width: 35px;
  font-size: 1.2rem;
}

.arrow {
  transition: margin-left 0.2s ease;
}

.card:hover .arrow {
  transform: translateX(-10px); /* Move the arrow 10px to the left */
}

.ticker {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1; /* Lower z-index to keep it behind other content */
  overflow: hidden;
}

.ticker__list {
  display: flex;
  animation: ticker 90s infinite linear;
}

.ticker__item {
  margin-right: 20px;
  width: 666px;
  opacity: 0.16;
}

.ticker__item:hover {
  opacity: 0.3;
  transition: opacity 0.3s; 
}

@keyframes ticker {
  100% {
    transform: translateX(-100%);
  }
}

@media (max-width: 480px) {
  .home{
    gap: 60px;
  }
  .ticker {
    display: none;
  }
  .gallery {
    max-width:max-content;
  }
  .card {
    width: 100%;
  }
  .card-image {
    height: fit-content;
  }

}

</style>
  