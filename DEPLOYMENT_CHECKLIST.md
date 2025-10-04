# ✅ 部署前检查清单

## 📋 请按顺序检查以下项目:

### 1. 前端配置 ✅
- [x] 创建了 `.env.development` 和 `.env.production`
- [x] 修改了 `src/classified.js` 使用环境变量
- [x] 更新了 `.gitignore`

### 2. 本地测试
- [ ] 运行 `npm run dev` 确认本地开发正常
- [ ] 运行 `npm run build` 确认生产构建成功
- [ ] 检查 `dist/` 目录已生成

### 3. Git 提交和推送
```bash
# 添加所有更改
git add .

# 提交更改
git commit -m "fix: 使用环境变量管理API地址,修复生产环境部署问题"

# 推送到远程仓库
git push origin by-year
```

### 4. 服务器部署

#### 4.1 检查后端API
```bash
# SSH登录到服务器
ssh your-server

# 检查后端是否运行
curl http://localhost:667/
# 或者从外部访问
curl https://api.ucsdcssa.com/

# 如果后端没运行,启动它
cd /path/to/ucsdcssa-website-backend
python app.py
# 或使用 gunicorn/uwsgi 等
```

#### 4.2 部署前端
```bash
# 进入前端目录
cd /www/wwwroot/ucsdcssa.com

# 拉取最新代码
git pull origin by-year

# 检查 .env.production 是否存在
cat .env.production
# 应该显示: VITE_API_BASE_URL=https://api.ucsdcssa.com

# 安装依赖(如果有新依赖)
npm install

# 🔑 关键: 构建生产版本
npm run build

# 检查构建是否成功
ls -la dist/
# 应该看到 index.html, assets/ 等文件
```

#### 4.3 重启Web服务器(如果需要)
```bash
# Nginx
nginx -t  # 测试配置
systemctl restart nginx

# 或者在宝塔面板中重启
```

### 5. 验证部署

#### 5.1 检查DNS
```bash
# Windows PowerShell
nslookup api.ucsdcssa.com

# 应该返回服务器IP
```

#### 5.2 浏览器测试
1. 打开 https://ucsdcssa.com
2. 按 `F12` 打开开发者工具
3. 切换到 `Network` 面板
4. 刷新页面
5. 检查API请求:
   - ✅ 应该看到: `https://api.ucsdcssa.com/department/...`
   - ✅ 状态码: 200 OK
   - ❌ 不应该看到: `http://127.0.0.1:667/...`
   - ❌ 不应该看到: `ERR_NAME_NOT_RESOLVED`

#### 5.3 功能测试
- [ ] 部门页面正常显示
- [ ] 部门照片能加载(`/group-photo/...`)
- [ ] 赞助商页面正常
- [ ] 报名页面正常
- [ ] 所有API调用成功

### 6. 清除缓存
- [ ] 浏览器强制刷新: `Ctrl + Shift + R`
- [ ] 或清除浏览器缓存后再测试

---

## 🐛 如果还有问题

### 检查1: API地址是否正确
在浏览器控制台运行:
```javascript
// 这应该返回生产环境的API地址
console.log(import.meta.env.VITE_API_BASE_URL)
```

### 检查2: 后端CORS配置
如果看到CORS错误,检查后端 `app.py`:
```python
# 应该有这行
CORS(app)
# 或更严格的配置
CORS(app, origins=["https://ucsdcssa.com", "https://www.ucsdcssa.com"])
```

### 检查3: Nginx配置
```nginx
# 检查root路径是否指向dist目录
root /www/wwwroot/ucsdcssa.com/dist;
```

### 检查4: 文件权限
```bash
# 确保Nginx有读取权限
chmod -R 755 /www/wwwroot/ucsdcssa.com/dist
```

---

## 📞 需要帮助?

记录以下信息以便排查:
1. 浏览器控制台的错误信息(Console面板)
2. Network面板中失败请求的详细信息
3. 服务器上 `npm run build` 的输出
4. Nginx/Apache 错误日志

---

完成所有检查后,你的网站应该可以正常访问了! 🎉
