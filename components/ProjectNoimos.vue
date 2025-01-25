<!-- Project Noimos.vue -->
<template>
    <div class="project">
      <section class="hero" ref="heroSection">
        <div class="title">
          <h1 class="default-animate">Noimos</h1>
          <p class="default-animate">Noimos facilitates insurance companies in managing their claims process through computer vision and machine learning.</p>
        </div>
        <img src="../assets/hero-noimos.jpg" alt="Mobile screenshots for Noimos app" class="default-animate">
      </section>

      <section class="meta">
        <div class="meta-group">
          <h3>Role</h3>
          <ul class="meta-items">
            <li>Interface design</li>
            <li>Interactive prototypes</li>
            <li>Wireframing</li>
            <li>User flow</li>
          </ul>
        </div>
        <div class="meta-group">
          <h3>Platform</h3>
          <ul class="meta-items">
            <li>Web-app</li>
          </ul>
        </div>
        <div class="meta-group">
          <h3>Duration</h3>
          <ul class="meta-items">
            <li>2022 [Freelance]</li>
          </ul>
        </div>
      </section>

      <main class="main-content">

        <section class="sticky-text-gallery">
          <div class="text-section">
            <h2>Design concept</h2>
            <p>I led the creation of user flows and designed the interface for the Minimum Viable Product (MVP) of the web-app dedicated to streamlining the claims process for damaged cars. Collaborating closely with the founder, tech lead, and two machine learning engineers, I meticulously crafted every detail and interaction within the app.</p>
            <p>The data inputted by users in the initial version of the app not only informs claim evaluations but also serves as training data for the machine learning models. Consequently, precision and adherence to consistent guidelines were necessary for each claim. The accompanying screenshots showcase the use of silhouette assistance to aid users in capturing comprehensive images of the vehicle.</p>
          </div>
          <div class="gallery reduced-gallery" id="gallery1">
            <a href="../assets/p_noimos/capture-01.jpg" target="_blank">
              <img src="../assets/p_noimos/capture-01.jpg" alt="Interface for camera capture from front">
            </a>
            <a href="../assets/p_noimos/capture-02.jpg" target="_blank">
              <img src="../assets/p_noimos/capture-02.jpg" alt="Interface for camera capture from front">
            </a>
            <a href="../assets/p_noimos/capture-03.jpg" target="_blank">
              <img src="../assets/p_noimos/capture-03.jpg" alt="Interface for camera capture from left corner">
            </a>
            <a href="../assets/p_noimos/mark-damage.jpg" target="_blank">
              <img src="../assets/p_noimos/mark-damage.jpg" alt="Interface for selecting where there is a damage in the car">
            </a>
          </div>
        </section>

        <section class="info-block">
          <h2>User flow</h2>
          <div class="user-flow">
              <div class="step">Basic info</div>
              <img class="arrow" src="../assets/arrow.svg" alt="" />
              <div class="step">Car documents</div>
              <img class="arrow" src="../assets/arrow.svg" alt="" />
              <div class="step">General pictures</div>
              <img class="arrow" src="../assets/arrow.svg" alt="" />
              <div class="step">Damage details</div>
              <img class="arrow" src="../assets/arrow.svg" alt="" />
              <div class="step final-step">Claim report</div>
          </div>
        </section>


        <section class="sticky-text-gallery">
          <div class="text-section">
            <h2>Claim report</h2>
            <p>Following the data input process, we generated a comprehensive claim report where all damages were meticulously annotated and marked. This manual annotation process, performed by mechanics, serves as foundational training data for machine learning models. These models are trained to discern between damages and non-damages, identify various types of damage, and accurately categorize them.</p>
          </div>
          <div class="gallery" id="gallery2">
            <a href="../assets/p_noimos/claim.jpg" target="_blank">
              <img src="../assets/p_noimos/claim.jpg" alt="Interface for claim report highlighting claim summary, documents attachments, damage detail pictures and general pictures of the car">
            </a>
          </div>
        </section>

      </main>
    </div>
  </template>
  
<script>
  import ScrollReveal from 'scrollreveal';
  import { revealDefault } from '@/scrollAnimations';
  import photoSwipeMixin from '../src/photoSwipeMixin';
  
  export default {
    mixins: [photoSwipeMixin], // uses the photoSwipeMixin to open fullscreen images

    mounted() {

      // Apply Default ScrollReveal 
      const elements = this.$refs.heroSection.querySelectorAll('.default-animate');
      elements.forEach((el, index) => {
        ScrollReveal().reveal(el, {
          ...revealDefault, // Spread the reveal properties
          delay: index * 100, // Add a delay based on each element
        });
      });
      
      // Apply ScrollReveal 
      ScrollReveal().reveal(this.$refs.KeyContributionsMotion, {
        duration: 700,
        origin: 'bottom',
        distance: '20px',
        scale: 0.92,
        easing: 'ease-out',
        reset: true,
        rotate: {
          x: 80,
        }
      }); 

    },

  };
</script>
  
<style scoped>
.reduced-gallery {
  display: grid;
  grid-auto-rows: minmax(0, 1fr);
  grid-template-columns: repeat(2, minmax(200px, 1fr));
}

.info-block h2 {
  text-align: center;
}
.user-flow {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 16px;
}
.step {
  height: 240px;
  min-width: 140px;
  background-color: #E56354;
  color: white;
  padding: 20px 30px;
  margin: 0 10px;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.3;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step.final-step {
  background-color: #3B82F6;
}

@media (max-width: 768px) {

  .reduced-gallery {
    grid-template-columns: auto;
  }
  .user-flow {
    flex-direction: column;
  }
  
  .step-container {
    flex-direction: column;
  }
  
  .step {
    margin: 10px 0;
    height: 100px;
    width: 300px;
  }
  
  .arrow {
    transform: rotate(90deg);
  }
}

</style>
  