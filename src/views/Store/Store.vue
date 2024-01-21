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
  <h2 class="h2">Преимущества BizDoc для владельцев бизнеса</h2>
  <div class="title container">
    <div class="title-content mem">
      <div class="punc">
        <div class="punct" @click="punctt(0)">
          <p>1</p>
          <h3>настройка продуктов <span class="rot"><img class="imk" src="../../assets/img/vector.svg" alt=""></span>
          </h3>
        </div>
        <transition name="us">
          <div v-if="punct.one" class="punc-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean amet dapibus accumsan neque. Sed sodales nec
            bibendum praesent nisl neque sed. Pretium ac sed elit id massa faucibus phasellus. Posuere imperdiet nec
            tortor
            porta non sed ornare scelerisque amet.
          </div>
        </transition>
        <div class="punct" @click="punctt(1)">
          <p>2</p>
          <h3>редактирование <span class="rot"><img class="imk" src="../../assets/img/vector.svg" alt=""></span>
          </h3>
        </div>
        <transition name="us">
          <div v-if="punct.two" class="punc-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean amet dapibus accumsan neque. Sed sodales nec
            bibendum praesent nisl neque sed. Pretium ac sed elit id massa faucibus phasellus. Posuere imperdiet nec
            tortor
            porta non sed ornare scelerisque amet.
          </div>
        </transition>
        <div class="punct" @click="punctt(2)">
          <p>3</p>
          <h3>типизация данных <span class="rot"><img class="imk" src="../../assets/img/vector.svg" alt=""></span>
          </h3>
        </div>
        <transition name="us">
          <div v-if="punct.three" class="punc-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean amet dapibus accumsan neque. Sed sodales nec
            bibendum praesent nisl neque sed. Pretium ac sed elit id massa faucibus phasellus. Posuere imperdiet nec
            tortor
            porta non sed ornare scelerisque amet.
          </div>
        </transition>

      </div>
      <a href="#" @click.prevent="scrollToTarget">Связаться с нами</a>
    </div>
    <img src="../../assets/img/nout.svg" alt="">
  </div>
  <h2 class="h2">Мы предлагаем вам Системы обработки прайс-листов поставщиков</h2>
  <div class="pricess">
    <div class="raz">
      <img src="../../assets/img/raz1.svg" alt="">
      <h2 class="h4">АвтоматическАЯ обрабОТКА</h2>
      <img src="../../assets/img/raz2.svg" alt="">
    </div>
    <div class="tvu">
      <img src="../../assets/img/tvu.svg" alt="">
    </div>
    <div class="raz">
      <h2 class="h4">Каталог данных
      </h2>
      <img src="../../assets/img/sv5.svg" alt="">
      <h2 class="h4">Внос в публикацию</h2>
    </div>
  </div>
  <div class="spab">
    <h2 class="h4">Каталог данных
    </h2>
    <div class="wiz">
      <div class="line"></div>
      <p>Данные от поставщиков может быть абсолютно в разных форматах : excel, json, xml, cvs, txt</p>
    </div>
    <h2 class="h4">АвтоматическАЯ обрабОТКА</h2>
    <div class="wiz">
      <div class="line"></div>
      <p>Aвтоматически подключается к источнику поставщика и получает необходимые данные. Имеется возможность внесения данных в систему из прайс-листа поставщика. По определённым в системе правилам, которые задаются пользователями, данные обрабатываются программой и готовятся для публикации в ваш интернет-магазин.</p>
    </div>
    <h2 class="h4">Внос в публикацию</h2>
    <div class="wiz">
      <div class="line"></div>
      <p>Полностью автоматизируется процесс получения данных от ваших поставщиков и публикация их в интернет магазине</p>
    </div>
  </div>
  <div class="container">
      <h2 class="h2">Информационная система обеспечила
      </h2>
      <div class="lab">
        <div class="border">
          <div class="borders">
            <div class="line"></div>
            <p>Снизятся издержки на содержание интернет-магазина </p>
          </div>
          <div class="borders">
            <div class="line"></div>
            <p>Для одного поставщика настраиваете систему только один раз, дальше он будет работать автономно </p>
          </div>
          <div class="borders">
            <div class="line"></div>
            <p>С лёгкостью можете подключать новых поставщиков и тем самым расширяя ассортимент предлагаемых в интернет магазине продукции</p>
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
interface punct {
  one: boolean,
  two: boolean,
  three: boolean
}
let punct = ref<punct>({
  one: false,
  two: false,
  three: false
})
const punctt = (index: number) => {
  if (index === 0) {
    const content = document.getElementsByClassName('imk')[0] as HTMLElement
    if (content.style.transform == 'rotateX(0deg)') {
      content.style.transform = 'rotateX(180deg)';
    } else {
      content.style.transform = 'rotateX(0deg)';
    }
    punct.value.one = !punct.value.one;
  } else if (index === 1) {
    punct.value.two = !punct.value.two;
    const content = document.getElementsByClassName('imk')[1] as HTMLElement
    if (content.style.transform == 'rotateX(0deg)') {
      content.style.transform = 'rotateX(180deg)';
    } else {
      content.style.transform = 'rotateX(0deg)';
    }
  } else if (index === 2) {
    punct.value.three = !punct.value.three;
    const content = document.getElementsByClassName('imk')[2] as HTMLElement
    if (content.style.transform == 'rotateX(0deg)') {
      content.style.transform = 'rotateX(180deg)';
    } else {
      content.style.transform = 'rotateX(0deg)';
    }
  }
}
</script>

<style lang="scss" scoped>
@import './store.scss';
</style>