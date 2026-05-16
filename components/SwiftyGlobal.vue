<!-- SwiftyGlobal.vue -->
<template>
    <div class="project">
      <section class="hero" ref="heroSection">
        <div class="title">
          <h1 class="default-animate">Swifty Global</h1>
          <p class="default-animate">Swifty Global is a fintech platform where I serve as Head of Design. I led the end-to-end UX/UI design and contributed to the brand identity, crafting an experience that makes financial services intuitive and accessible.</p>
        </div>
        <img src="../assets/swifty_cover.png" alt="Swifty Global" class="default-animate">
      </section>

      <main class="main-content">

        <section class="sticky-text-gallery">
          <div class="text-section">
            <h2>Designing a Fintech Experience</h2>
            <p>As Head of Design at Swifty Global, I was responsible for shaping the product's visual and interaction design. Key contributions included:</p>
            <ul>
                <li>Leading the UX strategy to simplify complex financial workflows for end users.</li>
                <li>Designing a scalable UI system that supports rapid product iteration.</li>
                <li>Developing a brand identity that conveys reliability, speed, and modernity.</li>
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
