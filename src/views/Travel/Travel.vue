<template>
  <div class="container">
    <div class="starter">
      <img src="../../assets/img/tototeca.svg" alt="">
      <div class="col">
        <h2 class="he">Туристическая компания Almaty City Tour</h2>
        <p>Разработана информационная система для управления процессами, контроля и отслеживания работы полиграфической
          компании. Даное приложение адаптировано под существующие процессы компании.</p>
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
  <div class="container">
    <div class="floot">
      <p class="gey">1 500 +</p>
      <p class="lowon">туров рассчитаны</p>
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
  <Cholfon />
  <div class="technoblade-never-dies">
    <div class="diff"></div>
    <div class="technoblade-never-dies-content">
      <h3 class="bl">Результат</h3>
      <p>Создана информационная система, в которой работают менеджеры компании.</p>
    </div>
  </div>
  <div class="technooo technoooblat" @click="ope(0)">
    <h3>Результат</h3>
    <img src="../../assets/img/vnizi.svg" class="rotatEl" alt="">
  </div>
  <transition name="us">
    <div class="technooo" v-if="opened[0]">
      <p>Создана информационная система, в которой работают менеджеры компании.</p>
    </div>
  </transition>
  <div class="container">
    <h2 class="h2">Информационная система обеспечила
    </h2>
    <div class="lab">
      <div class="border">
        <div class="borders">
          <div class="line"></div>
          <p>Общий расчет стоимости тура включая различные параметры: время, количество и т.д.</p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>Использование фиксированных и договорных цен на услуги</p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>Использование норм расчетов по различным услугам в зависимости от влияющих параметров</p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>Расчет финансовых показателей по туру (себестоимость, маржа, планируемый доход) в печатных формах при формировании заказа.</p>
        </div>
      </div>
      <img src="https://devcloud.kz/assets/img/Frame%2045764.png" alt="">
    </div>
  </div>
  <Adins />
  <Message id="targetElement"/>
</template>

<script setup lang="ts">
import Cholfon from '../../components/cholfon/Cholfon.vue'
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

<style lang="scss" scoped>
@import './travel.scss';
</style>