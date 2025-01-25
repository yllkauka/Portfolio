<!-- PixelSnap.vue -->
<template>
    <div class="project">
      <section class="hero" ref="heroSection">
        <div class="title">
          <h1 class="default-animate">Pixel Snap</h1>
          <p class="default-animate">Pixel Snap is an AI-powered platform that generates stunning images with ease. I contributed to this innovative project by designing a unique and modern logo and creating a user-friendly website that showcases the platform's capabilities.</p>
      </div>
        <img src="../assets/pixelsnap.jpg" alt="Pixel Snap" class="default-animate">
      </section>


      <main class="main-content">

        <section class="sticky-text-gallery">
          <div class="text-section">
          <h2>Designing for an AI Image Creation Platform</h2>
          <p>Pixel Snap leverages artificial intelligence to bring creative visions to life. My work focused on creating a digital identity that complements its cutting-edge technology:</p>
          <ul>
              <li>Designing a clean and innovative logo that reflects the platform's AI-driven creativity.</li>
              <li>Developing a visually engaging website to showcase the image creation features.</li>
              <li>Ensuring a seamless and intuitive user experience for both casual users and professionals.</li>
          </ul>
        </div>
          <div class="gallery" id="gallery1">
            <a href="../assets/pixel1.png" target="_blank">
              <img src="../assets/pixel1.png" alt="Interface for components selection">
            </a>
            <a href="../assets/pixel2.png" target="_blank">
              <img src="../assets/pixel2.png" alt="Interface for templates selection">
            </a>
            <a href="../assets/pixel3.png" target="_blank">
              <img src="../assets/pixel3.png" alt="Interface for parameters customization">
            </a>
          </div>
        </section>
        
        <a href="https://pixelsnap.io/" class="buttonet" target="_blank" rel="noopener noreferrer">Check Pixel Snap</a>

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
  