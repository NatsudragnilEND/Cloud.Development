<template>
  <div class="container">
    <div class="starter">
      <img src="../../assets/img/panel.svg" alt="">
      <div class="col">
        <h2 class="he">Цифровизация в строительстве | Панель Руководителя</h2>
        <p>BI GROUP строительная компания
          Разработана управленческая панель для руководителя строительной компании и мобильное веб-решение для управления
          строительными проектами</p>
        <a href="#">Смотреть презентацию</a>
      </div>
    </div>
  </div>
  <img src="../../assets/img/vyc.svg" class="vyc" alt="">
  <div class="technooo technoooblat" @click="ope(1)">
    <h3>наши победы</h3>
    <img src="../../assets/img/vnizi.svg" class="rotatEl" alt="">
  </div>
  <transition name="us">
    <div class="technooo" v-if="opened[1]">
      <p>1 место – ПАО «Газпром»,
        Конкурс профессионального управления проектной деятельностью «Проектный Олимп 2018»<br>1 место – ТОО BI-Holding,
        Конкурс профессионального управления проектной деятельностью «Проектный Олимп 2018»</p>
    </div>
  </transition>
  <div class="container">
    <div class="starter pon">
      <div class="col">
        <h2 class="he">Внедрение проектного управления</h2>
        <p>BI GROUP строительная компания
          Разработана управленческая панель для руководителя строительной компании и мобильное веб-решение для управления
          строительными проектами</p>
        <a href="#">Смотреть презентацию</a>
      </div><img src="../../assets/img/panel0.svg" alt="">
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
  <h2 class="h2">Какую информацию можно получить в Панели руководителя?</h2>
  <div class="title container">
    <img src="../../assets/img/jam.svg" alt="">
    <div class="title-content mem">

      <div class="punc">
        <div class="punct" @click="punctt(0)">
          <p>1</p>
          <h3>График производства работ <span class="rot"><img class="imk" src="../../assets/img/vector.svg"
                alt=""></span>
          </h3>
        </div>
        <div v-if="punct[0]" class="punc-content">
          Lorem ipsum dolor sit amet, con sectetur adi piscing elit, sed dL orem ipsum dolor sit amet, consect etur adip
          iscing elit, sed dLorem ipsum dolor sit amet, co ns notaectet ur adipiscing elit
        </div>
        <div class="punct" @click="punctt(1)">
          <p>2</p>
          <h3>Динамика финансовых показателей проекта <span class="rot"><img class="imk" src="../../assets/img/vector.svg"
                alt=""></span>
          </h3>
        </div>
        <div v-if="punct[1]" class="punc-content">
          Lorem ipsum dolor sit amet, con sectetur adi piscing elit, sed dL orem ipsum dolor sit amet, consect etur adip
          iscing elit, sed dLorem ipsum dolor sit amet, co ns notaectet ur adipiscing elit
        </div>
        <div class="punct" @click="punctt(2)">
          <p>3</p>
          <h3>Классификация портфеля проектов​ <span class="rot"><img class="imk" src="../../assets/img/vector.svg"
                alt=""></span>
          </h3>
        </div>
        <div v-if="punct[2]" class="punc-content">
          Lorem ipsum dolor sit amet, con sectetur adi piscing elit, sed dL orem ipsum dolor sit amet, consect etur adip
          iscing elit, sed dLorem ipsum dolor sit amet, co ns notaectet ur adipiscing elit
        </div>
        <div class="punct" @click="punctt(3)">
          <p>3</p>
          <h3>Анализ портфелей проектов <span class="rot"><img class="imk" src="../../assets/img/vector.svg"
                alt=""></span>
          </h3>
        </div>
        <div v-if="punct[3]" class="punc-content">
          Lorem ipsum dolor sit amet, con sectetur adi piscing elit, sed dL orem ipsum dolor sit amet, consect etur adip
          iscing elit, sed dLorem ipsum dolor sit amet, co ns notaectet ur adipiscing elit
        </div>
        <div class="punct" @click="punctt(4)">
          <p>3</p>
          <h3>Управление рисками проекта​ <span class="rot"><img class="imk" src="../../assets/img/vector.svg"
                alt=""></span>
          </h3>
        </div>
        <div v-if="punct[4]" class="punc-content">
          Lorem ipsum dolor sit amet, con sectetur adi piscing elit, sed dL orem ipsum dolor sit amet, consect etur adip
          iscing elit, sed dLorem ipsum dolor sit amet, co ns notaectet ur adipiscing elit
        </div>
        <div class="punct" @click="punctt(5)">
          <p>3</p>
          <h3>Управление сроками <span class="rot"><img class="imk" src="../../assets/img/vector.svg" alt=""></span>
          </h3>
        </div>
        <div v-if="punct[5]" class="punc-content">
          Lorem ipsum dolor sit amet, con sectetur adi piscing elit, sed dL orem ipsum dolor sit amet, consect etur adip
          iscing elit, sed dLorem ipsum dolor sit amet, co ns notaectet ur adipiscing elit
        </div>
        <div class="punct" @click="punctt(6)">
          <p>3</p>
          <h3>Фиксирование извлеченных уроков​ <span class="rot"><img class="imk" src="../../assets/img/vector.svg"
                alt=""></span>
          </h3>
        </div>
        <div v-if="punct[6]" class="punc-content">
          Lorem ipsum dolor sit amet, con sectetur adi piscing elit, sed dL orem ipsum dolor sit amet, consect etur adip
          iscing elit, sed dLorem ipsum dolor sit amet, co ns notaectet ur adipiscing elit
        </div>
      </div>
      <a href="#" @click.prevent="scrollToTarget">Связаться с нами</a>
    </div>
  </div>
  <img src="../../assets/img/wth.svg" class="vyc" alt="">
  <div class="technooo technoooblat isho" @click="ope(2)">
    <h3>что такое панель руководителя</h3>
    <img src="../../assets/img/vnizi.svg" class="rotatEl" alt="">
  </div>
  <transition name="us">
    <div class="technooo isho" v-if="opened[2]">
      <p>Информационная витрина, функция которой заключается в том, чтобы интегрировать информацию из различных
        информационных корпоративных систем компании и отражать её в ракурсе проектного управления.</p>
    </div>
  </transition>
  <div class="container">
    <div class="starter">
      <div class="col">
        <h2 class="he">Интеграция SmartPlanner с Microsoft Project
        </h2>
        <p>Из Microsoft Project данные передаются в «Панель Руководителя», что дает возможность оперативно получить данные
          для управленческой отчётности, с которыми работают управленцы. На основании полученной отчетности менеджеры
          компании, имея полные данные, могут чётко и быстро принимать решения. ​</p>
        <a @click="scrollToTarget" href="#">Связаться с нами</a>
      </div>
      <div class="wis">
        <img class="rott" src="../../assets/img/rott.svg" alt="">
        <img class="rott1" src="../../assets/img/rott1.svg" alt="">
        <img class="rott2" src="../../assets/img/rott2.svg" alt="">
        <img class="rott3" src="../../assets/img/rott3.svg" alt="">
      </div>
      <div class="wisky">
        <img class="rott" src="../../assets/img/rott.svg" alt="">
        <div class="esl">
          <transition-group name="us">
            <img v-if="roteb == 0" class="rott1" ref="rott1" src="../../assets/img/rott1.svg" alt="">
            <img v-if="roteb == 1" class="rott2" ref="rott2" src="../../assets/img/rott2.svg" alt="">
            <img v-if="roteb == 2" class="rott3" ref="rott3" src="../../assets/img/rott3.svg" alt="">
          </transition-group>
        </div>
      </div>
    </div>
  </div>
  <Chos />
  <div class="technoblade-never-dies">
    <div class="diff"></div>
    <div class="technoblade-never-dies-content">
      <h3 class="bl">результат</h3>
      <p>Снижение сроков строительства на 17% за первые 1.5-2 года внедрения и еще 9% в последующий год. В денежном
        выражении это около 1,5 млрд. тенге.</p>
    </div>
  </div>
  <div class="technooo technoooblat" @click="ope(0)">
    <h3>результат</h3>
    <img src="../../assets/img/vnizi.svg" class="rotatEl" alt="">
  </div>
  <transition name="us">
    <div class="technooo" v-if="opened[0]">
      <p>Снижение сроков строительства на 17% за первые 1.5-2 года внедрения и еще 9% в последующий год. В денежном
        выражении это около 1,5 млрд. тенге.</p>
    </div>
  </transition>
  <div class="container">
    <h2 class="h2">Преимущества внедрения Панели руководителя |Smart Planner
    </h2>
    <div class="lab">
      <div class="border">
        <div class="borders">
          <div class="line"></div>
          <p>Организовано календарно-сетевое планирование на системном уровне</p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>Идет постоянная синхронизация информации и анализ ключевых показателей на Панели руководителя</p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>Внедрены единые критерии оценки проектов</p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>Ведется мониторинг проектов и применяются корректирующие действия</p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>Осуществляется контроль сроков реализации проектов и заблаговременное реагирование на отклонения от базового плана</p>
        </div>
        <div class="borders">
          <div class="line"></div>
          <p>Обеспечена еженедельная отчётность руководителей проектов</p>
        </div>

      </div>
      <img src="../../assets/img/fraimm.png" alt="">
    </div>
  </div>
  <Adins />
  
  <Message id="targetElement"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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
import Chos from '../../components/cholfon/Cholfon.vue'
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
import Adins from '../../components/adins/Adins.vue'

const scrollToTarget = (e: MouseEvent) => {
  e.preventDefault();

  const targetElement = document.getElementById('targetElement');
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
};
let punct = ref<Ball>({
  0: false,
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false
})
const punctt = (index: number) => {
  const content = document.getElementsByClassName('imk')[index] as HTMLElement
  if (content.style.transform == 'rotate(0deg)') {
    content.style.transform = 'rotate(180deg)';
  } else {
    content.style.transform = 'rotate(0deg)';
  }
  punct.value[index] = !punct.value[index];
}
const roteb = ref<number>(0);

setInterval(() => {
  roteb.value = (roteb.value + 1) % 3;
}, 2500);
</script>

<style lang="scss" scoped>
@import './panel.scss';
</style>