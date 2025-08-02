// Application state
const cart = JSON.parse(localStorage.getItem("drucciCart")) || []
const wishlist = JSON.parse(localStorage.getItem("drucciWishlist")) || []

// DOM elements
const navbar = document.getElementById("mainNavbar")
const contactForm = document.getElementById("contactForm")
const submitBtn = document.getElementById("submitBtn")
const cartCount = document.getElementById("cartCount")
const wishlistCount = document.getElementById("wishlistCount")

// Bootstrap and gtag declarations
const bootstrap = window.bootstrap
const gtag = window.gtag

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  const AOS = window.AOS
  if (AOS) {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    })
  }

  // Setup event listeners
  setupEventListeners()

  // Update counters
  updateCartCount()
  updateWishlistCount()

  // Initialize form validation
  initializeFormValidation()

  // Update current status
  updateCurrentStatus()

  // Initialize parallax effects
  initializeParallax()

  // Initialize auto-save if needed
  // initializeAutoSave();

  // Initialize FAQ accordion enhancement
  initializeFAQAccordion()

  // Initialize social media tracking
  initializeSocialTracking()
})

// Setup event listeners
function setupEventListeners() {
  // Navbar scroll effect
  window.addEventListener("scroll", handleNavbarScroll)

  // Contact form submission
  if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmit)
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

  // Map placeholder click
  const mapPlaceholder = document.querySelector(".map-placeholder")
  if (mapPlaceholder) {
    mapPlaceholder.addEventListener("click", () => {
      window.open("https://maps.google.com/?q=Lisboa,Portugal", "_blank")
    })
  }

  // Real-time form validation
  const formInputs = document.querySelectorAll(".luxury-form input, .luxury-form select, .luxury-form textarea")
  formInputs.forEach((input) => {
    input.addEventListener("blur", () => validateField(input))
    input.addEventListener("input", () => clearFieldError(input))
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

// Form validation
function initializeFormValidation() {
  const form = document.getElementById("contactForm")
  if (!form) return

  // Add validation rules
  const validationRules = {
    firstName: {
      required: true,
      minLength: 2,
      pattern: /^[a-zA-ZÀ-ÿ\s]+$/,
      message: "Nome deve ter pelo menos 2 caracteres e conter apenas letras",
    },
    lastName: {
      required: true,
      minLength: 2,
      pattern: /^[a-zA-ZÀ-ÿ\s]+$/,
      message: "Sobrenome deve ter pelo menos 2 caracteres e conter apenas letras",
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Por favor, insira um email válido",
    },
    phone: {
      required: false,
      pattern: /^[+]?[0-9\s\-$$$$]+$/,
      message: "Por favor, insira um número de telefone válido",
    },
    subject: {
      required: true,
      message: "Por favor, selecione um assunto",
    },
    message: {
      required: true,
      minLength: 10,
      message: "Mensagem deve ter pelo menos 10 caracteres",
    },
    privacy: {
      required: true,
      message: "Você deve concordar com a Política de Privacidade",
    },
  }

  // Store validation rules globally
  window.validationRules = validationRules
}

function validateField(field) {
  const fieldName = field.name
  const rules = window.validationRules[fieldName]
  const value = field.value.trim()
  const feedback = field.parentNode.querySelector(".form-feedback")

  if (!rules) return true

  // Clear previous states
  field.classList.remove("is-valid", "is-invalid")
  if (feedback) {
    feedback.textContent = ""
    feedback.classList.remove("valid-feedback", "invalid-feedback")
  }

  // Required validation
  if (rules.required && !value) {
    if (field.type === "checkbox" && !field.checked) {
      showFieldError(field, rules.message || "Este campo é obrigatório")
      return false
    } else if (field.type !== "checkbox" && !value) {
      showFieldError(field, rules.message || "Este campo é obrigatório")
      return false
    }
  }

  // Skip other validations if field is empty and not required
  if (!rules.required && !value) {
    return true
  }

  // Min length validation
  if (rules.minLength && value.length < rules.minLength) {
    showFieldError(field, rules.message || `Mínimo ${rules.minLength} caracteres`)
    return false
  }

  // Pattern validation
  if (rules.pattern && !rules.pattern.test(value)) {
    showFieldError(field, rules.message || "Formato inválido")
    return false
  }

  // Show success
  showFieldSuccess(field, "Válido!")
  return true
}

function showFieldError(field, message) {
  field.classList.add("is-invalid")
  const feedback = field.parentNode.querySelector(".form-feedback")
  if (feedback) {
    feedback.textContent = message
    feedback.classList.add("invalid-feedback")
  }
}

function showFieldSuccess(field, message) {
  field.classList.add("is-valid")
  const feedback = field.parentNode.querySelector(".form-feedback")
  if (feedback) {
    feedback.textContent = message
    feedback.classList.add("valid-feedback")
  }
}

function clearFieldError(field) {
  field.classList.remove("is-invalid")
  const feedback = field.parentNode.querySelector(".form-feedback")
  if (feedback && feedback.classList.contains("invalid-feedback")) {
    feedback.textContent = ""
    feedback.classList.remove("invalid-feedback")
  }
}

// Handle form submission
async function handleFormSubmit(e) {
  e.preventDefault()

  // Validate all fields
  const formInputs = contactForm.querySelectorAll("input, select, textarea")
  let isValid = true

  formInputs.forEach((input) => {
    if (!validateField(input)) {
      isValid = false
    }
  })

  if (!isValid) {
    showNotification("Por favor, corrija os erros no formulário", "danger")
    return
  }

  // Show loading state
  setSubmitButtonLoading(true)

  try {
    // Simulate form submission
    await simulateFormSubmission()

    // Show success
    showSuccessModal()
    resetForm()
    showNotification("Mensagem enviada com sucesso!", "success")
  } catch (error) {
    showNotification("Erro ao enviar mensagem. Tente novamente.", "danger")
  } finally {
    setSubmitButtonLoading(false)
  }
}

function setSubmitButtonLoading(loading) {
  const btnText = submitBtn.querySelector(".btn-text")
  const btnLoading = submitBtn.querySelector(".btn-loading")

  if (loading) {
    btnText.classList.add("d-none")
    btnLoading.classList.remove("d-none")
    submitBtn.disabled = true
  } else {
    btnText.classList.remove("d-none")
    btnLoading.classList.add("d-none")
    submitBtn.disabled = false
  }
}

async function simulateFormSubmission() {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })
}

function showSuccessModal() {
  if (bootstrap && bootstrap.Modal) {
    const successModal = new bootstrap.Modal(document.getElementById("successModal"))
    successModal.show()
  }
}

function resetForm() {
  contactForm.reset()
  const formInputs = contactForm.querySelectorAll("input, select, textarea")
  formInputs.forEach((input) => {
    input.classList.remove("is-valid", "is-invalid")
    const feedback = input.parentNode.querySelector(".form-feedback")
    if (feedback) {
      feedback.textContent = ""
      feedback.classList.remove("valid-feedback", "invalid-feedback")
    }
  })
}

// Update current business status
function updateCurrentStatus() {
  const currentStatus = document.querySelector(".current-status")
  if (!currentStatus) return

  const now = new Date()
  const day = now.getDay() // 0 = Sunday, 1 = Monday, etc.
  const hour = now.getHours()

  let isOpen = false
  let statusText = ""

  // Business hours: Mon-Fri 9-18, Sat 9-14, Sun closed
  if (day >= 1 && day <= 5) {
    // Monday to Friday
    isOpen = hour >= 9 && hour < 18
    statusText = isOpen ? "Aberto" : "Fechado"
  } else if (day === 6) {
    // Saturday
    isOpen = hour >= 9 && hour < 14
    statusText = isOpen ? "Aberto" : "Fechado"
  } else {
    // Sunday
    isOpen = false
    statusText = "Fechado"
  }

  const statusIcon = currentStatus.querySelector("i")
  const statusSpan = currentStatus.querySelector("span")

  if (isOpen) {
    statusIcon.className = "fas fa-circle text-success"
    statusSpan.innerHTML = `Atualmente: <strong>Aberto</strong>`
  } else {
    statusIcon.className = "fas fa-circle text-danger"
    statusSpan.innerHTML = `Atualmente: <strong>Fechado</strong>`
  }
}

// Cart and wishlist functionality
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
  const heroImage = document.querySelector(".hero-image")

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const rate = scrolled * -0.5

    if (heroImage) {
      heroImage.style.transform = `translateY(${rate}px)`
    }
  })
}

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
document.querySelectorAll(".quick-contact-card, .info-card, .social-card").forEach((el) => {
  observer.observe(el)
})

// FAQ accordion enhancement
function initializeFAQAccordion() {
  const accordionButtons = document.querySelectorAll(".accordion-button")

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Add smooth scroll to accordion item when opened
      setTimeout(() => {
        if (!button.classList.contains("collapsed")) {
          button.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          })
        }
      }, 300)
    })
  })
}

// Social media tracking (for analytics)
function initializeSocialTracking() {
  const socialButtons = document.querySelectorAll(".social-card .btn")

  socialButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const platform = button.closest(".social-card").querySelector("h4").textContent.toLowerCase()
      trackSocialClick(platform)
    })
  })
}

function trackSocialClick(platform) {
  // This would integrate with your analytics platform
  console.log(`Social media click: ${platform}`)

  // Example: Google Analytics event
  if (typeof gtag !== "undefined") {
    gtag("event", "social_click", {
      platform: platform,
      page_location: window.location.href,
    })
  }
}

// Initialize everything when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp)
} else {
  initializeApp()
}

function initializeApp() {
  console.log("Drucci Acessórios - Contact Page Loaded")

  // Update status every minute
  setInterval(updateCurrentStatus, 60000)
}

// Form auto-save (optional feature)
function initializeAutoSave() {
  const formInputs = document.querySelectorAll("#contactForm input, #contactForm select, #contactForm textarea")

  formInputs.forEach((input) => {
    input.addEventListener(
      "input",
      debounce(() => {
        saveFormData()
      }, 1000),
    )
  })

  // Load saved data on page load
  loadFormData()
}

function saveFormData() {
  const formData = new FormData(contactForm)
  const data = {}

  for (const [key, value] of formData.entries()) {
    data[key] = value
  }

  localStorage.setItem("contactFormData", JSON.stringify(data))
}

function loadFormData() {
  const savedData = localStorage.getItem("contactFormData")

  if (savedData) {
    const data = JSON.parse(savedData)

    Object.keys(data).forEach((key) => {
      const field = contactForm.querySelector(`[name="${key}"]`)
      if (field) {
        if (field.type === "checkbox") {
          field.checked = data[key] === "on"
        } else {
          field.value = data[key]
        }
      }
    })
  }
}

function clearSavedFormData() {
  localStorage.removeItem("contactFormData")
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
