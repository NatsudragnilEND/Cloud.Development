<template>
  <div class="container">
    <div class="starter">
      <img src="../../assets/img/iphonee.svg" alt="">
      <div class="col">
        <h2 class="he">Мобильное приложение для водителей </h2>
        <p>Мобильное приложение для водителей позволяет держать свой баланс под полным контролем и снять деньги в любое
          удобное время. Основная задача моментальный вывод денег с баланса профиля водителя, на банковскую карточку
          водителя.</p>
        <a href="#" @click="scrollToTarget">Смотреть презентацию</a>
      </div>
    </div>
  </div>
  <div class="technoblade-never-dies">
    <div class="diff"></div>
    <div class="technoblade-never-dies-content">
      <h3 class="bl">Технологии</h3>
      <p>ASP.net, C #, MVC, Microsoft SQL server, Java</p>
    </div>
  </div>
  <div class="technooo technoooblat" @click="ope(0)">
    <h3>Технологии</h3>
    <img src="../../assets/img/vnizi.svg" class="rotatEl" alt="">
  </div>
  <transition name="us">
    <div class="technooo" v-if="opened[0]">
      <p>ASP.net, C #, MVC, Microsoft SQL server, Java</p>
    </div>
  </transition>
  <marquee class="choliki">
    <img src="../../assets/img/dode.svg" alt="">
    <img src="../../assets/img/dode1.svg" alt="">
    <img src="../../assets/img/dode0.svg" alt="">
    <img src="../../assets/img/dode2.svg" alt="">
  </marquee>
  <div class="container">
    <h2 class="h2">Информационная система обеспечила
    </h2>
    <div class="lab">
      <div class="border">
        <div class="borders">
          <div class="line"></div>
          <p>Авторизация, Регистрация, Смена пароля</p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>Подтверждение СМС, Пин-код для дальнейшего входа</p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>Главная страница с данными профиля и балансом, а также возможность выбора карты и указания суммы перевода</p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>История переводов</p>
        </div>
      </div>
      <img src="../../assets/img/dodashop.svg" alt="">
    </div>
  </div>
  <div class="technoblade-never-dies">
    <div class="diff"></div>
    <div class="technoblade-never-dies-content">
      <h3 class="bl">Результат</h3>
      <p>1. Быстрый вывод денег из таксопарка на карту.
        Укажите свои банковские реквизиты в мобильном приложении и получайте быстрые выплаты прямо на карту. Мы
        предоставляем возможность вывода денег с яндекс такси
        <br><br>
        2. При добавление карты есть валидация карты через сервис (валиден ли номер карты). Можно выбирать или удалять
        карты.
      </p>
    </div>
  </div>
  <div class="technooo technoooblat technooop" @click="ope(1)">
    <h3>Результат</h3>
    <img src="../../assets/img/vnizi.svg" class="rotatEl" alt="">
  </div>
  <transition name="us">
    <div class="technooo" v-if="opened[1]">
      <p>1. Быстрый вывод денег из таксопарка на карту.
        Укажите свои банковские реквизиты в мобильном приложении и получайте быстрые выплаты прямо на карту. Мы
        предоставляем возможность вывода денег с яндекс такси
        <br><br>
        2. При добавление карты есть валидация карты через сервис (валиден ли номер карты). Можно выбирать или удалять
        карты.
      </p>
    </div>
  </transition>
  <Adins />
  <Message id="targetElement" />
</template>

<script setup lang="ts">
import Adins from '../../components/adins/Adins.vue'
import Message from '../../components/Message/Messagetu.vue'
const scrollToTarget = (e: MouseEvent) => {
  e.preventDefault();

  const targetElement = document.getElementById('targetElement');
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
};
import { ref } from 'vue';
interface Ball {
  [key: number]: boolean
}
let opened = ref<Ball>({
  0: false,
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false
})
const ope = (chis: number) => {
  let img = document.getElementsByClassName('rotatEl') as HTMLCollectionOf<HTMLImageElement>;

  let computedTransform = window.getComputedStyle(img[chis] as Element).getPropertyValue('transform');
  if (computedTransform === 'none') {
    (img[chis] as HTMLImageElement).style.transform = 'rotate(180deg)';
  } else {
    (img[chis] as HTMLImageElement).style.transform = 'none';
  }

  opened.value[chis] = !opened.value[chis];
};
</script>

<style lang="scss" scoped>@import './driver.scss';</style>