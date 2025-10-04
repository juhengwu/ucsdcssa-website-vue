export const classified = {
    // 根据环境自动切换API地址
    // 开发环境: http://127.0.0.1:667
    // 生产环境: https://api.ucsdcssa.com
    backendAddress: import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:667"
  }