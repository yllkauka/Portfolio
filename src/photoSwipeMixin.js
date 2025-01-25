import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default {
    data() {
        return {
            lightboxes: [],
        };
    },
    methods: {
        initializePhotoSwipe() {
            // Clear previous instances
            this.lightboxes.forEach(lightbox => lightbox.destroy());

            // Initialize new instances
            const galleries = this.$el.querySelectorAll('.gallery');
            galleries.forEach((gallery, index) => {
                const lightbox = new PhotoSwipeLightbox({
                    gallery: gallery,
                    children: 'a',
                    pswpModule: () => import('photoswipe'),
                });
                lightbox.init();
                this.lightboxes.push(lightbox);

                // Set dimensions for images
                const imageLinks = gallery.querySelectorAll('a[target="_blank"]');
                imageLinks.forEach(link => {
                    const img = link.querySelector('img');
                    const image = new Image();
                    image.src = img.src;
                    image.onload = function () {
                        link.setAttribute('data-pswp-width', image.naturalWidth);
                        link.setAttribute('data-pswp-height', image.naturalHeight);
                    };
                });
            });
        },
        cleanupPhotoSwipe() {
            this.lightboxes.forEach(lightbox => lightbox.destroy());
            this.lightboxes = [];
        },
    },
    mounted() {
        this.initializePhotoSwipe();
    },
    unmounted() {
        this.cleanupPhotoSwipe();
    },
};
