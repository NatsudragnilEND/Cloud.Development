<template>
  <div class="title container">
    <img src="../../assets/img/title.svg" alt="">
    <div class="title-content">
      <h2 class="hdfa">Мобильные приложения</h2>
      <p class="br">
        Когда пользователи видят сотни приложений, ваше должно быть поразительно отличительным. Следовательно, DEVCLOUD
        SOLUTIONS будет выступать в качестве партнера по комплексной разработке программного обеспечения, служа
        катализатором вашего успеха.
        <br> <br>
        Наша команда разработчиков мобильных приложений может помочь вам создать эффективное мобильное приложение, которое
        отражает ваш бренд и задает тон в кратчайшие сроки.
      </p>
      <a href="#" @click.prevent="scrollToTarget">Связаться с нами</a>
    </div>
  </div>
  <div class="cards">
    <div class="card">
      <img src="../../assets/img/ugal.svg" alt="" class="left" />
      <div></div>
      <h3>Разработка приложений для iOS</h3>
      <p class="desc">
        Зная принципы взаимодействия с пользователем изнутри, мы разрабатываем собственные приложения для iOS, которые
        обращаются к вашим клиентам. И построен на последних фреймворках и шаблонах iOS.
      </p>
      <router-link v-bind:to="{ name: 'portfolio' }" class="uz">
        <img class="hhover" src="../../assets/img/cloud.svg" alt="" />
        <img class="hover" src="../../assets/img/hcloud.svg" alt="" />
        <p class="more">Узнать больше</p>
        <p class="all">→</p>
      </router-link>
    </div>
    <div class="card">
      <img src="../../assets/img/ugal.svg" alt="" class="left" />
      <div></div>
      <h3>Разработка приложений для Android</h3>
      <p class="desc">
        Мы сознательно следуем рекомендациям по материальному дизайну для создания красивых приложений для Android,
        одобренным сообществом Android. О, и мы знаем все лучшие библиотеки Android.
      </p>
      <router-link v-bind:to="{ name: 'portfolio' }" class="uz">
        <img class="hhover" src="../../assets/img/cloud.svg" alt="" />
        <img class="hover" src="../../assets/img/hcloud.svg" alt="" />
        <p class="more">Узнать больше</p>
        <p class="all">→</p>
      </router-link>
    </div>
    <div class="card">
      <img src="../../assets/img/ugal.svg" alt="" class="left" />
      <div></div>
      <h3>Разработка приложений на React Native</h3>
      <p class="desc">
        Повторное использование кода и эффективность - вот некоторые из характеристик реагирующих нативных приложений,
        которые одинаково привлекают нас и наших клиентов. Мы создаём приложения, которые оставляют впечатление.
      </p>
      <router-link v-bind:to="{ name: 'portfolio' }" class="uz">
        <img class="hhover" src="../../assets/img/cloud.svg" alt="" />
        <img class="hover" src="../../assets/img/hcloud.svg" alt="" />
        <p class="more">Узнать больше</p>
        <p class="all">→</p>
      </router-link>
    </div>
    <div class="card">
      <img src="../../assets/img/ugal.svg" alt="" class="left" />
      <div></div>
      <h3>Корпоративные мобильные решения</h3>
      <p class="desc">
        Мы гордимся тем, что являемся единственной компанией по разработке приложений, которая создает мощные приложения в
        самой сложной корпоративной среде. Мы знаем, как можно быистро добиться невероятного успеха.
      </p>
      <router-link v-bind:to="{ name: 'portfolio' }" class="uz">
        <img class="hhover" src="../../assets/img/cloud.svg" alt="" />
        <img class="hover" src="../../assets/img/hcloud.svg" alt="" />
        <p class="more">Узнать больше</p>
        <p class="all">→</p>
      </router-link>
    </div>
  </div>
  <div class="title container mam">
    <div class="title-content">
      <h2 class="hdfa">Как мы проектируем, чтобы привлечь пользователей</h2>
      <p class="br">
        Поскольку дизайнерам и разработчикам становится все сложнее заставить пользователей находить и загружать
        приложения, вам «нужно» думать о вовлечении; чтобы сделать дизайн вашего мобильного приложения актуальным, ценным
        и полезным, чтобы оно нравилось и, следовательно, удерживало пользователя.
        <br> <br>
        Снова и снова мы ставим себя на место конечных пользователей, чтобы сопереживать и прочувствовать опыт, будь то
        приложения для iOS или Android.
      </p>
      <a href="#" @click.prevent="scrollToTarget">Связаться с нами</a>
    </div>
    <img src="../../assets/img/phone.svg" alt="">
  </div>
  <div class="title container">
    <img src="../../assets/img/iphone.svg" alt="">
    <div class="title-content mem">
      <h2 class="hdfa">Что мы используем</h2>
      <div class="punc">
        <div class="punct" @click="punctt(0)">
          <p>1</p>
          <h3>mobile technologies <span class="rot"><img class="imk" src="../../assets/img/vector.svg" alt=""></span></h3>
        </div>
        <div v-if="punct.one" class="punc-content">
          Hybrid: ReactNative, Xamarin <br>
          IOS: Swift, ObjectiveC <br>
          Android: Java
        </div>
        <div class="punct" @click="punctt(1)">
          <p>2</p>
          <h3>Programming languages <span class="rot"><img class="imk" src="../../assets/img/vector.svg" alt=""></span></h3>
        </div>
        <div v-if="punct.two" class="punc-content">
           C#, SQL, JavaScript, Python
          </div>
      </div>
      <a href="#" @click.prevent="scrollToTarget">Связаться с нами</a>
    </div>
  </div>
  <Message id="targetElement"/>
</template>

<script setup lang="ts">
import Message from '../../components/Message/Messagetu.vue'
import { ref } from 'vue' 
interface punct {
  one: boolean,
  two: boolean
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
  two: false
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
  }
}
</script>

<style lang="scss" scoped>
@import './services.scss';
</style>