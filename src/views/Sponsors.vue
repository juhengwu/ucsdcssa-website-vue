<template>
  <div class="sponsors">
    <h1>Sponsors</h1>
    <!-- 这里是赞助商内容 -->

    
    <el-row justify="center" :gutter="30" style="margin-bottom: 50px;">
      
      <el-col :span="3" class="icon-sponsor">
        <el-popover placement="right">
          <template #reference>

            <a href="https://www.pandaexpress.com/" target="_blank">
              <el-image :src="getAssetsFile('panda-express.png')" class="sponsor-icon"/>
            </a>
          </template>
          <template #default>
            <div style="display: flex; justify-content: center; align-items: center;">
              Panda Express
            </div>
          </template>
        </el-popover>
      </el-col>

      <!-- tapioca-express -->
      <el-col :span="3" class="icon-sponsor">
        <el-popover placement="right">
          <template #reference>
            <a href="https://tapiocaexpress.com/" target="_blank">
              <el-image :src="getAssetsFile('tapioca-express.png')" class="sponsor-icon"/>
            </a>
          </template>
          <template #default>
            <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
              Tapioca Express
            </div>
          </template>
        </el-popover>
      </el-col>



      <!-- yogurt-world -->
      <el-col :span="3" class="icon-sponsor">
          <el-popover placement="right" >
            <template #reference>
              <a href="https://www.instagram.com/yogurtworld.ucsd/" target="_blank">
                <el-image :src="getAssetsFile('yogurt-world.png')" class="icon-sponsor"/>
              </a>
            </template>
            <template #default>
              <div style="display: flex; justify-content: center; align-items: center; height: 200%; width: 100%;">
                Yogurt World
              </div>
            </template>
          </el-popover>
        </el-col>



        <!-- taco-villa -->
        <el-col :span="3" class="icon-sponsor">
          <el-popover placement="right" >
            <template #reference>
              <el-image :src="getAssetsFile('taco-villa.png')" class="icon-sponsor"/>
            </template>
            <template #default>
              <div style="display: flex; justify-content: center; align-items: center; height: 200%; width: 200%;">
                Taco Villa
              </div>
            </template>
          </el-popover>
        </el-col>



        <el-col :span="3" class="icon-sponsor">
          <el-popover placement="right">
            <template #reference>
              <el-image :src="getAssetsFile('spot-ktv.png')"  class="icon-sponsor"/>
            </template>
            <template #default>
              <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                Spot KTV
              </div>
            </template>
          </el-popover>
        </el-col>
        
        <el-col :span="3" class="icon-sponsor">
          <el-popover placement="right" >
            <template #reference>
              <el-image :src="getAssetsFile('eastern-dynasty.png')" class="icon sponsor"/>
            </template>
            <template #default>
              <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                Eastern Dynasty
              </div>
            </template>
          </el-popover>
        </el-col>


        </el-row>

        <!-- second row -->
      

          <el-row justify="center" :gutter="30" style="margin-bottom: 50px;">
            <el-col :span="3" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('blue-pepper.png')" class="icon sponsor"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    Blue Pepper
                  </div>
                </template>
              </el-popover>
            </el-col>
          
            <el-col :span="3" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('fan-fan.png')" class="icon sponsor"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    Fan Fan
                  </div>
                </template>
              </el-popover>
            </el-col>
          
            <el-col :span="3" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('starbucks.png')" class="icon sponsor"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    Starbucks
                  </div>
                </template>
              </el-popover>
            </el-col>
          
            <el-col :span="3" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('youmi.png')" class="icon sponsor"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    Youmie
                  </div>
                </template>
              </el-popover>
            </el-col>
          
            <el-col :span="3" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('kanpai.png')" class="icon sponsor"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    KANPAI
                  </div>
                </template>
              </el-popover>
            </el-col>
          
            <el-col :span="3" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('o-billiard-cafe.png')" class="icon sponsor"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    O Billiard Cafe
                  </div>
                </template>
              </el-popover>
            </el-col>
    
          

         
        </el-row>

          <!-- third row -->
          <el-row justify="center" :gutter="30" style="margin-bottom: 50px;">

            <el-col :span="3" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('rakiraki.png')" class="icon sponsor"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    RAKIRAKI
                  </div>
                </template>
              </el-popover>
            </el-col>
            
            <el-col :span="3" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('shanghai-cafe.png')" class="icon sponsor"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                     Shanghai Cafe
                  </div>
                </template>
              </el-popover>
            </el-col>
            
            <el-col :span="3" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('dumpling-inn.png')" class="icon sponsor"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    Dumpling Inn
                  </div>
                </template>
              </el-popover>
            </el-col>
            
            <el-col :span="3" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('m-and-j.png')" class="icon sponsor"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    M&J 798
                  </div>
                </template>
              </el-popover>
            </el-col>
            
            <el-col :span="3" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('si-chuan-garden.png')" class="icon sponsor"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    Spicy City
                  </div>
                </template>
              </el-popover>
            </el-col>
            
            <el-col :span="3" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('bbking.png')" class="icon sponsor"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    BB KING
                  </div>
                </template>
              </el-popover>
            </el-col>
            


          

          </el-row>

        <!-- fourth row -->
        <el-row justify="center" :gutter="30" style="margin-bottom: 50px;">
       
          <el-col :span="3" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('sizzling-pot-king.png')" class="icon sponsor"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  Sizzling Pot King 
                </div>
              </template>
            </el-popover>
          </el-col>
        
          <el-col :span="3" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('chakaa.png')" class="icon sponsor"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  Chakaa 
                </div>
              </template>
            </el-popover>
          </el-col>
        
          <el-col :span="3" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('du-entertainment.png')" class="icon sponsor"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  DU Entertainment
                </div>
              </template>
            </el-popover>
          </el-col>
        
          <el-col :span="3" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('encounter.png')" class="icon sponsor"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  Encounter
                </div>
              </template>
            </el-popover>
          </el-col>
        
          <el-col :span="3" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('k.ma.png')" class="icon sponsor"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  K.MA
                </div>
              </template>
            </el-popover>
          </el-col>
        
          <el-col :span="3" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('vivi-bubble-tea.png')" class="icon sponsor"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  ViVi Bubble Tea
                </div>
              </template>
            </el-popover>
          </el-col>
  
        </el-row>

        <!-- fifth row -->
        <el-row justify="center" :gutter="30" style="margin-bottom: 50px;">
          <el-col :span="3" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('yin-tang.png')" class="icon sponsor"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  Yin Tang
                </div>
              </template>
            </el-popover>
          </el-col>
        
          <el-col :span="3" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('wu-hu.png')" class="icon sponsor"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  Wu Hu
                </div>
              </template>
            </el-popover>
          </el-col>
        
          <el-col :span="3" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('hai-si.png')" class="icon sponsor"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                 Hair Star 
                </div>
              </template>
            </el-popover>
          </el-col>
        
          <el-col :span="3" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('nobel-chef.png')" class="icon sponsor"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  The Nobel Chef
                </div>
              </template>
            </el-popover>
          </el-col>
</el-row>

<!-- 2) New CSSA Card Partners Section (reuse same structure) -->
<h1>CSSA Card Partners</h1>

<!-- Row for CSSA Card Partners -->
<el-row justify="center" :gutter="30" style="margin-bottom: 50px;">
  <!-- Blue Pepper -->
  <el-col :span="3" class="icon-sponsor">
    <el-popover placement="right">
      <template #reference>
        <el-image :src="getAssetsFile('blue-pepper.png')" class="icon sponsor"/>
      </template>
      <template #default>
        <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
          Blue Pepper, 10% off (minimal 10 dollars)	
        </div>
      </template>
    </el-popover>
  </el-col>

  <!-- Tapioca Express -->
  <el-col :span="3" class="icon-sponsor">
    <el-popover placement="right">
      <template #reference>
        <el-image :src="getAssetsFile('tapioca-express.png')" class="icon sponsor"/>
      </template>
      <template #default>
        <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
          Tapioca Express, 10% off
        </div>
      </template>
    </el-popover>
  </el-col>

  <!-- Yogurt World -->
  <el-col :span="3" class="icon-sponsor">
        <el-popover placement="right">
          <template #reference>
            <el-image :src="getAssetsFile('yogurt-world.png')" class="sponsor-icon"/>
          </template>
          <template #default>
            <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
              Yogurt World, 10% off
            </div>
          </template>
        </el-popover>
      </el-col>

  <!-- Taco Villa -->
  <el-col :span="3" class="icon-sponsor">
    <el-popover placement="right">
      <template #reference>
        <el-image :src="getAssetsFile('taco-villa.png')" class="sponsor-icon"/>
      </template>
      <template #default>
        <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
          Taco Villa, 10% off
        </div>
      </template>
    </el-popover>
  </el-col>

  <el-col :span="3" class="icon-sponsor">
    <el-popover placement="right">
      <template #reference>
        <el-image :src="getAssetsFile('chakaa.png')" class="sponsor-icon"/>
      </template>
      <template #default>
        <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
          Chakaa, 10% off
        </div>
      </template>
    </el-popover>
  </el-col>

  <el-col :span="3" class="icon-sponsor">
        <el-popover placement="right">
          <template #reference>
            <el-image :src="getAssetsFile('spot-ktv.png')" class="sponsor-icon"/>
          </template>
          <template #default>
            <div class="popover-text">
              Spot KTV, 15% off (Cash Only)
            </div>
          </template>
        </el-popover>
      </el-col>
    </el-row>
    
<el-row justify="center" :gutter="30" style="margin-bottom: 50px;">
  <el-col :span="3" :offset="0.5" class="icon-sponsor">
        <el-popover placement="right">
          <template #reference>
            <el-image :src="getAssetsFile('youmi.png')" class="sponsor-icon"/>
          </template>
          <template #default>
            <div class="popover-text">
              Youmie, 10% off（Cash only）
            </div>
          </template>
        </el-popover>
      </el-col>
  
<el-col :span="3" class="icon-sponsor">
  <el-popover placement="right">
          <template #reference>
            <el-image :src="getAssetsFile('du-entertainment.png')" class="sponsor-icon"/>
          </template>
          <template #default>
            <div class="popover-text">
              DU Entertainment, 15% off 
            </div>
          </template>
        </el-popover>
      </el-col>

  <el-col :span="3" class="icon-sponsor">
    <el-popover placement="right">
      <template #reference>
        <el-image :src="getAssetsFile('encounter.png')" class="sponsor-icon"/>
      </template>
      <template #default>
        <div class="popover-text">
          encounter, 15% off (credit card), 20% off (cash)
        </div>
      </template>
    </el-popover>
  </el-col>

  <el-col :span="3" class="icon-sponsor">
        <el-popover placement="right">
          <template #reference>
            <el-image :src="getAssetsFile('yin-tang.png')" class="sponsor-icon"/>
          </template>
          <template #default>
            <div class="popover-text">
              Yin Tang, 10% off （Cash only）
            </div>
          </template>
        </el-popover>
      </el-col>

  <el-col :span="3" class="icon-sponsor">
    <el-popover placement="right">
      <template #reference>
        <el-image :src="getAssetsFile('Zhengxin.png')" class="sponsor-icon"/>
      </template>
      <template #default>
        <div class="popover-text">
          Zhengxin, 20% off cash, 10% off credit card
        </div>
      </template>
    </el-popover>
  </el-col>

  <el-col :span="3" class="icon-sponsor">
        <el-popover placement="right">
          <template #reference>
            <el-image :src="getAssetsFile('bbking.png')" class="sponsor-icon"/>
          </template>
          <template #default>
            <div class="popover-text">
              BB King, 10% off CSSA card, 20% off officer
            </div>
          </template>
        </el-popover>
      </el-col>
    </el-row>

<el-row justify="center" :gutter="30" style="margin-bottom: 50px;">

  <el-col :span="3" :offset="3" class="icon-sponsor">
    <el-popover placement="right">
      <template #reference>
        <el-image :src="getAssetsFile('wonderlan.png')" class="sponsor-icon" />
      </template>
      <template #default>
        <div class="popover-text">
          Wonderland Majiang, 20% off
        </div>
      </template>
    </el-popover>
  </el-col>

  <el-col :span="3" class="icon-sponsor">
        <el-popover placement="right">
          <template #reference>
            <el-image :src="getAssetsFile('Calvin.png')" class="sponsor-icon" />
          </template>
          <template #default>
            <div class="popover-text">
              CALVIN'S KOREAN CHICKEN, 5% off
            </div>
          </template>
        </el-popover>
      </el-col>  
      
  <el-col :span="3"  class="icon-sponsor">
    <el-popover placement="right">
      <template #reference>
        <el-image :src="getAssetsFile('juewei.png')" class="sponsor-icon" />
      </template>
      <template #default>
        <div class="popover-text">
          Júewèi, 10% off
        </div>
      </template>
    </el-popover>
  </el-col>

  <el-col :span="3" class="icon-sponsor">
        <el-popover placement="right">
          <template #reference>
            <el-image :src="getAssetsFile('xinjiang.png')" class="sponsor-icon" />
          </template>
          <template #default>
            <div class="popover-text">
              Xinjiang Barbeque, 10% off
            </div>
          </template>
        </el-popover>
      </el-col>
    
  <el-col :span="3" class="icon-sponsor">
    <el-popover placement="right">
      <template #reference>
        <el-image :src="getAssetsFile('Hometown-taste.png')" class="sponsor-icon" />
      </template>
      <template #default>
        <div class="popover-text">
          Hometown Taste, 20% off
        </div>
      </template>
    </el-popover>
  </el-col>
  
  <!-- If you want them centered across the row, you can add empty columns -->
  <el-col :span="3"></el-col>
  <el-col :span="3"></el-col>
  <el-col :span="3"></el-col>
</el-row>
</div>
</template>

<script>
export default {
  name: "Sponsors",
  methods: {
    getAssetsFile(fileName) {
      return new URL(`../assets/${fileName}`, import.meta.url).href;
    }
  }
}
</script>

<style scoped>
.sponsors {
  padding: 20px;
}


</style>



