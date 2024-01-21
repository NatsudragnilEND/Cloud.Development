<template>
  <div class="loadd" v-if="loading"><img src="./assets/img/loading.gif" alt=""></div>
  <div v-else>
    <Nav />
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Nav from './components/Nav/Nav.vue'
import Footer from './components/Footer/Footer.vue'
import {
  onMounted, ref
} from "vue";
const saveScrollPosition = () => {
  localStorage.setItem('scrollPosition', window.scrollY.toString());
};
onMounted(() => {
  const savedScrollPosition = localStorage.getItem('scrollPosition');
  if (savedScrollPosition) {
    window.scrollTo({
      top: parseInt(savedScrollPosition),
      behavior: 'smooth'
    });
  }
  window.addEventListener('scroll', saveScrollPosition);
});
let loading = ref(true);
onMounted(() => {
  window.addEventListener('load', () => {
    loading.value = false;
  });
});
</script>
<style lang="scss" scoped></style>