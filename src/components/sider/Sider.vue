<template>
  <div class="sid">
    <router-link v-bind:to="{ name: 'home' }" class="logos">
      <img src="../../assets/img/claaud.svg" class="logo" />
      <p class="a">DEVCLOUD SOLUTIONS</p>
    </router-link>
    <div class="a">
      <router-link v-bind:to="{ name: 'home' }" class="link">Главная</router-link>
    </div>
    <div class="a">
      <router-link v-bind:to="{ name: 'servicesm' }" class="link">Моб. Приложения</router-link>
    </div>
    <div class="a">
      <router-link v-bind:to="{ name: 'servicesd' }" class="link">Веб приложения</router-link>
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
    <div class="calumn sick">
      <div class="logo">
        <img src="../../assets/img/phopho.jpg" alt="">
        <div class="logoc">
          <a href="tel:+7727334-21-45" class="phone">​+7 (727) 334-21-45</a>
          <a href="tel:​+7707998-93-90" class="phone">​+7 (707) 998-93-90</a>
        </div>
      </div>
      <a href="mailto:info@devcloud.kz" class="ostal">✉️ info@devcloud.kz</a>
      <div class="tuofthem">
        <div class="vantoo">
          <img src="../../assets/img/wasup.jpg" alt="">
          <p class="tuvan">Whatsapp</p>
        </div>
        <div class="vantoo">
          <img src="../../assets/img/tege.jpg" alt="">
          <p class="tuvan">telegram</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@import '../Nav/nav.scss';
</style>