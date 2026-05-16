<!-- YlbConcept.vue -->
<template>
  <div class="project">
    <section class="hero" ref="heroSection">
      <div class="title">
        <h1 class="default-animate">YLB Concept</h1>
        <p class="default-animate">YLB Concept is a boutique in Switzerland specializing in sneakers and shirts. My role involved crafting a cohesive brand identity through designing their logo and creating an engaging website that reflects their unique style and values.</p>
      </div>
      <img src="../assets/gallery-ylb.png" alt="YLB Concept Boutique" class="default-animate">
    </section>

    <main class="main-content">

      <section class="sticky-text-gallery">
        <div class="text-section">
          <h2>Designing a Boutique Brand Experience</h2>
          <p>YLB Concept is a Switzerland-based boutique specializing in sneakers and shirts. I developed a cohesive brand identity and digital experience that reflects its premium and modern aesthetic.</p>
            <p>My work focused on:</p>
          <ul>
              <li>Crafting a minimalist, distinctive logo aligned with the brand’s identity.</li>
              <li>Designing an intuitive website that showcases their products with visual appeal.</li>
              <li>Building intuitive navigation to enhance the shopping experience.</li>
          </ul>
          </div>
          <div class="gallery" id="gallery1">
            <a href="../assets/ylb2.png" target="_blank">
              <img src="../assets/ylb2.png" alt="Interface for components selection">
            </a>
            <a href="../assets/ylb3.png" target="_blank">
              <img src="../assets/ylb3.png" alt="Interface for templates selection">
            </a>
            <a href="../assets/ylb4.png" target="_blank">
              <img src="../assets/ylb4.png" alt="Interface for parameters customization">
            </a>
            <a href="../assets/ylb5.png" target="_blank">
              <img src="../assets/ylb5.png" alt="Interface for reporting">
            </a>
          </div>
        </section>
        
        <a href="https://ylbconcept.ch/" class="buttonet" target="_blank" rel="noopener noreferrer">Check Ylb Concept</a>

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
  