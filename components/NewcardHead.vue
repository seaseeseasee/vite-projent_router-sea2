<template>

  <div class="row mb-2">
          <div class="col-md-6" v-for="(n,i) in travelList" :key="n">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary-emphasis">ร้านที่ {{ i+1 }} </strong>
                <h3 class="mb-0">{{n.name}}</h3>
                <div class="mb-1 text-body-secondary">ราคาต่อโต๊ะ {{n.price}} บาท</div>
                <p class="card-text mb-auto">{{n.text_box}}</p>
                
                <div style="margin-bottom: 30px;">
                <RouterLink :to="{name: `news_${i+1}` , params: {id: n.name}}" class="icon-link gap-1 icon-link-hover stretched-link">
                 กดดูรายละเอียดเพิ่มเติม
                  <svg class="bi"> <use xlink:href="#chevron-right"/></svg>
               </RouterLink>
              </div>     
              </div>
              <div class="col-auto d-none d-lg-block">
                <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false" 
                style="margin: 15px;" >
                  <image :xlink:href="n.img" x="0" y="10" width="200" height="200" />
                </svg>
              </div>
            </div>
          </div>
  
        
      </div>
  
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router'
  import { ref } from 'vue';
  
  
  
  //variable drinking
  const travelList=ref([
     {name: 'i-love-coffe',  price:500, img:"/vite-projent_componen+router/img/i_love_coffe2.jpg", quantity: 0 ,
      text_box:' Let enjoy Food&Drink สุนทรารมณ์ ยินดีให้บริการ'
      }, 
  
    {name:'paizz',  price:750, img:"/vite-projent_componen+router/img/คาเฟ่.jpg", quantity: 0 ,
      text_box:' Overnight Bar Maejo โอเวอร์ไนท์บาร์แม่โจ ร้านย่านแม่โจ้ เชียงใหม่ มาดื่มด่ำบรรยากาศแสนชิว พร้อมเครื่องดื่ม และอาหารราคาสบายกระเป๋า มีดนตรีสดและดีเจทุกวัน'
      },
    
    {name:'cafe',      price:1500, img:"/vite-projent_componen+router/img/ร้านพิซซ่า.jpg", quantity: 0 ,
      text_box:' ตามมา คาเฟ่ ร้านของคนเก๋ คนเท่  อย่างมีสไตล์ 😎หาร้านนั่งชิลบรรยากาศดี มีดนตรีสดทั้งคืน แวะมาได้เลย ตามมา คาเฟ่ 🐵เปิดให้บริการทุกวัน'
      },
  
    {name:'cat-cafe',     price:1599, img:"/vite-projent_componen+router/img/คาเฟ่แมว.jpg", quantity: 0 ,
      text_box:' ร้านไป-ยานใหญ่ อาหารอร่อย สะอาด ถูก ดนตรีไพเราะ บอลจอใหญ่ สังสรรค์ราคาประหยัด⚽⚽'
      },
  
    {name:'dog-cafe',    price:1699, img:"/vite-projent_componen+router/img/คาเฟ่หมา.jpg", quantity: 0 ,
      text_box:' Too Nice Nimman Enjoy our special drinks, good foods, good vibesand everyday live band at Too Nice'
      },
  ])
  
  </script>