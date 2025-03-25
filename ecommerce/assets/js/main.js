document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap components
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // Smooth scroll for back to top button
    const backToTopButton = document.getElementById('button')
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault()
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        })

        // Show/hide back to top button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.style.display = 'block'
            } else {
                backToTopButton.style.display = 'none'
            }
        })
    }

    // Product hover effect
    const productCards = document.querySelectorAll('.single_product')
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)'
            this.style.transition = 'transform 0.3s ease'
        })

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)'
        })
    })

    // Cart functionality
    const cartIcon = document.querySelector('.cart a')
    if (cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            // Add cart click handler if needed
            console.log('Cart clicked')
        })
    }

    // Category image click handler
    const categoryImages = document.querySelectorAll('.shop_by_category .card')
    categoryImages.forEach(image => {
        image.addEventListener('click', function() {
            const link = this.querySelector('a')
            if (link) {
                link.click()
            }
        })
    })

    // Initialize carousel with custom settings
    const carousel = document.getElementById('carouselExampleControls')
    if (carousel) {
        new bootstrap.Carousel(carousel, {
            interval: 5000,
            wrap: true,
            keyboard: true
        })
    }
})