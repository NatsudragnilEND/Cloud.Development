<template>
  <div class="container">
    <div class="starter">
      <img src="../../assets/img/fototeca.svg" alt="">
      <div class="col">
        <h2 class="he">Компания по производству фотокниг Fototeca</h2>
        <p>Программное решение, автоматизирующее производство изделий – от создания дизайна до выдачи клиенту. Была
          создана система, которая позволяет профессиональному фотографу – клиенту компании — формировать изделие
          (фотокнигу) в нужном формате и виде, оплатить и сразу передать заказ в производство.</p>
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
        <h5>4 020 +</h5>
        <p>заказов оформлено за текущий год
        </p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="flexd">
        <h5>10</h5>
        <p>изделий изготавливаются каждый день</p>
      </div>
    </swiper-slide>
  </swiper>
  <div class="jss">
    <div class="flexd dodasi">
      <h5>4 020 +</h5>
      <p>заказов оформлено за текущий год
      </p>
    </div>
    <div class="flexd">
      <h5>10</h5>
      <p>изделий изготавливаются каждый день</p>
    </div>
  </div>
  <Chos />
  <div class="technoblade-never-dies">
    <div class="diff"></div>
    <div class="technoblade-never-dies-content">
      <h3 class="bl">результат</h3>
      <p>расширилась география деятельности компании, принимаются к производству заказы из других
        городов<br><br>сокращается время на работу с заказом, уменьшается нагрузка на персонал<br><br>клиентам компании
        предоставлен удобный интерфейс для формирования фотокниг и других изделий из собственных фотографий, хранение
        истории заказов, скидок, бонусов<br><br>расширение ассортимента предлагаемых услуг и производства</p>
    </div>
  </div>
  <div class="technooo technoooblat" @click="ope(0)">
    <h3>результат</h3>
    <img src="../../assets/img/vnizi.svg" class="rotatEl" alt="">
  </div>
  <transition name="us">
    <div class="technooo" v-if="opened[0]">
      <p>расширилась география деятельности компании, принимаются к производству заказы из других городов<br>сокращается
        время на работу с заказом, уменьшается нагрузка на персонал<br>клиентам компании предоставлен удобный интерфейс
        для формирования фотокниг и других изделий из собственных фотографий, хранение истории заказов, скидок, бонусов
      </p>
    </div>
  </transition>
  <div class="container">
    <h2 class="h2">Информационная система обеспечила
    </h2>
    <div class="lab">
      <div class="border">
        <div class="borders">
          <div class="line"></div>
          <p>создание изделий и фотокниг любой сложности, без посредников, напрямую на сайте компании-производителя
          </p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>при создании учитываются различные технологические этапы производства для разных изделий и материалы
          </p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>система автоматически делает расчет конечного продукта, исходя из заданных параметров и расходных материалов
            на производство изделия или фотокниги – вид производства, тип бумаги, размер изделий, количество разворотов, и
            другие параметры
          </p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>использование личного кабинета профессионального фотографа, в котором создаются заказы, хранятся загруженные
            фотографии, ранее сформированные фотокниги, история заказов
          </p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>использование накопительной системы бонусов для постоянных клиентов и промокодов при заказе изделий.
          </p>
        </div>
      </div>
      <img src="../../assets/img/fraimm.png" alt="">
    </div>
  </div>
  <Adins />
  
  <Message id="targetElement" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Adins from '../../components/adins/Adins.vue'
import Chos from '../../components/cholfon/Cholfon.vue'
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import Message from '../../components/Message/Messagetu.vue'
import 'swiper/css/pagination';
const modules = [Pagination, EffectCoverflow]
import { EffectCoverflow, Pagination } from 'swiper/modules';
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
const scrollToTarget = (e: MouseEvent) => {
  e.preventDefault();

  const targetElement = document.getElementById('targetElement');
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
};
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

<style lang="scss" scoped>@import './fototeca.scss';</style>