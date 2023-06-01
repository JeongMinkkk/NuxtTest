<template>
  <div class="w-full pt-12 mt-8 px-[2%] pb-8">
   <TitleTxt title="포트폴리오" />
   <div class="max-w-7xl mx-auto mt-8">
     <ul class="flex m-4 ml-0">
       <li class="mr-4 border darkMode bg-white py-2 px-5 rounded-md">
         <button @click="CateName='전체'" :class="CateName === '전체' && 'font-bold text-violet-500'">전체</button>
       </li>
       <li class="mr-4 border darkMode bg-white py-2 px-5 rounded-md" v-for="e in CateList" :key="e">
       <button @click="CateName=e.type" :class="CateName === e.type && 'font-bold text-violet-500'">{{ e.type }}</button></li>
       <!-- 버튼이 클릭됬을때 @클릭 - 클릭이벤트가 동작하는원리// :클래스 - 어떠한 조건에 의해서만// ..e.type이 같다면 .. // &&는 참만 글자를 진하게,바이올렛으로 바꿔주는것-->
     </ul>
   </div>
   <div class="max-w-7xl mx-auto mt-8">
     <!-- 반복되서나옴 v-for="e in CateItem" :key="e"-->
     <div v-for="e in CateItem" :key="e" class="bg-white mb-8 pt-12 group px-8 pb-16 rounded-md flex border darkMode flex-wrap "> 
       <div class="basis-[48%] relative mokup-img group-even:order-1 xl:group-even:order-2">
         <div v-for="e in 3" :key="e">
           <img class="w-full" :src="`/images/mokup-${e}.png`" alt="mokup" />
         </div>
       </div>
       <div class="basis-full md:basis-[52%] pt-10 group-even:order-2 xl:group-even:order-1">
         <h3 class="text-2xl font-bold pt-[10px] pb-[10px] lg:pl-[50px]">{{ e.descTitle }}</h3>
         <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">{{ e.desc }}</p>
         <!-- 밑에서부터는 반복문  -->
         <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">키워드 : <span v-for="el in e.keyword" :key="el" class="mr-2">{{el}}</span></p>
         <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">컬러 : <span v-for="el in e.color" :key="el" class="w-5 h-5 inline-block alian-middle mr-2" :style="{backgroundColor:`${el}`}"></span></p>
         <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">폰트 : {{e.font }}</p>
         <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">사용툴 : <span v-for="el in e.tools" :key="el" class="mr-2 align-middle">{{ el }}</span></p>
         <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">작업기간 : {{e.date }}</p>
         <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">기여도 : {{ e.contribution }}</p>
         <ul class="flex justify-center mt-6">
           <!-- <li><a v-if="e.progress !==''" :href="e.progress" class="py-1 px-8 border rounded-md darkMode text-sm">Progress</a></li>
           <li class="mx-4"><a v-if="e.original !==''" :href="e.original" class="py-1 px-8 border rounded-md darkMode text-sm">Original</a></li>
           <li><a v-if="e.redesing !==''"  :href="e.redesing" class="py-1 px-8 border rounded-md darkMode text-sm">Redesing</a></li> -->
           <li><a v-if="e.progress" :href="e.progress" class="py-1 px-8 border rounded-md darkMode text-sm">Progress</a></li>
           <li class="mx-4"><a v-if="e.original" :href="e.original" class="py-1 px-8 border rounded-md darkMode text-sm" target="_blank">Original</a></li>
           <li><a v-if="e.redesing"  :href="e.redesing" class="py-1 px-8 border rounded-md darkMode text-sm" target="_blank">Redesing</a></li>
         </ul>
       </div>
     </div>
   </div>
  </div>
 </template>
 <script>

 export default {
   computed:{
     CateItem(){
       return this.WorkList.filter((data)=>{
 
         if(this.CateName !== '전체'){
             return data.type === this.CateName
           }else{
             return data.type
           }
 
       })
     },
     CateList(){
       return this.WorkList.filter((item,i)=>{
         return(
           this.WorkList.findIndex((item2)=>{
             return item.type === item2.type
           }) === i
 
         )
       })
     },
   },
   data(){
     return{
       CateName:"전체",
       WorkList:[
         {
           "img":"http://via.placeholder.com/500",
           "descTitle":"XXXX 웹앱",
           "desc":"API를 활용한 웹앱 개발 ...",
           "keyword":["#심플함","#깔끔함","#tailwind"],
           "color":["orange","red","violet"],
           "font":"Noto Sans KR",
           "tools":["PS","AI","VS CODE"],
           "date":"10일(기획1일/구상1일/제작8일)",
           "contribution":"100%",
           "type":"Webapp",
           "progress":"",
           "original":"http://www.naver.com",
           "redesing":"http://www.kakao.com",
         },
         {
           "img":"http://via.placeholder.com/500",
           "descTitle":"XXXX 클론코딩1",
           "desc":"클론코딩1",
           "keyword":["#심플함","#깔끔함","#tailwind"],
           "color":["orange","red","violet"],
           "font":"Noto Sans KR",
           "tools":["PS","AI","VS CODE"],
           "date":"09일(제작9일)",
           "contribution":"100%",
           "type":"Publishing",
           "progress":"http://via.placeholder.com/1200x5000",
           "original":"http://www.naver.com",
           "redesing":"",
         },
         {
           "img":"http://via.placeholder.com/500",
           "descTitle":"XXXX 웹앱",
           "desc":"API를 활용한 웹앱 개발2",
           "keyword":["#심플함","#깔끔함","#tailwind"],
           "color":["orange","red","violet"],
           "font":"Noto Sans KR",
           "tools":["PS","AI","VS CODE"],
           "date":"11일(기획1일/구상1일/제작9일)",
           "contribution":"100%",
           "type":"Webapp",
           "progress":"http://via.placeholder.com/1200x5000",
           "original":"http://www.naver.com",
           "redesing":""
         },
         {
           "img":"http://via.placeholder.com/500",
           "descTitle":"XXXX 클론코딩2",
           "desc":"클론코딩",
           "keyword":["#심플함","#깔끔함","#tailwind"],
           "color":["orange","red","violet"],
           "font":"Noto Sans KR",
           "tools":["PS","AI","VS CODE"],
           "date":"10일(기획1일/구상1일/제작8일)",
           "contribution":"100%",
           "type":"Publishing",
           "progress":"http://via.placeholder.com/1200x5000",
           "original":"http://www.naver.com",
           "redesing":"http://www.kakao.com"
         },
         {
           "img":"http://via.placeholder.com/500",
           "descTitle":"XXXX 웹앱2",
           "desc":"API를 활용한 웹앱 개발3",
           "keyword":["#심플함","#깔끔함","#tailwind"],
           "color":["orange","red","violet"],
           "font":"Noto Sans KR",
           "tools":["PS","AI","VS CODE"],
           "date":"15일(기획1일/구상2일/제작12일)",
           "contribution":"100%",
           "type":"Webapp",
           "progress":"http://via.placeholder.com/1200x5000",
           "original":"",
           "redesing":"http://www.kakao.com"
         },
         {
           "img":"http://via.placeholder.com/500",
           "descTitle":"XXXX 클론코딩3",
           "desc":"클론코딩3",
           "keyword":["#심플함","#깔끔함","#tailwind"],
           "color":["orange","red","violet"],
           "font":"Noto Sans KR",
           "tools":["PS","AI","VS CODE"],
           "date":"10일(기획1일/구상1일/제작8일)",
           "contribution":"100%",
           "type":"Publishing",
           "progress":"http://via.placeholder.com/1200x5000",
           "original":"http://www.naver.com",
           "redesing":"http://www.kakao.com"
         },
       ]
     }
   }
 }
 </script>

 <style>
  .mokup-img > div{position: absolute; overflow: hidden; bottom: 0;}
  .mokup-img > div:nth-child(1){width: 85%; left: 50%; transform: translateX(-50%);}
  .mokup-img > div:nth-child(1)::after{content: ""; position: absolute; width: 92%; height: 63%; background: url("/images/preview.jpg") center top no-repeat; left: 19px; top: 20px; background-size: cover; transition: 5s;}
  .mokup-img > div:nth-child(2){width: 35%; right: 0;}
  .mokup-img > div:nth-child(2)::after{content: ""; position: absolute; width: 86%; height: 82%; background: url("/images/preview.jpg") center top no-repeat; left: 16px; top: 26px; background-size: cover; transition: 5s;}
  .mokup-img > div:nth-child(3){width: 23%; left: 0;}
  .mokup-img > div:nth-child(3)::after{content: ""; position: absolute; width: 90%; height: 95%; background: url("/images/preview.jpg") center top no-repeat; left: 7px; top: 8px; background-size: cover; transition: 5s; border-radius: 5px;}
  .mokup-img > div:hover::after{background-position: center bottom;}
 
  @media screen and (max-width:1200px){
   .mokup-img {flex-basis: 100%; height: 500px;}
   .mokup-img > div:nth-child(1){width: 550px;}
   .mokup-img > div:nth-child(2){width: 184px; right: 0;}
   .mokup-img > div:nth-child(3){width: 126px; left: 0;}
   .mokup-img > div:nth-child(1)::after{top: 23px; height: 62%; left: 21px; width: 87%;}
   .mokup-img > div:nth-child(2)::after{width: 85%; top: 24px;}
  }
  @media screen and (max-width:640px){
   .mokup-img {height: 70.3125vw;}
   .mokup-img > div:nth-child(1){width: 100%;}
   .mokup-img > div:nth-child(2){width: 35%;}
   .mokup-img > div:nth-child(3){width: 20%;}
   .mokup-img > div:nth-child(1)::after{width: 92.5%; left: 3.8%; top: 4.7%;}
   .mokup-img > div:nth-child(2)::after{left: 8%; top: 8%;}
   .mokup-img > div:nth-child(3)::after{height: 92.5%; left: 5.5%; top: 2.5%;}
  }
 </style>