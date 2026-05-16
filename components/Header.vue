<!-- Header.vue -->
<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <router-link to="/" class="page-name" @click="closeMenu">
      <img src="../assets/yllka-avatar.png" alt="Profile picture of Yllka Uka" />
      <p>Yllka Uka</p>
    </router-link>

    <nav class="desktop-nav">
      <ul class="nav-pill">
        <li><router-link to="/" active-class="active-link">Home</router-link></li>
        <li><router-link to="/about" active-class="active-link">About</router-link></li>
      </ul>
    </nav>

    <SocialMediaComponent class="desktop-social" />

    <button class="burger" @click="toggleMenu" :aria-expanded="menuOpen.toString()" aria-label="Toggle menu">
      <span class="line" :class="{ open: menuOpen }"></span>
      <span class="line" :class="{ open: menuOpen }"></span>
    </button>
  </header>

  <Transition name="overlay">
    <div v-if="menuOpen" class="mobile-overlay">
      <nav>
        <ul class="overlay-nav">
          <li><router-link to="/" active-class="active-link" @click="closeMenu">Home</router-link></li>
          <li><router-link to="/about" active-class="active-link" @click="closeMenu">About</router-link></li>
        </ul>
      </nav>
      <SocialMediaComponent />
    </div>
  </Transition>
</template>

<script>
import SocialMediaComponent from "./SocialMedia.vue";

export default {
  components: { SocialMediaComponent },

  data() {
    return {
      menuOpen: false,
      isScrolled: false,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    document.body.style.overflow = "";
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      document.body.style.overflow = this.menuOpen ? "hidden" : "";
    },
    closeMenu() {
      this.menuOpen = false;
      document.body.style.overflow = "";
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 24;
    },
  },
};
</script>

<style scoped>
/* ── Base header ── */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  transition: background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease;
  border-bottom: 1px solid transparent;
}

.header.scrolled {
  background-color: rgba(5, 5, 5, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom-color: rgba(255, 255, 255, 0.07);
}

/* ── Logo ── */
.page-name {
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 1;
}

.page-name img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.page-name p {
  color: var(--primary-color);
  font-family: "Syne", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: -0.01em;
}

/* ── Desktop pill nav ── */
.nav-pill {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2px;
  margin: 0;
  padding: 5px 6px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.04);
}

.nav-pill li a {
  display: block;
  padding: 7px 18px;
  border-radius: 100px;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--secondary-color);
  transition: color 0.2s ease, background-color 0.2s ease;
}

.nav-pill li a:hover {
  color: var(--primary-color);
}

.nav-pill li a.active-link {
  color: var(--primary-color);
  background-color: rgba(255, 255, 255, 0.09);
}

/* ── Burger (mobile only) ── */
.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 1;
}

.line {
  display: block;
  height: 1.5px;
  background-color: var(--primary-color);
  border-radius: 2px;
  transition: transform 0.35s ease, opacity 0.25s ease, width 0.35s ease;
  transform-origin: center;
}

.line:nth-child(1) { width: 24px; }
.line:nth-child(2) { width: 16px; }

.line:nth-child(1).open {
  width: 24px;
  transform: translateY(3.75px) rotate(45deg);
}
.line:nth-child(2).open {
  width: 24px;
  transform: translateY(-3.75px) rotate(-45deg);
}

/* ── Full-screen overlay ── */
.mobile-overlay {
  position: fixed;
  inset: 0;
  z-index: 90;
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 56px;
}

.overlay-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.overlay-nav li a {
  font-family: "Syne", sans-serif;
  font-size: 4.5rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: rgba(255, 255, 255, 0.12);
  transition: color 0.25s ease;
  display: block;
  line-height: 1.1;
}

.overlay-nav li a:hover,
.overlay-nav li a.active-link {
  color: var(--primary-color);
}

/* ── Overlay transition ── */
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
  transform: translateY(-16px);
}

/* ── Responsive ── */
@media (max-width: 767px) {
  .header {
    padding: 18px 24px;
  }

  .desktop-nav,
  .desktop-social {
    display: none;
  }

  .burger {
    display: flex;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 16px;
  }

  .overlay-nav li a {
    font-size: 3rem;
  }
}
</style>
