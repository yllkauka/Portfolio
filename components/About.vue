<!-- About.vue -->
<template>
  <section class="about" ref="aboutSection">
    <h2 class="default-animate"><span class="highlight">Përshendetje! Hello! Halo!</span> I’m Yllka, a product designer in Kosova</h2>
<div class="default-animate">
  <p>My journey into the design world began with the simplicity of Paint on Windows. I was fascinated by the idea that I could create entire websites with just this tool. Little did I know, this was only the beginning of a much bigger journey.</p>
  <p>As I started my career, I first worked with Adobe XD, then expanded my skills with tools like Figma and Illustrator. These tools became the foundation of my career as a Product Designer and UX/UI Designer, where I’ve been crafting user-centered experiences that combine functionality and aesthetics.</p>
  <p>Over the years, I’ve worked on exciting projects that have honed my skills and challenged my creativity. From collaborating with teams to solving complex design problems, every step has been a learning experience that shaped me into the designer I am today.</p>
  <p>Beyond my work, I’m a strong believer in continuous learning and personal growth. I find inspiration in everyday life and enjoy connecting with others who share a passion for design and innovation. Whether it’s exploring new trends or diving into creative challenges, I strive to make a meaningful impact through my work.</p>
  <p>In my free time, you’ll often find me exploring nature, spending time with family, or pursuing personal projects that spark my creativity. My journey as a designer is ever-evolving, and I’m excited to see where it takes me next.</p>
  <p>Feel free to connect with me on <a href="https://www.linkedin.com/in/yllkauka/">Linkedin</a> to learn more or collaborate on exciting projects.</p>
</div>

<div class="gallery default-animate">
      <img src="../assets/1.jpg" alt="" />
      <img src="../assets/2.jpg" alt="" />
      <img src="../assets/3.jpg" alt="" />
      <img src="../assets/4.jpg" alt="" />
      <img src="../assets/5.jpg" alt="" />
      <img src="../assets/6.jpg" alt="" />
    </div>
  </section>
  <div class="cv-section">
    <a href="/Portfolio/cv.pdf" download class="buttonet">
      Download CV
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2v8M4 7l4 4 4-4M3 13h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
  </div>

  <ExperienceComponent></ExperienceComponent>

</template>

<script>
import ExperienceComponent from './Experience.vue';
import ScrollReveal from 'scrollreveal';
import { revealDefault } from '@/scrollAnimations';

export default {
  components: {
    ExperienceComponent
  },
    
  mounted() {
    // Apply Default ScrollReveal 
    const elements = this.$refs.aboutSection.querySelectorAll('.default-animate');
      elements.forEach((el, index) => {
        ScrollReveal().reveal(el, {
          ...revealDefault, // Spread the reveal properties
          delay: index * 100, // Add a delay based on each element
        });
      });
  },
};
</script>

<style scoped>
.about {
  width: 100%;
  max-width: 740px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
}
.about p {
  margin-top: 28px;
}
.gallery {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* Space between images */
  justify-content: center; /* Center the gallery content */
  margin-top: 80px;
}

.gallery img {
  flex: 1 1 calc(33.333% - 20px); /* 3 columns layout */
  max-width: calc(33.333% - 20px);
  height: auto;
  object-fit: cover;
  display: block;
  margin: 0;
}

@media (max-width: 768px) {
  .about {
    padding: 0 24px;
  }
  .gallery img {
    flex: 1 1 calc(50% - 20px);
    max-width: calc(50% - 20px);
  }
}

.cv-section {
  width: 100%;
  max-width: 740px;
  padding: 0 40px;
}

@media (max-width: 768px) {
  .cv-section { padding: 0 24px; }
}

@media (max-width: 480px) {
  .about {
    padding: 0 16px;
  }
  .cv-section { padding: 0 16px; }
  .gallery img {
    flex: 1 1 calc(100% - 20px);
    max-width: calc(100% - 20px);
  }
}


</style>