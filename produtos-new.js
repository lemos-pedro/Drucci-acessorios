const products = [
  // Spring/Summer Collection - Necklaces
  {
    id: 1,
    name: "Colar Delicado Camadas Dourado",
    price: 24.99,
    oldPrice: 34.99,
    category: "necklaces",
    season: "spring-summer",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Colar em camadas delicadas, perfeito para o verão. Design minimalista e elegante.",
    badge: "sale",
    rating: 4.8,
    reviews: 124,
    isNew: false,
    featured: true,
  },
  {
    id: 2,
    name: "Colar Corrente Serpente Ouro",
    price: 29.99,
    oldPrice: 39.99,
    category: "necklaces",
    season: "spring-summer",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Corrente serpente em tom dourado, sofisticada e versátil para qualquer ocasião.",
    badge: "sale",
    rating: 4.9,
    reviews: 89,
    isNew: false,
    featured: false,
  },
  {
    id: 3,
    name: "Colar Pingente Lua Crescente",
    price: 19.99,
    category: "necklaces",
    season: "spring-summer",
    image:
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Pingente lua crescente delicado, simbolizando renovação e feminilidade.",
    badge: "new",
    rating: 4.7,
    reviews: 56,
    isNew: true,
    featured: false,
  },
  {
    id: 4,
    name: "Colar Choker Veludo Premium",
    price: 16.99,
    oldPrice: 24.99,
    category: "necklaces",
    season: "spring-summer",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Choker em veludo macio com detalhes dourados, tendência absoluta.",
    badge: "sale",
    rating: 4.6,
    reviews: 78,
    isNew: false,
    featured: false,
  },

  // Spring/Summer Collection - Earrings
  {
    id: 5,
    name: "Brincos Argola Texturizados",
    price: 18.99,
    oldPrice: 26.99,
    category: "earrings",
    season: "spring-summer",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Argolas médias com textura única, leves e confortáveis para uso diário.",
    badge: "sale",
    rating: 4.8,
    reviews: 143,
    isNew: false,
    featured: true,
  },
  {
    id: 6,
    name: "Brincos Pendentes Cristal",
    price: 22.99,
    category: "earrings",
    season: "spring-summer",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Brincos pendentes com cristais brilhantes, elegância para ocasiões especiais.",
    badge: "new",
    rating: 4.9,
    reviews: 67,
    isNew: true,
    featured: false,
  },
  {
    id: 7,
    name: "Brincos Botão Pérola Clássica",
    price: 14.99,
    oldPrice: 21.99,
    category: "earrings",
    season: "spring-summer",
    image:
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Clássicos botões de pérola sintética, atemporais e sofisticados.",
    badge: "sale",
    rating: 4.7,
    reviews: 198,
    isNew: false,
    featured: false,
  },
  {
    id: 8,
    name: "Brincos Ear Cuff Moderno",
    price: 21.99,
    category: "earrings",
    season: "spring-summer",
    image:
      "https://images.unsplash.com/photo-1596944946731-83d2c4c4c0b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Ear cuff moderno sem furo, design inovador e confortável.",
    badge: "new",
    rating: 4.5,
    reviews: 34,
    isNew: true,
    featured: false,
  },

  // Spring/Summer Collection - Bracelets
  {
    id: 9,
    name: "Pulseira Corrente Fina Dourada",
    price: 17.99,
    oldPrice: 25.99,
    category: "bracelets",
    season: "spring-summer",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Pulseira corrente fina e delicada, perfeita para combinar com outros acessórios.",
    badge: "sale",
    rating: 4.6,
    reviews: 92,
    isNew: false,
    featured: false,
  },
  {
    id: 10,
    name: "Pulseira Charm Personalizada",
    price: 26.99,
    category: "bracelets",
    season: "spring-summer",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Pulseira com charms intercambiáveis, crie sua combinação única.",
    badge: "featured",
    rating: 4.8,
    reviews: 76,
    isNew: false,
    featured: true,
  },

  // Spring/Summer Collection - Rings
  {
    id: 11,
    name: "Anel Solitário Cristal Brilhante",
    price: 23.99,
    category: "rings",
    season: "spring-summer",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Anel solitário com cristal de alta qualidade, brilho incomparável.",
    badge: "featured",
    rating: 4.9,
    reviews: 156,
    isNew: false,
    featured: true,
  },
  {
    id: 12,
    name: "Anel Duplo Minimalista",
    price: 15.99,
    oldPrice: 22.99,
    category: "rings",
    season: "spring-summer",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Design minimalista e moderno, duas bandas delicadas em uma peça.",
    badge: "sale",
    rating: 4.5,
    reviews: 43,
    isNew: false,
    featured: false,
  },

  // Autumn/Winter Collection - Necklaces
  {
    id: 13,
    name: "Colar Statement Vintage",
    price: 34.99,
    oldPrice: 49.99,
    category: "necklaces",
    season: "autumn-winter",
    image:
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Colar statement com inspiração vintage, peça central para looks sofisticados.",
    badge: "sale",
    rating: 4.8,
    reviews: 87,
    isNew: false,
    featured: false,
  },
  {
    id: 14,
    name: "Colar Camadas Elegante",
    price: 28.99,
    category: "necklaces",
    season: "autumn-winter",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Múltiplas camadas em diferentes comprimentos, elegância refinada.",
    badge: "new",
    rating: 4.7,
    reviews: 65,
    isNew: true,
    featured: false,
  },

  // Autumn/Winter Collection - Earrings
  {
    id: 15,
    name: "Brincos Chandelier Luxo",
    price: 31.99,
    category: "earrings",
    season: "autumn-winter",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Brincos chandelier elaborados, perfeitos para eventos especiais.",
    badge: "featured",
    rating: 4.9,
    reviews: 54,
    isNew: false,
    featured: true,
  },
  {
    id: 16,
    name: "Brincos Gota Cristal Negro",
    price: 25.99,
    oldPrice: 35.99,
    category: "earrings",
    season: "autumn-winter",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Elegantes brincos em formato de gota com cristais negros sofisticados.",
    badge: "sale",
    rating: 4.6,
    reviews: 78,
    isNew: false,
    featured: false,
  },

  // Autumn/Winter Collection - Bracelets
  {
    id: 17,
    name: "Pulseira Elos Grossos Premium",
    price: 32.99,
    oldPrice: 42.99,
    category: "bracelets",
    season: "autumn-winter",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Pulseira com elos grossos e acabamento premium, design marcante.",
    badge: "sale",
    rating: 4.7,
    reviews: 91,
    isNew: false,
    featured: false,
  },
  {
    id: 18,
    name: "Pulseira Cuff Texturizada",
    price: 27.99,
    category: "bracelets",
    season: "autumn-winter",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Bracelete cuff com textura única, peça statement para o pulso.",
    badge: "new",
    rating: 4.8,
    reviews: 45,
    isNew: true,
    featured: false,
  },

  // Autumn/Winter Collection - Rings
  {
    id: 19,
    name: "Anel Cocktail Vintage Luxo",
    price: 36.99,
    category: "rings",
    season: "autumn-winter",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Anel cocktail com inspiração vintage e cristais deslumbrantes.",
    badge: "featured",
    rating: 4.9,
    reviews: 67,
    isNew: false,
    featured: true,
  },
  {
    id: 20,
    name: "Anel Banda Texturizada Ouro",
    price: 21.99,
    oldPrice: 29.99,
    category: "rings",
    season: "autumn-winter",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Banda larga com textura sofisticada em tom dourado.",
    badge: "sale",
    rating: 4.5,
    reviews: 38,
    isNew: false,
    featured: false,
  },

  // Year Round Collection - Sets
  {
    id: 21,
    name: "Conjunto Clássico Dourado Premium",
    price: 49.99,
    oldPrice: 69.99,
    category: "sets",
    season: "year-round",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Conjunto completo: colar, brincos e pulseira em harmonia perfeita.",
    badge: "sale",
    rating: 4.9,
    reviews: 234,
    isNew: false,
    featured: true,
  },
  {
    id: 22,
    name: "Conjunto Pérolas Elegante",
    price: 44.99,
    category: "sets",
    season: "year-round",
    image:
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Conjunto de pérolas sintéticas de alta qualidade, elegância atemporal.",
    badge: "featured",
    rating: 4.8,
    reviews: 187,
    isNew: false,
    featured: true,
  },

  // Year Round Collection - Individual pieces
  {
    id: 23,
    name: "Colar Pérolas Eterno",
    price: 38.99,
    category: "necklaces",
    season: "year-round",
    image:
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Clássico colar de pérolas que transcende gerações e tendências.",
    badge: "featured",
    rating: 4.9,
    reviews: 298,
    isNew: false,
    featured: true,
  },
  {
    id: 24,
    name: "Brincos Diamante Simulado",
    price: 33.99,
    oldPrice: 44.99,
    category: "earrings",
    season: "year-round",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Brincos com cristais que simulam diamantes, brilho incomparável.",
    badge: "sale",
    rating: 4.8,
    reviews: 167,
    isNew: false,
    featured: false,
  },
  {
    id: 25,
    name: "Pulseira Tennis Cristais",
    price: 41.99,
    category: "bracelets",
    season: "year-round",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Pulseira tennis com cristais cintilantes, luxo acessível.",
    badge: "featured",
    rating: 4.9,
    reviews: 145,
    isNew: false,
    featured: true,
  },
  {
    id: 26,
    name: "Anel Aliança Eterna Ouro",
    price: 29.99,
    category: "rings",
    season: "year-round",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Aliança clássica em tom dourado, símbolo de compromisso e elegância.",
    badge: "featured",
    rating: 4.8,
    reviews: 203,
    isNew: false,
    featured: true,
  },

  // Additional trendy pieces
  {
    id: 27,
    name: "Colar Corrente Grossa Moderna",
    price: 26.99,
    category: "necklaces",
    season: "year-round",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Corrente grossa moderna, tendência urbana e sofisticada.",
    badge: "new",
    rating: 4.6,
    reviews: 89,
    isNew: true,
    featured: false,
  },
  {
    id: 28,
    name: "Brincos Assimétricos Modernos",
    price: 19.99,
    category: "earrings",
    season: "spring-summer",
    image:
      "https://www.google.com/imgres?q=Brincos%20Assim%C3%A9tricos%20Modernos&imgurl=https%3A%2F%2Fadorojoias.com.br%2Fwp-content%2Fuploads%2F2024%2F10%2FCole%25C3%25A7%25C3%25A3o-Snake-Motif-HStern_Brincos-de-ouro-amarelo-18K-com-diamantesB2B217943.jpg&imgrefurl=https%3A%2F%2Fadorojoias.com.br%2F%3Fp%3D22502&docid=EwVmp_gR9fN5QM&tbnid=tzZuNSlt_qkPxM&vet=12ahUKEwi1wM3T-euOAxUaQzABHQpnAMIQM3oECCMQAA..i&w=5504&h=5137&hcb=2&ved=2ahUKEwi1wM3T-euOAxUaQzABHQpnAMIQM3oECCMQAA",
    description: "Par assimétrico moderno, ousadia e estilo em uma peça única.",
    badge: "new",
    rating: 4.4,
    reviews: 52,
    isNew: true,
    featured: false,
  },
  {
    id: 29,
    name: "Pulseira Cordão Ajustável",
    price: 18.99,
    oldPrice: 26.99,
    category: "bracelets",
    season: "spring-summer",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Pulseira em cordão com ajuste deslizante, conforto e praticidade.",
    badge: "sale",
    rating: 4.5,
    reviews: 73,
    isNew: false,
    featured: false,
  },
  {
    id: 30,
    name: "Anel Empilhável Set 3 Peças",
    price: 24.99,
    category: "rings",
    season: "year-round",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Set de 3 anéis empilháveis, versatilidade e estilo em suas mãos.",
    badge: "featured",
    rating: 4.7,
    reviews: 112,
    isNew: false,
    featured: false,
  },
];

// Application state
let currentFilters = {
  category: "all",
  season: "all",
  search: "",
  maxPrice: 100,
  sort: "featured",
};

let cart = JSON.parse(localStorage.getItem("drucciCart")) || [];
const wishlist = JSON.parse(localStorage.getItem("drucciWishlist")) || [];

// DOM elements
const productsGrid = document.getElementById("productsGrid");
const loadingSpinner = document.getElementById("loadingSpinner");
const noResults = document.getElementById("noResults");
const resultsCount = document.getElementById("resultsCount");
const cartCount = document.getElementById("cartCount");
const cartBtn = document.getElementById("cartBtn");
const searchInput = document.getElementById("searchInput");

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  // Validate DOM elements
  if (!productsGrid || !searchInput || !loadingSpinner || !noResults || !resultsCount || !cartCount || !cartBtn) {
    console.error("Um ou mais elementos do DOM não foram encontrados.");
    return;
  }

  // Initialize AOS animations
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    offset: 100,
  });

  // Load products with delay to show loading state
  setTimeout(() => {
    loadProducts();
    setupEventListeners();
    updateCartCount();
  }, 1000);
});

// Setup event listeners
function setupEventListeners() {
  document.getElementById("categoryFilter").addEventListener("change", debounce(handleFilterChange, 300));
  document.getElementById("seasonFilter").addEventListener("change", debounce(handleFilterChange, 300));
  document.getElementById("sortFilter").addEventListener("change", debounce(handleFilterChange, 300));
  document.getElementById("priceRange").addEventListener("input", debounce(handlePriceChange, 300));
  document.getElementById("clearFilters").addEventListener("click", clearFilters);
  searchInput.addEventListener("input", debounce(handleSearch, 300));
  cartBtn.addEventListener("click", () => {
    const cartModal = new bootstrap.Modal(document.getElementById("cartModal"));
    displayCartItems();
    cartModal.show();
  });
  document.getElementById("checkoutBtn").addEventListener("click", handleCheckout);
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      const modals = document.querySelectorAll(".modal");
      modals.forEach((modal) => {
        const modalInstance = bootstrap.Modal.getInstance(modal);
        if (modalInstance) modalInstance.hide();
      });
    }
  });
}

// Handle filter changes
function handleFilterChange(e) {
  const filterId = e.target.id;
  const value = e.target.value;

  switch (filterId) {
    case "categoryFilter":
      currentFilters.category = value;
      break;
    case "seasonFilter":
      currentFilters.season = value;
      break;
    case "sortFilter":
      currentFilters.sort = value;
      break;
  }

  applyFilters();
}

// Handle price range change
function handlePriceChange(e) {
  const value = parseInt(e.target.value);
  currentFilters.maxPrice = value;
  document.getElementById("priceValue").textContent = `€${value}`;
  applyFilters();
}

// Handle search
function handleSearch(e) {
  currentFilters.search = e.target.value.toLowerCase();
  applyFilters();
}

// Clear all filters
function clearFilters() {
  currentFilters = {
    category: "all",
    season: "all",
    search: "",
    maxPrice: 100,
    sort: "featured",
  };

  document.getElementById("categoryFilter").value = "all";
  document.getElementById("seasonFilter").value = "all";
  document.getElementById("sortFilter").value = "featured";
  document.getElementById("priceRange").value = 100;
  document.getElementById("priceValue").textContent = "€100";
  searchInput.value = "";

  applyFilters();
}

// Apply filters and load products
function applyFilters() {
  showLoading();

  setTimeout(() => {
    let filteredProducts = [...products];

    // Apply category filter
    if (currentFilters.category !== "all") {
      filteredProducts = filteredProducts.filter((p) => p.category === currentFilters.category);
    }

    // Apply season filter
    if (currentFilters.season !== "all") {
      filteredProducts = filteredProducts.filter((p) => p.season === currentFilters.season);
    }

    // Apply search filter
    if (currentFilters.search) {
      filteredProducts = filteredProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(currentFilters.search) ||
          p.description.toLowerCase().includes(currentFilters.search)
      );
    }

    // Apply price filter
    filteredProducts = filteredProducts.filter((p) => p.price <= currentFilters.maxPrice);

    // Apply sorting
    filteredProducts = sortProducts(filteredProducts);

    displayProducts(filteredProducts);
    updateResultsCount(filteredProducts.length);
  }, 500);
}

// Sort products based on selected criteria
function sortProducts(products) {
  switch (currentFilters.sort) {
    case "price-low":
      return products.sort((a, b) => a.price - b.price);
    case "price-high":
      return products.sort((a, b) => b.price - a.price);
    case "newest":
      return products.sort((a, b) => b.isNew - a.isNew);
    case "rating":
      return products.sort((a, b) => b.rating - a.rating);
    case "featured":
    default:
      return products.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.rating - a.rating;
      });
  }
}

// Load and display products
function loadProducts() {
  applyFilters();
}

// Display products in grid
function displayProducts(productsToShow) {
  hideLoading();

  if (productsToShow.length === 0) {
    showNoResults();
    return;
  }

  hideNoResults();
  const fragment = document.createDocumentFragment();

  productsToShow.forEach((product, index) => {
    const productCard = createProductCard(product);
    productCard.style.animationDelay = `${index * 0.1}s`;
    productCard.classList.add("fade-in-up");
    fragment.appendChild(productCard);
  });

  productsGrid.innerHTML = "";
  productsGrid.appendChild(fragment);
}

// Create product card HTML
function createProductCard(product) {
  const col = document.createElement("div");
  col.className = "col-lg-3 col-md-4 col-sm-6";

  const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;
  const stars = generateStars(product.rating);

  col.innerHTML = `
    <div class="product-card h-100">
      ${product.badge ? `<div class="product-badge badge-${product.badge}">${getBadgeText(product.badge, discount)}</div>` : ""}
      
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
        <div class="product-overlay">
          <button class="quick-view-btn" onclick="showQuickView(${product.id})">
            <i class="fas fa-eye me-2"></i>Vista Rápida
          </button>
        </div>
      </div>
      
      <div class="product-info">
        <div class="product-category">${getCategoryName(product.category)}</div>
        <h5 class="product-title">${product.name}</h5>
        <p class="product-description">${product.description}</p>
        
        <div class="product-rating">
          <div class="stars">${stars}</div>
          <span class="rating-count">(${product.reviews})</span>
        </div>
        
        <div class="product-price-container">
          <span class="product-price">€${product.price.toFixed(2)}</span>
          ${product.oldPrice ? `<span class="product-price-old">€${product.oldPrice.toFixed(2)}</span>` : ""}
          ${discount > 0 ? `<span class="discount-badge">-${discount}%</span>` : ""}
        </div>
        
        <div class="product-actions">
          <button class="btn-add-cart" onclick="addToCart(${product.id})" aria-label="Adicionar ao carrinho">
            <i class="fas fa-shopping-cart me-2"></i>Adicionar
          </button>
          <button class="btn-wishlist ${wishlist.includes(product.id) ? "active" : ""}" onclick="toggleWishlist(${product.id})" aria-label="Adicionar ou remover da lista de desejos">
            <i class="fas fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  return col;
}

// Helper functions
function getBadgeText(badge, discount) {
  switch (badge) {
    case "sale":
      return discount > 0 ? `-${discount}%` : "OFERTA";
    case "new":
      return "NOVO";
    case "featured":
      return "DESTAQUE";
    default:
      return badge.toUpperCase();
  }
}

function getCategoryName(category) {
  const categories = {
    necklaces: "Colares",
    earrings: "Brincos",
    bracelets: "Pulseiras",
    rings: "Anéis",
    sets: "Conjuntos",
  };
  return categories[category] || category;
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let stars = "";

  stars += '<i class="fas fa-star"></i>'.repeat(fullStars);
  if (hasHalfStar) stars += '<i class="fas fa-star-half-alt"></i>';
  stars += '<i class="far fa-star"></i>'.repeat(5 - Math.ceil(rating));

  return stars;
}

// Loading states
function showLoading() {
  loadingSpinner.style.display = "block";
  productsGrid.style.display = "none";
  noResults.style.display = "none";
}

function hideLoading() {
  loadingSpinner.style.display = "none";
  productsGrid.style.display = "flex";
}

function showNoResults() {
  noResults.style.display = "block";
  productsGrid.style.display = "none";
}

function hideNoResults() {
  noResults.style.display = "none";
}

// Update results count
function updateResultsCount(count) {
  resultsCount.textContent = `Mostrando ${count} produto${count !== 1 ? "s" : ""}`;
}

// Cart functionality
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) {
    showNotification("Produto não encontrado!", "danger");
    return;
  }

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  updateCartCount();
  showNotification("Produto adicionado ao carrinho!", "success");
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  updateCartCount();
  displayCartItems();
  showNotification("Produto removido do carrinho!", "info");
}

function updateQuantity(productId, newQuantity) {
  newQuantity = parseInt(newQuantity);
  if (isNaN(newQuantity) || newQuantity < 1) {
    removeFromCart(productId);
    return;
  }

  const item = cart.find((item) => item.id === productId);
  if (item) {
    item.quantity = newQuantity;
    saveCart();
    displayCartItems();
  }
}

function displayCartItems() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="text-center py-5">
        <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
        <h5 class="text-muted">Seu carrinho está vazio</h5>
        <p class="text-muted">Adicione alguns produtos incríveis!</p>
      </div>
    `;
    cartTotal.textContent = "€0.00";
    return;
  }

  let total = 0;
  cartItems.innerHTML = "";

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-info">
        <h6 class="cart-item-title">${item.name}</h6>
        <div class="cart-item-price">€${item.price.toFixed(2)}</div>
        <div class="quantity-controls">
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})" aria-label="Diminuir quantidade">
            <i class="fas fa-minus"></i>
          </button>
          <input type="number" class="quantity-input" value="${item.quantity}" min="1" 
                 onchange="updateQuantity(${item.id}, parseInt(this.value))" aria-label="Quantidade">
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})" aria-label="Aumentar quantidade">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
      <div class="text-end">
        <div class="fw-bold">€${itemTotal.toFixed(2)}</div>
        <button class="btn btn-sm btn-outline-danger mt-2" onclick="removeFromCart(${item.id})" aria-label="Remover item do carrinho">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `;

    cartItems.appendChild(cartItem);
  });

  cartTotal.textContent = `€${total.toFixed(2)}`;
}

function saveCart() {
  localStorage.setItem("drucciCart", JSON.stringify(cart));
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
  cartCount.style.display = totalItems > 0 ? "block" : "none";
}

// Wishlist functionality
function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);

  if (index > -1) {
    wishlist.splice(index, 1);
    showNotification("Removido da lista de desejos!", "info");
  } else {
    wishlist.push(productId);
    showNotification("Adicionado à lista de desejos!", "success");
  }

  localStorage.setItem("drucciWishlist", JSON.stringify(wishlist));

  const wishlistBtns = document.querySelectorAll(`[onclick="toggleWishlist(${productId})"]`);
  wishlistBtns.forEach((btn) => {
    btn.classList.toggle("active", wishlist.includes(productId));
  });
}

// Quick view functionality
function showQuickView(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) {
    showNotification("Produto não encontrado!", "danger");
    return;
  }

  const quickViewContent = document.getElementById("quickViewContent");
  const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;
  const stars = generateStars(product.rating);

  quickViewContent.innerHTML = `
    <div class="row g-4">
      <div class="col-md-6">
        <img src="${product.image}" alt="${product.name}" class="img-fluid rounded-3">
      </div>
      <div class="col-md-6">
        <div class="product-category text-primary fw-bold mb-2">${getCategoryName(product.category)}</div>
        <h3 class="mb-3">${product.name}</h3>
        
        <div class="product-rating mb-3">
          <div class="stars">${stars}</div>
          <span class="rating-count ms-2">(${product.reviews} avaliações)</span>
        </div>
        
        <div class="product-price-container mb-4">
          <span class="product-price fs-2">€${product.price.toFixed(2)}</span>
          ${product.oldPrice ? `<span class="product-price-old fs-5 ms-2">€${product.oldPrice.toFixed(2)}</span>` : ""}
          ${discount > 0 ? `<span class="discount-badge ms-2">-${discount}%</span>` : ""}
        </div>
        
        <p class="lead mb-4">${product.description}</p>
        
        <div class="d-flex gap-3">
          <button class="btn btn-primary btn-lg flex-fill" onclick="addToCart(${product.id}); bootstrap.Modal.getInstance(document.getElementById('quickViewModal')).hide();" aria-label="Adicionar ao carrinho">
            <i class="fas fa-shopping-cart me-2"></i>Adicionar ao Carrinho
          </button>
          <button class="btn btn-outline-primary btn-lg" onclick="toggleWishlist(${product.id})" aria-label="Adicionar ou remover da lista de desejos">
            <i class="fas fa-heart"></i>
          </button>
        </div>
        
        <div class="mt-4">
          <small class="text-muted">
            <i class="fas fa-shipping-fast me-2"></i>Envio grátis em compras acima de €50<br>
            <i class="fas fa-undo me-2"></i>30 dias para troca<br>
            <i class="fas fa-shield-alt me-2"></i>Garantia de qualidade
          </small>
        </div>
      </div>
    </div>
  `;

  const quickViewModal = new bootstrap.Modal(document.getElementById("quickViewModal"));
  quickViewModal.show();
}

// Checkout functionality
function handleCheckout() {
  if (cart.length === 0) {
    showNotification("Seu carrinho está vazio!", "warning");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  let message = `🛍️ *Pedido Drucci Acessórios*\n\n`;

  cart.forEach((item) => {
    message += `• ${item.name}\n`;
    message += `  Quantidade: ${item.quantity}\n`;
    message += `  Preço: €${(item.price * item.quantity).toFixed(2)}\n\n`;
  });

  message += `💰 *Total: €${total.toFixed(2)}*\n\n`;
  message += `Gostaria de finalizar este pedido. Obrigado!`;

  const whatsappUrl = `https://wa.me/351964591135?text=${encodeURIComponent(message)}`;
  try {
    window.open(whatsappUrl, "_blank");
    cart = [];
    saveCart();
    updateCartCount();
    const cartModal = bootstrap.Modal.getInstance(document.getElementById("cartModal"));
    cartModal.hide();
    showNotification("Redirecionando para WhatsApp...", "success");
  } catch (error) {
    showNotification("Erro ao redirecionar para o WhatsApp. Tente novamente!", "danger");
  }
}

// Notification system
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
  notification.style.cssText = `
    top: 100px;
    right: 20px;
    z-index: 9999;
    min-width: 300px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  `;

  notification.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar notificação"></button>
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 5000);
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Newsletter subscription
document.querySelector(".newsletter-section .btn").addEventListener("click", () => {
  const emailInput = document.querySelector(".newsletter-section input[type='email']");
  const email = emailInput.value.trim();

  if (!email) {
    showNotification("Por favor, insira seu email!", "warning");
    return;
  }

  if (!isValidEmail(email)) {
    showNotification("Por favor, insira um email válido!", "danger");
    return;
  }

  showNotification("Obrigado! Você foi inscrito na nossa newsletter!", "success");
  emailInput.value = "";
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll effect to navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});