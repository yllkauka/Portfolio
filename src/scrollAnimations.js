// scrollAnimations.js
// Defines the reveal animation parameters for ScrollReveal library

export const revealDefault = {
    duration: 500,
    origin: 'bottom',
    distance: '40px',
    scale: 0.92,
    easing: 'ease-out',
    reset: false,
};

export const revealLong = {
    duration: 800,
    origin: 'bottom',
    distance: '100px',
    scale: 0.92,
    easing: 'ease-out',
    reset: false,
};

/* Example of how to apply a single animation in component > inside mounted() */
// ScrollReveal().reveal(this.$refs.ProjectTitleMotion, revealDefault);