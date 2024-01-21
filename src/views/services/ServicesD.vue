<template>
  <div class="title container mam">
    <div class="title-content">
      <h2 class="hdfa">Разработка веб-приложений</h2>
      <p class="br">
        Мы делаем все возможное, чтобы разработать ваши веб-приложения, которые будут хорошо спланированными, хорошо
        масштабируемыми и безопасными. Гордая компания по разработке веб-приложений. Наша команда разработчиков
        пользовательских веб-приложений работает вместе с большой группой людей, включая менеджеров, архитекторов и
        дизайнеров.
        <br> <br>
        Команда следит за тем, чтобы все функции были объединены в единое целое. Мы успешно реализуем проекты сквозной
        разработки веб-приложений. Итак, как мы это делаем?
      </p>
      <a href="#" @click.prevent="scrollToTarget">Связаться с нами</a>
    </div>
    <img src="../../assets/img/title2.svg" alt="">
  </div>
  <div class="title container">
    <img src="../../assets/img/iphone2.svg" alt="">
    <div class="title-content mem">
      <h2 class="hdfa">Что мы используем</h2>
      <div class="punc">
        <div class="punct" @click="punctt(0)">
          <p>1</p>
          <h3>Deckstop Technologies <span class="rot"><img class="imk" src="../../assets/img/vector.svg" alt=""></span>
          </h3>
        </div>
        <div v-if="punct.one" class="punc-content">
          WPF,Devexpress,Winforms, Working with COM, Soft Add-ins
        </div>
        <div class="punct" @click="punctt(1)">
          <p>2</p>
          <h3>WEb technologies <span class="rot"><img class="imk" src="../../assets/img/vector.svg" alt=""></span>
          </h3>
        </div>
        <div v-if="punct.two" class="punc-content">
          Back-end : .NetFrameworks, .NetCore, Node.JS, <br> Devexpress XAF, IIS<br>
          Front-end : HTML5, CSS, VueJS, Bootsrtrap, ReactJS,<br> Devexpress, SyncFusion, Blazor<br>
          Database : Mysql, Oracle, PostgreSQL, MS SQL
        </div>
        <div class="punct" @click="punctt(2)">
          <p>3</p>
          <h3>Programming languages <span class="rot"><img class="imk" src="../../assets/img/vector.svg" alt=""></span>
          </h3>
        </div>
        <div v-if="punct.three" class="punc-content">
          C#, SQL, JavaScript, Python
        </div>
      </div>
      <a href="#" @click.prevent="scrollToTarget">Связаться с нами</a>
    </div>
  </div>
  <div class="title container mam">
    <div class="title-content">
      <h2 class="hdfa">Разработка</h2>
      <p class="br">
        Обладая более чем 10-летним опытом, мы специализируемся на разработке серверных систем с использованием
        архитектуры на основе микросервисов. Мы учитываем аспекты мультитенантности, масштабируемости, самообслуживания /
        автоматизации, сторонней интеграции, отчетности и бизнес-показателей.
        <br> <br>
        Оценивая эти факторы, мы стремимся предоставлять безупречные функциональные приложения, высококлассный
        технологический стек, включая лучший язык программирования для программного обеспечения для разработки
        веб-приложений.
      </p>
    </div>
    <img src="../../assets/img/phone2.svg" alt="">
  </div>
  <div class="title container">
    <img src="../../assets/img/phph.svg" alt="">
    <div class="title-content">
      <h2 class="hdfa">Реализация в действии</h2>
      <p class="br">
        Изменения - единственная константа. Итак, наши инженеры постоянно оттачивают свои навыки в улучшении реализации
        пользовательского интерфейса и обеспечении безупречного качества продукции.
        <br> <br>
        Более 10 лет опыта в создании отличного пользовательского интерфейса и демонстрации специальных эффектов с помощью
        JavaScript позволяют нам добавлять в каждое разрабатываемое нами веб-приложение вау-факторы, превосходящие
        ожидания пользователей.
      </p>
    </div>
  </div>
  <div class="container uspex">
    <h2 class="h2">Успех истории</h2>
    <div class="shadows">
      <div class="shadow">
        <img src="../../assets/img/shadow.svg" class="shimage" alt="">
        <p class="proyz">Компания по производству фотокниг Fototeca</p>
        <router-link v-bind:to="{ name: 'servicesd' }" class="uz">
          <img class="hhover" src="../../assets/img/cloud.svg" alt="" />
          <img class="hover" src="../../assets/img/hcloud.svg" alt="" />
          <p class="more">Узнать больше</p>
          <p class="all">→</p>
        </router-link>
      </div>
      <div class="shadow">
        <img src="../../assets/img/shadow1.svg" class="shimage" alt="">
        <p class="proyz">Копировальная сеть Copyland</p>
        <router-link v-bind:to="{ name: 'servicesd' }" class="uz">
          <img class="hhover" src="../../assets/img/cloud.svg" alt="" />
          <img class="hover" src="../../assets/img/hcloud.svg" alt="" />
          <p class="more">Узнать больше</p>
          <p class="all">→</p>
        </router-link>
      </div>
      <div class="shadow">
        <img src="../../assets/img/shadow2.svg" class="shimage" alt="">
        <p class="proyz">Туристическая компания
          Almaty City Tour</p>
        <router-link v-bind:to="{ name: 'servicesd' }" class="uz">
          <img class="hhover" src="../../assets/img/cloud.svg" alt="" />
          <img class="hover" src="../../assets/img/hcloud.svg" alt="" />
          <p class="more">Узнать больше</p>
          <p class="all">→</p>
        </router-link>
      </div>
    </div>
    <router-link class="sucha" @click="scrollUp" :to="{name: 'portfolio'}">Посмотреть все проекты</router-link>
  </div>
  <Message id="targetElement" />
</template>

<script setup lang="ts">
import Message from '../../components/Message/Messagetu.vue'
import { ref } from 'vue'
interface punct {
  one: boolean,
  two: boolean,
  three: boolean
}
const scrollUp = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
const scrollToTarget = (e: MouseEvent) => {
  e.preventDefault();

  const targetElement = document.getElementById('targetElement');
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
};
let punct = ref<punct>({
  one: false,
  two: false,
  three: false
})
const punctt = (index: number) => {
  if (index === 0) {
    const content = document.getElementsByClassName('imk')[0] as HTMLElement
    if (content.style.transform == 'rotate(0deg)') {
      content.style.transform = 'rotate(180deg)';
    } else {
      content.style.transform = 'rotate(0deg)';
    }
    punct.value.one = !punct.value.one;
  } else if (index === 1) {
    punct.value.two = !punct.value.two;
    const content = document.getElementsByClassName('imk')[1] as HTMLElement
    if (content.style.transform == 'rotate(0deg)') {
      content.style.transform = 'rotate(180deg)';
    } else {
      content.style.transform = 'rotate(0deg)';
    }
  } else if (index === 2) {
    punct.value.three = !punct.value.three;
    const content = document.getElementsByClassName('imk')[2] as HTMLElement
    if (content.style.transform == 'rotate(0deg)') {
      content.style.transform = 'rotate(180deg)';
    } else {
      content.style.transform = 'rotate(0deg)';
    }
  }
}
</script>

<style lang="scss" scoped>
@import './services.scss';
</style>