<template>
  <div class="w-full">
    <div class="max-w-7xl mx-auto">
      <!-- h-[calc(100vh_-_150px)] 이거때문에 정중앙안오는데 푸터 넣으면 올거임 -->
      <div class="flex flex-wrap items-center h-[calc(100vh_-_150px)]">
        <div class="basis-full text-center flex items-center flex-wrap">
          <p class="txt-1 basis-full text-5xl lg:text-7xl font-medium lg:font-semibold mb-5 lg:leading-normal leading-snug">FRONT-END DEV.</p>
          <p class="txt-2 basis-full text-center text-sm md:text-3xl">HONG GIL DONG PORTFOLIO</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.txt-1{animation: top 1s forwards;}
.txt-2{animation: letter 1s 1s backwards;
  /* 1s 실행시간 1s 딜레이 / 끊기는 부분은 빌드하면 정상적으로 보임*/
  /* 서버용 build .. 우리는 generate */
}
@keyframes top{
  0%{margin-top: -50px; opacity: 0;}
  50%{margin-top: 0}
  50%{opacity: 1;}
}
@keyframes letter{
  0%{letter-spacing: 1em; opacity: 0;}
  50%{letter-spacing: 0.1em; opacity: 0.5;}
  100%{opacity: 1;}
}
</style>