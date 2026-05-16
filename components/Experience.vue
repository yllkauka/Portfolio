<!-- Experience.vue -->
<template>
    <section class="experience" ref="experienceSection">
      <h2>Experience</h2>
      <div class="experience-list">
        <li>
          <div class="experience-item">
            <h3>Swifty Global</h3>
            <div class="dashed-line"></div>
            <div class="position">Head of Design</div>
          </div>
          <div class="date"> Apr 2022 — Now </div>
        </li>
        <li>
          <div class="experience-item">
            <h3>YU DESIGN STUDIO</h3>
            <div class="dashed-line"></div>
            <div class="position">CEO </div>
          </div>
          <div class="date"> Oct 2021 — Now</div>
        </li>
        <li>
                    <div class="experience-item">
            <h3>Nacew</h3>
            <div class="dashed-line"></div>
            <div class="position">UI/UX Designer Internship</div>
          </div>
          <div class="date"> Jan — Apr 2022 </div>
        </li>
        <li>
          <div class="experience-item">
            <h3>Upwork</h3>
            <div class="dashed-line"></div>
            <div class="position"> Graphic Designer | UX/UI Designer </div>
          </div>
          <div class="date">Jul 2021 — Now</div>
        </li>
      </div>
      <a href="https://www.linkedin.com/in/yllkauka/" class="buttonet" target="_blank" rel="noopener noreferrer">Visit my LinkedIn</a>
    </section>
</template>

  
  <script>
  import ScrollReveal from 'scrollreveal';
  import { revealLong } from '@/scrollAnimations';

  export default {
    name: 'ExperienceComponent',

    mounted() {
      // Apply ScrollReveal
      ScrollReveal().reveal(this.$refs.experienceSection, revealLong);
    },
  };
  </script>
  
<style scoped>
.experience {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
}

.experience-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.experience li {
  display: flex;
  width: 100%;
}

.experience-item {
  display: flex;
  align-items: center;
  width: 85%;
}

.experience-item h3 {
  width: fit-content;
  margin-right: 10px;
}

.dashed-line {
  flex-grow: 1;
  border-bottom: 1px dashed var(--secondary-color);
  margin: 0 10px; 
}

.position {
  color: var(--secondary-color);
  margin-left: 10px;
}

.date {
  font-family: "DM Mono", monospace;
  color: var(--tertiary-color);
  margin-left: 20px;
  width: 20%;
}
@media (max-width: 1024px) {
  .experience {
    width: 70%;
  }
}

@media (max-width: 767px) {
  .experience {
    width: 95%;
  }
}

@media (max-width: 480px) {
  .experience {
    width: 100%;
  }
  .dashed-line{
    display: none;
  }
}

</style>