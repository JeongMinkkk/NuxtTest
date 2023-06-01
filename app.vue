<template>
  <div>
    <!-- 웹앱자체를 구동할 수 있는 필요한 리소스만 넣고 나머지는 다른파일에서 관리한다. -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html,body{height: 100%;}
body{animation: infinite 9s background2 alternate-reverse;}
.dark-mode .darkMode{
  background-color: #292929;
  border-color: #3b3b3b;
  color:#d9d9d9
}
*{font-family: 'S-CoreDream-3Light';}

@keyframes background2{
  0%{background-color: #f7f8f9;}
  50%{background-color: #b8b8b8;}
  100%{background-color: #707070;}
}

@font-face {
     font-family: 'S-CoreDream-3Light';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
     font-weight: normal;
     font-style: normal;
}
</style>
