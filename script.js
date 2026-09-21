// ========================================
// 1. 菜单数据
// 每一项包含：名称、分类、价格、简介、emoji 图标、食材、评分
// 实际项目中这部分数据也可以从后端接口 fetch 获取
// ========================================
const menuData = [
  { name: "宫保鸡丁", category: "主食", price: 28, desc: "鸡肉、花生米，微辣下饭", emoji: "🍗", rating: 4.8, ingredients: ["鸡胸肉", "花生米", "干辣椒", "葱段"] },
  { name: "麻婆豆腐", category: "主食", price: 22, desc: "嫩豆腐配麻辣肉末", emoji: "🥘", rating: 4.6, ingredients: ["豆腐", "肉末", "豆瓣酱", "花椒"] },
  { name: "番茄炒蛋", category: "主食", price: 18, desc: "家常经典，酸甜开胃", emoji: "🍳", rating: 4.7, ingredients: ["鸡蛋", "番茄", "葱花"] },
  { name: "扬州炒饭", category: "主食", price: 20, desc: "米饭、火腿、豌豆", emoji: "🍚", rating: 4.5, ingredients: ["米饭", "火腿丁", "豌豆", "鸡蛋"] },
  { name: "红烧牛肉面", category: "主食", price: 26, desc: "汤浓面劲，牛肉软烂", emoji: "🍜", rating: 4.9, ingredients: ["牛腩", "面条", "萝卜", "香菜"] },
  { name: "水煮鱼片", category: "主食", price: 45, desc: "麻辣鲜香，鱼片滑嫩", emoji: "🐟", rating: 4.7, ingredients: ["草鱼", "豆芽", "干辣椒", "花椒油"] },
  { name: "回锅肉", category: "主食", price: 30, desc: "肥瘦相间，香辣下饭", emoji: "🥓", rating: 4.6, ingredients: ["五花肉", "青蒜", "豆瓣酱"] },
  { name: "糖醋排骨", category: "主食", price: 32, desc: "外酥里嫩，酸甜开胃", emoji: "🍖", rating: 4.8, ingredients: ["排骨", "糖", "醋", "葱姜"] },
  { name: "干炒牛河", category: "主食", price: 24, desc: "镬气十足，牛肉爽滑", emoji: "🍝", rating: 4.4, ingredients: ["河粉", "牛肉", "豆芽", "韭黄"] },
  { name: "咖喱鸡饭", category: "主食", price: 25, desc: "浓郁咖喱配嫩滑鸡肉", emoji: "🍛", rating: 4.5, ingredients: ["鸡腿肉", "咖喱酱", "土豆", "米饭"] },
  { name: "炸鸡翅", category: "小吃", price: 16, desc: "外酥里嫩，香气四溢", emoji: "🍗", rating: 4.6, ingredients: ["鸡翅", "面粉", "香料"] },
  { name: "薯条", category: "小吃", price: 12, desc: "金黄酥脆，配番茄酱", emoji: "🍟", rating: 4.3, ingredients: ["土豆", "盐", "番茄酱"] },
  { name: "煎饺", category: "小吃", price: 15, desc: "底部焦脆，馅料多汁", emoji: "🥟", rating: 4.7, ingredients: ["猪肉馅", "白菜", "饺子皮"] },
  { name: "关东煮", category: "小吃", price: 14, desc: "多种食材，暖胃小吃", emoji: "🍢", rating: 4.2, ingredients: ["鱼丸", "萝卜", "魔芋", "海带"] },
  { name: "章鱼小丸子", category: "小吃", price: 18, desc: "日式风味，外皮酥脆", emoji: "🐙", rating: 4.5, ingredients: ["章鱼", "面糊", "木鱼花", "海苔"] },
  { name: "烤冷面", category: "小吃", price: 13, desc: "东北街头小吃，咸香微辣", emoji: "🌯", rating: 4.4, ingredients: ["冷面皮", "鸡蛋", "香菜", "辣酱"] },
  { name: "生煎包", category: "小吃", price: 16, desc: "底部金黄，一口爆汁", emoji: "🥠", rating: 4.6, ingredients: ["猪肉馅", "面皮", "芝麻"] },
  { name: "臭豆腐", category: "小吃", price: 12, desc: "闻着臭吃着香，外脆里嫩", emoji: "🧈", rating: 4.1, ingredients: ["豆腐", "卤水", "辣酱"] },
  { name: "珍珠奶茶", category: "饮品", price: 15, desc: "经典奶茶配Q弹珍珠", emoji: "🧋", rating: 4.7, ingredients: ["红茶", "牛奶", "珍珠"] },
  { name: "鲜榨橙汁", category: "饮品", price: 12, desc: "新鲜橙子现榨", emoji: "🍊", rating: 4.5, ingredients: ["新鲜橙子"] },
  { name: "美式咖啡", category: "饮品", price: 18, desc: "醇厚黑咖，提神醒脑", emoji: "☕", rating: 4.3, ingredients: ["咖啡豆", "热水"] },
  { name: "柠檬蜂蜜水", category: "饮品", price: 10, desc: "清爽解腻，补充维C", emoji: "🍋", rating: 4.4, ingredients: ["柠檬", "蜂蜜", "温水"] },
  { name: "抹茶拿铁", category: "饮品", price: 20, desc: "日式抹茶配丝滑牛奶", emoji: "🍵", rating: 4.6, ingredients: ["抹茶粉", "牛奶"] },
  { name: "西瓜汁", category: "饮品", price: 11, desc: "夏日解暑首选", emoji: "🍉", rating: 4.5, ingredients: ["西瓜"] },
  { name: "可乐", category: "饮品", price: 8, desc: "冰爽碳酸，经典口味", emoji: "🥤", rating: 4.2, ingredients: ["碳酸饮料"] },
  { name: "提拉米苏", category: "甜点", price: 22, desc: "意式经典，浓郁咖啡香", emoji: "🍰", rating: 4.8, ingredients: ["马斯卡彭芝士", "咖啡", "可可粉"] },
  { name: "芒果布丁", category: "甜点", price: 14, desc: "顺滑布丁配新鲜芒果", emoji: "🥭", rating: 4.6, ingredients: ["芒果", "淡奶油", "吉利丁"] },
  { name: "马卡龙", category: "甜点", price: 8, desc: "法式甜点，色彩缤纷", emoji: "🍬", rating: 4.4, ingredients: ["杏仁粉", "蛋白", "糖"] },
  { name: "冰淇淋圣代", category: "甜点", price: 16, desc: "多种口味，夏日必备", emoji: "🍨", rating: 4.7, ingredients: ["冰淇淋", "巧克力酱", "华夫饼"] },
  { name: "红豆双皮奶", category: "甜点", price: 13, desc: "细腻顺滑，甜而不腻", emoji: "🥣", rating: 4.5, ingredients: ["牛奶", "鸡蛋清", "红豆"] },
  { name: "芝士蛋糕", category: "甜点", price: 18, desc: "浓郁芝士香，入口即化", emoji: "🧁", rating: 4.7, ingredients: ["奶油芝士", "鸡蛋", "饼干底"] },
];

// ========================================
// 2. 获取页面元素
// ========================================
const searchInput = document.getElementById("searchInput");
const categoryBar = document.getElementById("categoryBar");
const menuGrid = document.getElementById("menuGrid");
const emptyTip = document.getElementById("emptyTip");
const resultCount = document.getElementById("resultCount");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

// 当前选中的分类，默认"全部"
let currentCategory = "全部";

// ========================================
// 2.1 收藏功能：用菜品名称作为唯一标识存进 localStorage
// Set 结构方便判断某道菜是否已收藏（has），也方便增删
// ========================================
const FAVORITES_KEY = "menuSearchFavorites";

function loadFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return new Set(raw ? JSON.parse(raw) : []);
  } catch (err) {
    // localStorage 里存了坏数据时，不让整个页面崩掉，直接当作没有收藏
    return new Set();
  }
}

function saveFavorites() {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites]));
}

const favorites = loadFavorites();

function toggleFavorite(name) {
  if (favorites.has(name)) {
    favorites.delete(name);
  } else {
    favorites.add(name);
  }
  saveFavorites();
}

// ========================================
// 3. 渲染菜单卡片
// 根据传入的数组，把每一项生成一张卡片插入到 menuGrid 中
// 用 data-index 记录该菜品在 menuData 中的下标，方便点击时找回完整数据
// ========================================
function renderMenu(list) {
  // 每次渲染前先清空，避免重复叠加
  menuGrid.innerHTML = "";

  // 更新结果数量提示
  resultCount.textContent = `共找到 ${list.length} 道菜`;

  // 没有结果时显示提示语，隐藏网格
  if (list.length === 0) {
    emptyTip.hidden = false;
    menuGrid.hidden = true;
    return;
  }
  emptyTip.hidden = true;
  menuGrid.hidden = false;

  // 遍历数据，拼接每张卡片的 HTML
  list.forEach((item) => {
    const card = document.createElement("div");
    card.className = "menu-card";
    // 用原始数组里的下标做标记，点击时通过它取回完整数据（含 ingredients）
    card.dataset.index = menuData.indexOf(item);
    const isFav = favorites.has(item.name);
    card.innerHTML = `
      <button class="favorite-btn ${isFav ? "active" : ""}" data-name="${item.name}">
        ${isFav ? "❤️" : "🤍"}
      </button>
      <div class="emoji">${item.emoji}</div>
      <div class="name">${item.name}</div>
      <div class="desc">${item.desc}</div>
      <div class="bottom-row">
        <span class="price">¥${item.price}</span>
        <span class="tag">${item.category}</span>
      </div>
    `;
    menuGrid.appendChild(card);
  });
}

// ========================================
// 4. 核心过滤逻辑
// 同时满足：搜索关键词 + 当前选中分类
// ========================================
function filterMenu() {
  // trim() 去掉首尾空格，toLowerCase() 忽略大小写（对英文菜名有用）
  const keyword = searchInput.value.trim().toLowerCase();

  const filtered = menuData.filter((item) => {
    const matchKeyword = item.name.toLowerCase().includes(keyword);
    // "收藏"是个特殊分类：不对应 item.category，而是看这道菜是否被收藏过
    const matchCategory =
      currentCategory === "全部" ||
      (currentCategory === "收藏"
        ? favorites.has(item.name)
        : item.category === currentCategory);
    return matchKeyword && matchCategory;
  });

  renderMenu(filtered);
}

// ========================================
// 5. 详情弹窗
// ========================================
function openModal(item) {
  const isFav = favorites.has(item.name);
  modalBody.innerHTML = `
    <div class="modal-emoji">${item.emoji}</div>
    <h2>${item.name}</h2>
    <p class="modal-rating">⭐ ${item.rating} 分</p>
    <p class="modal-desc">${item.desc}</p>
    <div class="modal-ingredients">
      <h3>主要食材</h3>
      <div class="ingredient-tags">
        ${item.ingredients.map((ing) => `<span>${ing}</span>`).join("")}
      </div>
    </div>
    <div class="modal-bottom">
      <span class="modal-price">¥${item.price}</span>
      <span class="tag">${item.category}</span>
      <button class="modal-favorite-btn ${isFav ? "active" : ""}" data-name="${item.name}">
        ${isFav ? "❤️ 已收藏" : "🤍 收藏"}
      </button>
    </div>
  `;
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

// ========================================
// 6. 绑定事件
// ========================================

// 6.1 搜索框：每次输入都实时过滤（input 事件比 keyup 更适合，包含粘贴等场景）
searchInput.addEventListener("input", filterMenu);

// 6.2 分类按钮：用事件委托绑定在父元素上，避免给每个按钮单独加监听
categoryBar.addEventListener("click", (e) => {
  // 只处理点击在按钮上的情况
  if (!e.target.classList.contains("category-btn")) return;

  // 更新按钮的高亮状态
  document
    .querySelectorAll(".category-btn")
    .forEach((btn) => btn.classList.remove("active"));
  e.target.classList.add("active");

  // 更新当前分类并重新过滤
  currentCategory = e.target.dataset.category;
  filterMenu();
});

// 6.3 点击菜品卡片：同样用事件委托绑定在 menuGrid 上
menuGrid.addEventListener("click", (e) => {
  // 先判断是不是点在爱心按钮上：是的话只切换收藏，不打开详情弹窗
  const favBtn = e.target.closest(".favorite-btn");
  if (favBtn) {
    toggleFavorite(favBtn.dataset.name);
    // 重新走一遍过滤+渲染，这样"我的收藏"分类下取消收藏能立刻从列表消失
    filterMenu();
    return;
  }

  const card = e.target.closest(".menu-card");
  if (!card) return;
  const item = menuData[card.dataset.index];
  openModal(item);
});

// 6.3.1 详情弹窗里的收藏按钮
modalBody.addEventListener("click", (e) => {
  const favBtn = e.target.closest(".modal-favorite-btn");
  if (!favBtn) return;
  toggleFavorite(favBtn.dataset.name);
  // 重新渲染弹窗按钮的状态（❤️已收藏 / 🤍收藏）
  const item = menuData.find((m) => m.name === favBtn.dataset.name);
  openModal(item);
  // 同步更新背后卡片列表的爱心状态
  filterMenu();
});

// 6.4 关闭弹窗：点击右上角按钮，或点击弹窗外的暗色遮罩
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
// 按 ESC 键也可以关闭
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ========================================
// 7. 初始渲染：页面加载时先展示全部菜品
// ========================================
renderMenu(menuData);