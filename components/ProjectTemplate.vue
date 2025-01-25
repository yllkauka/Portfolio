<!-- ProjectTemplate.vue -->
<template>
    <div class="project">
      <section class="hero" ref="heroSection">
        <div class="title">
          <h1 class="default-animate">Title</h1>
          <p class="default-animate">Description</p>
        </div>
        <img src="../assets/placeholder.jpg" alt="" class="default-animate">
      </section>

      <section class="meta">
        <div class="meta-group">
          <h3>Role</h3>
          <ul class="meta-items">
            <li>Enter role</li>
            <li>Enter role</li>
            <li>Enter role</li>
          </ul>
        </div>
        <div class="meta-group">
          <h3>Platform</h3>
          <ul class="meta-items">
            <li>Enter platform</li>
          </ul>
        </div>
        <div class="meta-group">
          <h3>Duration</h3>
          <ul class="meta-items">
            <li>Enter duration</li>
          </ul>
        </div>
      </section>

      <main class="main-content">

        <section class="key-contributions">
          <div class="key-contributions-container" ref="KeyContributionsMotion">
            <h2>Key contributions</h2>
            <ul>
              <li>Enter contribution</li>
              <li>Enter contribution</li>
              <li>Enter contribution</li>
              <li>Enter contribution</li>
            </ul>
          </div>
         </section>
         
        <section class="prizes">
          <h2>Prizes and awards</h2>
          <div class="prizes-container">
            <a href="#" target="_blank"><img src="../assets/placeholder-prize.png" alt=""></a>
            <a href="#" target="_blank"><img src="../assets/placeholder-prize.png" alt=""></a>
            <a href="#" target="_blank"><img src="../assets/placeholder-prize.png" alt=""></a>
            <a href="#" target="_blank"><img src="../assets/placeholder-prize.png" alt=""></a>
          </div>
        </section>

        <section class="sticky-text-gallery">
          <div class="text-section">
            <h2>Highlight</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div class="gallery">
            <img src="../assets/placeholder.jpg" alt="">
            <img src="../assets/placeholder.jpg" alt="">
            <img src="../assets/placeholder.jpg" alt="">
          </div>
        </section>
        
        <section class="sticky-text-gallery">
          <div class="text-section">
            <h2>Highlight</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div class="gallery">
            <img src="../assets/placeholder.jpg" alt="">
            <img src="../assets/placeholder.jpg" alt="">
            <img src="../assets/placeholder.jpg" alt="">
+          </div>
        </section>
        
        <section class="info-block">
          <h2>About my role</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <ul>
            <li>Responsability description</li>
            <li>Responsability description</li>
            <li>Responsability description</li>
            <li>Responsability description</li>
            <li>Responsability description</li>
            <li>Responsability description</li>
          </ul>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </section>

        <section class="info-block">
          <h2>Info block</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          <div class="video-container">
            <iframe 
              width="740" 
              height="416" 
              src="https://www.youtube.com/embed/tMlyMI7Zc4k?si=J_s9iM2fUUB2mR1e" 
              frameborder="0" 
              allowfullscreen
              title="Those I met in Patagonia"
            ></iframe>
          </div>
        </section>

        <section class="documentation">
          <div class="documentation-text">
            <h2>Documentation</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          </div>
          <div class="before-and-after">
            <figure>
              <figcaption>Before</figcaption>
              <img src="../assets/placeholder.jpg" alt="">
            </figure>
            <figure>
              <figcaption>After</figcaption>
              <img src="../assets/placeholder.jpg" alt="">
            </figure>
          </div>
        </section>

      </main>
    </div>
  </template>
  
<script>
  import ScrollReveal from 'scrollreveal';
  import { revealDefault } from '@/scrollAnimations';

  export default {

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
</style>
  