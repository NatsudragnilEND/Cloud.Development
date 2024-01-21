<template>
  <div class="container">
    <div class="starter">
      <img src="../../assets/img/woot.svg" alt="">
      <div class="col">
        <h2 class="he">Приложение для пациентов
          с диагностированным диабетом
        </h2>
        <p>Было разработано удобное мобильное приложение(Android, IOS), которое поможет пользователям контролировать
          состояние здоровья (сахар, артериальное давление, гемоглобин), отслеживать процесс лечения и приема лекарств, за
          счет отслеживания состояния пациентов и хранения медицинских данных для использования в научных целях. </p>
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
  <div class="starter">
    <img src="../../assets/img/nebyvayetnot.svg" alt="">
    <div class="col">
      <p>Приложение позволяет пациенту и лечащему врачу успешно выстроить схему лечения. Своевременный контроль
        показателей сахара, давления и гликированного гемоглобина поможет вовремя и качественно изменить схему лечения для
        достижения наилучшего результата лечения.

        Также есть веб-часть врача, где врач может назначить пациенту соответствующее лечение (в зависимости от состояния
        пациента). Врач сможет следить за динамикой лечения пациента и видеть аналитику приема лекарств и снижения уровня
        сахара в крови.</p>
      <a href="#" @click="scrollToTarget">Связаться с нами</a>
    </div>
  </div>
  <div class="technoblade-never-dies">
    <div class="diff"></div>
    <div class="technoblade-never-dies-content">
      <h3 class="bl">Основная цель </h3>
      <p>Для пациента вовремя принимать препараты для лучшего эффекта терапии <br>
        Для врача увеличение эффективности лечения пациента, контроль состояния пациента</p>
    </div>
  </div>
  <div class="technooo technoooblat" @click="ope(1)">
    <h3>Основная цель </h3>
    <img src="../../assets/img/vnizi.svg" class="rotatEl" alt="">
  </div>
  <transition name="us">
    <div class="technooo" v-if="opened[1]">
      <p>Для пациента вовремя принимать препараты для лучшего эффекта терапии <br>
        Для врача увеличение эффективности лечения пациента, контроль состояния пациента</p>
    </div>
  </transition>
  <div class="container">
    <h2 class="h2">Ключевые особенности приложения:
    </h2>
    <div class="lab">
      <div class="border">
        <div class="borders">
          <div class="line"></div>
          <p>схему лечения назначает лечащий врач</p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>push-уведомления напомнят о приеме лекарств</p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>журнал пропущенных и подтвержденных приемов лекарств доступен через календарь</p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>данные по показателям сахара, давления выводятся в виде графиков</p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>сохраняется история приема лекарств, показателей сахара, давления и гемоглобина</p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>ввести показатели давления, сахара, гемоглобина и приема лекарства возможно исторически за пропущенные дни</p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>кнопка быстрого вызова, позволит мгновенно позвонить доверенному лицу в экстренном случае</p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>регистрация в приложении по смс-коду обеспечивает защиту персональных данных</p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>приложение доступно для бесплатного использования</p>
        </div>
      </div>
    </div>
  </div>
  <marquee class="choliki">
      <img src="../../assets/img/dod.svg" alt="">
      <img src="../../assets/img/dod1.svg" alt="">
      <img src="../../assets/img/dod0.svg" alt="">
      <img src="../../assets/img/dod2.svg" alt="">
    </marquee>
  <Message id="targetElement" />
</template>

<script setup lang="ts">
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
@import './Pacient.scss';
</style>