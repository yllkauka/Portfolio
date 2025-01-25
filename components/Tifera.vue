<!-- Tifera.vue -->
<template>
    <div class="project">
      <section class="hero" ref="heroSection">
        <div class="title">
          <h1 class="default-animate">Tifera Solutions</h1>
         <p class="default-animate">Tifera Solutions is a website specializing in the sale of high-quality cameras, including alarm systems and CCTV solutions. I contributed by creating a professional and trustworthy logo and designing a website that effectively highlights their product offerings and security solutions.</p>
      </div>
        <img src="../assets/tifera_1.jpg" alt="Tifera Solutions" class="default-animate">
      </section>


      <main class="main-content">

        <section class="sticky-text-gallery">
<div class="text-section">
          <h2>Building a Secure Digital Presence for Tifera Solutions</h2>
          <p>Tifera Solutions needed a digital platform to establish trust and provide easy access to their range of security cameras and systems. My contributions included:</p>
          <ul>
              <li>Designing a professional and modern logo that conveys reliability and security.</li>
              <li>Creating an intuitive website layout to help users explore camera and alarm system options effortlessly.</li>
              <li>Highlighting the key features and benefits of their CCTV and security products with impactful visuals.</li>
          </ul>
        </div>
          <div class="gallery" id="gallery1">
            <a href="../assets/tifera1.jpg" target="_blank">
              <img src="../assets/tifera1.jpg" alt="Interface for components selection">
            </a>
            <a href="../assets/tifera2.jpg" target="_blank">
              <img src="../assets/tifera2.jpg" alt="Interface for templates selection">
            </a>
            <a href="../assets/tifera3.jpg" target="_blank">
              <img src="../assets/tifera3.jpg" alt="Interface for reporting">
            </a>
          </div>
        </section>
        
        <a href="https://tiferasolutions.ch/" class="buttonet" target="_blank" rel="noopener noreferrer">Check Tifera Solutions</a>

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
  