<!-- Home.vue -->
<template>
  <div class="home">

    <!-- ── Hero ── -->
    <section class="hero">
      <canvas class="hero-canvas" ref="heroCanvas"></canvas>
      <div class="hero-blob hero-blob--1"></div>
      <div class="hero-blob hero-blob--2"></div>

      <div class="hero-inner">
        <!-- Left: copy -->
        <div class="hero-left">
          <div class="hero-badge" ref="heroBadge">
            <span class="badge-dot"></span>
            <span>Available for freelance · 2026</span>
          </div>

          <h1 class="hero-title" ref="heroTitle">
            Designing products<br>people love to use.
          </h1>

          <div class="hero-rule" aria-hidden="true"></div>

          <p class="hero-body" ref="heroBody">
            Based in Kosovo. Five years of crafting intuitive interfaces
            for startups, studios, and ambitious brands.
          </p>

          <div class="hero-actions" ref="heroActions">
            <button class="btn-primary" @click="scrollToWork">View Projects</button>
            <a href="mailto:yllkaukaa@gmail.com" class="btn-ghost">Let's Talk →</a>
          </div>
        </div>

        <!-- Right: visual -->
        <div class="hero-right" ref="heroRight">
          <div class="orb-scene">
            <div class="ring ring--3"></div>
            <div class="ring ring--2"></div>
            <div class="ring ring--1"></div>
            <div class="orb-core"></div>
            <div class="stat-card stat--a">
              <span class="s-num">5+</span>
              <span class="s-lbl">Years</span>
            </div>
            <div class="stat-card stat--b">
              <span class="s-num">9+</span>
              <span class="s-lbl">Projects</span>
            </div>
            <div class="stat-card stat--c">
              <span class="s-num">20+</span>
              <span class="s-lbl">Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Work ── -->
    <section class="work-section" id="work" ref="workRef">
      <div class="filter-bar">
        <button
          v-for="chip in chips"
          :key="chip.value"
          class="chip"
          :class="{ 'chip--active': activeFilter === chip.value }"
          @click="activeFilter = chip.value"
        >{{ chip.label }}</button>
      </div>

      <div class="projects-grid">
        <router-link
          v-for="p in filteredProjects"
          :key="p.path + activeFilter"
          :to="p.path"
          class="p-card"
        >
          <div class="p-card-img">
            <img :src="p.cover" :alt="p.title" loading="lazy" />
            <div class="p-card-veil"><span>View Project →</span></div>
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
      activeFilter: 'all',
      chips: [
        { label: 'All',      value: 'all'      },
        { label: 'UX/UI',   value: 'UX/UI'    },
        { label: 'Branding', value: 'Branding' },
        { label: 'Logo',    value: 'Logo'      },
      ],
      projects: [
        { path: '/swifty',  cover: swiftyCover,  title: 'Swifty Global',    type: 'UX/UI · Branding',       tags: ['UX/UI', 'Branding']         },
        { path: '/yu',      cover: yuCover,      title: 'YU Design Studio', type: 'UX/UI · Logo · Branding', tags: ['UX/UI', 'Branding', 'Logo'] },
        { path: '/vivi',    cover: viviCover,    title: 'Vivi Arkitekture', type: 'UX/UI · Logo Design',     tags: ['UX/UI', 'Logo']             },
        { path: '/ylb',     cover: ylbCover,     title: 'YLB Concept',      type: 'UX/UI · E-commerce',      tags: ['UX/UI']                     },
        { path: '/ares',    cover: aresCover,    title: 'Ares Tech',        type: 'UX/UI · Logo Design',     tags: ['UX/UI', 'Logo']             },
        { path: '/vm',      cover: vmCover,      title: 'VM Premium Cars',  type: 'UX/UI · Logo Design',     tags: ['UX/UI', 'Logo']             },
        { path: '/pixel',   cover: pixelCover,   title: 'Pixel Snap',       type: 'UX/UI · Logo Design',     tags: ['UX/UI', 'Logo']             },
        { path: '/tifera',  cover: tiferaCover,  title: 'Tifera Solutions', type: 'UX/UI · Logo Design',     tags: ['UX/UI', 'Logo']             },
        { path: '/digital', cover: digitalCover, title: 'Digital Nugget',   type: 'Product Design · Logo',   tags: ['Logo']                      },
      ],
    };
  },

  computed: {
    filteredProjects() {
      if (this.activeFilter === 'all') return this.projects;
      return this.projects.filter(p => p.tags.includes(this.activeFilter));
    },
  },

  mounted() {
    this.initCanvas();

    const sr = ScrollReveal();
    const base = { duration: 600, origin: 'bottom', distance: '28px', easing: 'ease-out', reset: false };

    sr.reveal(this.$refs.heroBadge,   { ...base, delay: 0   });
    sr.reveal(this.$refs.heroTitle,   { ...base, delay: 80  });
    sr.reveal(this.$refs.heroBody,    { ...base, delay: 160 });
    sr.reveal(this.$refs.heroActions, { ...base, delay: 240 });
    sr.reveal(this.$refs.heroRight,   { ...base, origin: 'right', distance: '48px', delay: 120 });
  },

  beforeUnmount() {
    if (this._rafId) cancelAnimationFrame(this._rafId);
    if (this._resizeHandler) window.removeEventListener('resize', this._resizeHandler);
    ScrollReveal().destroy();
  },

  methods: {
    scrollToWork() {
      this.$refs.workRef.scrollIntoView({ behavior: 'smooth' });
    },

    initCanvas() {
      const canvas = this.$refs.heroCanvas;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');

      const resize = () => {
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      };
      resize();
      this._resizeHandler = resize;
      window.addEventListener('resize', this._resizeHandler);

      const stars = Array.from({ length: 120 }, () => ({
        x:     Math.random(),
        y:     Math.random(),
        r:     Math.random() * 1.1 + 0.15,
        phase: Math.random() * Math.PI * 2,
        spd:   Math.random() * 0.007 + 0.002,
      }));

      const tick = () => {
        const { width: w, height: h } = canvas;
        ctx.clearRect(0, 0, w, h);
        stars.forEach(s => {
          s.phase += s.spd;
          const a = Math.sin(s.phase) * 0.28 + 0.38;
          ctx.beginPath();
          ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${a.toFixed(3)})`;
          ctx.fill();
        });
        this._rafId = requestAnimationFrame(tick);
      };
      tick();
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
  /* pull home up to cancel the #app gap between header and content */
  margin-top: -120px;
}

/* ── Hero: full-width breakout from .home padding ── */
.hero {
  width: calc(100% + 80px);
  margin-left: -40px;
  margin-right: -40px;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}

/* Background canvas */
.hero-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

/* Glow blobs */
.hero-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
}

.hero-blob--1 {
  width: 700px;
  height: 550px;
  background: radial-gradient(ellipse, rgba(149, 254, 58, 0.06) 0%, transparent 70%);
  top: -80px;
  right: -60px;
  animation: blob-drift 14s ease-in-out infinite alternate;
}

.hero-blob--2 {
  width: 500px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(149, 254, 58, 0.04) 0%, transparent 70%);
  bottom: 0;
  left: 5%;
  animation: blob-drift 18s ease-in-out infinite alternate-reverse;
}

@keyframes blob-drift {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(24px, -18px) scale(1.06); }
}

/* Hero inner: constrained content */
.hero-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 40px 80px;
  display: flex;
  align-items: center;
  gap: 80px;
}

/* ── Left content ── */
.hero-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 560px;
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
  font-size: 0.78rem;
  font-weight: 500;
  color: rgba(149, 254, 58, 0.75);
  letter-spacing: 0.02em;
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #95fe3a;
  flex-shrink: 0;
  animation: pulse-dot 2.5s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(149, 254, 58, 0.55); }
  50%       { opacity: 0.75; box-shadow: 0 0 0 5px rgba(149, 254, 58, 0); }
}

/* Headline */
.hero-title {
  font-family: "Syne", sans-serif;
  font-size: clamp(2rem, 3.2vw, 3.4rem);
  font-weight: 600;
  line-height: 1.12;
  letter-spacing: -0.025em;
  color: #f0f0f0;
}

/* Editorial divider rule */
.hero-rule {
  width: 48px;
  height: 1px;
  background: rgba(255, 255, 255, 0.14);
  margin: -12px 0;
}

/* Body */
.hero-body {
  font-size: 1rem;
  line-height: 1.88;
  color: #767676;
  max-width: 380px;
}

/* CTAs */
.hero-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  padding: 11px 22px;
  background: #95fe3a;
  color: #080808;
  font-family: "DM Sans", sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  letter-spacing: -0.01em;
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-primary:hover {
  background: #b8ff5e;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(149, 254, 58, 0.18);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  padding: 11px 22px;
  background: transparent;
  color: #666;
  font-family: "DM Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 7px;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.btn-ghost:hover {
  color: #efefef;
  border-color: rgba(255, 255, 255, 0.22);
}

/* ── Right: orb visual ── */
.hero-right {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.orb-scene {
  position: relative;
  width: 380px;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Concentric rings */
.ring {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  border: 1px solid rgba(149, 254, 58, 0.1);
  transform: translate(-50%, -50%) rotate(0deg);
  animation: ring-spin linear infinite;
}

.ring--1 {
  width: 200px;
  height: 200px;
  border-color: rgba(149, 254, 58, 0.16);
  animation-duration: 14s;
}

.ring--2 {
  width: 290px;
  height: 290px;
  border-color: rgba(149, 254, 58, 0.08);
  animation-duration: 26s;
  animation-direction: reverse;
}

.ring--3 {
  width: 380px;
  height: 380px;
  border-color: rgba(149, 254, 58, 0.04);
  animation-duration: 38s;
}

@keyframes ring-spin {
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

/* Glowing core sphere */
.orb-core {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: radial-gradient(circle at 38% 32%,
    rgba(149, 254, 58, 0.22) 0%,
    rgba(149, 254, 58, 0.05) 55%,
    transparent 75%);
  border: 1px solid rgba(149, 254, 58, 0.2);
  box-shadow:
    0 0 60px rgba(149, 254, 58, 0.14),
    0 0 130px rgba(149, 254, 58, 0.07),
    inset 0 0 30px rgba(149, 254, 58, 0.07);
  position: relative;
  z-index: 1;
  animation: orb-pulse 3.5s ease-in-out infinite;
}

@keyframes orb-pulse {
  0%, 100% {
    box-shadow: 0 0 60px rgba(149,254,58,0.14), 0 0 130px rgba(149,254,58,0.07);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 80px rgba(149,254,58,0.2), 0 0 180px rgba(149,254,58,0.1);
    transform: scale(1.04);
  }
}

/* Floating stat cards */
.stat-card {
  position: absolute;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 14px;
  padding: 12px 18px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  z-index: 2;
  animation: float-card 5.5s ease-in-out infinite;
}

.stat--a { top: 20px;  right: 0;   animation-delay: 0s;   }
.stat--b { bottom: 20px; left: 0;  animation-delay: 1.8s; }
.stat--c { top: 150px; right: -20px; animation-delay: 3.4s; }

@keyframes float-card {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
}

.s-num {
  font-family: "Syne", sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #f0f0f0;
  letter-spacing: -0.02em;
  line-height: 1;
}

.s-lbl {
  font-size: 0.7rem;
  color: var(--text-3);
  letter-spacing: 0.07em;
  text-transform: uppercase;
  font-family: "DM Mono", monospace;
}

/* ── Work section ── */
.work-section {
  width: 100%;
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

/* ── Filter chips ── */
.filter-bar {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.chip {
  padding: 8px 20px;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: transparent;
  color: var(--text-2);
  font-family: "DM Sans", sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: -0.01em;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.chip:hover {
  color: var(--text-1);
  border-color: rgba(255, 255, 255, 0.2);
}

.chip--active {
  background: var(--accent);
  border-color: transparent;
  color: #080808;
  font-weight: 600;
}

/* ── Project grid ── */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  animation: card-in 0.38s ease both;
}

@keyframes card-in {
  from { opacity: 0; transform: translateY(14px) scale(0.97); }
  to   { opacity: 1; transform: none; }
}

.p-card-img {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background: #111;
  aspect-ratio: 4 / 3;
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
@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .hero-right {
    display: none;
  }
  .hero-inner {
    justify-content: center;
  }
  .hero-left {
    max-width: 600px;
    align-items: center;
    text-align: center;
  }
  .hero-title {
    font-size: clamp(2rem, 5vw, 2.8rem);
  }
  .hero-rule {
    margin: -4px 0;
  }
  .hero-body {
    max-width: 460px;
  }
  .hero-badge {
    margin: 0 auto;
  }
}

@media (max-width: 767px) {
  .home {
    gap: 100px;
    padding: 0 24px;
  }
  .hero {
    width: calc(100% + 48px);
    margin-left: -24px;
    margin-right: -24px;
  }
  .hero-inner {
    padding: 100px 24px 60px;
  }
  .btn-primary,
  .btn-ghost {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .home {
    gap: 80px;
    padding: 0 16px;
  }
  .hero {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  .hero-inner {
    padding: 90px 16px 60px;
  }
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .filter-bar {
    overflow-x: auto;
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .filter-bar::-webkit-scrollbar {
    display: none;
  }
  .chip {
    flex-shrink: 0;
    white-space: nowrap;
  }
}
</style>
