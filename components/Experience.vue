<!-- Experience.vue -->
<template>
  <section class="experience" ref="expRef">

    <div class="exp-eyebrow">
      <span class="eyebrow-text">Experience</span>
    </div>

    <ul class="exp-list">
      <li class="exp-item">
        <div class="exp-main">
          <span class="exp-company">Swifty Global</span>
          <span class="exp-role">Head of Design</span>
        </div>
        <span class="exp-period">Apr 2022 — Present</span>
      </li>
      <li class="exp-item">
        <div class="exp-main">
          <span class="exp-company">AXON Studio</span>
          <span class="exp-role">CEO & Founder</span>
        </div>
        <span class="exp-period">Oct 2021 — Present</span>
      </li>
      <li class="exp-item">
        <div class="exp-main">
          <span class="exp-company">Nacew</span>
          <span class="exp-role">UI/UX Designer · Internship</span>
        </div>
        <span class="exp-period">Jan — Apr 2022</span>
      </li>
      <li class="exp-item">
        <div class="exp-main">
          <span class="exp-company">Upwork</span>
          <span class="exp-role">Graphic & UX/UI Designer</span>
        </div>
        <span class="exp-period">Jul 2021 — Present</span>
      </li>
    </ul>

    <a
      href="https://www.linkedin.com/in/yllkauka/"
      class="buttonet"
      target="_blank"
      rel="noopener noreferrer"
    >
      View LinkedIn
    </a>

  </section>
</template>

<script>
import ScrollReveal from 'scrollreveal';
import { revealDefault } from '@/scrollAnimations';

export default {
  name: 'ExperienceComponent',

  mounted() {
    const sr = ScrollReveal();

    sr.reveal(this.$refs.expRef.querySelector('.exp-eyebrow'), {
      ...revealDefault, delay: 0,
    });

    this.$refs.expRef.querySelectorAll('.exp-item').forEach((el, i) => {
      sr.reveal(el, { ...revealDefault, delay: i * 80 });
    });

    sr.reveal(this.$refs.expRef.querySelector('.buttonet'), {
      ...revealDefault, delay: 360,
    });
  },
};
</script>

<style scoped>
.experience {
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  padding: 0 40px;
}

/* Eyebrow */
.exp-eyebrow {
  display: flex;
  align-items: center;
}

.eyebrow-text {
  font-family: "DM Mono", monospace;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #444;
}

/* List */
.exp-list {
  list-style: none;
  padding: 0;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.exp-item {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 24px;
  padding: 20px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  transition: padding-left 0.2s ease;
}

.exp-item:hover {
  padding-left: 8px;
}

.exp-main {
  display: flex;
  align-items: baseline;
  gap: 16px;
  flex-wrap: wrap;
}

.exp-company {
  font-family: "Syne", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #efefef;
  letter-spacing: -0.01em;
}

.exp-role {
  font-size: 0.9rem;
  color: #888;
}

.exp-period {
  font-family: "DM Mono", monospace;
  font-size: 0.78rem;
  color: #444;
  white-space: nowrap;
  flex-shrink: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .experience {
    max-width: 100%;
  }
}

@media (max-width: 767px) {
  .experience {
    padding: 0 24px;
  }
}

@media (max-width: 480px) {
  .experience {
    padding: 0 16px;
    gap: 28px;
  }
  .exp-item {
    flex-direction: column;
    gap: 4px;
  }
  .exp-period {
    color: #555;
  }
}
</style>
