<template>
  <div>
    <div class="container">
      <div class="starter">
        <img src="../../assets/img/bizdoc.svg" alt="">
        <div class="col">
          <h2 class="he">BizDoc | СЭД</h2>
          <p>В основе разработки системы BizDoc — современный инструментарий, который позволит вам гибко настраивать и
            адаптировать систему под бизнес-задачи вашей компании. Вы сможете полностью автоматизировать документооборот,
            оптимизировать связанные с ним бизнес-процессы.</p>
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
  </div>
  <h2 class="h2">Преимущества BizDoc для владельцев бизнеса</h2>
  <div class="title container">
    <img src="../../assets/img/three.svg" alt="">
    <div class="title-content mem">
      <div class="punc">
        <div class="punct" @click="punctt(0)">
          <p>1</p>
          <h3>Простота настройки и работы с системой <span class="rot"><img class="imk" src="../../assets/img/vector.svg"
                alt=""></span>
          </h3>
        </div>
        <transition name="us">
           <div v-if="punct.one" class="punc-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean amet dapibus accumsan neque. Sed sodales nec
            bibendum praesent nisl neque sed. Pretium ac sed elit id massa faucibus phasellus. Posuere imperdiet nec tortor
            porta non sed ornare scelerisque amet.
          </div>
          </transition>
        <div class="punct" @click="punctt(1)">
          <p>2</p>
          <h3>Повышение эффективности бизнеса <span class="rot"><img class="imk" src="../../assets/img/vector.svg"
                alt=""></span>
          </h3>
        </div>
        <transition name="us">
           <div v-if="punct.two" class="punc-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean amet dapibus accumsan neque. Sed sodales nec
            bibendum praesent nisl neque sed. Pretium ac sed elit id massa faucibus phasellus. Posuere imperdiet nec tortor
            porta non sed ornare scelerisque amet.
          </div>
          </transition>
        <div class="punct" @click="punctt(2)">
          <p>3</p>
          <h3>Продуманный веб-интерфейс <span class="rot"><img class="imk" src="../../assets/img/vector.svg"
                alt=""></span>
          </h3>
        </div>
        <transition name="us">
           <div v-if="punct.three" class="punc-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean amet dapibus accumsan neque. Sed sodales nec
            bibendum praesent nisl neque sed. Pretium ac sed elit id massa faucibus phasellus. Posuere imperdiet nec tortor
            porta non sed ornare scelerisque amet.
          </div>
          </transition>
        <div class="punct" @click="punctt(3)">
          <p>4</p>
          <h3>Постоянные улучшения продукта <span class="rot"><img class="imk" src="../../assets/img/vector.svg"
                alt=""></span>
          </h3>
        </div>
        <transition name="us">
         <div v-if="punct.four" class="punc-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean amet dapibus accumsan neque. Sed sodales nec
          bibendum praesent nisl neque sed. Pretium ac sed elit id massa faucibus phasellus. Posuere imperdiet nec tortor
          porta non sed ornare scelerisque amet.
        </div>
        </transition>
       
      </div>
      <a href="#" @click.prevent="scrollToTarget">Связаться с нами</a>
    </div>
  </div>
  <section class="udob">
    <h2 class="h2">Возможности системы BizDoc</h2>
    <div class="polncon">
      <div class="firs">
        <img src="../../assets/img/dodeam0.svg" alt="">
        <p class="doc">BizDoc предоставляет каждому пользователю системы</p>
        <img src="../../assets/img/dodeam2.svg" alt="">
        <p class="doc">Система электронного документооборота BizDoc позволяет</p>
        <img src="../../assets/img/dodeam4.svg" alt="">
      </div>
      <img src="../../assets/img/svv7.svg" alt="">
      <div class="firs sec">
        <p class="doc">BizDoc – система конструктор, с помощью которой можно без программирования:</p>
        <img src="../../assets/img/dodeam1.png" alt="">
        <p class="doc">BizDoc позволяет эффективно работать со справочной системой без помощи разработчиков</p>
        <img src="../../assets/img/dodeam3.svg" alt="">
        <p class="doc">BizDoc хранит все документы и отчеты компании в едином электронном архиве</p>
      </div>
    </div>
    <div class="rell">
      <img src="../../assets/img/sv7.svg" class="img" alt="">
      <h3>BizDoc – система конструктор, с помощью которой можно без программирования:</h3>
      <img src="../../assets/img/punct1.svg" alt="">
      <h3>BizDoc предоставляет каждому пользователю системы</h3>
      <p>Система поддерживает филиальную структуру, выборку данных согласно настраиваемым фильтрам, отслеживание статусов,
        возвраты, пакетную обработку счетов-фактур, настройку личных и корпоративных ключей электронной цифровой подписи.
      </p>
      <h3>BizDoc позволяет эффективно работать со справочной системой без помощи разработчиков</h3>
      <p>Система использует такие веб-технологии, позволяющие организовать оперативный и централизованный доступ к
        функционалу системы сотрудникам Компании. В системе присутствует поддержка Active Directory</p>
      <h3>Система электронного документооборота BizDoc позволяет</h3>
      <p>Платформа eXpressApp Framework, на базе которой реализована система, позволяет гибко и последовательно расширять
        функционал, имеет встроенную систему отчетности и мониторинга. Интерфейсы платформы разработаны признанными
        лидерами в области реализации функционала ERP систем.</p>
      <h3>BizDoc хранит все документы и отчеты компании в едином электронном архиве</h3>
      <p>В системе организовано отслеживание ошибочных, некорректно заполненных документов, контроль и проверка на всех
        уровнях интеграции, минимизация человеческого фактора.</p>
    </div>
    <div class="technooo blade" @click="ope(2)">
      <h3>BizDoc – система конструктор, с помощью которой можно без программирования:</h3>
      <img src="../../assets/img/vnizi.svg" class="rotatEl" alt="">
    </div>
    <transition name="us">
      <div class="technooo" v-if="opened[2]">
        <p>Внутренние механизмы позволяют легко организовать выгрузку и передачу данных из Вашей системы! Все что для
          этого нужно — произвести простую привязку данных из вашей биллинговой системы с системой ЭСФ Интегра. Об
          остальном позаботится сама система.</p>
      </div>
    </transition>
    <div class="technooo blade" @click="ope(3)">
      <h3>BizDoc предоставляет каждому пользователю системы</h3>
      <img src="../../assets/img/vnizi.svg" class="rotatEl" alt="">
    </div>
    <transition name="us">
      <div class="technooo" v-if="opened[3]">
        <p>Система поддерживает филиальную структуру, выборку данных согласно настраиваемым фильтрам, отслеживание
          статусов, возвраты, пакетную обработку счетов-фактур, настройку личных и корпоративных ключей электронной
          цифровой подписи.</p>
      </div>
    </transition>
    <div class="technooo blade" @click="ope(4)">
      <h3>BizDoc позволяет эффективно работать со справочной системой без помощи разработчиков</h3>
      <img src="../../assets/img/vnizi.svg" class="rotatEl" alt="">
    </div>
    <transition name="us">
      <div class="technooo" v-if="opened[4]">
        <p>Система использует такие веб-технологии, позволяющие организовать оперативный и централизованный доступ к
          функционалу системы сотрудникам Компании. В системе присутствует поддержка Active Directory.</p>
      </div>
    </transition>
    <div class="technooo blade" @click="ope(5)">
      <h3>Система электронного документооборота BizDoc позволяет</h3>
      <img src="../../assets/img/vnizi.svg" class="rotatEl" alt="">
    </div>
    <transition name="us">
      <div class="technooo" v-if="opened[5]">
        <p>Платформа eXpressApp Framework, на базе которой реализована система, позволяет гибко и последовательно
          расширять функционал, имеет встроенную систему отчетности и мониторинга. Интерфейсы платформы разработаны
          признанными лидерами в области реализации функционала ERP систем.</p>
      </div>
    </transition>
    <div class="technooo blade" @click="ope(6)">
      <h3>BizDoc хранит все документы и отчеты компании в едином электронном архиве</h3>
      <img src="../../assets/img/vnizi.svg" class="rotatEl" alt="">
    </div>
    <transition name="us">
      <div class="technooo" v-if="opened[6]">
        <p>В системе организовано отслеживание ошибочных, некорректно заполненных документов, контроль и проверка на всех
          уровнях интеграции, минимизация человеческого фактора.</p>
      </div>
    </transition>
  </section>
  <Message />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Message from '../../components/Message/Messagetu.vue'
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
}; const scrollToTarget = (e: MouseEvent) => {
  e.preventDefault();

  const targetElement = document.getElementById('targetElement');
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
};
interface punct {
  one: boolean,
  two: boolean,
  three: boolean,
  four: boolean
}
let punct = ref<punct>({
  one: false,
  two: false,
  three: false,
  four: false
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
  } else if (index === 3) {
    punct.value.four = !punct.value.four;
    const content = document.getElementsByClassName('imk')[3] as HTMLElement
    if (content.style.transform == 'rotateX(0deg)') {
      content.style.transform = 'rotateX(180deg)';
    } else {
      content.style.transform = 'rotateX(0deg)';
    }
  }
}
</script>

<style lang="scss" scoped>
@import './copyland.scss';
</style>