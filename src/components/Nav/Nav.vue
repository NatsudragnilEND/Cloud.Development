<template>
  <nav class="nav">
    <div class="container nav2">
      <router-link v-bind:to="{ name: 'home' }" class="logos">
        <img src="../../assets/img/claaud.svg" class="logo" />
        <p class="a">DEVCLOUD SOLUTIONS</p>
      </router-link>
      <ul class="links">
        <div class="a">
          <router-link v-bind:to="{ name: 'home' }" class="link">Главная</router-link>
        </div>
        <div ref="usl" @click="modalCh" class="link a">
          Услуги <span class="vert"> ▼</span>
        </div>
        <div class="a">
          <router-link v-bind:to="{ name: 'works' }" class="link">Как мы работаем</router-link>
        </div>
        <div class="a">
          <router-link v-bind:to="{ name: 'portfolio' }" class="link">Портфолио</router-link>
        </div>
        <div class="a">
          <router-link v-bind:to="{ name: 'about' }" class="link">О нас</router-link>
        </div>
        <div class="a">
          <router-link v-bind:to="{ name: 'contact' }" class="link">Контакты</router-link>
        </div>
      </ul>
      <div class="sider" ref="si" @click="sid">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>

    </div>
  </nav>
  <Transition name="uslugi">
    <Sider v-if="sider" />
  </Transition>
  <Transition name="uslugi">
    <div v-if="uslugi" class="uslugi">
      <div class="uslugi-content">
        <div class="left">
          <h2>Наши услуги</h2>
          <router-link v-bind:to="{ name: 'servicesm' }">Мобильные приложения</router-link>
          <router-link v-bind:to="{ name: 'servicesd' }">Веб приложения</router-link>
        </div>
        <div class="right">
          <img src="../../assets/img/wing.svg" alt="" class="wing" />
        </div>
      </div>
      <img src="../../assets/img/nrec.svg" alt="" class="nrec" />
    </div>
  </Transition>
</template>
<script setup lang="ts">
import { ref, onMounted, watchEffect } from "vue";
import Sider from '../sider/Sider.vue'
let uslugi = ref<boolean>(false);
let usl = ref<any>(null);
let sider = ref<boolean>(false);
let si = ref<any>(null)
const emit = defineEmits()
const sid = () => {
  sider.value = !sider.value;
}
const modalCh = () => {
  uslugi.value = !uslugi.value;
};
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  document.addEventListener("click", handleOutsideClick);
});
import { useRouter } from "vue-router";
const router = useRouter();
watchEffect(() => {
  const elements = document.querySelectorAll(".a");
  if (router.currentRoute.value.path !== "/") {
    elements.forEach((element: any) => {
      element.classList.add("blackText");
    });
  } else {
    elements.forEach((element: any) => {
      element.classList.remove("blackText");
    });
  }
});
const handleClickOutside = (event: MouseEvent) => {
  if (usl.value && !usl.value.contains(event.target)) {
    uslugi.value = false;
  }
};
const handleOutsideClick = (event: MouseEvent) => {
  if (si.value && !si.value.contains(event.target)) {
    sider.value = false;
  }
};
</script>
<style lang="scss" scoped>
@import "./nav.scss";
</style>
