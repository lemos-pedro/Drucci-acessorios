// Featured products data
const featuredProducts = [
  {
    id: 1,
    name: "Colar Elegance Premium",
    price: 89.99,
    oldPrice: 129.99,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.9,
    reviews: 156,
    badge: "bestseller",
  },
  {
    id: 2,
    name: "Brincos Crystal Luxo",
    price: 45.99,
    oldPrice: 65.99,
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    reviews: 89,
    badge: "sale",
  },
  {
    id: 3,
    name: "Pulseira Elite Collection",
    price: 67.99,
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.9,
    reviews: 134,
    badge: "new",
  },
  {
    id: 4,
    name: "Anel Solitário Diamante",
    price: 125.99,
    oldPrice: 179.99,
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 5.0,
    reviews: 203,
    badge: "premium",
  },
]

// Application state
const cart = JSON.parse(localStorage.getItem("drucciCart")) || []
const wishlist = JSON.parse(localStorage.getItem("drucciWishlist")) || []
let currentTestimonial = 0

// DOM elements
const preloader = document.getElementById("preloader")
const navbar = document.getElementById("mainNavbar")
const featuredProductsContainer = document.getElementById("featuredProducts")
const testimonialTrack = document.getElementById("testimonialTrack")
const cartCount = document.getElementById("cartCount")
const wishlistCount = document.getElementById("wishlistCount")

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
  // Hide preloader after 2 seconds
  setTimeout(() => {
    preloader.classList.add("hidden")
  }, 2000)

  // Initialize AOS
  const AOS = window.AOS // Declare the AOS variable
  if (AOS) {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    })
  }

  // Load featured products
  loadFeaturedProducts()

  // Initialize testimonials carousel
  initializeTestimonialsCarousel()

  // Setup event listeners
  setupEventListeners()

  // Update counters
  updateCartCount()
  updateWishlistCount()

  // Initialize parallax effects
  initializeParallax()
})

// Setup event listeners
function setupEventListeners() {
  // Navbar scroll effect
  window.addEventListener("scroll", handleNavbarScroll)

  // Newsletter form
  const newsletterForm = document.getElementById("newsletterForm")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", handleNewsletterSubmit)
  }

  // Testimonial carousel controls
  const prevBtn = document.getElementById("prevBtn")
  const nextBtn = document.getElementById("nextBtn")

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => changeTestimonial(-1))
    nextBtn.addEventListener("click", () => changeTestimonial(1))
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

  // Cart functionality
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart-btn")) {
      const productId = Number.parseInt(e.target.dataset.productId)
      addToCart(productId)
    }

    if (e.target.classList.contains("add-to-wishlist-btn")) {
      const productId = Number.parseInt(e.target.dataset.productId)
      toggleWishlist(productId)
    }
  })
}

// Handle navbar scroll effect
function handleNavbarScroll() {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
}

// Load featured products
function loadFeaturedProducts() {
  if (!featuredProductsContainer) return

  featuredProductsContainer.innerHTML = ""

  featuredProducts.forEach((product, index) => {
    const productCard = createProductCard(product, index)
    featuredProductsContainer.appendChild(productCard)
  })
}

// Create product card
function createProductCard(product, index) {
  const col = document.createElement("div")
  col.className = "col-lg-3 col-md-6 mb-4"
  col.setAttribute("data-aos", "fade-up")
  col.setAttribute("data-aos-delay", (index * 100).toString())

  const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0
  const stars = generateStars(product.rating)

  col.innerHTML = `
    <div class="product-showcase-card">
      <div class="position-relative overflow-hidden" style="height: 280px;">
        ${
          product.badge
            ? `<div class="position-absolute top-0 start-0 m-3 z-3">
          <span class="badge bg-${getBadgeColor(product.badge)} text-white px-3 py-2 rounded-pill">
            ${getBadgeText(product.badge, discount)}
          </span>
        </div>`
            : ""
        }
        
        <img src="${product.image}" alt="${product.name}" class="w-100 h-100 object-fit-cover">
        
        <div class="position-absolute top-0 end-0 m-3 z-3">
          <button class="btn btn-light btn-sm rounded-circle add-to-wishlist-btn" data-product-id="${product.id}">
            <i class="fas fa-heart ${wishlist.includes(product.id) ? "text-danger" : ""}"></i>
          </button>
        </div>
        
        <div class="position-absolute bottom-0 start-0 end-0 p-3 bg-gradient-dark text-white">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <div class="stars small">${stars}</div>
              <small>(${product.reviews} avaliações)</small>
            </div>
            <button class="btn btn-primary btn-sm add-to-cart-btn" data-product-id="${product.id}">
              <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
      
      <div class="p-3">
        <h5 class="mb-2">${product.name}</h5>
        <div class="d-flex align-items-center gap-2 mb-2">
          <span class="h5 mb-0 text-primary">€${product.price.toFixed(2)}</span>
          ${product.oldPrice ? `<span class="text-muted text-decoration-line-through">€${product.oldPrice.toFixed(2)}</span>` : ""}
        </div>
      </div>
    </div>
  `

  return col
}

// Helper functions
function getBadgeColor(badge) {
  const colors = {
    bestseller: "success",
    sale: "danger",
    new: "info",
    premium: "warning",
  }
  return colors[badge] || "primary"
}

function getBadgeText(badge, discount) {
  const texts = {
    bestseller: "Mais Vendido",
    sale: discount > 0 ? `-${discount}%` : "Oferta",
    new: "Novo",
    premium: "Premium",
  }
  return texts[badge] || badge.toUpperCase()
}

function generateStars(rating) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  let stars = ""

  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star text-warning"></i>'
  }

  if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt text-warning"></i>'
  }

  const emptyStars = 5 - Math.ceil(rating)
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star text-warning"></i>'
  }

  return stars
}

// Testimonials carousel
function initializeTestimonialsCarousel() {
  if (!testimonialTrack) return

  // Auto-play carousel
  setInterval(() => {
    changeTestimonial(1)
  }, 5000)
}

function changeTestimonial(direction) {
  if (!testimonialTrack) return

  const testimonials = testimonialTrack.children
  const totalTestimonials = testimonials.length

  currentTestimonial += direction

  if (currentTestimonial >= totalTestimonials) {
    currentTestimonial = 0
  } else if (currentTestimonial < 0) {
    currentTestimonial = totalTestimonials - 1
  }

  const translateX = -currentTestimonial * 100
  testimonialTrack.style.transform = `translateX(${translateX}%)`
}

// Cart functionality
function addToCart(productId) {
  const product = featuredProducts.find((p) => p.id === productId)
  if (!product) return

  const existingItem = cart.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({ ...product, quantity: 1 })
  }

  saveCart()
  updateCartCount()
  showNotification("Produto adicionado ao carrinho!", "success")
}

function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId)

  if (index > -1) {
    wishlist.splice(index, 1)
    showNotification("Removido da lista de desejos!", "info")
  } else {
    wishlist.push(productId)
    showNotification("Adicionado à lista de desejos!", "success")
  }

  saveWishlist()
  updateWishlistCount()

  // Update wishlist button appearance
  const wishlistBtns = document.querySelectorAll(`[data-product-id="${productId}"] .fa-heart`)
  wishlistBtns.forEach((btn) => {
    btn.classList.toggle("text-danger", wishlist.includes(productId))
  })
}

function saveCart() {
  localStorage.setItem("drucciCart", JSON.stringify(cart))
}

function saveWishlist() {
  localStorage.setItem("drucciWishlist", JSON.stringify(wishlist))
}

function updateCartCount() {
  if (cartCount) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    cartCount.textContent = totalItems
    cartCount.style.display = totalItems > 0 ? "flex" : "none"
  }
}

function updateWishlistCount() {
  if (wishlistCount) {
    wishlistCount.textContent = wishlist.length
    wishlistCount.style.display = wishlist.length > 0 ? "flex" : "none"
  }
}

// Newsletter subscription
function handleNewsletterSubmit(e) {
  e.preventDefault()

  const emailInput = e.target.querySelector('input[type="email"]')
  const email = emailInput.value.trim()

  if (!email) {
    showNotification("Por favor, insira seu email!", "warning")
    return
  }

  if (!isValidEmail(email)) {
    showNotification("Por favor, insira um email válido!", "danger")
    return
  }

  // Simulate newsletter subscription
  showNotification("Obrigado! Você foi inscrito na nossa newsletter!", "success")
  emailInput.value = ""
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
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
    box-shadow: 0 10px 40px rgba(0,0,0,0.15);
    border-radius: 12px;
  `

  notification.innerHTML = `
    <div class="d-flex align-items-center">
      <i class="fas fa-${getNotificationIcon(type)} me-2"></i>
      <span>${message}</span>
    </div>
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `

  document.body.appendChild(notification)

  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove()
    }
  }, 5000)
}

function getNotificationIcon(type) {
  const icons = {
    success: "check-circle",
    danger: "exclamation-circle",
    warning: "exclamation-triangle",
    info: "info-circle",
  }
  return icons[type] || "info-circle"
}

// Parallax effects
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

// Video fallback for hero section
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".hero-video")
  const fallback = document.querySelector(".hero-fallback")

  if (video && fallback) {
    video.addEventListener("error", () => {
      video.style.display = "none"
      fallback.style.display = "block"
    })
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in")
    }
  })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll(".luxury-card, .feature-card, .contact-card").forEach((el) => {
  observer.observe(el)
})

// Search functionality
const searchInput = document.getElementById("searchInput")
const searchResults = document.getElementById("searchResults")

if (searchInput && searchResults) {
  searchInput.addEventListener("input", debounce(handleSearch, 300))
}

function handleSearch(e) {
  const query = e.target.value.toLowerCase().trim()

  if (!query) {
    searchResults.innerHTML = ""
    return
  }

  const results = featuredProducts.filter((product) => product.name.toLowerCase().includes(query))

  displaySearchResults(results)
}

function displaySearchResults(results) {
  if (results.length === 0) {
    searchResults.innerHTML = '<p class="text-muted text-center py-3">Nenhum produto encontrado</p>'
    return
  }

  searchResults.innerHTML = results
    .map(
      (product) => `
    <div class="d-flex align-items-center gap-3 p-2 border-bottom">
      <img src="${product.image}" alt="${product.name}" class="rounded" style="width: 50px; height: 50px; object-fit: cover;">
      <div class="flex-grow-1">
        <h6 class="mb-1">${product.name}</h6>
        <span class="text-primary fw-bold">€${product.price.toFixed(2)}</span>
      </div>
      <button class="btn btn-sm btn-primary add-to-cart-btn" data-product-id="${product.id}">
        <i class="fas fa-plus"></i>
      </button>
    </div>
  `,
    )
    .join("")
}

// Utility function for debouncing
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Initialize everything when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp)
} else {
  initializeApp()
}

function initializeApp() {
  console.log("Drucci Acessórios - Premium Experience Loaded")
}
