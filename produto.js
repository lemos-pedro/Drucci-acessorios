// Extended product data with seasonal collections and competitive prices
const allProducts = [
  // Spring/Summer Collection - Necklaces
  {
    id: 101,
    name: "Colar Delicado Verão",
    price: 19.99,
    oldPrice: 29.99,
    category: "necklaces",
    season: "spring-summer",
    image: "/placeholder.svg?height=280&width=280&text=Colar+Delicado+Verão",
    description: "Colar delicado perfeito para os dias quentes de verão",
    badge: "sale",
    rating: 4.8,
    reviews: 124,
    isNew: false,
  },
  {
    id: 102,
    name: "Colar Corrente Dourada Solar",
    price: 24.99,
    oldPrice: 34.99,
    category: "necklaces",
    season: "spring-summer",
    image: "/placeholder.svg?height=280&width=280&text=Colar+Solar",
    description: "Corrente dourada que brilha como o sol do verão",
    badge: "sale",
    rating: 4.9,
    reviews: 89,
    isNew: false,
  },
  {
    id: 103,
    name: "Colar Pingente Floral",
    price: 27.99,
    category: "necklaces",
    season: "spring-summer",
    image: "/placeholder.svg?height=280&width=280&text=Colar+Floral",
    description: "Pingente floral inspirado na primavera",
    badge: "new",
    rating: 4.7,
    reviews: 56,
    isNew: true,
  },

  // Spring/Summer Collection - Earrings
  {
    id: 104,
    name: "Brincos Argola Tropical",
    price: 16.99,
    oldPrice: 24.99,
    category: "earrings",
    season: "spring-summer",
    image: "/placeholder.svg?height=280&width=280&text=Brincos+Tropical",
    description: "Argolas leves com toque tropical para o verão",
    badge: "sale",
    rating: 4.6,
    reviews: 78,
    isNew: false,
  },
  {
    id: 105,
    name: "Brincos Pendentes Coloridos",
    price: 21.99,
    category: "earrings",
    season: "spring-summer",
    image: "/placeholder.svg?height=280&width=280&text=Brincos+Coloridos",
    description: "Brincos pendentes com cores vibrantes",
    badge: "new",
    rating: 4.8,
    reviews: 43,
    isNew: true,
  },
  {
    id: 106,
    name: "Brincos Botão Pérola Verão",
    price: 18.99,
    oldPrice: 26.99,
    category: "earrings",
    season: "spring-summer",
    image: "/placeholder.svg?height=280&width=280&text=Brincos+Pérola",
    description: "Clássicos botões de pérola para qualquer ocasião",
    badge: "sale",
    rating: 4.9,
    reviews: 156,
    isNew: false,
  },

  // Spring/Summer Collection - Bracelets
  {
    id: 107,
    name: "Pulseira Charm Praia",
    price: 22.99,
    category: "bracelets",
    season: "spring-summer",
    image: "/placeholder.svg?height=280&width=280&text=Pulseira+Praia",
    description: "Pulseira com charms inspirados na praia",
    badge: "new",
    rating: 4.7,
    reviews: 67,
    isNew: true,
  },
  {
    id: 108,
    name: "Pulseira Corrente Fina Dourada",
    price: 19.99,
    oldPrice: 28.99,
    category: "bracelets",
    season: "spring-summer",
    image: "/placeholder.svg?height=280&width=280&text=Pulseira+Fina",
    description: "Corrente fina e elegante em tom dourado",
    badge: "sale",
    rating: 4.8,
    reviews: 92,
    isNew: false,
  },

  // Spring/Summer Collection - Rings
  {
    id: 109,
    name: "Anel Solitário Cristal",
    price: 25.99,
    category: "rings",
    season: "spring-summer",
    image: "/placeholder.svg?height=280&width=280&text=Anel+Cristal",
    description: "Anel solitário com cristal brilhante",
    badge: "featured",
    rating: 4.9,
    reviews: 134,
    isNew: false,
  },
  {
    id: 110,
    name: "Anel Duplo Minimalista",
    price: 17.99,
    oldPrice: 25.99,
    category: "rings",
    season: "spring-summer",
    image: "/placeholder.svg?height=280&width=280&text=Anel+Duplo",
    description: "Design minimalista e moderno",
    badge: "sale",
    rating: 4.6,
    reviews: 71,
    isNew: false,
  },

  // Autumn/Winter Collection - Necklaces
  {
    id: 201,
    name: "Colar Statement Elegante",
    price: 34.99,
    oldPrice: 49.99,
    category: "necklaces",
    season: "autumn-winter",
    image: "/placeholder.svg?height=280&width=280&text=Colar+Statement",
    description: "Colar statement para ocasiões especiais",
    badge: "sale",
    rating: 4.9,
    reviews: 98,
    isNew: false,
  },
  {
    id: 202,
    name: "Colar Camadas Sofisticado",
    price: 29.99,
    category: "necklaces",
    season: "autumn-winter",
    image: "/placeholder.svg?height=280&width=280&text=Colar+Camadas",
    description: "Múltiplas camadas para um look sofisticado",
    badge: "new",
    rating: 4.8,
    reviews: 76,
    isNew: true,
  },
  {
    id: 203,
    name: "Colar Vintage Dourado",
    price: 31.99,
    oldPrice: 42.99,
    category: "necklaces",
    season: "autumn-winter",
    image: "/placeholder.svg?height=280&width=280&text=Colar+Vintage",
    description: "Inspiração vintage com acabamento dourado",
    badge: "sale",
    rating: 4.7,
    reviews: 63,
    isNew: false,
  },

  // Autumn/Winter Collection - Earrings
  {
    id: 204,
    name: "Brincos Chandelier Luxo",
    price: 26.99,
    category: "earrings",
    season: "autumn-winter",
    image: "/placeholder.svg?height=280&width=280&text=Brincos+Chandelier",
    description: "Brincos chandelier para eventos especiais",
    badge: "featured",
    rating: 4.9,
    reviews: 87,
    isNew: false,
  },
  {
    id: 205,
    name: "Brincos Gota Cristal",
    price: 23.99,
    oldPrice: 32.99,
    category: "earrings",
    season: "autumn-winter",
    image: "/placeholder.svg?height=280&width=280&text=Brincos+Gota",
    description: "Elegantes brincos em formato de gota",
    badge: "sale",
    rating: 4.8,
    reviews: 112,
    isNew: false,
  },
  {
    id: 206,
    name: "Brincos Argola Texturizada",
    price: 21.99,
    category: "earrings",
    season: "autumn-winter",
    image: "/placeholder.svg?height=280&width=280&text=Brincos+Textura",
    description: "Argolas com textura única e sofisticada",
    badge: "new",
    rating: 4.6,
    reviews: 54,
    isNew: true,
  },

  // Autumn/Winter Collection - Bracelets
  {
    id: 207,
    name: "Pulseira Elos Grossos",
    price: 28.99,
    oldPrice: 38.99,
    category: "bracelets",
    season: "autumn-winter",
    image: "/placeholder.svg?height=280&width=280&text=Pulseira+Elos",
    description: "Pulseira com elos grossos e design marcante",
    badge: "sale",
    rating: 4.7,
    reviews: 89,
    isNew: false,
  },
  {
    id: 208,
    name: "Pulseira Cuff Minimalista",
    price: 24.99,
    category: "bracelets",
    season: "autumn-winter",
    image: "/placeholder.svg?height=280&width=280&text=Pulseira+Cuff",
    description: "Bracelete cuff com design minimalista",
    badge: "new",
    rating: 4.8,
    reviews: 67,
    isNew: true,
  },

  // Autumn/Winter Collection - Rings
  {
    id: 209,
    name: "Anel Cocktail Vintage",
    price: 32.99,
    category: "rings",
    season: "autumn-winter",
    image: "/placeholder.svg?height=280&width=280&text=Anel+Cocktail",
    description: "Anel cocktail com inspiração vintage",
    badge: "featured",
    rating: 4.9,
    reviews: 76,
    isNew: false,
  },
  {
    id: 210,
    name: "Anel Banda Texturizada",
    price: 19.99,
    oldPrice: 27.99,
    category: "rings",
    season: "autumn-winter",
    image: "/placeholder.svg?height=280&width=280&text=Anel+Banda",
    description: "Banda larga com textura sofisticada",
    badge: "sale",
    rating: 4.6,
    reviews: 58,
    isNew: false,
  },

  // Year Round Collection
  {
    id: 301,
    name: "Conjunto Clássico Dourado",
    price: 45.99,
    oldPrice: 65.99,
    category: "sets",
    season: "year-round",
    image: "/placeholder.svg?height=280&width=280&text=Conjunto+Clássico",
    description: "Conjunto completo: colar, brincos e pulseira",
    badge: "sale",
    rating: 4.9,
    reviews: 145,
    isNew: false,
  },
  {
    id: 302,
    name: "Colar Pérolas Eterno",
    price: 38.99,
    category: "necklaces",
    season: "year-round",
    image: "/placeholder.svg?height=280&width=280&text=Colar+Pérolas",
    description: "Clássico colar de pérolas que nunca sai de moda",
    badge: "featured",
    rating: 4.9,
    reviews: 203,
    isNew: false,
  },
  {
    id: 303,
    name: "Brincos Diamante Clássicos",
    price: 33.99,
    oldPrice: 44.99,
    category: "earrings",
    season: "year-round",
    image: "/placeholder.svg?height=280&width=280&text=Brincos+Diamante",
    description: "Brincos com cristais que imitam diamantes",
    badge: "sale",
    rating: 4.8,
    reviews: 167,
    isNew: false,
  },
  {
    id: 304,
    name: "Pulseira Tennis Luxo",
    price: 41.99,
    category: "bracelets",
    season: "year-round",
    image: "/placeholder.svg?height=280&width=280&text=Pulseira+Tennis",
    description: "Pulseira tennis com cristais brilhantes",
    badge: "featured",
    rating: 4.9,
    reviews: 134,
    isNew: false,
  },
  {
    id: 305,
    name: "Anel Aliança Eterna",
    price: 27.99,
    category: "rings",
    season: "year-round",
    image: "/placeholder.svg?height=280&width=280&text=Anel+Aliança",
    description: "Aliança clássica para uso diário",
    badge: "featured",
    rating: 4.8,
    reviews: 189,
    isNew: false,
  },
  {
    id: 306,
    name: "Conjunto Prata Elegante",
    price: 39.99,
    oldPrice: 55.99,
    category: "sets",
    season: "year-round",
    image: "/placeholder.svg?height=280&width=280&text=Conjunto+Prata",
    description: "Conjunto em tom prateado com acabamento premium",
    badge: "sale",
    rating: 4.7,
    reviews: 98,
    isNew: false,
  },
]

// Current filters
let currentFilters = {
  category: "all",
  season: "all",
  search: "",
  maxPrice: 100,
  sort: "featured",
}

// DOM elements
const searchInput = document.getElementById("search-input")
const categoryFilters = document.querySelectorAll(".filter-btn")
const seasonFilters = document.querySelectorAll(".season-btn")
const sortSelect = document.getElementById("sort-select")
const priceRange = document.getElementById("price-range")
const maxPriceDisplay = document.getElementById("max-price")
const resultsCount = document.getElementById("results-count")
const clearFiltersBtn = document.getElementById("clear-filters")
const collectionSections = document.querySelectorAll(".collection-section")
const allProductsGrid = document.getElementById("all-products-grid")
const quickviewModal = document.getElementById("quickview-modal")
const quickviewContent = document.getElementById("quickview-content")

// Declare variables before using them
const cart = []
function showNotification(message) {
  alert(message)
}
function updateCartCount() {
  const cartCount = document.getElementById("cart-count")
  cartCount.textContent = cart.length
}

// Initialize products page
document.addEventListener("DOMContentLoaded", () => {
  displayProductsByCollection()
  updateResultsCount()

  // Set up event listeners
  setupEventListeners()
})

function setupEventListeners() {
  // Search functionality
  searchInput.addEventListener("input", function () {
    currentFilters.search = this.value.toLowerCase()
    applyFilters()
  })

  // Category filters
  categoryFilters.forEach((btn) => {
    btn.addEventListener("click", function () {
      categoryFilters.forEach((b) => b.classList.remove("active"))
      this.classList.add("active")
      currentFilters.category = this.getAttribute("data-category")
      applyFilters()
    })
  })

  // Season filters
  seasonFilters.forEach((btn) => {
    btn.addEventListener("click", function () {
      seasonFilters.forEach((b) => b.classList.remove("active"))
      this.classList.add("active")
      currentFilters.season = this.getAttribute("data-season")
      applyFilters()
    })
  })

  // Sort functionality
  sortSelect.addEventListener("change", function () {
    currentFilters.sort = this.value
    applyFilters()
  })

  // Price range
  priceRange.addEventListener("input", function () {
    currentFilters.maxPrice = Number.parseInt(this.value)
    maxPriceDisplay.textContent = `€${this.value}`
    applyFilters()
  })

  // Clear filters
  clearFiltersBtn.addEventListener("click", () => {
    clearAllFilters()
  })

  // Quick view modal
  quickviewModal.addEventListener("click", function (e) {
    if (e.target === this || e.target.classList.contains("close")) {
      this.style.display = "none"
    }
  })
}

function displayProductsByCollection() {
  const springSummerGrid = document.getElementById("spring-summer-grid")
  const autumnWinterGrid = document.getElementById("autumn-winter-grid")
  const yearRoundGrid = document.getElementById("year-round-grid")

  // Clear grids
  springSummerGrid.innerHTML = ""
  autumnWinterGrid.innerHTML = ""
  yearRoundGrid.innerHTML = ""

  // Group products by season
  const springSummerProducts = allProducts.filter((p) => p.season === "spring-summer")
  const autumnWinterProducts = allProducts.filter((p) => p.season === "autumn-winter")
  const yearRoundProducts = allProducts.filter((p) => p.season === "year-round")

  // Display products in respective grids
  displayProducts(springSummerProducts, springSummerGrid)
  displayProducts(autumnWinterProducts, autumnWinterGrid)
  displayProducts(yearRoundProducts, yearRoundGrid)
}

function applyFilters() {
  let filteredProducts = [...allProducts]

  // Apply category filter
  if (currentFilters.category !== "all") {
    filteredProducts = filteredProducts.filter((p) => p.category === currentFilters.category)
  }

  // Apply season filter
  if (currentFilters.season !== "all") {
    filteredProducts = filteredProducts.filter((p) => p.season === currentFilters.season)
  }

  // Apply search filter
  if (currentFilters.search) {
    filteredProducts = filteredProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(currentFilters.search) ||
        p.description.toLowerCase().includes(currentFilters.search),
    )
  }

  // Apply price filter
  filteredProducts = filteredProducts.filter((p) => p.price <= currentFilters.maxPrice)

  // Apply sorting
  filteredProducts = sortProducts(filteredProducts, currentFilters.sort)

  // Show/hide collection sections based on filters
  if (currentFilters.category !== "all" || currentFilters.search || currentFilters.maxPrice < 100) {
    // Hide collection sections and show all products grid
    collectionSections.forEach((section) => (section.style.display = "none"))
    allProductsGrid.style.display = "grid"
    displayProducts(filteredProducts, allProductsGrid)
  } else {
    // Show collection sections and hide all products grid
    collectionSections.forEach((section) => (section.style.display = "block"))
    allProductsGrid.style.display = "none"
    displayProductsByCollection()
  }

  updateResultsCount(filteredProducts.length)
}

function sortProducts(products, sortBy) {
  switch (sortBy) {
    case "price-low":
      return products.sort((a, b) => a.price - b.price)
    case "price-high":
      return products.sort((a, b) => b.price - a.price)
    case "name":
      return products.sort((a, b) => a.name.localeCompare(b.name))
    case "newest":
      return products.sort((a, b) => b.isNew - a.isNew)
    case "featured":
    default:
      return products.sort((a, b) => b.rating - a.rating)
  }
}

function displayProducts(products, container) {
  container.innerHTML = ""

  if (products.length === 0) {
    container.innerHTML =
      '<p style="grid-column: 1/-1; text-align: center; color: #666; font-size: 1.2rem;">Nenhum produto encontrado com os filtros selecionados.</p>'
    return
  }

  products.forEach((product) => {
    const productCard = createProductCard(product)
    container.appendChild(productCard)
  })
}

function createProductCard(product) {
  const card = document.createElement("div")
  card.className = "product-card"

  const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0
  const stars = "★".repeat(Math.floor(product.rating)) + "☆".repeat(5 - Math.floor(product.rating))

  card.innerHTML = `
        ${product.badge ? `<div class="product-badge ${product.badge}">${getBadgeText(product.badge, discount)}</div>` : ""}
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-overlay">
                <button class="quick-view-btn" onclick="showQuickView(${product.id})">
                    <i class="fas fa-eye"></i> Vista Rápida
                </button>
            </div>
        </div>
        <div class="product-info">
            <div class="product-category">${getCategoryName(product.category)}</div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-rating">
                <div class="stars">${stars}</div>
                <span class="rating-count">(${product.reviews})</span>
            </div>
            <div class="product-price-container">
                <span class="product-price">€${product.price.toFixed(2)}</span>
                ${product.oldPrice ? `<span class="product-price-old">€${product.oldPrice.toFixed(2)}</span>` : ""}
                ${discount > 0 ? `<span class="product-discount">-${discount}%</span>` : ""}
            </div>
            <div class="product-actions">
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Adicionar
                </button>
                <button class="wishlist-btn" onclick="toggleWishlist(${product.id})">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        </div>
    `

  return card
}

function getBadgeText(badge, discount) {
  switch (badge) {
    case "sale":
      return discount > 0 ? `-${discount}%` : "OFERTA"
    case "new":
      return "NOVO"
    case "featured":
      return "DESTAQUE"
    default:
      return badge.toUpperCase()
  }
}

function getCategoryName(category) {
  const categories = {
    necklaces: "Colares",
    earrings: "Brincos",
    bracelets: "Pulseiras",
    rings: "Anéis",
    sets: "Conjuntos",
  }
  return categories[category] || category
}

function showQuickView(productId) {
  const product = allProducts.find((p) => p.id === productId)
  if (!product) return

  const stars = "★".repeat(Math.floor(product.rating)) + "☆".repeat(5 - Math.floor(product.rating))
  const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0

  quickviewContent.innerHTML = `
        <div class="quickview-product">
            <div>
                <img src="${product.image}" alt="${product.name}" class="quickview-image">
            </div>
            <div class="quickview-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h2>${product.name}</h2>
                <div class="product-rating">
                    <div class="stars">${stars}</div>
                    <span class="rating-count">(${product.reviews} avaliações)</span>
                </div>
                <div class="product-price-container">
                    <span class="product-price">€${product.price.toFixed(2)}</span>
                    ${product.oldPrice ? `<span class="product-price-old">€${product.oldPrice.toFixed(2)}</span>` : ""}
                    ${discount > 0 ? `<span class="product-discount">-${discount}%</span>` : ""}
                </div>
                <p>${product.description}</p>
                <div class="product-actions">
                    <button class="add-to-cart" onclick="addToCart(${product.id}); quickviewModal.style.display='none';">
                        <i class="fas fa-shopping-cart"></i> Adicionar ao Carrinho
                    </button>
                    <button class="wishlist-btn" onclick="toggleWishlist(${product.id})">
                        <i class="fas fa-heart"></i> Lista de Desejos
                    </button>
                </div>
            </div>
        </div>
    `

  quickviewModal.style.display = "block"
}

function toggleWishlist(productId) {
  // Wishlist functionality would be implemented here
  showNotification("Produto adicionado à lista de desejos!")
}

function updateResultsCount(count = allProducts.length) {
  resultsCount.textContent = `Mostrando ${count} produto${count !== 1 ? "s" : ""}`
}

function clearAllFilters() {
  // Reset all filters
  currentFilters = {
    category: "all",
    season: "all",
    search: "",
    maxPrice: 100,
    sort: "featured",
  }

  // Reset UI elements
  searchInput.value = ""
  categoryFilters.forEach((btn) => btn.classList.remove("active"))
  categoryFilters[0].classList.add("active")
  seasonFilters.forEach((btn) => btn.classList.remove("active"))
  seasonFilters[0].classList.add("active")
  sortSelect.value = "featured"
  priceRange.value = 100
  maxPriceDisplay.textContent = "€100"

  // Show all products by collection
  collectionSections.forEach((section) => (section.style.display = "block"))
  allProductsGrid.style.display = "none"
  displayProductsByCollection()
  updateResultsCount()
}

// Override the addToCart function to work with the extended product list
function addToCart(productId) {
  const product = allProducts.find((p) => p.id === productId)
  if (!product) return

  const existingItem = cart.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({ ...product, quantity: 1 })
  }

  updateCartCount()
  showNotification("Produto adicionado ao carrinho!")
}
