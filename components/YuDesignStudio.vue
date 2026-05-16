<!-- YuDesignStudio.vue -->
<template>
    <div class="project">
      <section class="hero" ref="heroSection">
        <div class="title">
          <h1 class="default-animate">AXON Studio</h1>
          <p class="default-animate">AXON Studio is my own design studio where I offer UX/UI, logo design, and branding services. The brand identity was crafted to reflect a clean, modern, and professional aesthetic that communicates creativity and trust.</p>
        </div>
        <img src="../assets/yu_cover.jpg" alt="AXON Studio" class="default-animate">
      </section>

      <main class="main-content">

        <section class="sticky-text-gallery">
          <div class="text-section">
            <h2>Building a Design Studio Identity</h2>
            <p>YU Design Studio required a cohesive brand identity that speaks to both startups and established businesses. My work included:</p>
            <ul>
                <li>Designing a memorable logo that balances simplicity with personality.</li>
                <li>Defining a visual language — typography, color palette, and iconography — for consistent branding.</li>
                <li>Creating UX/UI guidelines to ensure a unified experience across all touchpoints.</li>
            </ul>
          </div>
          <div class="gallery" id="gallery1">
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
    mixins: [photoSwipeMixin],

    mounted() {
      const elements = this.$refs.heroSection.querySelectorAll('.default-animate');
      elements.forEach((el, index) => {
        ScrollReveal().reveal(el, {
          ...revealDefault,
          delay: index * 100,
        });
      });
    },
  };
</script>

<style scoped>
</style>
