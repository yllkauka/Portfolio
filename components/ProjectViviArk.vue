<!-- Project JSU.vue -->
<template>
    <div class="project">
      <section class="hero" ref="heroSection">
        <div class="title">
          <h1 class="default-animate">JSU Automation Suite for Jira Workflows</h1>
          <p class="default-animate">A popular plugin available in the Atlassian Marketplace. It is designed to enhance the workflow automation capabilities within Jira, allowing users to create and manage advanced automation rules to streamline their processes.</p>
        </div>
        <img src="../assets/hero-jsu.jpg" alt="JSU plugin for Jira interface" class="default-animate">
      </section>

      <section class="meta">
        <div class="meta-group">
          <h3>Role</h3>
          <ul class="meta-items">
            <li>Interface design</li>
            <li>Interactive prototypes</li>
            <li>User flow</li>
          </ul>
        </div>
        <div class="meta-group">
          <h3>Platform</h3>
          <ul class="meta-items">
            <li>Plugin in Atlassian ecosystem</li>
          </ul>
        </div>
        <div class="meta-group">
          <h3>Duration</h3>
          <ul class="meta-items">
            <li>2021 - 2022 [Freelance]</li>
          </ul>
        </div>
      </section>

      <main class="main-content">

        <section class="sticky-text-gallery">
          <div class="text-section">
            <h2>Redesigning a best seller</h2>
            <p>JSU is one of the best-selling plugins in the Atlassian Marketplace. My task was to improve the tedious configuration process to an intuitive one.</p>
            <p>My approach was to break down the different possibilities to create a workflow into:</p>
            <ul>
                <li>Selection of “Components” or “Templates” (a new feature).</li>
                <li>Preview of the ‘WHEN–IF-THEN’ configuration.</li>
            </ul>
            <p>Simultaneously, the configuration would be much more visual and utilize drag & drop elements.</p>
          </div>
          <div class="gallery" id="gallery1">
            <a href="../assets/p_jsu/jsu-components.jpg" target="_blank">
              <img src="../assets/p_jsu/jsu-components.jpg" alt="Interface for components selection">
            </a>
            <a href="../assets/p_jsu/jsu-templates.jpg" target="_blank">
              <img src="../assets/p_jsu/jsu-templates.jpg" alt="Interface for templates selection">
            </a>
            <a href="../assets/p_jsu/jsu-options.jpg" target="_blank">
              <img src="../assets/p_jsu/jsu-options.jpg" alt="Interface for parameters customization">
            </a>
            <a href="../assets/p_jsu/jsu-validation.jpg" target="_blank">
              <img src="../assets/p_jsu/jsu-validation.jpg" alt="Interface for validation of the applied rules">
            </a>
            <a href="../assets/p_jsu/jsu-reporting.jpg" target="_blank">
              <img src="../assets/p_jsu/jsu-reporting.jpg" alt="Interface for reporting">
            </a>
            <a href="../assets/p_jsu/jsu-settings.jpg" target="_blank">
              <img src="../assets/p_jsu/jsu-settings.jpg" alt="Interface for settings">
            </a>
          </div>
        </section>
        
        <section class="documentation">
          <div class="documentation-text">
            <h2>Validating the redesign</h2>
            <div>
                <p class="version-title">Version 1</p>
                <p>An initial user study, moderated by the project PM, discovered that 75% of users failed to complete the configuration process. The hypothesis was that making configuration easier and more intuitive would increase success.</p>
            </div>
            <div>
                <p class="version-title">Version 2</p>
                <p>A new user study, using a Figma interactive prototype with a redesigned version of the plugin, revealed that 100% of users completed the given task successfully and finished the configuration process. Additionally, 80% of users opted for “Templates” over “components”. Users provided insightful feedback, prompting us to tweak the prototype and make minor improvements.</p>
            </div>
            <p>A third user study was conducted to showcase the updates, and users were assigned the same tasks. The results once again demonstrated 100% success in task completion for all users.</p>

          </div>
          <div class="before-and-after">
            <figure>
              <figcaption>JSU version 1 - before redesign</figcaption>
              <img src="../assets/p_jsu/jsu-before.jpg" alt="Interface before redesign">
            </figure>
            <figure>
              <figcaption>JSU version 2 - after redesign</figcaption>
              <img src="../assets/p_jsu/jsu-after.jpg" alt="Interface after redesign">
            </figure>
          </div>
        </section>

        <a href="https://marketplace.atlassian.com/apps/5048/jsu-automation-suite-for-jira-workflows" class="buttonet" target="_blank" rel="noopener noreferrer">Discover JSU in Atlassian</a>

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
  