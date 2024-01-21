<template>
  <div class="container">
    <div class="starter">
      <img src="../../assets/img/sototeca.svg" alt="">
      <div class="col">
        <h2 class="he">Специальное приложение для интернет-магазинов</h2>
        <p>Программа T-Data была разработана для интернет-магазинов, чтобы аккумулировать данные из различных источников,
          прайс-листов и поставщиков.</p>
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
  <div class="container">
    <div class="starter">
      <img src="../../assets/img/nott.svg" alt="">
      <div class="col">
        <h2 class="he">Наша цель</h2>
        <p>Базовая функциональность системы позволяет автоматизировать все этапы работы с контрагентами и документами.
          Имеющиеся интерфейсы с бухгалтерской учетной системой и системой банк-клиент повышают уровень автоматической
          обработки и позволяют минимизировать число ошибок, что является критическим требованием при работе с множеством
          документов.</p>
        <a href="#" @click="scrollToTarget">Связаться с нами</a>
      </div>
    </div>
  </div>
  <div class="technoblade-never-dies">
    <div class="diff"></div>
    <div class="technoblade-never-dies-content">
      <h3 class="bl">Результат</h3>
      <p>Базовая функциональность позволяет автоматизировать все этапы с контрагентами и документами. Имеющиеся интерфейсы
        с бухгалтерской учетной системой и системой банк-клиент повышают уровень автоматической обработки и позволяют
        минимизировать число ошибок, что является критическим требованием при работе с множеством документов.</p>
    </div>
  </div>
  <div class="technooo technoooblat" @click="ope(1)">
    <h3>Результат</h3>
    <img src="../../assets/img/vnizi.svg" class="rotatEl" alt="">
  </div>
  <transition name="us">
    <div class="technooo" v-if="opened[1]">
      <p>Базовая функциональность позволяет автоматизировать все этапы с контрагентами и документами. Имеющиеся интерфейсы
        с бухгалтерской учетной системой и системой банк-клиент повышают уровень автоматической обработки и позволяют
        минимизировать число ошибок, что является критическим требованием при работе с множеством документов.</p>
    </div>
  </transition>
  <div class="container">
    <h2 class="h2">Информационная система обеспечила
    </h2>
    <div class="lab">
      <div class="border">
        <div class="borders">
          <div class="line"></div>
          <p>Открытый с регрессом/без регресса</p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>Закрытый</p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>Финансирование с отсрочкой</p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>Финансирование на дату платежа</p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>Импортный и Экспортный</p>
        </div>
      </div>
      <img src="../../assets/img/dodeniadasi.svg" alt="">
    </div>
  </div>
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

<style lang="scss" scoped>@import './xfac.scss';</style>