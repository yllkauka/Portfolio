<!-- Footer.vue -->
<template>
    <footer>
      <p>Contact me</p>
      <a href="mailto:yllkaukaa@gmail.com" class="maillink" target="_blank" rel="noopener noreferrer">yllkaukaa@gmail.com</a>
      <SocialMediaComponent></SocialMediaComponent>

      <!-- Back to Top Button -->
      <a href="#" class="back-to-top" @click.prevent="scrollToTop">
        <svg class="chevron" width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.764651 5.56333L6.55876 0.170422C6.80266 -0.0568076 7.19671 -0.0568076 7.44124 0.170422L13.2353 5.56333C13.5882 5.89135 13.5882 6.42505 13.2353 6.75366C12.8825 7.08169 12.3098 7.08169 11.9569 6.75366L6.99968 2.14032L2.04371 6.75366C1.69021 7.08169 1.11752 7.08169 0.76465 6.75366C0.411784 6.42505 0.411784 5.89135 0.764651 5.56333" fill="white"/>
        </svg>
        <span>Top</span>
      </a>

    </footer>
  </template>
  
<script>
  import SocialMediaComponent from './SocialMedia.vue';

  export default {
    components: {
      SocialMediaComponent
    },
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  };
</script>
  
<style scoped>

footer {
  position: relative; /* To position button inside the footer */
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 90%;
  text-align: center;
  margin-bottom: 140px;
  padding: 20px;
  align-items: center
}

.contact {
  text-align: center;
}

.maillink {
  font-weight: 500;
  margin-bottom: 40px;
}

.maillink:hover {
  color: var(--accent-color);
}

/* Back to top button styling */
.back-to-top {
  position: absolute;
  right: 0px; /* Positioned to the right side of the footer */
  bottom: 20px; /* Positioned slightly above the footer's bottom */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 50px;
  height: 70px;
  border: 2px solid var(--primary-color);
  border-radius: 40px;
  cursor: pointer;
  z-index: 1000;
  background-color: transparent;
  color: var(--primary-color);
  text-align: center;
}

.back-to-top span {
  font-size: 0.90rem;
  font-weight: 500;
}

.back-to-top:hover {
  color: var(--accent-color);
  border-color: var(--accent-color);
}

.back-to-top:hover .chevron path {
  fill: var(--accent-color);
}

@media (max-width: 480px) {
  .back-to-top {
    position: relative;
    bottom: 0;
    margin-top: 40px;
  }
}

</style>
  