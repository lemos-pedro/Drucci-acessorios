// Remove as importações ES6 e substitua por código vanilla JavaScript
const AOS = {
  init: (options) => {
    console.log("AOS initialized with options:", options)
  },
}

// Initialize AOS animations
document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    offset: 100,
  })

  // Initialize other functionality
  initializeNavbar()
  initializeCounters()
  initializeVideoModal()
  initializeParallax()
  updateCartCount()
})

// Navbar scroll effect
function initializeNavbar() {
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")
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
        const target = Number.parseInt(counter.textContent.replace(/\D/g, ""))
        const suffix = counter.textContent.replace(/[0-9]/g, "")

        animateCounter(counter, target, suffix)
        observer.unobserve(counter)
      }
    })
  }, options)

  counters.forEach((counter) => {
    observer.observe(counter)
  })
}

function animateCounter(element, target, suffix) {
  let current = 0
  const increment = target / 100
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    element.textContent = Math.floor(current) + suffix
  }, 20)
}

// Video modal functionality
function initializeVideoModal() {
  const videoTriggers = document.querySelectorAll(".image-overlay")

  videoTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      showNotification("Funcionalidade de vídeo em desenvolvimento!", "info")
    })
  })
}

// Parallax effect for floating elements
function initializeParallax() {
  const floatingElements = document.querySelectorAll(".floating-element")

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const rate = scrolled * -0.5

    floatingElements.forEach((element, index) => {
      const speed = (index + 1) * 0.2
      element.style.transform = `translateY(${rate * speed}px)`
    })
  })
}

// Smooth scrolling for anchor links
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

// Timeline animation on scroll
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
    item.style.transition = "all 0.6s ease"
    timelineObserver.observe(item)
  })
}

// Initialize timeline after DOM is loaded
setTimeout(initializeTimeline, 100)

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

// Cart functionality (basic implementation)
const cart = JSON.parse(localStorage.getItem("drucciCart")) || []

function updateCartCount() {
  const cartCount = document.getElementById("cartCount")
  if (cartCount) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    cartCount.textContent = totalItems
    cartCount.style.display = totalItems > 0 ? "block" : "none"
  }
}

// Loading animation for images
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("load", function () {
    this.style.opacity = "1"
  })

  // Set initial opacity
  img.style.opacity = "0"
  img.style.transition = "opacity 0.3s ease"
})

// Add loading states
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

// Add CSS for ripple animation
const style = document.createElement("style")
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .loaded {
        opacity: 1;
    }
`
document.head.appendChild(style)
