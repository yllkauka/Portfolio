<!-- VmCars.vue -->
<template>
    <div class="project">
      <section class="hero" ref="heroSection">
        <div class="title">
          <h1 class="default-animate">VM Premium Cars</h1>
          <p class="default-animate">VM Premium Cars is a Switzerland-based car store offering a wide range of premium vehicles. My role involved designing a sleek and modern website and crafting a distinctive logo to showcase the store's commitment to quality and luxury.</p>
        </div>
        <img src="../assets/vm_cars.jpg" alt="VM Premium Cars" class="default-animate">
      </section>


      <main class="main-content">

        <section class="sticky-text-gallery">
          <div class="text-section">
          <h2>Creating a Luxury Digital Experience</h2>
          <p>VM Premium Cars is a Switzerland-based dealership offering high-end vehicles. The objective was to translate their premium positioning into a refined digital experience.</p>
          <p>My work focused on:</p>
          <ul>
              <li>Designing an elegant logo that conveys luxury and sophistication.</li>
              <li>Building a visually rich website to highlight the vehicle collection.</li>
              <li>Structuring a smooth navigation flow for effortless browsing.</li>
          </ul>
          </div>
          <div class="gallery" id="gallery1">
            <a href="../assets/vm1.png" target="_blank">
              <img src="../assets/vm1.png" alt="Interface for components selection">
            </a>
            <a href="../assets/vm2.png" target="_blank">
              <img src="../assets/vm2.png" alt="Interface for templates selection">
            </a>
            <a href="../assets/vm3.png" target="_blank">
              <img src="../assets/vm3.png" alt="Interface for reporting">
            </a>
          </div>
        </section>
        
        <a href="https://vmcars.ch/" class="buttonet" target="_blank" rel="noopener noreferrer">Check VM Premium Cars</a>

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
  