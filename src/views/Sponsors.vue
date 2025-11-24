<template>
  <div class="sponsors">
    <div class="hero">
      <h1 class="section-title">Sponsors</h1>
      <p class="section-subtitle">感谢所有合作伙伴一直以来的支持</p>
    </div>
    
    <!-- 普通赞助商 -->
    <div class="sponsors-grid">
      <div 
        v-for="sponsor in sponsors" 
        :key="sponsor.name"
        class="sponsor-card"
      >
        <el-popover 
          placement="top" 
          :width="320"
          trigger="hover"
          popper-class="sponsor-popover"
        >
          <template #reference>
            <a :href="sponsor.url" target="_blank" v-if="sponsor.url" class="sponsor-link" rel="noopener noreferrer" :aria-label="'Open ' + sponsor.name + ' website in a new tab'">
              <el-image 
                :src="getAssetsFile(sponsor.image)" 
                class="sponsor-icon"
                fit="contain"
                :alt="sponsor.name"
              />
            </a>
            <el-image 
              v-else
              :src="getAssetsFile(sponsor.image)" 
              class="sponsor-icon"
              fit="contain"
              :alt="sponsor.name"
            />
          </template>
          <template #default>
            <div class="sponsor-details">
              <h3 class="sponsor-name">{{ sponsor.name }}</h3>
              <p class="sponsor-description">{{ sponsor.description }}</p>
              <div class="sponsor-info">
                <div v-if="sponsor.address" class="address-section">
                  <i class="el-icon-location"></i>
                  <span>{{ sponsor.address || '地址待更新' }}</span>
                </div>
                <div v-if="sponsor.discount" class="discount-section">
                  <i class="el-icon-price-tag"></i>
                  <span class="discount-text">{{ sponsor.discount }}</span>
                </div>
              </div>
            </div>
          </template>
        </el-popover>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Sponsors",
  data() {
    return {
      sponsors: [
        {
          name: "Na Tart 蛋挞",
          image: "natart蛋挞.png",
          url: "https://natartca.com/",
          description: "Na Tart stands for Nature Art. We reinvent the classic Portuguese egg tart with crispy layers and silky custard, infused with Asian-inspired flavors. Rooted in tradition, elevated with creativity every bite is a taste of nature and art.",
          address: "5252 Balboa Avenue, San Diego, CA 92117",
          discount: "10% off (minimal 10 dollars)"
        },
        {
          name: "Calvin's Korean Chicken",
          image: "Calvin.png",
          url: "https://calvinskhotchicken.square.site/",
          description: "韩式炸鸡专门店，提供正宗韩式炸鸡和各种韩式配菜，外酥内嫩，口味绝佳。",
          address: "",
          discount: "5% off"
        },
        {
          name: "Júewèi",
          image: "juewei.png",
          url: "https://www.lingshi.us/collections/juewei",
          description: "绝味鸭脖连锁店，以麻辣鸭脖和各种卤味小食为特色，是下酒好伴侣。",
          address: "",
          discount: "10% off"
        },
        {
          name: "兰州拉面馆",
          image: "lanzhoulamian.png",
          url: "https://www.hometowntastechineserestaurant.com/",
          description: "兰州拉面馆，专营传统中式家常菜，用心烹饪，让您品尝到家的味道。",
          address: "",
          discount: "15% off"
        },
        {
          name: "粉阿姐超级土豆粉",
          image: "fanajie.png",
          url: "https://www.hometowntastechineserestaurant.com/",
          description: "粉阿姐超级土豆粉",
          address: "",
          discount: "10% off"
        },
        {
          name: "DLHOPE",
          image: "dlhope.png",
          url: "https://www.hometowntastechineserestaurant.com/",
          description: "DLHOPE 造型",
          address: "",
          discount: "10% off"
        },
        {
          name: "Hongyuan Kebab 弘元串城",
          image: "hongyuan.png",
          url: "https://www.hometowntastechineserestaurant.com/",
          description: "hongyuan Kebab 弘元串城",
          address: "",
          discount: "20% off Mon - Fri"
        },
        {
          name: "Mosa tea",
          image: "mosatea.png",
          url: "https://www.hometowntastechineserestaurant.com/",
          description: "Mosa tea",
          address: "",
          discount: "10% off"
        },
        {
          name: "Collision Doc",
          image: "collisiondoc.png",
          url: "https://www.hometowntastechineserestaurant.com/",
          description: "Collision Doc",
          address: "",
          discount: "10% off"
        },
      ]
    }
  },
  methods: {
    getAssetsFile(fileName) {
      return new URL(`../assets/${fileName}`, import.meta.url).href;
    }
  }
}
</script>

<style scoped>
.sponsors {
  padding: 56px 24px 96px;
  max-width: 1240px;
  margin: 0 auto;
  background: #f8f9fb;
  min-height: 100vh;
}

.hero {
  text-align: center;
  margin: 24px 0 8px;
}

.section-title {
  text-align: center;
  font-size: 36px;
  line-height: 1.15;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 8px;
  color: #0b0d12;
}

.section-subtitle {
  text-align: center;
  color: #6b7280;
  font-size: 15px;
  margin: 0 auto 32px;
}

.cssa-partners-title,
.other-sponsors-title {
  margin-top: 72px;
  font-size: 28px;
  color: #0b0d12;
}

.sponsors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 28px;
  margin: 20px 0 72px;
  padding: 0 4px;
  isolation: isolate; /* create new stacking context for z-index */
}

.sponsor-card {
  position: relative;
  transition: box-shadow 300ms ease, filter 250ms ease;
  cursor: pointer;
  z-index: 0;
  background: transparent;
}

.sponsor-card:hover {
  /* no vertical movement to avoid overlap */
  z-index: 2;
}

.sponsor-link {
  display: block;
  text-decoration: none;
}

.sponsor-icon {
  width: 100%;
  height: 132px;
  border-radius: 16px;
  border: 1px solid rgba(12, 14, 20, 0.08);
  box-shadow: 0 4px 16px rgba(12, 14, 20, 0.06);
  transition: box-shadow 300ms ease, filter 250ms ease, border-color 300ms ease;
  background: linear-gradient(180deg, #ffffff, #fafbff);
  padding: 20px;
  object-fit: contain;
  filter: grayscale(0.45) contrast(1.05) saturate(0.9);
  overflow: hidden;
  box-sizing: border-box;
  pointer-events: none; /* ensure hover state is triggered on card/link */
}

.sponsor-card:hover .sponsor-icon {
  box-shadow: 0 10px 24px rgba(12, 14, 20, 0.12);
  filter: grayscale(0) contrast(1) saturate(1);
  border-color: rgba(12, 14, 20, 0.12);
}

.partner-card .sponsor-icon {
  border: 1px solid rgba(12, 14, 20, 0.12);
  background: linear-gradient(180deg, #ffffff, #fafbff);
  box-shadow: 0 6px 20px rgba(12, 14, 20, 0.10);
}

.partner-card:hover .sponsor-icon {
  box-shadow: 0 12px 28px rgba(12, 14, 20, 0.16);
}

/* 弹窗样式 */
:deep(.sponsor-popover) {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(12, 14, 20, 0.18);
  border: 1px solid rgba(12, 14, 20, 0.08);
}

:deep(.partner-popover) {
  background: #ffffff;
}

.sponsor-details {
  padding: 16px 18px 18px;
  text-align: left;
  background: #ffffff;
}

.sponsor-name {
  margin: 0 0 12px 0;
  font-size: 18px;
  font-weight: 700;
  color: #0b0d12;
  letter-spacing: -0.01em;
}

.sponsor-description {
  margin: 0 0 16px 0;
  font-size: 14px;
  line-height: 1.65;
  color: #4b5563;
  text-align: left;
}

.sponsor-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.address-section,
.discount-section {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 13px;
}

.address-section {
  background: #f3f4f6;
  color: #6b7280;
}

.discount-section {
  background: #0b0d12;
  color: #ffffff;
  font-weight: 600;
}

.discount-section.highlight {
  background: #111827;
}

.discount-text {
  font-weight: 700;
}

.address-section i,
.discount-section i {
  font-size: 16px;
  opacity: 0.7;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .sponsors-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 22px;
  }
}

@media (max-width: 768px) {
  .sponsors {
    padding: 32px 16px 72px;
  }
  
  .section-title {
    font-size: 28px;
    margin: 0 0 6px;
  }
  
  .other-sponsors-title {
    font-size: 22px;
  }
  
  .sponsors-grid {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 18px;
    padding: 0 4px;
  }
  
  .sponsor-icon {
    height: 108px;
    padding: 14px;
  }
  
  :deep(.sponsor-popover) {
    max-width: 320px !important;
  }
  
  .sponsor-details {
    padding: 14px 16px 16px;
  }
  
  .sponsor-name {
    font-size: 16px;
  }
  
  .sponsor-description {
    font-size: 13.5px;
  }
}

@media (max-width: 480px) {
  .sponsors-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }
  
  .sponsor-icon {
    height: 96px;
    padding: 12px;
  }
  
  .section-title {
    font-size: 24px;
  }
  
  .other-sponsors-title {
    font-size: 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .sponsor-card,
  .sponsor-icon {
    transition: none !important;
  }
}
</style>



