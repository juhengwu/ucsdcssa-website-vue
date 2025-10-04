# 🚀 UCSD CSSA 网站部署指南

## 📋 问题说明

之前遇到的问题:
- ✅ 本地运行正常
- ❌ 服务器上显示旧代码或API调用失败(`ERR_NAME_NOT_RESOLVED`)

**根本原因**: API地址配置问题
- 本地开发使用: `http://127.0.0.1:667`
- 生产服务器使用: `https://api.ucsdcssa.com`

## 🔧 解决方案

现在使用 **Vite 环境变量** 自动管理不同环境的配置:

### 文件结构
```
ucsdcssa-website-vue/
├── .env.development      # 开发环境配置
├── .env.production       # 生产环境配置
└── src/
    └── classified.js     # 自动读取环境变量
```

### 配置文件

**.env.development** (开发环境)
```env
VITE_API_BASE_URL=http://127.0.0.1:667
```

**.env.production** (生产环境)
```env
VITE_API_BASE_URL=https://api.ucsdcssa.com
```

## 🚀 部署步骤

### 1️⃣ 在宝塔服务器上部署

```bash
# 进入项目目录
cd /www/wwwroot/ucsdcssa.com

# 拉取最新代码
git pull origin by-year

# 安装依赖(首次或依赖更新时)
npm install

# 🔑 关键步骤: 构建生产版本
npm run build

# build 命令会:
# - 自动使用 .env.production 的配置
# - API地址会自动变为 https://api.ucsdcssa.com
# - 生成 dist/ 目录供Nginx/Apache使用
```

### 2️⃣ Nginx 配置检查

确保Nginx指向构建后的 `dist` 目录:

```nginx
server {
    listen 80;
    server_name ucsdcssa.com www.ucsdcssa.com;
    
    # 指向构建后的目录
    root /www/wwwroot/ucsdcssa.com/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # API代理(如果需要)
    location /api/ {
        proxy_pass https://api.ucsdcssa.com;
    }
}
```

### 3️⃣ 后端API配置

确保后端 `api.ucsdcssa.com` 已正确配置:

```python
# app.py 或相关配置
# 允许前端域名的CORS
CORS(app, resources={
    r"/*": {
        "origins": ["https://ucsdcssa.com", "https://www.ucsdcssa.com"]
    }
})
```

## 🧪 验证部署

### 检查清单:

1. ✅ **构建成功**
   ```bash
   npm run build
   # 应该生成 dist/ 目录
   ```

2. ✅ **API地址正确**
   打开浏览器控制台 → Network → 检查请求地址
   - 应该看到: `https://api.ucsdcssa.com/group-photo/...`
   - 不应该看到: `http://127.0.0.1:667/...`

3. ✅ **DNS解析正常**
   ```bash
   ping api.ucsdcssa.com
   # 应该能解析到服务器IP
   ```

4. ✅ **CORS配置正确**
   浏览器控制台不应该有CORS错误

5. ✅ **清除缓存**
   强制刷新浏览器: `Ctrl + Shift + R` (Windows) / `Cmd + Shift + R` (Mac)

## 🔍 常见问题排查

### 问题1: 显示旧版本代码
**原因**: 没有重新构建或浏览器缓存
**解决**:
```bash
npm run build  # 重新构建
# 清除浏览器缓存或强制刷新
```

### 问题2: ERR_NAME_NOT_RESOLVED
**原因**: DNS未解析或API域名配置错误
**解决**:
1. 检查DNS: `nslookup api.ucsdcssa.com`
2. 确认 `.env.production` 中的域名正确
3. 重新构建: `npm run build`

### 问题3: CORS错误
**原因**: 后端未允许前端域名
**解决**: 在后端添加CORS配置允许 `ucsdcssa.com`

### 问题4: 双斜杠问题 `//group-photo`
**原因**: `backendAddress` 已包含协议,不需要额外的 `/`
**检查**: 
- ✅ 正确: `${classified.backendAddress}/group-photo`
- ❌ 错误: `${classified.backendAddress}//group-photo`

## 📝 开发工作流

### 本地开发
```bash
npm run dev
# 自动使用 .env.development
# API: http://127.0.0.1:667
```

### 生产构建
```bash
npm run build
# 自动使用 .env.production
# API: https://api.ucsdcssa.com
```

### 预览生产构建
```bash
npm run build
npm run preview
# 本地预览生产版本
```

## 🎯 快速部署命令(宝塔服务器)

```bash
cd /www/wwwroot/ucsdcssa.com && \
git pull origin by-year && \
npm install && \
npm run build && \
echo "✅ 部署完成!"
```

## ⚠️ 注意事项

1. **不要手动修改 `classified.js` 中的地址**
   - 现在由环境变量自动管理
   
2. **确保 `.env.production` 已提交到Git**
   - 这个文件包含生产环境配置
   - `.gitignore` 只忽略 `.env.local` 等本地覆盖文件

3. **每次代码更新后必须重新构建**
   ```bash
   npm run build
   ```

4. **检查后端API是否正常运行**
   ```bash
   curl https://api.ucsdcssa.com/health  # 或其他健康检查端点
   ```

## 📞 技术支持

如果遇到问题:
1. 检查浏览器控制台的错误信息
2. 检查Network面板的API请求地址
3. 确认后端API服务正常运行
4. 验证DNS解析是否正常

---
最后更新: 2025-10-03
