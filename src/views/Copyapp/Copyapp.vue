<template>
  <div class="container">
    <div class="starter">
      <img src="../../assets/img/copyland.svg" alt="">
      <div class="col">
        <h2 class="he">Копировальная сеть Copyland</h2>
        <p>Разработана информационная система для управления процессами, контроля и отслеживания работы полиграфической компании. Даное приложение адаптировано под существующие процессы компании.</p>
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
  <swiper :pagination="true" :modules="modules" class="mySwiper lol">
    <swiper-slide>
      <div class="flexd">
        <h5>43 000 +</h5>
        <p>оформлены заказы, за все время
        </p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="flexd">
        <h5>41 600</h5>
        <p>заказов отработаны</p>
      </div>
    </swiper-slide>
  </swiper>
  <div class="jss">
    <div class="flexd dodasi">
      <h5>43 000 +</h5>
      <p>оформлены заказы, за все время
      </p>
    </div>
    <div class="flexd">
      <h5>41 600</h5>
      <p>заказов отработаны</p>
    </div>
  </div>
  <Chos />
  <div class="technoblade-never-dies">
    <div class="diff"></div>
    <div class="technoblade-never-dies-content">
      <h3 class="bl">результат</h3>
      <p>для Руководства — полноценный контроль, учет, отчетность, аналитика и отслеживание финансовых показателей
        <br><br>для Сотрудников – распределение задач среди операторов и администраторов, интеграция с бухгалтерскими
        данными и кассой, отслеживание бонусов сотрудника по исполненным заказам.
      </p>
    </div>
  </div>
  <div class="technooo technoooblat" @click="ope(1)">
    <h3>результат</h3>
    <img src="../../assets/img/vnizi.svg" class="rotatEl" alt="">
  </div>
  <transition name="us">
    <div class="technooo" v-if="opened[1]">
      <p>расширилась география деятельности компании, принимаются к производству заказы из других городов<br>сокращается
        время на работу с заказом, уменьшается нагрузка на персонал<br>клиентам компании предоставлен удобный интерфейс
        для формирования фотокниг и других изделий из собственных фотографий, хранение истории заказов, скидок, бонусов
      </p>
    </div>
  </transition>
  <div class="container">
    <h2 class="h2">Получены преимущества

    </h2>
    <div class="lab">
      <div class="border">
        <div class="borders">
          <div class="line"></div>
          <p>Сократилось время на сбор данных из систем из разных торговых точек, создание отчетов и ведение учета. Ранее
            этим занимался отдельно выделенный сотрудник.
          </p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>Руководство имеет доступ к управленческой информации по всей сети. Усилился общий контроль за деятельностью
            компании.
          </p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>Имея оперативную информацию, сотрудники улучшили обслуживание клиентов.
          </p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>Система масштабируется, в ходе внедрения сеть расширена на 2 точки.
          </p>
        </div>
      </div>
      <img src="../../assets/img/fraim3.png" alt="">
    </div>
  </div>
  <Adins />
  <Message id="targetElement" />
  
</template>

<script setup lang="ts">
import { ref } from 'vue';import Message from '../../components/Message/Messagetu.vue'
import Adins from '../../components/adins/Adins.vue'
interface Ball {
  [key: number]: boolean
}
import Chos from '../../components/cholfon/Cholfon.vue'
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
const modules = [Pagination, EffectCoverflow]
import { EffectCoverflow, Pagination } from 'swiper/modules';

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
}; const scrollToTarget = (e: MouseEvent) => {
  e.preventDefault();

  const targetElement = document.getElementById('targetElement');
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
};
</script>

<style lang="scss" scoped>
@import './copyapp.scss';
</style>