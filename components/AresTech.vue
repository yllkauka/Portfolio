<!-- AresTech.vue -->
<template>
  <div class="project">
    <section class="hero" ref="heroSection">
      <div class="title">
        <h1 class="default-animate">Ares Tech</h1>
        <p class="default-animate">Ares Tech is a cutting-edge software platform designed to streamline workflows and enhance productivity. My role involved creating a modern, user-focused website and designing a professional logo that embodies the platform's innovative approach.</p>
      </div>
      <img src="../assets/gallery-ares.jpg" alt="Ares Tech Platform" class="default-animate">
    </section>

    <main class="main-content">

      <section class="sticky-text-gallery">
        <div class="text-section">
          <h2>Building a Digital Identity for Ares Tech</h2>
          <p>Ares Tech is a forward-thinking software platform aimed at improving workflows and productivity. I designed a clean, user-focused digital presence that communicates innovation and clarity.</p>
          <p>My contributions included:</p>
          <ul>
              <li>Creating a sleek, professional logo that reflects a tech-driven identity.</li>
              <li>Designing a modern website to clearly present features and value.</li>
              <li>Ensuring a seamless user experience through responsive and intuitive design.</li>
          </ul>
          </div>
          <div class="gallery" id="gallery1">
         <a href="../assets/ares2.png" target="_blank">
              <img src="../assets/ares2.png" alt="Interface for components selection">
            </a>
            <a href="../assets/ares1.png" target="_blank">
              <img src="../assets/ares1.png" alt="Interface for components selection">
            </a>
            <a href="../assets/ares4.jpg" target="_blank">
              <img src="../assets/ares4.jpg" alt="Interface for templates selection">
            </a>
            <a href="../assets/ares5.jpg" target="_blank">
              <img src="../assets/ares5.jpg" alt="Interface for parameters customization">
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

</style>
  