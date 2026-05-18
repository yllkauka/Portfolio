<!-- Home.vue -->
<template>
  <div class="home">

    <!-- Scrolling image ticker -->
    <div class="ticker-band" aria-hidden="true">
      <div class="ticker-track">
        <div class="ticker-item"><img src="../assets/1.jpg" alt="" /></div>
        <div class="ticker-item"><img src="../assets/2.jpg" alt="" /></div>
        <div class="ticker-item"><img src="../assets/3.jpg" alt="" /></div>
        <div class="ticker-item"><img src="../assets/4.jpg" alt="" /></div>
        <div class="ticker-item"><img src="../assets/5.jpg" alt="" /></div>
        <div class="ticker-item"><img src="../assets/6.jpg" alt="" /></div>
        <div class="ticker-item"><img src="../assets/7.jpg" alt="" /></div>
        <div class="ticker-item"><img src="../assets/8.jpg" alt="" /></div>
      </div>
      <div class="ticker-track" aria-hidden="true">
        <div class="ticker-item"><img src="../assets/1.jpg" alt="" /></div>
        <div class="ticker-item"><img src="../assets/2.jpg" alt="" /></div>
        <div class="ticker-item"><img src="../assets/3.jpg" alt="" /></div>
        <div class="ticker-item"><img src="../assets/4.jpg" alt="" /></div>
        <div class="ticker-item"><img src="../assets/5.jpg" alt="" /></div>
        <div class="ticker-item"><img src="../assets/6.jpg" alt="" /></div>
        <div class="ticker-item"><img src="../assets/7.jpg" alt="" /></div>
        <div class="ticker-item"><img src="../assets/8.jpg" alt="" /></div>
      </div>
    </div>

    <!-- Hero -->
    <section class="hero" ref="heroRef">
      <div class="hero-badge" ref="heroBadge">
        <span class="badge-dot"></span>
        <span>Available for work · 2025</span>
      </div>
      <h1 class="hero-title" ref="heroTitle">
        Turning ideas into<br>
        experiences people<br>
        love to use.
      </h1>
      <p class="hero-body" ref="heroBody">
        Product designer based in Kosova. Five years crafting intuitive
        interfaces for startups, studios, and growing brands.
      </p>
      <div class="hero-actions" ref="heroActions">
        <button class="btn-primary" @click="scrollToWork">View Work</button>
        <a href="mailto:yllkaukaa@gmail.com" class="btn-ghost">Get in Touch →</a>
      </div>
    </section>

    <!-- Selected Work -->
    <section class="work-section" id="work" ref="workRef">
      <div class="section-eyebrow">
        <span class="eyebrow-text">Selected Work</span>
      </div>
      <div class="projects-grid" ref="gridRef">
        <router-link
          v-for="(p, i) in projects"
          :key="p.path"
          :to="p.path"
          :class="['p-card', { 'p-card--featured': i === 0 }]"
        >
          <div class="p-card-img">
            <img :src="p.cover" :alt="p.title" loading="lazy" />
            <div class="p-card-veil">
              <span>View Project →</span>
            </div>
          </div>
          <footer class="p-card-foot">
            <span class="p-type">{{ p.type }}</span>
            <h3 class="p-title">{{ p.title }}</h3>
          </footer>
        </router-link>
      </div>
    </section>

    <ExperienceComponent />

  </div>
</template>

<script>
import ExperienceComponent from './Experience.vue';
import ScrollReveal from 'scrollreveal';

import swiftyCover  from '../assets/swifty_cover.png';
import yuCover      from '../assets/yu_cover.jpg';
import viviCover    from '../assets/vivi_cover.jpg';
import ylbCover     from '../assets/ylb_cover.jpg';
import aresCover    from '../assets/ares_cover.jpg';
import vmCover      from '../assets/vm_cover.jpg';
import pixelCover   from '../assets/pixel_cover.jpg';
import tiferaCover  from '../assets/tifera_cover.jpg';
import digitalCover from '../assets/digital_cover.jpg';

export default {
  components: { ExperienceComponent },

  data() {
    return {
      projects: [
        { path: '/swifty',  cover: swiftyCover,  title: 'Swifty Global',      type: 'UX/UI · Branding'        },
        { path: '/yu',      cover: yuCover,      title: 'YU Design Studio',   type: 'UX/UI · Logo · Branding' },
        { path: '/vivi',    cover: viviCover,    title: 'Vivi Arkitekture',   type: 'UX/UI · Logo Design'     },
        { path: '/ylb',     cover: ylbCover,     title: 'YLB Concept',        type: 'UX/UI · E-commerce'      },
        { path: '/ares',    cover: aresCover,    title: 'Ares Tech',          type: 'UX/UI · Logo Design'     },
        { path: '/vm',      cover: vmCover,      title: 'VM Premium Cars',    type: 'UX/UI · Logo Design'     },
        { path: '/pixel',   cover: pixelCover,   title: 'Pixel Snap',         type: 'UX/UI · Logo Design'     },
        { path: '/tifera',  cover: tiferaCover,  title: 'Tifera Solutions',   type: 'UX/UI · Logo Design'     },
        { path: '/digital', cover: digitalCover, title: 'Digital Nugget',     type: 'Product Design · Logo'   },
      ],
    };
  },

  mounted() {
    const sr = ScrollReveal();
    const base = { duration: 600, origin: 'bottom', distance: '32px', easing: 'ease-out', reset: false };

    sr.reveal(this.$refs.heroBadge,   { ...base, delay: 0   });
    sr.reveal(this.$refs.heroTitle,   { ...base, delay: 80  });
    sr.reveal(this.$refs.heroBody,    { ...base, delay: 160 });
    sr.reveal(this.$refs.heroActions, { ...base, delay: 220 });

    this.$refs.gridRef.querySelectorAll('.p-card').forEach((el, i) => {
      sr.reveal(el, { ...base, scale: 0.97, delay: i * 60 });
    });
  },

  methods: {
    scrollToWork() {
      this.$refs.workRef.scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>

/* ── Root ── */
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 140px;
  padding: 0 40px;
}

/* ── Ticker ── */
.ticker-band {
  width: 100%;
  display: flex;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
  mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
}

.ticker-track {
  display: flex;
  flex-shrink: 0;
  animation: ticker-scroll 80s linear infinite;
}

.ticker-item {
  width: 500px;
  flex-shrink: 0;
  margin-right: 16px;
  opacity: 0.1;
  border-radius: 6px;
  overflow: hidden;
}

.ticker-item img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

@keyframes ticker-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-100%); }
}

/* ── Hero ── */
.hero {
  width: 100%;
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  position: relative;
  padding-top: 40px;
}

.hero::before {
  content: '';
  position: absolute;
  top: -120px;
  right: 0;
  width: 640px;
  height: 480px;
  background: radial-gradient(ellipse at center, rgba(149, 254, 58, 0.05) 0%, transparent 65%);
  pointer-events: none;
  z-index: 0;
}

.hero > * {
  position: relative;
  z-index: 1;
}

/* Availability badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px 6px 10px;
  border: 1px solid rgba(149, 254, 58, 0.22);
  border-radius: 100px;
  background: rgba(149, 254, 58, 0.06);
  width: fit-content;
}

.hero-badge span {
  font-size: 0.82rem;
  font-weight: 500;
  color: rgba(149, 254, 58, 0.85);
  letter-spacing: 0.01em;
}

.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #95fe3a;
  flex-shrink: 0;
  animation: pulse-dot 2.5s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(149, 254, 58, 0.55);
  }
  50% {
    opacity: 0.75;
    box-shadow: 0 0 0 5px rgba(149, 254, 58, 0);
  }
}

/* Headline */
.hero-title {
  font-family: "Syne", sans-serif;
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.035em;
  color: #efefef;
  max-width: 820px;
}

/* Description */
.hero-body {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #888;
  max-width: 480px;
}

/* CTAs */
.hero-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  padding-top: 4px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 12px 24px;
  background: #95fe3a;
  color: #080808;
  font-family: "DM Sans", sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  letter-spacing: -0.01em;
  transition: background 0.2s ease, transform 0.2s ease;
}

.btn-primary:hover {
  background: #b8ff5e;
  transform: translateY(-1px);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 12px 24px;
  background: transparent;
  color: #888;
  font-family: "DM Sans", sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.btn-ghost:hover {
  color: #efefef;
  border-color: rgba(255, 255, 255, 0.22);
}

/* ── Work section ── */
.work-section {
  width: 100%;
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.section-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
}

.eyebrow-text {
  font-family: "DM Mono", monospace;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #444;
}

/* ── Project grid ── */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
}

/* ── Project card ── */
.p-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-decoration: none;
  cursor: pointer;
}

.p-card--featured {
  grid-column: 1 / -1;
}

.p-card-img {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background: #111;
}

.p-card:not(.p-card--featured) .p-card-img {
  aspect-ratio: 4 / 3;
}

.p-card--featured .p-card-img {
  aspect-ratio: 21 / 8;
}

.p-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.p-card:hover .p-card-img img {
  transform: scale(1.04);
}

/* Hover overlay */
.p-card-veil {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.35s ease;
}

.p-card:hover .p-card-veil {
  background: rgba(0, 0, 0, 0.38);
}

.p-card-veil span {
  color: #fff;
  font-size: 0.88rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s;
}

.p-card:hover .p-card-veil span {
  opacity: 1;
  transform: translateY(0);
}

/* Card footer */
.p-card-foot {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 2px;
}

.p-type {
  font-family: "DM Mono", monospace;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #444;
}

.p-title {
  font-family: "Syne", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #efefef;
  letter-spacing: -0.01em;
  transition: color 0.2s ease;
}

.p-card:hover .p-title {
  color: #95fe3a;
}

/* ── Responsive ── */
@media (max-width: 767px) {
  .home {
    gap: 100px;
    padding: 0 24px;
  }
  .hero {
    padding-top: 24px;
    gap: 22px;
  }
  .p-card--featured .p-card-img {
    aspect-ratio: 16 / 9;
  }
}

@media (max-width: 480px) {
  .home {
    gap: 80px;
    padding: 0 16px;
  }
  .ticker-band {
    display: none;
  }
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .p-card--featured .p-card-img {
    aspect-ratio: 4 / 3;
  }
  .p-card:not(.p-card--featured) .p-card-img {
    aspect-ratio: 4 / 3;
  }
}
</style>
