// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize preloader
  initializePreloader()

  // Initialize AOS animations
  const AOS = window.AOS // Declare AOS variable
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    offset: 100,
  })

  // Initialize all components
  initializeNavbar()
  initializeCounters()
  initializeTestimonialCarousel()
  initializeScrollIndicator()
  initializeParallax()
  initializeSmoothScrolling()
  updateCartCount()

  // Initialize timeline animations
  setTimeout(initializeTimeline, 100)
})

// Preloader functionality
function initializePreloader() {
  const preloader = document.getElementById("preloader")

  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.classList.add("hidden")
      document.body.classList.add("loaded")
    }, 1000)
  })
}

// Navbar scroll effects
function initializeNavbar() {
  const navbar = document.getElementById("mainNavbar")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })
}

// Animated counters for statistics
function initializeCounters() {
  const counters = document.querySelectorAll(".stat-number")
  const options = {
    threshold: 0.7,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target
        const target = Number.parseInt(counter.getAttribute("data-target"))

        animateCounter(counter, target)
        observer.unobserve(counter)
      }
    })
  }, options)

  counters.forEach((counter) => {
    observer.observe(counter)
  })
}

function animateCounter(element, target) {
  let current = 0
  const increment = target / 100
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      current = target
      clearInterval(timer)
    }

    // Format number with appropriate suffix
    let displayValue = Math.floor(current)
    if (target >= 1000) {
      displayValue = Math.floor(current / 100) / 10 + "k"
    }

    element.textContent = displayValue
  }, 20)
}

// Timeline animations
function initializeTimeline() {
  const timelineItems = document.querySelectorAll(".timeline-item")
  const timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    },
    {
      threshold: 0.3,
    },
  )

  timelineItems.forEach((item) => {
    item.style.opacity = "0"
    item.style.transform = "translateY(50px)"
    item.style.transition = "all 0.8s ease"
    timelineObserver.observe(item)
  })
}

// Testimonial carousel
function initializeTestimonialCarousel() {
  const track = document.querySelector(".testimonial-track")
  const cards = document.querySelectorAll(".testimonial-card")
  const dots = document.querySelectorAll(".dot")
  const prevBtn = document.getElementById("prevBtn")
  const nextBtn = document.getElementById("nextBtn")

  let currentSlide = 0
  const totalSlides = cards.length

  // Auto-play functionality
  let autoPlayInterval = setInterval(nextSlide, 5000)

  function updateCarousel() {
    // Update cards
    cards.forEach((card, index) => {
      card.classList.toggle("active", index === currentSlide)
    })

    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide)
    })

    // Transform track
    track.style.transform = `translateX(-${currentSlide * 100}%)`
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides
    updateCarousel()
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
    updateCarousel()
  }

  function goToSlide(slideIndex) {
    currentSlide = slideIndex
    updateCarousel()
  }

  // Event listeners
  nextBtn.addEventListener("click", () => {
    nextSlide()
    resetAutoPlay()
  })

  prevBtn.addEventListener("click", () => {
    prevSlide()
    resetAutoPlay()
  })

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index)
      resetAutoPlay()
    })
  })

  function resetAutoPlay() {
    clearInterval(autoPlayInterval)
    autoPlayInterval = setInterval(nextSlide, 5000)
  }

  // Pause auto-play on hover
  const carousel = document.querySelector(".testimonials-carousel")
  carousel.addEventListener("mouseenter", () => {
    clearInterval(autoPlayInterval)
  })

  carousel.addEventListener("mouseleave", () => {
    autoPlayInterval = setInterval(nextSlide, 5000)
  })

  // Initialize
  updateCarousel()
}

// Scroll indicator functionality
function initializeScrollIndicator() {
  const scrollIndicator = document.querySelector(".scroll-indicator")

  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", () => {
      const timelineSection = document.getElementById("timeline")
      if (timelineSection) {
        timelineSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })

    // Hide scroll indicator after scrolling
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        scrollIndicator.style.opacity = "0"
        scrollIndicator.style.pointerEvents = "none"
      } else {
        scrollIndicator.style.opacity = "1"
        scrollIndicator.style.pointerEvents = "auto"
      }
    })
  }
}

// Parallax effects for floating elements
function initializeParallax() {
  const floatingElements = document.querySelectorAll(".floating-element")

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const rate = scrolled * -0.3

    floatingElements.forEach((element, index) => {
      const speed = (index + 1) * 0.1
      element.style.transform = `translateY(${rate * speed}px)`
    })
  })
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Cart functionality
const cart = JSON.parse(localStorage.getItem("drucciCart")) || []

function updateCartCount() {
  const cartCount = document.getElementById("cartCount")
  if (cartCount) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    cartCount.textContent = totalItems
    cartCount.style.display = totalItems > 0 ? "block" : "none"
  }
}

// Notification system
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`
  notification.style.cssText = `
        top: 100px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        border-radius: 10px;
    `

  notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `

  document.body.appendChild(notification)

  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove()
    }
  }, 5000)
}

// Loading animation for images
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("load", function () {
    this.style.opacity = "1"
  })

  // Set initial opacity
  img.style.opacity = "0"
  img.style.transition = "opacity 0.5s ease"
})

// Intersection Observer for animations
function createAnimationObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  // Observe elements that should animate
  document.querySelectorAll(".value-card, .achievement-card, .timeline-content").forEach((el) => {
    observer.observe(el)
  })
}

// Initialize animation observer
setTimeout(createAnimationObserver, 500)

// Performance optimization - Lazy loading for images
function initializeLazyLoading() {
  const images = document.querySelectorAll("img[data-src]")

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
}

// Error handling for missing elements
function handleMissingElements() {
  const requiredElements = ["#mainNavbar", ".hero-section", ".timeline-section"]

  requiredElements.forEach((selector) => {
    if (!document.querySelector(selector)) {
      console.warn(`Missing required element: ${selector}`)
    }
  })
}

// Initialize error handling
handleMissingElements()

// Add custom CSS animations
const style = document.createElement("style")
style.textContent = `
    .animate-in {
        animation: slideInUp 0.6s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .lazy {
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }
    
    .loading {
        animation: pulse 1.5s ease-in-out infinite;
    }
`
document.head.appendChild(style)

// Cleanup function for when page is unloaded
window.addEventListener("beforeunload", () => {
  // Clear any intervals
  const autoPlayInterval = window.autoPlayInterval // Declare autoPlayInterval variable
  clearInterval(autoPlayInterval)

  // Save any necessary data to localStorage
  localStorage.setItem("drucciCart", JSON.stringify(cart))
})

// Debug mode for development
if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
  console.log("Drucci Acessórios - Nossa História page loaded successfully")
  console.log("Available functions:", {
    showNotification,
    updateCartCount,
    initializeCounters,
    initializeTestimonialCarousel,
  })
}
