// 搜索功能实现
function performSearch() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    if (!searchTerm.trim()) {
        alert('请输入搜索关键词');
        return;
    }
    
    // 模拟搜索结果
    const results = searchContent(searchTerm);
    
    // 显示搜索结果
    displayResults(results, searchTerm);
}

function searchContent(term) {
    // 模拟一些搜索数据
    const searchData = [
        { title: 'API 文档', url: 'docs/index.html', content: 'API接口文档，包含用户管理、订单管理、支付接口等详细说明' },
        { title: '新手教程', url: 'tutorials/index.html', content: '新手入门教程，包括安装配置和基本使用方法' },
        { title: '用户管理', url: 'docs/index.html#users', content: '用户管理API，获取用户列表等功能' },
        { title: '安装与配置', url: 'tutorials/index.html#step1', content: '如何安装和配置项目环境' }
    ];
    
    return searchData.filter(item => 
        item.title.toLowerCase().includes(term) || 
        item.content.toLowerCase().includes(term)
    );
}

function displayResults(results, searchTerm) {
    // 创建搜索结果页面
    const resultHTML = `
        <!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>"${searchTerm}" 的搜索结果 - MyProject</title>
            <link rel="stylesheet" href="css/style.css">
        </head>
        <body>
            <header>
                <nav>
                    <h1><a href="/">飞鸟的sbox</a></h1>
                    <ul>
                        <li><a href="/docs/">API 文档</a></li>
                        <li><a href="/tutorials/">新手教程</a></li>
                    </ul>
                </nav>
            </header>
            
            <main>
                <h1>"${searchTerm}" 的搜索结果</h1>
                <p>找到 ${results.length} 个结果</p>
                
                <div class="search-results">
                    ${results.length > 0 ? results.map(result => `
                        <div class="result-item">
                            <h3><a href="${result.url}">${result.title}</a></h3>
                            <p>${result.content}</p>
                        </div>
                    `).join('') : '<p>未找到相关结果</p>'}
                </div>
                
                <p><a href="./index.html">返回首页</a></p>
            </main>
        </body>
        </html>
    `;
    
    // 打开新窗口显示搜索结果
    const newWindow = window.open();
    newWindow.document.write(resultHTML);
    newWindow.document.close();
}

// 支持回车键搜索
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});