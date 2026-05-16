<!-- App.vue -->
<template>
    <header-component></header-component>
    <router-link v-if="isProjectPage" to="/" class="back-btn">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 3L5 8L10 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Back
    </router-link>
    <router-view></router-view>
    <footer-component></footer-component>
  </template>

  <script>
  import HeaderComponent from './components/Header.vue';
  import FooterComponent from './components/Footer.vue';

  export default {
    components: {
      HeaderComponent,
      FooterComponent,
    },
    computed: {
      isProjectPage() {
        return !['/', '/home', '/about'].includes(this.$route.path);
      }
    }
  };

  </script>

<style>

  #app {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 120px;
  }

  .back-btn {
    width: 100%;
    max-width: 1120px;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0 40px;
    color: var(--secondary-color);
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 0.2s ease;
    margin-bottom: -80px;
  }

  .back-btn:hover {
    color: var(--primary-color);
  }

  @media (max-width: 767px) {
    #app {
      gap: 80px;
    }
    .back-btn {
      padding: 0 24px;
      margin-bottom: -40px;
    }
  }

  @media (max-width: 480px) {
    #app {
      gap: 48px;
    }
    .back-btn {
      padding: 0 16px;
      margin-bottom: -24px;
    }
  }

</style>
  