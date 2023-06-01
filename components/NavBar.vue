<template>
<!-- 파일 생성시 대문자 두개 들어가야함 -->
<div>
  <div class="w-full px-[2%] sticky top-0 bg-white py-2.5 z-50 darkMode">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <nuxt-link to="/">
        <img src="https://placeholder.com/120x50" alt="logo">
      </nuxt-link>
      <div class="basis-3/4 hidden md:block">
        <ul class="flex justify-around">
          <!-- <li><router-link to="/profile">프로필</router-link></li>
          <li><router-link to="/skill">스킬</router-link></li>
          <li><router-link to="/portfolio">포트폴리오</router-link></li> -->
          <li v-for="e in NavList" :key="e">
            <nuxt-link :to="e.link">{{ e.name }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="basis-1/12 hidden md:block">
        <ul class="flex justify-between">
          <li class="basis-2/4 text-center cursor-pointer text-2x1">
            <font-awesome-icon :icon="['fas',isDark ? 'moon':'sun']" @click="toggleTheme" />
            <!-- {{ isDark }} -->
          </li>
          <li class="basis-2/4 text-center cursor-pointer text-2x1">
            <font-awesome-icon :icon="['fas','globe']" />
          </li>
        </ul>
      </div>
      <div>
        <font-awesome-icon :icon="['fas','bars']" class="!text-3x1 cursor-pointer md:!hidden" @click="isOpen === false ? isOpen = true : isOpen=false"/>
      </div>
      <div  class="w-72 h-full fixed darkMode bg-gray-100 z-50 p-12 box-border transition-all duration-500 top-0 -right-80 md:hidden" :class="isOpen && '!right-0'">
        <!-- 닫기 -->
        <font-awesome-icon :icon="['fas','xmark']" class="absolute top-5 right-5 text-3xl cursor-pointer md:hidden" @click="isOpen=false" />
        <div class="text-center mt-6">
          <img src="http://via.placeholder.com/100" alt="img" class="mx-auto rounded-full mb-4">
          <p>프론트엔드 개발자 홍길동</p>
          <ul class="mt-12">
            <li class="py-5 border-b" v-for="e in NavList" :key="e">
              <font-awesome-icon :icon="['fas',e.icon]" class="mr-1"/>
              <nuxt-link @clisk="isOpen = false" :to="e.link">{{ e.name }}</nuxt-link>
            </li>
          </ul>
        </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default{
  data(){
    return{
      isDark : this.$colorMode.preference === 'dark',
      isOpen : false,
      NavList : [
        {
        name:"프로필",
        link:"/about",
        icon: "user"
        },
        {
        name:"스킬",
        link:"/skill",
        icon: "code"
        },
        {
        name:"포트폴리오",
        link:"/portfolio",
        icon: "folder-open"
        },
      ]
    }
  },
  methods:{
    toggleTheme(){
      // alert()
      this.$colorMode.preference = this.isDark ? 'light' : 'dark';
      this.isDark = !this.isDark;
      // 개발자모드에서 보면 누르면 바뀌는거 확인가능
    }
  },
}
</script>

<style>
.dark-mode body{
  animation: infinite 9s background alternate-reverse;
}

@keyframes background{
  0%{background-color: #091a28;}
  50%{background-color: #08131b;}
  100%{background-color: #030507;}

}
</style>