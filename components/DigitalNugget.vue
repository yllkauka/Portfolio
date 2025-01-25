<!-- DigitalNugger.vue -->
<template>
    <div class="project">
      <section class="hero" ref="heroSection">
        <div class="title">
          <h1 class="default-animate">Digital Nugget</h1>
        <p class="default-animate">Digital Nugget is a cutting-edge platform that enables users to buy and sell virtual gold seamlessly. I developed the platform from the ground up, including its comprehensive content management system (CMS), ensuring a smooth and secure user experience for digital asset transactions.</p>
      </div>
        <img src="../assets/digital1.jpg" alt="Digital Nugget" class="default-animate">
      </section>


      <main class="main-content">

        <section class="sticky-text-gallery">
<div class="text-section">
          <h2>Creating a Seamless Virtual Gold Trading Platform</h2>
          <p>Digital Nugget required a robust and user-centric solution for virtual gold transactions. My contributions included:</p>
          <ul>
              <li>Developing a fully functional and secure CMS tailored for managing transactions and user accounts.</li>
              <li>Designing an intuitive interface to simplify the buying and selling process.</li>
              <li>Implementing advanced security features to ensure safe and reliable transactions.</li>
          </ul>
        </div>
          <div class="gallery" id="gallery1">
            <a href="../assets/digital2.jpg" target="_blank">
              <img src="../assets/digital2.jpg" alt="Interface for components selection">
            </a>
            <a href="../assets/digital3.jpg" target="_blank">
              <img src="../assets/digital3.jpg" alt="Interface for templates selection">
            </a>
            <a href="../assets/digital4.jpg" target="_blank">
              <img src="../assets/digital4.jpg" alt="Interface for reporting">
            </a>
          </div>
        </section>
        
      <a href="https://digitalnugget.io/" class="buttonet" target="_blank" rel="noopener noreferrer">Check Digital Nugget</a>

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
  