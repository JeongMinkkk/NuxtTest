<template>
  <div class="w-full pt-12 mt-8 px-[2%] pb-8">
   <TitleTxt title="스킬" />
   <div class="max-w-7xl mx-auto mt-8">
     <div class="bg-white rounded-md border darkMode p-5 mb-8 last:mb-0">
       <div class="w-full h-20" v-for="e in ProgressList" :key="e">
         <div class="w-full h-5 bg-[#e0e0de] rounded-[50px]">
           <div class="h-full bg-slate-700 duration-1000 ease-in-out rounded-[50px] text-right relative mb-3 first:mt-10" :style="{width: `${e.progressBefore}%`}">
             <p class="absolute -top-6 md:-top-7 left-1 text-sm md:text-lg">{{e.textList}}</p>
             <span class="text-sm pr-2 text-white relative -top-0.5">{{e.progressBefore}}%</span>
           </div>
           <p class="text-sm md:text-base"> {{ e.desc }}</p>
         </div>
       </div>
     </div>
   </div>
  </div>
 </template>
 <script>
 export default {
   data() {
     return{
       ProgressList:[
         {
           textList: "html",
           progressBefore: 0,
           progressAfter: 30,
           desc: "웹표준에 준수하여, 마크업을 할 수 있다. float이 아닌 flex 및 grid를 활용한 레이아웃 구성을 할 수 있다."
           // 0에서 다시 차는걸 해야해서 ..
           // 배열은 애니메이션 동작안함. 새로운 배열의 값으로 바뀌는거라서 트렌지션이 안먹힌다.
         },
         {
           textList: "css",
           progressBefore: 0,
           progressAfter: 40,
           desc: "웹표준에 준수하여, 마크업을 할 수 있다. float이 아닌 flex 및 grid를 활용한 레이아웃 구성을 할 수 있다.2"
         },
         {
           textList: "js",
           progressBefore: 0,
           progressAfter: 40,
           desc: "웹표준에 준수하여, 마크업을 할 수 있다. float이 아닌 flex 및 grid를 활용한 레이아웃 구성을 할 수 있다."
         },
         {
           textList: "jquery",
           progressBefore: 0,
           progressAfter: 60,
           desc: "웹표준에 준수하여, 마크업을 할 수 있다. float이 아닌 flex 및 grid를 활용한 레이아웃 구성을 할 수 있다."
         },
         {
           textList: "vue",
           progressBefore: 0,
           progressAfter: 40,
           desc: "웹표준에 준수하여, 마크업을 할 수 있다. float이 아닌 flex 및 grid를 활용한 레이아웃 구성을 할 수 있다."
         },        
         {
           textList: "react",
           progressBefore: 0,
           progressAfter: 30,
           desc: "웹표준에 준수하여, 마크업을 할 수 있다. float이 아닌 flex 및 grid를 활용한 레이아웃 구성을 할 수 있다."
         },
       ]
     }
   },
   mounted(){
     this.ProgressList.forEach((e)=>{
       setTimeout(() => {
         e.progressBefore = e.progressAfter
       }, 400);
     })
   }
 }
 </script>
