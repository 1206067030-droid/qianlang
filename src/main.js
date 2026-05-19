import './index.css'

// 语言包
const translations = {
  'zh': {
    'nav-home': '首頁',
    'nav-products': '產品',
    'nav-about': '關於我們',
    'nav-contact': '聯絡我們',
    'hero-title': '先進美容科技，煥發自然光彩',
    'hero-subtitle': '探索我們的LED光療美容儀系列，享受專業護膚體驗',
    'hero-button': '立即瀏覽',
    'products-title': '熱門產品',
    'products-view-all': '查看全部',
    'about-title': '關於前浪',
    'about-content': '前浪貿易有限公司專注於引進國際頂級美容儀器，為客戶提供高品質、安全有效的美容護膚解決方案。我們堅持創新與品質並重，致力於將先進的美容科技帶入每個家庭。',
    'about-mission': '使命',
    'about-mission-content': '提供安全、高效、創新的美容護膚產品',
    'about-vision': '願景',
    'about-vision-content': '成為亞太地區領先的美容儀器供應商',
    'contact-title': '聯絡我們',
    'contact-name': '姓名',
    'contact-email': '電子郵件',
    'contact-phone': '電話',
    'contact-message': '留言',
    'contact-submit': '提交',
    'footer-copyright': '版權所有 © 2024 前浪貿易有限公司',
    'footer-address': '香港',
    'product-detail': '產品詳情',
    'price': '價格',
    'add-cart': '加入購物車',
    'buy-now': '立即購買'
  },
  'en': {
    'nav-home': 'Home',
    'nav-products': 'Products',
    'nav-about': 'About Us',
    'nav-contact': 'Contact',
    'hero-title': 'Advanced Beauty Technology, Radiant Natural Glow',
    'hero-subtitle': 'Explore our LED light therapy beauty device series, enjoy professional skincare experience',
    'hero-button': 'Browse Now',
    'products-title': 'Hot Products',
    'products-view-all': 'View All',
    'about-title': 'About Qianlang',
    'about-content': 'Qianlang Trading Co., Ltd. specializes in introducing international top beauty devices, providing customers with high-quality, safe and effective beauty skincare solutions. We adhere to innovation and quality, committed to bringing advanced beauty technology to every home.',
    'about-mission': 'Mission',
    'about-mission-content': 'Provide safe, efficient, innovative beauty skincare products',
    'about-vision': 'Vision',
    'about-vision-content': 'Become the leading beauty device supplier in the Asia-Pacific region',
    'contact-title': 'Contact Us',
    'contact-name': 'Name',
    'contact-email': 'Email',
    'contact-phone': 'Phone',
    'contact-message': 'Message',
    'contact-submit': 'Submit',
    'footer-copyright': 'Copyright © 2024 Qianlang Trading Co., Ltd.',
    'footer-address': 'Hong Kong',
    'product-detail': 'Product Details',
    'price': 'Price',
    'add-cart': 'Add to Cart',
    'buy-now': 'Buy Now'
  }
};

// 当前语言
let currentLang = localStorage.getItem('currentLang') || 'zh';

// DOM元素
const navLinks = document.querySelectorAll('[data-translate]');
const heroTitle = document.getElementById('hero-title');
const heroSubtitle = document.getElementById('hero-subtitle');
const heroButton = document.getElementById('hero-button');
const productsTitle = document.getElementById('products-title');
const productsViewAll = document.getElementById('products-view-all');
const aboutTitle = document.getElementById('about-title');
const aboutContent = document.getElementById('about-content');
const aboutMission = document.getElementById('about-mission');
const aboutMissionContent = document.getElementById('about-mission-content');
const aboutVision = document.getElementById('about-vision');
const aboutVisionContent = document.getElementById('about-vision-content');
const contactTitle = document.getElementById('contact-title');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactPhone = document.getElementById('contact-phone');
const contactMessage = document.getElementById('contact-message');
const contactSubmit = document.getElementById('contact-submit');
const footerCopyright = document.getElementById('footer-copyright');
const footerAddress = document.getElementById('footer-address');

// 翻译函数
function translatePage() {
  const lang = translations[currentLang];
  
  navLinks.forEach(link => {
    const key = link.getAttribute('data-translate');
    if (lang[key]) {
      link.textContent = lang[key];
    }
  });
  
  if (heroTitle) heroTitle.textContent = lang['hero-title'];
  if (heroSubtitle) heroSubtitle.textContent = lang['hero-subtitle'];
  if (heroButton) heroButton.textContent = lang['hero-button'];
  if (productsTitle) productsTitle.textContent = lang['products-title'];
  if (productsViewAll) productsViewAll.textContent = lang['products-view-all'];
  if (aboutTitle) aboutTitle.textContent = lang['about-title'];
  if (aboutContent) aboutContent.textContent = lang['about-content'];
  if (aboutMission) aboutMission.textContent = lang['about-mission'];
  if (aboutMissionContent) aboutMissionContent.textContent = lang['about-mission-content'];
  if (aboutVision) aboutVision.textContent = lang['about-vision'];
  if (aboutVisionContent) aboutVisionContent.textContent = lang['about-vision-content'];
  if (contactTitle) contactTitle.textContent = lang['contact-title'];
  if (contactName) contactName.textContent = lang['contact-name'];
  if (contactEmail) contactEmail.textContent = lang['contact-email'];
  if (contactPhone) contactPhone.textContent = lang['contact-phone'];
  if (contactMessage) contactMessage.textContent = lang['contact-message'];
  if (contactSubmit) contactSubmit.textContent = lang['contact-submit'];
  if (footerCopyright) footerCopyright.textContent = lang['footer-copyright'];
  if (footerAddress) footerAddress.textContent = lang['footer-address'];
}

// 语言切换
function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem('currentLang', lang);
  translatePage();
  renderProducts();
  updateLangButtons();
}

// 主题切换
function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('darkMode', isDark ? 'true' : 'false');
  
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    themeIcon.textContent = isDark ? '🌞' : '🌙';
  }
}

// 更新语言按钮状态
function updateLangButtons() {
  const langZh = document.getElementById('lang-zh');
  const langEn = document.getElementById('lang-en');
  
  if (langZh && langEn) {
    if (currentLang === 'zh') {
      langZh.classList.add('bg-primary', 'text-white');
      langZh.classList.remove('bg-gray-100', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
      langEn.classList.add('bg-gray-100', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
      langEn.classList.remove('bg-primary', 'text-white');
    } else {
      langEn.classList.add('bg-primary', 'text-white');
      langEn.classList.remove('bg-gray-100', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
      langZh.classList.add('bg-gray-100', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
      langZh.classList.remove('bg-primary', 'text-white');
    }
  }
}

// 初始化主题
function initTheme() {
  const savedTheme = localStorage.getItem('darkMode');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'true' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) themeIcon.textContent = '🌞';
  }
}

// 产品数据
const products = [
  {
    id: 1,
    name: { zh: '7色LED光子面罩美容儀', en: '7-Color LED Photon Mask' },
    description: { zh: '家用臉部膚色軟硅膠紅光面膜儀', en: 'Home facial skin color soft silicone red light mask device' },
    price: 'HK$1,280',
    image: '7色LED光子面罩美容儀家用脸部肤色软硅胶俄语红光面膜仪.jpg'
  },
  {
    id: 2,
    name: { zh: 'FDA510K面頸一體LED紅光面罩', en: 'FDA510K Face Neck LED Mask' },
    description: { zh: '大排燈光療嫩膚光子美頸儀', en: 'Large panel light therapy rejuvenation photon neck device' },
    price: 'HK$1,580',
    image: 'FDA510K面颈一体LED红光面罩美容仪大排灯光疗嫩肤光子美颈仪.jpg'
  },
  {
    id: 3,
    name: { zh: 'LED大排燈美容儀', en: 'LED Panel Beauty Device' },
    description: { zh: '紅外美容燈家用光子嫩膚支架理療伸縮燈', en: 'Infrared beauty lamp home photon rejuvenation stand therapy telescopic lamp' },
    price: 'HK$2,380',
    image: 'LED大排灯美容仪红外美容灯家用光子嫩肤红光支架理疗伸缩灯抗衰.jpg'
  },
  {
    id: 4,
    name: { zh: '充電款霧化潤眼儀', en: 'Rechargeable Eye Mist Device' },
    description: { zh: '眼部霧化補水緩解乾澀疲勞護眼', en: 'Eye mist hydration relieves dryness and fatigue' },
    price: 'HK$680',
    image: '充电款雾化润眼仪眼部雾化补水缓解干涩疲劳护眼洗护养护三合一.jpg'
  },
  {
    id: 5,
    name: { zh: 'LED紅光美眼儀', en: 'LED Red Light Eye Device' },
    description: { zh: 'FDA護眼硅膠家用皺紋臉部提拉按摩儀', en: 'FDA eye care silicone home wrinkle facial lifting massage device' },
    price: 'HK$880',
    image: 'LED红光美眼仪光子嫩肤仪FDA护眼硅胶家用皱纹脸部提拉按摩美容仪.jpg'
  },
  {
    id: 6,
    name: { zh: '一體式LED紅光面罩', en: 'All-in-One LED Red Light Mask' },
    description: { zh: '磁吸無線光療美容儀面罩FDA510K', en: 'Magnetic wireless light therapy beauty mask FDA510K' },
    price: 'HK$1,880',
    image: '一体式LED红光面罩磁吸无线光疗美容仪面罩FDA510K硅胶光疗大排灯.jpg'
  },
  {
    id: 7,
    name: { zh: '無線磁吸紅光面罩', en: 'Wireless Magnetic Red Light Mask' },
    description: { zh: '紅藍光LED大排燈面部嫩膚電子儀', en: 'Red blue light LED panel facial rejuvenation electronic device' },
    price: 'HK$1,680',
    image: '无线磁吸红光面罩FDA510K红蓝光LED大排灯面部嫩肤电子红外美容仪.jpg'
  },
  {
    id: 8,
    name: { zh: '紅外光子嫩膚美唇儀', en: 'Infrared Photon Lip Device' },
    description: { zh: 'LED面膜唇紋紅藍電動面部護理儀', en: 'LED mask lip wrinkle red blue electric facial care device' },
    price: 'HK$580',
    image: '红外光子嫩肤美唇仪LED面膜唇纹红蓝电动面部护理FDA510K美容仪.jpg'
  }
];

// 渲染产品
function renderProducts() {
  const productsContainer = document.getElementById('products-container');
  if (!productsContainer) return;
  
  productsContainer.innerHTML = '';
  
  products.forEach((product, index) => {
    const productCard = document.createElement('div');
    productCard.className = 'bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 fade-in';
    productCard.style.animationDelay = `${index * 0.1}s`;
    
    productCard.innerHTML = `
      <div class="relative overflow-hidden">
        <img 
          src="images/${product.image}" 
          alt="${product.name[currentLang]}" 
          class="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
        <div class="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
          ${product.price}
        </div>
      </div>
      <div class="p-5">
        <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-2">${product.name[currentLang]}</h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">${product.description[currentLang]}</p>
        <div class="flex gap-2">
          <button class="flex-1 bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium">
            ${translations[currentLang]['add-cart']}
          </button>
          <button class="flex-1 bg-accent hover:bg-pink-700 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium">
            ${translations[currentLang]['buy-now']}
          </button>
        </div>
      </div>
    `;
    
    productsContainer.appendChild(productCard);
  });
}

// 联系表单提交
function handleContactSubmit(e) {
  e.preventDefault();
  alert(currentLang === 'zh' ? '感謝您的留言！我們將儘快與您聯絡。' : 'Thank you for your message! We will contact you soon.');
  e.target.reset();
}

// 移动端导航菜单切换
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('hidden');
  }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  updateLangButtons();
  translatePage();
  renderProducts();
  
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
  }
  
  // 移动端菜单点击链接后自动关闭
  const mobileLinks = document.querySelectorAll('#mobile-menu a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMobileMenu);
  });
});

// 导出函数供HTML调用
window.switchLang = switchLang;
window.toggleTheme = toggleTheme;
window.toggleMobileMenu = toggleMobileMenu;
