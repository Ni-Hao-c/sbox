// API数据示例 - 包含中英文和C#代码
const apiData = [
    {
        id: 1,
        name: {
            zh: "获取用户信息",
            en: "Get User Information"
        },
        description: {
            zh: "根据用户ID获取用户详细信息",
            en: "Retrieve detailed user information by user ID"
        },
        tags: ["user", "auth"],
        example: {
            zh: `// C# 示例
using System;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;

public class UserService 
{
    private readonly HttpClient _httpClient;
    
    public UserService(HttpClient httpClient)
    {
        _httpClient = httpClient;
        _httpClient.DefaultRequestHeaders.Authorization = 
            new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", "your_token_here");
    }
    
    public async Task<User> GetUserAsync(int userId)
    {
        var response = await _httpClient.GetAsync($"/api/users/{userId}");
        response.EnsureSuccessStatusCode();
        
        var json = await response.Content.ReadAsStringAsync();
        return JsonConvert.DeserializeObject<User>(json);
    }
}

public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}`,
            en: `// C# Example
using System;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;

public class UserService 
{
    private readonly HttpClient _httpClient;
    
    public UserService(HttpClient httpClient)
    {
        _httpClient = httpClient;
        _httpClient.DefaultRequestHeaders.Authorization = 
            new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", "your_token_here");
    }
    
    public async Task<User> GetUserAsync(int userId)
    {
        var response = await _httpClient.GetAsync($"/api/users/{userId}");
        response.EnsureSuccessStatusCode();
        
        var json = await response.Content.ReadAsStringAsync();
        return JsonConvert.DeserializeObject<User>(json);
    }
}

public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}`
        },
        properties: [
            { name: "Id", type: "integer", description: { zh: "用户唯一标识符", en: "Unique user identifier" } },
            { name: "Name", type: "string", description: { zh: "用户姓名", en: "User's name" } },
            { name: "Email", type: "string", description: { zh: "用户邮箱地址", en: "User's email address" } },
            { name: "CreatedAt", type: "string", description: { zh: "用户创建时间", en: "User creation time" } },
            { name: "UpdatedAt", type: "string", description: { zh: "用户信息更新时间", en: "User information update time" } }
        ],
        methods: [
            { name: "GET", description: { zh: "获取用户信息", en: "Retrieve user information" } },
            { name: "PUT", description: { zh: "更新用户信息", en: "Update user information" } },
            { name: "DELETE", description: { zh: "删除用户", en: "Delete user" } }
        ]
    },
    {
        id: 2,
        name: {
            zh: "创建订单",
            en: "Create Order"
        },
        description: {
            zh: "创建一个新的订单",
            en: "Create a new order"
        },
        tags: ["order", "payment"],
        example: {
            zh: `// C# 示例
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

public class OrderService 
{
    private readonly HttpClient _httpClient;
    
    public OrderService(HttpClient httpClient)
    {
        _httpClient = httpClient;
        _httpClient.DefaultRequestHeaders.Authorization = 
            new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", "your_token_here");
    }
    
    public async Task<OrderResponse> CreateOrderAsync(CreateOrderRequest request)
    {
        var json = JsonConvert.SerializeObject(request);
        var content = new StringContent(json, Encoding.UTF8, "application/json");
        
        var response = await _httpClient.PostAsync("/api/orders", content);
        response.EnsureSuccessStatusCode();
        
        var responseJson = await response.Content.ReadAsStringAsync();
        return JsonConvert.DeserializeObject<OrderResponse>(responseJson);
    }
}

public class CreateOrderRequest
{
    public int UserId { get; set; }
    public int[] ProductIds { get; set; }
    public decimal TotalAmount { get; set; }
}

public class OrderResponse
{
    public int OrderId { get; set; }
    public string Status { get; set; }
    public DateTime CreatedAt { get; set; }
}`,
            en: `// C# Example
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

public class OrderService 
{
    private readonly HttpClient _httpClient;
    
    public OrderService(HttpClient httpClient)
    {
        _httpClient = httpClient;
        _httpClient.DefaultRequestHeaders.Authorization = 
            new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", "your_token_here");
    }
    
    public async Task<OrderResponse> CreateOrderAsync(CreateOrderRequest request)
    {
        var json = JsonConvert.SerializeObject(request);
        var content = new StringContent(json, Encoding.UTF8, "application/json");
        
        var response = await _httpClient.PostAsync("/api/orders", content);
        response.EnsureSuccessStatusCode();
        
        var responseJson = await response.Content.ReadAsStringAsync();
        return JsonConvert.DeserializeObject<OrderResponse>(responseJson);
    }
}

public class CreateOrderRequest
{
    public int UserId { get; set; }
    public int[] ProductIds { get; set; }
    public decimal TotalAmount { get; set; }
}

public class OrderResponse
{
    public int OrderId { get; set; }
    public string Status { get; set; }
    public DateTime CreatedAt { get; set; }
}`
        },
        properties: [
            { name: "OrderId", type: "integer", description: { zh: "订单唯一标识符", en: "Unique order identifier" } },
            { name: "UserId", type: "integer", description: { zh: "用户ID", en: "User ID" } },
            { name: "ProductIds", type: "array", description: { zh: "产品ID数组", en: "Array of product IDs" } },
            { name: "TotalAmount", type: "number", description: { zh: "订单总金额", en: "Total order amount" } },
            { name: "Status", type: "string", description: { zh: "订单状态", en: "Order status" } }
        ],
        methods: [
            { name: "POST", description: { zh: "创建新订单", en: "Create a new order" } },
            { name: "GET", description: { zh: "获取订单列表", en: "Retrieve order list" } },
            { name: "PUT", description: { zh: "更新订单信息", en: "Update order information" } }
        ]
    },
    {
        id: 3,
        name: {
            zh: "产品搜索",
            en: "Product Search"
        },
        description: {
            zh: "根据关键词搜索产品",
            en: "Search products by keyword"
        },
        tags: ["product"],
        example: {
            zh: `// C# 示例
using System;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;

public class ProductService 
{
    private readonly HttpClient _httpClient;
    
    public ProductService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }
    
    public async Task<SearchResult> SearchProductsAsync(string keyword, int page = 1, int limit = 10)
    {
        var url = $"/api/products/search?q={keyword}&page={page}&limit={limit}";
        var response = await _httpClient.GetAsync(url);
        response.EnsureSuccessStatusCode();
        
        var json = await response.Content.ReadAsStringAsync();
        return JsonConvert.DeserializeObject<SearchResult>(json);
    }
}

public class SearchResult
{
    public Product[] Products { get; set; }
    public int Total { get; set; }
    public int Page { get; set; }
    public int Limit { get; set; }
}

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    public string Description { get; set; }
}`,
            en: `// C# Example
using System;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;

public class ProductService 
{
    private readonly HttpClient _httpClient;
    
    public ProductService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }
    
    public async Task<SearchResult> SearchProductsAsync(string keyword, int page = 1, int limit = 10)
    {
        var url = $"/api/products/search?q={keyword}&page={page}&limit={limit}";
        var response = await _httpClient.GetAsync(url);
        response.EnsureSuccessStatusCode();
        
        var json = await response.Content.ReadAsStringAsync();
        return JsonConvert.DeserializeObject<SearchResult>(json);
    }
}

public class SearchResult
{
    public Product[] Products { get; set; }
    public int Total { get; set; }
    public int Page { get; set; }
    public int Limit { get; set; }
}

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    public string Description { get; set; }
}`
        },
        properties: [
            { name: "Id", type: "integer", description: { zh: "产品唯一标识符", en: "Unique product identifier" } },
            { name: "Name", type: "string", description: { zh: "产品名称", en: "Product name" } },
            { name: "Price", type: "number", description: { zh: "产品价格", en: "Product price" } },
            { name: "Description", type: "string", description: { zh: "产品描述", en: "Product description" } }
        ],
        methods: [
            { name: "GET", description: { zh: "搜索产品", en: "Search products" } },
            { name: "POST", description: { zh: "创建产品", en: "Create product" } },
            { name: "PUT", description: { zh: "更新产品", en: "Update product" } }
        ]
    },
    {
        id: 4,
        name: {
            zh: "用户登录",
            en: "User Login"
        },
        description: {
            zh: "用户身份验证并获取访问令牌",
            en: "Authenticate user and obtain access token"
        },
        tags: ["auth"],
        example: {
            zh: `// C# 示例
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

public class AuthService 
{
    private readonly HttpClient _httpClient;
    
    public AuthService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }
    
    public async Task<LoginResponse> LoginAsync(LoginRequest request)
    {
        var json = JsonConvert.SerializeObject(request);
        var content = new StringContent(json, Encoding.UTF8, "application/json");
        
        var response = await _httpClient.PostAsync("/api/auth/login", content);
        response.EnsureSuccessStatusCode();
        
        var responseJson = await response.Content.ReadAsStringAsync();
        return JsonConvert.DeserializeObject<LoginResponse>(responseJson);
    }
}

public class LoginRequest
{
    public string Username { get; set; }
    public string Password { get; set; }
}

public class LoginResponse
{
    public string AccessToken { get; set; }
    public int ExpiresIn { get; set; }
    public int UserId { get; set; }
}`,
            en: `// C# Example
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

public class AuthService 
{
    private readonly HttpClient _httpClient;
    
    public AuthService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }
    
    public async Task<LoginResponse> LoginAsync(LoginRequest request)
    {
        var json = JsonConvert.SerializeObject(request);
        var content = new StringContent(json, Encoding.UTF8, "application/json");
        
        var response = await _httpClient.PostAsync("/api/auth/login", content);
        response.EnsureSuccessStatusCode();
        
        var responseJson = await response.Content.ReadAsStringAsync();
        return JsonConvert.DeserializeObject<LoginResponse>(responseJson);
    }
}

public class LoginRequest
{
    public string Username { get; set; }
    public string Password { get; set; }
}

public class LoginResponse
{
    public string AccessToken { get; set; }
    public int ExpiresIn { get; set; }
    public int UserId { get; set; }
}`
        },
        properties: [
            { name: "AccessToken", type: "string", description: { zh: "访问令牌", en: "Access token" } },
            { name: "ExpiresIn", type: "integer", description: { zh: "令牌过期时间（秒）", en: "Token expiration time (seconds)" } },
            { name: "UserId", type: "integer", description: { zh: "用户ID", en: "User ID" } }
        ],
        methods: [
            { name: "POST", description: { zh: "用户登录认证", en: "User login authentication" } },
            { name: "DELETE", description: { zh: "用户登出", en: "User logout" } }
        ]
    }
];

// 标签映射
const tagMap = {
    'user': { zh: '用户管理', en: 'User Management' },
    'product': { zh: '产品管理', en: 'Product Management' },
    'order': { zh: '订单管理', en: 'Order Management' },
    'payment': { zh: '支付', en: 'Payment' },
    'auth': { zh: '认证', en: 'Authentication' }
};

// 当前语言设置
let currentLanguage = 'zh';

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    renderApiCards(apiData);
    setupEventListeners();
    
    // 使用 XMLHttpRequest 替代 fetch API 获取 Markdown 文件列表
    loadMarkdownFiles();
});

// 渲染API卡片
function renderApiCards(apis) {
    const container = document.getElementById('apiCardsContainer');
    container.innerHTML = '';
    
    apis.forEach(api => {
        const card = document.createElement('div');
        card.className = 'api-card';
        card.dataset.apiId = api.id;
        
        let tagsHtml = '';
        api.tags.forEach(tag => {
            tagsHtml += `<span class="tag">${tagMap[tag][currentLanguage] || tagMap[tag].zh}</span>`;
        });
        
        card.innerHTML = `
            <h3>${api.name[currentLanguage] || api.name.zh}</h3>
            <div class="tags">${tagsHtml}</div>
            <p class="description">${api.description[currentLanguage] || api.description.zh}</p>
        `;
        
        card.addEventListener('click', () => showApiDetail(api.id));
        container.appendChild(card);
    });
}

// 显示API详情
function showApiDetail(apiId) {
    const api = apiData.find(item => item.id == apiId);
    if (!api) return;
    
    const detailContent = document.getElementById('apiDetailContent');
    
    let tagsHtml = '';
    api.tags.forEach(tag => {
        tagsHtml += `<span class="tag">${tagMap[tag][currentLanguage] || tagMap[tag].zh}</span>`;
    });
    
    let propertiesHtml = '';
    if (api.properties && api.properties.length > 0) {
        propertiesHtml = `
            <table class="properties-table">
                <thead>
                    <tr>
                        <th>${currentLanguage === 'zh' ? '属性名' : 'Property'}</th>
                        <th>${currentLanguage === 'zh' ? '类型' : 'Type'}</th>
                        <th>${currentLanguage === 'zh' ? '描述' : 'Description'}</th>
                    </tr>
                </thead>
                <tbody>
                    ${api.properties.map(prop => `
                        <tr>
                            <td>${prop.name}</td>
                            <td>${prop.type}</td>
                            <td>${prop.description[currentLanguage] || prop.description.zh}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }
    
    let methodsHtml = '';
    if (api.methods && api.methods.length > 0) {
        methodsHtml = `
            <table class="methods-table">
                <thead>
                    <tr>
                        <th>${currentLanguage === 'zh' ? '方法' : 'Method'}</th>
                        <th>${currentLanguage === 'zh' ? '描述' : 'Description'}</th>
                    </tr>
                </thead>
                <tbody>
                    ${api.methods.map(method => `
                        <tr>
                            <td>${method.name}</td>
                            <td>${method.description[currentLanguage] || method.description.zh}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }
    
    detailContent.innerHTML = `
        <button class="back-btn" id="backBtn">← ${currentLanguage === 'zh' ? '返回列表' : 'Back to list'}</button>
        <h2>${api.name[currentLanguage] || api.name.zh}</h2>
        <div class="tags">${tagsHtml}</div>
        <p>${api.description[currentLanguage] || api.description.zh}</p>
        
        <div class="section">
            <h3>${currentLanguage === 'zh' ? '示例' : 'Example'}</h3>
            <pre class="example-code">${api.example[currentLanguage] || api.example.zh}</pre>
        </div>
        
        <div class="section">
            <h3>${currentLanguage === 'zh' ? '属性' : 'Properties'}</h3>
            ${propertiesHtml}
        </div>
        
        <div class="section">
            <h3>${currentLanguage === 'zh' ? '方法' : 'Methods'}</h3>
            ${methodsHtml}
        </div>
    `;
    
    document.getElementById('apiDetailSection').classList.add('visible');
    
    // 绑定返回按钮事件
    document.getElementById('backBtn').addEventListener('click', () => {
        document.getElementById('apiDetailSection').classList.remove('visible');
    });
}

// 设置事件监听器
function setupEventListeners() {
    // 标签过滤
    const tagFilters = document.querySelectorAll('.tag-filter');
    tagFilters.forEach(filter => {
        filter.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 更新活动状态
            tagFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            // 过滤API
            const tag = this.dataset.tag;
            if (tag === 'all') {
                renderApiCards(apiData);
            } else {
                const filteredApis = apiData.filter(api => api.tags.includes(tag));
                renderApiCards(filteredApis);
            }
        });
    });
    
    // 搜索功能
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // 语言切换
    const langZhBtn = document.getElementById('langZh');
    const langEnBtn = document.getElementById('langEn');
    
    langZhBtn.addEventListener('click', function() {
        currentLanguage = 'zh';
        langZhBtn.classList.add('active');
        langEnBtn.classList.remove('active');
        renderApiCards(apiData);
        // 如果有详情页面打开，刷新详情页面
        const detailSection = document.getElementById('apiDetailSection');
        if (detailSection.classList.contains('visible')) {
            // 重新渲染详情页面
            const visibleApiId = document.querySelector('.api-card').dataset.apiId;
            if (visibleApiId) {
                showApiDetail(visibleApiId);
            }
        }
    });
    
    langEnBtn.addEventListener('click', function() {
        currentLanguage = 'en';
        langEnBtn.classList.add('active');
        langZhBtn.classList.remove('active');
        renderApiCards(apiData);
        // 如果有详情页面打开，刷新详情页面
        const detailSection = document.getElementById('apiDetailSection');
        if (detailSection.classList.contains('visible')) {
            // 重新渲染详情页面
            const visibleApiId = document.querySelector('.api-card').dataset.apiId;
            if (visibleApiId) {
                showApiDetail(visibleApiId);
            }
        }
    });
}

// 执行搜索
function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (!searchTerm) {
        renderApiCards(apiData);
        return;
    }
    
    const filteredApis = apiData.filter(api => 
        api.name.zh.toLowerCase().includes(searchTerm) ||
        api.name.en.toLowerCase().includes(searchTerm) ||
        api.description.zh.toLowerCase().includes(searchTerm) ||
        api.description.en.toLowerCase().includes(searchTerm) ||
        api.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    
    renderApiCards(filteredApis);
}

// 使用 XMLHttpRequest 替代 fetch API 获取 Markdown 文件列表
function loadMarkdownFiles() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/markdown-files', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                try {
                    const files = JSON.parse(xhr.responseText);
                    // 处理获取到的 Markdown 文件列表
                    console.log('Markdown files loaded:', files);
                    // 在这里可以进一步处理文件列表
                } catch (e) {
                    console.error('Error parsing markdown files:', e);
                }
            } else {
                console.error('Failed to load markdown files, status:', xhr.status);
            }
        }
    };
    xhr.onerror = function() {
        console.error('Network error while loading markdown files');
    };
    xhr.send();
}