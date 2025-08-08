

// Sample Data
const appData = {
  categories: [
    {"id": 1, "name": "Clothing", "icon": "👕", "count": 156, "image": "/api/placeholder/300/200"},
    {"id": 2, "name": "Electronics", "icon": "📱", "count": 89, "image": "/api/placeholder/300/200"},
    {"id": 3, "name": "Books", "icon": "📚", "count": 234, "image": "/api/placeholder/300/200"},
    {"id": 4, "name": "Home & Garden", "icon": "🏠", "count": 178, "image": "/api/placeholder/300/200"},
    {"id": 5, "name": "Sports", "icon": "⚽", "count": 67, "image": "/api/placeholder/300/200"},
    {"id": 6, "name": "Toys", "icon": "🧸", "count": 94, "image": "/api/placeholder/300/200"},
    {"id": 7, "name": "Art & Craft", "icon": "🎨", "count": 45, "image": "/api/placeholder/300/200"},
    {"id": 8, "name": "Music", "icon": "🎵", "count": 52, "image": "/api/placeholder/300/200"}
  ],

  sampleItems: [
    {
      "id": 1,
      "title": "Vintage Denim Jacket",
      "category": "Clothing",
      "condition": "Good",
      "originalPrice": 89,
      "swapValue": 45,
      "description": "Classic vintage denim jacket in excellent condition. Perfect for any season. Barely worn, from a smoke-free home. This timeless piece features classic button closure, chest pockets, and a comfortable fit that works for any style.",
      "images": ["/api/placeholder/400/300", "/api/placeholder/400/300"],
      "location": "San Francisco, CA",
      "seller": {"name": "Emma Chen", "rating": 4.8, "verified": true, "trades": 47},
      "postedDate": "2024-01-15",
      "views": 127,
      "likes": 23
    },
    {
      "id": 2,
      "title": "iPhone 12 Pro Max",
      "category": "Electronics",
      "condition": "Like New",
      "originalPrice": 999,
      "swapValue": 650,
      "description": "iPhone 12 Pro Max in pristine condition. Includes original box, charger, and screen protector already applied. Battery health at 95%. No scratches or dents, always kept in a case with screen protector.",
      "images": ["/api/placeholder/400/300", "/api/placeholder/400/300"],
      "location": "New York, NY",
      "seller": {"name": "Marcus Johnson", "rating": 4.9, "verified": true, "trades": 32},
      "postedDate": "2024-01-14",
      "views": 89,
      "likes": 15
    },
    {
      "id": 3,
      "title": "The Complete Harry Potter Series",
      "category": "Books",
      "condition": "New",
      "originalPrice": 120,
      "swapValue": 75,
      "description": "Brand new complete Harry Potter book series. Never been read, perfect for any book lover or collector. All 7 books in hardcover, still in original packaging. Great for gifting or starting your magical journey.",
      "images": ["/api/placeholder/400/300"],
      "location": "Los Angeles, CA",
      "seller": {"name": "Sarah Wilson", "rating": 4.7, "verified": false, "trades": 23},
      "postedDate": "2024-01-13",
      "views": 156,
      "likes": 31
    },
    {
      "id": 4,
      "title": "Yoga Mat & Accessories Set",
      "category": "Sports",
      "condition": "Like New",
      "originalPrice": 85,
      "swapValue": 40,
      "description": "High-quality yoga mat with blocks, strap, and carrying bag. Used only a few times, excellent condition. Non-slip surface, perfect thickness for comfort and stability. Includes cleaning spray and towel.",
      "images": ["/api/placeholder/400/300", "/api/placeholder/400/300"],
      "location": "Austin, TX",
      "seller": {"name": "Lisa Rodriguez", "rating": 4.6, "verified": true, "trades": 18},
      "postedDate": "2024-01-12",
      "views": 73,
      "likes": 18
    },
    {
      "id": 5,
      "title": "Vintage Wooden Coffee Table",
      "category": "Home & Garden",
      "condition": "Good",
      "originalPrice": 200,
      "swapValue": 120,
      "description": "Beautiful vintage wooden coffee table. Some minor wear but adds character. Perfect for any living room. Solid oak construction, sturdy and well-maintained. Dimensions: 48\" x 24\" x 16\" high.",
      "images": ["/api/placeholder/400/300"],
      "location": "Seattle, WA",
      "seller": {"name": "David Kim", "rating": 4.5, "verified": true, "trades": 29},
      "postedDate": "2024-01-11",
      "views": 94,
      "likes": 12
    },
    {
      "id": 6,
      "title": "LEGO Architecture Set",
      "category": "Toys",
      "condition": "New",
      "originalPrice": 150,
      "swapValue": 100,
      "description": "Unopened LEGO Architecture set. Perfect gift or personal collection piece. Features detailed building instructions and display stand. Great for adults and kids alike. Model: Statue of Liberty set.",
      "images": ["/api/placeholder/400/300", "/api/placeholder/400/300"],
      "location": "Chicago, IL",
      "seller": {"name": "Alex Thompson", "rating": 4.8, "verified": true, "trades": 15},
      "postedDate": "2024-01-10",
      "views": 68,
      "likes": 9
    },
    {
      "id": 7,
      "title": "Professional Paint Set",
      "category": "Art & Craft",
      "condition": "Like New",
      "originalPrice": 95,
      "swapValue": 60,
      "description": "Professional acrylic paint set with brushes and canvas. Barely used, perfect for artists. Includes 24 premium colors, various brush sizes, and 10 stretched canvases ready for painting.",
      "images": ["/api/placeholder/400/300"],
      "location": "Portland, OR",
      "seller": {"name": "Maya Patel", "rating": 4.7, "verified": true, "trades": 12},
      "postedDate": "2024-01-09",
      "views": 45,
      "likes": 8
    },
    {
      "id": 8,
      "title": "Acoustic Guitar",
      "category": "Music",
      "condition": "Good",
      "originalPrice": 300,
      "swapValue": 180,
      "description": "Beautiful acoustic guitar in good playing condition. Some minor cosmetic wear but sounds amazing. Includes soft case, picks, and tuner. Perfect for beginners or experienced players.",
      "images": ["/api/placeholder/400/300", "/api/placeholder/400/300"],
      "location": "Nashville, TN",
      "seller": {"name": "Jake Williams", "rating": 4.6, "verified": true, "trades": 25},
      "postedDate": "2024-01-08",
      "views": 112,
      "likes": 22
    }
  ],
  sustainabilityTips: [
    "Did you know? Swapping items instead of buying new can reduce CO2 emissions by up to 80%",
    "Every item you swap saves approximately 2.3kg of CO2 from entering the atmosphere",
    "The fashion industry is the 2nd largest polluter - swap clothes to make a difference!",
    "Electronics contain rare earth metals - extending their life through swapping helps the planet"
  ]
};

// Application State
let currentUser = null;
let currentFilter = 'all';
let displayedItems = [...appData.sampleItems];
let favorites = [];
let isLoggedIn = false;

// DOM Elements
const elements = {
  authModal: document.getElementById('authModal'),
  addItemModal: document.getElementById('addItemModal'),
  itemModal: document.getElementById('itemModal'),
  loginForm: document.getElementById('loginForm'),
  registerForm: document.getElementById('registerForm'),
  navMobile: document.getElementById('navMobile'),
  categoriesGrid: document.getElementById('categoriesGrid'),
  itemsGrid: document.getElementById('itemsGrid'),
  sustainabilityTip: document.getElementById('sustainabilityTip'),
  searchInput: document.getElementById('searchInput'),
  itemDetails: document.getElementById('itemDetails')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
  renderCategories();
  renderItems();
  showRandomSustainabilityTip();
});

// Initialize App
function initializeApp() {
  // Check for saved user session (in real app would be from server)
  const savedUser = localStorage.getItem('ecoswap_user');
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    isLoggedIn = true;
    updateUIForLoggedInUser();
  }
  
  // Load favorites
  const savedFavorites = localStorage.getItem('ecoswap_favorites');
  if (savedFavorites) {
    favorites = JSON.parse(savedFavorites);
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Modal controls
  setupModalListeners();
  
  // Navigation
  document.getElementById('navToggle').addEventListener('click', toggleMobileNav);
  
  // Fix: Properly setup login button event listener
  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) {
    loginBtn.addEventListener('click', function(e) {
      e.preventDefault();
      if (!isLoggedIn) {
        openModal('authModal');
      } else {
        showNotification('Profile features coming soon!', 'info');
      }
    });
  }
  
  // Fix: Setup navigation links
  setupNavigationLinks();
  
  const addItemBtn = document.getElementById('addItemBtn');
  if (addItemBtn) {
    addItemBtn.addEventListener('click', handleAddItemClick);
  }
  
  // Auth form toggles
  const showRegisterLink = document.getElementById('showRegister');
  const showLoginLink = document.getElementById('showLogin');
  
  if (showRegisterLink) {
    showRegisterLink.addEventListener('click', (e) => {
      e.preventDefault();
      toggleAuthForm('register');
    });
  }
  
  if (showLoginLink) {
    showLoginLink.addEventListener('click', (e) => {
      e.preventDefault();
      toggleAuthForm('login');
    });
  }
  
  // Hero buttons
  const heroExploreBtn = document.getElementById('heroExploreBtn');
  const heroListBtn = document.getElementById('heroListBtn');
  
  if (heroExploreBtn) {
    heroExploreBtn.addEventListener('click', () => scrollToSection('featured-items'));
  }
  
  if (heroListBtn) {
    heroListBtn.addEventListener('click', handleAddItemClick);
  }
  
  // Fix: Filter buttons setup
  setupFilterButtons();
  
  // Search
  if (elements.searchInput) {
    elements.searchInput.addEventListener('input', handleSearch);
  }
  
  const searchBtn = document.querySelector('.search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', handleSearch);
  }
  
  // Load more button
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', loadMoreItems);
  }
  
  // Form submissions
  setupFormSubmissions();
}

// Fix: Setup navigation links
function setupNavigationLinks() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const linkText = this.textContent.trim().toLowerCase();
      
      switch(linkText) {
        case 'browse':
          scrollToSection('featured-items');
          break;
        case 'how it works':
          scrollToSection('how-it-works');
          break;
        case 'community':
          scrollToSection('sustainability');
          break;
        case 'messages':
          showNotification('Messaging feature coming soon!', 'info');
          break;
        case 'profile':
          if (isLoggedIn) {
            showNotification('Profile page coming soon!', 'info');
          } else {
            openModal('authModal');
          }
          break;
        default:
          break;
      }
      
      // Close mobile nav if open
      if (!elements.navMobile.classList.contains('hidden')) {
        toggleMobileNav();
      }
    });
  });
}

// Fix: Setup filter buttons
function setupFilterButtons() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const filter = this.dataset.filter;
      handleFilterClick(filter);
    });
  });
}

// Modal Setup
function setupModalListeners() {
  // Close modal buttons
  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', closeModals);
  });
  
  // Close modal when clicking outside
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModals();
    });
  });
  
  // ESC key to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModals();
  });
}

// Form Submissions
function setupFormSubmissions() {
  // Login form
  if (elements.loginForm) {
    const loginFormElement = elements.loginForm.querySelector('form');
    if (loginFormElement) {
      loginFormElement.addEventListener('submit', (e) => {
        e.preventDefault();
        handleLogin();
      });
    }
  }
  
  // Register form
  if (elements.registerForm) {
    const registerFormElement = elements.registerForm.querySelector('form');
    if (registerFormElement) {
      registerFormElement.addEventListener('submit', (e) => {
        e.preventDefault();
        handleRegister();
      });
    }
  }
  
  // Add item form
  const addItemForm = document.getElementById('addItemForm');
  if (addItemForm) {
    addItemForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleAddItem();
    });
  }
}

// Authentication Functions
function handleLogin() {
  const email = elements.loginForm.querySelector('input[type="email"]').value;
  const password = elements.loginForm.querySelector('input[type="password"]').value;
  
  if (email && password) {
    // Simulate login success
    currentUser = {
      id: Date.now(),
      name: email.split('@')[0],
      email: email,
      rating: 5.0,
      trades: 0,
      verified: false,
      sustainabilityScore: 50
    };
    
    isLoggedIn = true;
    localStorage.setItem('ecoswap_user', JSON.stringify(currentUser));
    updateUIForLoggedInUser();
    closeModals();
    showNotification('Welcome back to EcoSwap!', 'success');
  }
}

function handleRegister() {
  const name = elements.registerForm.querySelector('input[type="text"]').value;
  const email = elements.registerForm.querySelector('input[type="email"]').value;
  const password = elements.registerForm.querySelector('input[type="password"]').value;
  const location = elements.registerForm.querySelectorAll('input[type="text"]')[1].value;
  
  if (name && email && password && location) {
    // Simulate registration success
    currentUser = {
      id: Date.now(),
      name: name,
      email: email,
      location: location,
      rating: 5.0,
      trades: 0,
      verified: false,
      sustainabilityScore: 50
    };
    
    isLoggedIn = true;
    localStorage.setItem('ecoswap_user', JSON.stringify(currentUser));
    updateUIForLoggedInUser();
    closeModals();
    showNotification('Welcome to EcoSwap! Start exploring sustainable swaps.', 'success');
  }
}

function updateUIForLoggedInUser() {
  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn && currentUser) {
    loginBtn.innerHTML = `<i class="fas fa-user"></i> ${currentUser.name}`;
  }
}

// Item Management
function handleAddItemClick() {
  if (!isLoggedIn) {
    openModal('authModal');
    showNotification('Please sign in to list items', 'info');
    return;
  }
  openModal('addItemModal');
}

function handleAddItem() {
  const form = document.getElementById('addItemForm');
  const formData = new FormData(form);
  
  const newItem = {
    id: Date.now(),
    title: form.querySelector('input[type="text"]').value,
    category: form.querySelector('select').value,
    condition: form.querySelectorAll('select')[1].value,
    originalPrice: parseFloat(form.querySelector('input[type="number"]').value),
    swapValue: parseFloat(form.querySelectorAll('input[type="number"]')[1].value),
    description: form.querySelector('textarea').value,
    images: ['/api/placeholder/400/300'],
    location: currentUser.location || 'Your Location',
    seller: {
      name: currentUser.name,
      rating: currentUser.rating,
      verified: currentUser.verified
    },
    postedDate: new Date().toISOString().split('T')[0],
    views: 0,
    likes: 0
  };
  
  // Add to items array
  appData.sampleItems.unshift(newItem);
  displayedItems = [...appData.sampleItems];
  
  // Update category count
  const category = appData.categories.find(cat => cat.name === newItem.category);
  if (category) category.count++;
  
  // Re-render
  renderCategories();
  renderItems();
  closeModals();
  showNotification('Item listed successfully!', 'success');
  
  // Reset form
  form.reset();
}

// Render Functions
function renderCategories() {
  const grid = elements.categoriesGrid;
  if (!grid) return;
  
  grid.innerHTML = appData.categories.map(category => `
    <div class="category-card" onclick="filterByCategory('${category.name}')">
      <div class="category-icon">${category.icon}</div>
      <div class="category-name">${category.name}</div>
      <div class="category-count">${category.count} items</div>
    </div>
  `).join('');
}

function renderItems() {
  const grid = elements.itemsGrid;
  if (!grid) return;
  
  const itemsToShow = displayedItems.slice(0, 6); // Show first 6 items
  
  grid.innerHTML = itemsToShow.map(item => `
    <div class="item-card" onclick="showItemDetail(${item.id})">
      <div class="item-image" style="background-image: url('${item.images[0]}')">
        <span class="item-condition condition-${item.condition.toLowerCase().replace(' ', '-')}">${item.condition}</span>
      </div>
      <div class="item-content">
        <h3 class="item-title">${item.title}</h3>
        <div class="item-meta">
          <span>${item.category}</span>
          <span>${formatDate(item.postedDate)}</span>
        </div>
        <div class="item-price">$${item.swapValue}</div>
        <div class="item-location">
          <i class="fas fa-map-marker-alt"></i>
          <span>${item.location}</span>
        </div>
        <div class="item-seller">
          <div class="seller-info">
            <span>${item.seller.name}</span>
            ${item.seller.verified ? '<i class="fas fa-check-circle verified-badge"></i>' : ''}
          </div>
          <div class="seller-rating">
            <i class="fas fa-star"></i>
            <span>${item.seller.rating}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function showItemDetail(itemId) {
  const item = appData.sampleItems.find(i => i.id === itemId);
  if (!item) return;
  
  // Increment view count
  item.views++;
  
  const isLiked = favorites.includes(itemId);
  
  elements.itemDetails.innerHTML = `
    <div class="item-detail">
      <div class="item-detail-images">
        <div class="item-detail-main-image" style="background-image: url('${item.images[0]}')"></div>
      </div>
      <div class="item-detail-info">
        <h2>${item.title}</h2>
        <div class="item-detail-meta">
          <span class="status status--info">${item.condition}</span>
          <span class="status status--success">${item.category}</span>
        </div>
        <div class="item-detail-price">$${item.swapValue}</div>
        <div class="item-detail-description">
          <p>${item.description}</p>
        </div>
        <div class="item-detail-seller">
          <div class="seller-profile">
            <div class="seller-avatar">${item.seller.name.charAt(0)}</div>
            <div class="seller-details">
              <h4>${item.seller.name} ${item.seller.verified ? '<i class="fas fa-check-circle verified-badge"></i>' : ''}</h4>
              <div class="seller-rating">
                <i class="fas fa-star"></i>
                <span>${item.seller.rating} • ${item.seller.trades || 0} trades</span>
              </div>
            </div>
          </div>
          <p><i class="fas fa-map-marker-alt"></i> ${item.location}</p>
          <p><i class="fas fa-eye"></i> ${item.views} views • <i class="fas fa-heart"></i> ${item.likes} likes</p>
        </div>
        <div class="item-actions">
          <button class="btn btn--primary" onclick="contactSeller(${item.id})">
            <i class="fas fa-comment"></i> Contact Seller
          </button>
          <button class="btn btn--secondary" onclick="toggleFavorite(${item.id})">
            <i class="fas fa-heart ${isLiked ? '' : 'far'}"></i> ${isLiked ? 'Remove from' : 'Add to'} Favorites
          </button>
        </div>
      </div>
    </div>
  `;
  
  openModal('itemModal');
}

// Fix: Filter and Search Functions
function handleFilterClick(filter) {
  currentFilter = filter;
  
  // Update active button
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.filter === filter) {
      btn.classList.add('active');
    }
  });
  
  // Fix: Filter items properly
  if (filter === 'all') {
    displayedItems = [...appData.sampleItems];
  } else {
    displayedItems = appData.sampleItems.filter(item => {
      return item.category === filter;
    });
  }
  
  renderItems();
  
  // Show notification about filtering
  if (filter === 'all') {
    showNotification('Showing all items', 'info');
  } else {
    showNotification(`Filtered to ${filter} - ${displayedItems.length} items found`, 'info');
  }
}

function filterByCategory(categoryName) {
  handleFilterClick(categoryName);
  scrollToSection('featured-items');
}

function handleSearch() {
  const query = elements.searchInput.value.toLowerCase().trim();
  
  if (!query) {
    displayedItems = [...appData.sampleItems];
    // Reset filter to 'all'
    currentFilter = 'all';
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.filter === 'all') {
        btn.classList.add('active');
      }
    });
  } else {
    displayedItems = appData.sampleItems.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query)
    );
    
    showNotification(`Found ${displayedItems.length} items matching "${query}"`, 'info');
  }
  
  renderItems();
  scrollToSection('featured-items');
}

// Utility Functions
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeModals() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.add('hidden');
  });
  document.body.style.overflow = '';
}

function toggleAuthForm(form) {
  if (form === 'register') {
    elements.loginForm.classList.add('hidden');
    elements.registerForm.classList.remove('hidden');
  } else {
    elements.registerForm.classList.add('hidden');
    elements.loginForm.classList.remove('hidden');
  }
}

function toggleMobileNav() {
  elements.navMobile.classList.toggle('hidden');
}

function scrollToSection(sectionClass) {
  const section = document.querySelector(`.${sectionClass}`);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
  return date.toLocaleDateString();
}

function showRandomSustainabilityTip() {
  const tip = appData.sustainabilityTips[Math.floor(Math.random() * appData.sustainabilityTips.length)];
  if (elements.sustainabilityTip) {
    elements.sustainabilityTip.textContent = tip;
  }
}

function loadMoreItems() {
  // Simulate loading more items
  const currentLength = displayedItems.length;
  const additionalItems = appData.sampleItems.slice(0, 3); // Repeat first 3 items as "more"
  
  additionalItems.forEach((item, index) => {
    const newItem = { ...item, id: Date.now() + index };
    displayedItems.push(newItem);
  });
  
  renderItems();
  showNotification('More items loaded!', 'success');
}

function contactSeller(itemId) {
  if (!isLoggedIn) {
    closeModals();
    openModal('authModal');
    showNotification('Please sign in to contact sellers', 'info');
    return;
  }
  
  showNotification('Messaging feature coming soon! For now, you can use the contact info.', 'info');
}

function toggleFavorite(itemId) {
  if (!isLoggedIn) {
    showNotification('Please sign in to save favorites', 'info');
    return;
  }
  
  const index = favorites.indexOf(itemId);
  if (index > -1) {
    favorites.splice(index, 1);
    showNotification('Removed from favorites', 'info');
  } else {
    favorites.push(itemId);
    showNotification('Added to favorites!', 'success');
    
    // Increment likes
    const item = appData.sampleItems.find(i => i.id === itemId);
    if (item) item.likes++;
  }
  
  localStorage.setItem('ecoswap_favorites', JSON.stringify(favorites));
  
  // Update item detail if open
  if (!elements.itemModal.classList.contains('hidden')) {
    showItemDetail(itemId);
  }
}

function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 12px 20px;
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-base);
    box-shadow: var(--shadow-lg);
    z-index: 9999;
    max-width: 300px;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.3s ease;
  `;
  
  // Set colors based on type
  if (type === 'success') {
    notification.style.borderColor = 'var(--color-success)';
    notification.style.color = 'var(--color-success)';
  } else if (type === 'error') {
    notification.style.borderColor = 'var(--color-error)';
    notification.style.color = 'var(--color-error)';
  }
  
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Auto-refresh sustainability tip every 10 seconds
setInterval(showRandomSustainabilityTip, 10000);