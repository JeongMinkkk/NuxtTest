<template>
  <div>
    <NavBar/>
    <slot/>
    <Footer />
  </div>
</template>

<!-- 레이아웃은 여기에서 관리한다. 계속 화면에 보여주는애들. -->
<!-- pages 에 있는 파일이 slot으로 나온다  -->
<!-- 컴포넌트는 어디서든 갖다쓰면 사용가능 어바웃에서도 <NavBar/> 입력하면 가능-->