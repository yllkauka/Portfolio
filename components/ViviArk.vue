<!-- ViviArk.vue -->
<template>
    <div class="project">
      <section class="hero" ref="heroSection">
        <div class="title">
          <h1 class="default-animate">Vivi Arkitekture</h1>
          <p class="default-animate">Viviark is an architecture website designed from the ground up to enhance the browsing and project exploration experience. My task was to simplify the navigation process, making it more intuitive for users to discover and interact with architectural designs.</p>
        </div>
        <img src="../assets/gallery-vivi.jpg" alt="Vivi Arkitekture" class="default-animate">
      </section>


      <main class="main-content">

        <section class="sticky-text-gallery">
          <div class="text-section">
            <h2>Creating an Intuitive Architecture Platform</h2>
            <p>Viviark is an architecture website designed from the ground up to enhance the browsing and project exploration experience. My task was to simplify the navigation process, making it more intuitive for users to discover and interact with architectural designs.</p>
            <p>My approach focused on:</p>
            <ul>
                <li>Streamlining the browsing experience with a clean, user-friendly layout.</li>
                <li>Introducing dynamic filtering to allow users to easily find projects by category or style.</li>
                <li>Ensuring the design was highly visual, making each project feel immersive and engaging.</li>
            </ul>
          </div>
          <div class="gallery" id="gallery1">
            <a href="../assets/vivi1.jpg" target="_blank">
              <img src="../assets/vivi1.jpg" alt="Interface for components selection">
            </a>
            <a href="../assets/vivi2.jpg" target="_blank">
              <img src="../assets/vivi2.jpg" alt="Interface for templates selection">
            </a>
            <a href="../assets/vivi3.jpg" target="_blank">
              <img src="../assets/vivi3.jpg" alt="Interface for reporting">
            </a>
            <a href="../assets/vivi4.jpg" target="_blank">
              <img src="../assets/vivi4.jpg" alt="Interface for reporting">
            </a>
            <a href="../assets/vivi5.png" target="_blank">
              <img src="../assets/vivi5.png" alt="Interface for reporting">
            </a>
          </div>
        </section>
        
        <a href="https://www.viviark.com/" class="buttonet" target="_blank" rel="noopener noreferrer">Check VIVI ARK</a>

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
  