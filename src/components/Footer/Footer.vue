<template>
  <footer class="footer">
    <div class="container">
      <div class="main">
        <div class="calumn">
          <div class="logo">
            <img src="../../assets/img/claaud.svg" alt="">
            <p class="logcont">DEVCLOUD SOLUTIONS</p>
          </div>
          <p class="ostal">Алматы, Жамбыла 111</p>
        </div>
        <div class="calumn sick">
          <div class="logo">
            <img src="../../assets/img/call.svg" alt="">
            <div class="logoc">
              <a href="tel:+7727334-21-45" class="phone">​+7 (727) 334-21-45</a>
              <a href="tel:​+7707998-93-90" class="phone">​+7 (707) 998-93-90</a>
            </div>
          </div>
          <a href="mailto:info@devcloud.kz" class="ostal">✉️ info@devcloud.kz</a>
          <div class="tuofthem">
            <div class="vantoo">
              <img src="../../assets/img/vantoo.svg" alt="">
              <p class="tuvan">Whatsapp</p>
            </div>
            <div class="vantoo">
              <img src="../../assets/img/vantoo2.svg" alt="">
              <p class="tuvan">telegram</p>
            </div>
          </div>
        </div>
        <div class="calumn paj">
          <RouterLink @click="scrolling" :to="{ name: 'home' }" class="ostal">Главная</RouterLink>
          <RouterLink @click="scrolling" :to="{ name: 'portfolio' }" class="ostal">Портфолио</RouterLink>
          <RouterLink @click="scrolling" :to="{ name: `${sevvis}` }" class="ostal">Услуги</RouterLink>
        </div>
        <div class="calumn paj">
          <RouterLink @click="scrolling" :to="{ name: 'works' }" class="ostal">Процессы</RouterLink>
          <RouterLink @click="scrolling" :to="{ name: 'about' }" class="ostal">О компании</RouterLink>
          <RouterLink @click="scrolling" :to="{ name: 'contact' }" class="ostal">Контакты</RouterLink>
        </div>
        <div class="calumn">
          <img @click="goup" class="imji" src="../../assets/img/goup.svg" alt="">
        </div>
      </div>
      <p class="urrod">© Devcloud Solutions, Inc. 2021. We love our users!</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
let sevvis = ref<string>('')
onMounted(() => {
  const randomji = Math.round(Math.random());
  if (randomji == 0) {
    sevvis.value = 'servicesd'
  } else {
    sevvis.value = 'servicesm'
  }
  console.log(randomji);
})
const goup = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
const scrolling = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
@import './footer.scss';
</style>