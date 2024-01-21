<template>
  <video ref="myVideo" src="https://devcloud.kz/assets/movie.mp4" autoplay muted class="absolute"></video>
  <div class="banner">
    <h1 class="bant">Компания по разработке програмного обеспечения</h1>
    <a href="#" class="zapros" @click="scrollToTarget">Запросить консультацию</a>
    <p class="balsho">⇓</p>
  </div>
  <div class="container">
    <section ref="section" class="couters">
      <div class="counter counter-1">
        <h3 class="animate">{{ currentNumbers[0] }}%</h3>
        <p>Завершенных проектов успешно</p>
      </div>
      <div class="counter counter-2">
        <h3 class="animate">{{ currentNumbers[1] }}</h3>
        <p>календарных дней до первого релиза</p>
      </div>
      <div class="counter counter-3">
        <h3 class="animate">{{ currentNumbers[2] }}+</h3>
        <p>дней от идеи до готовой концепции</p>
      </div>
      <div class="counter counter-4">
        <h3 class="animate">+{{ currentNumbers[3] }}%</h3>
        <p>к эффективности бизнеса</p>
      </div>
    </section>
    <section class="quali">
      <img class="sec2" src="../../assets/img/sec2.jpg" alt="" />
      <div class="right">
        <div class="right-content">
          <img src="../../assets/img/tupoy.svg" alt="" />
          <h3>Мы просто умеем разрабатывать то, что нужно. То, что будет работать!</h3>
          <a href="#" class="zapros" @click="scrollToTarget">Запросить консультацию</a>
        </div>
        <p>
          С 2010 года профессионально разрабатываем успешные мобильные и веб-решения, индивидуальные программные решения,
          информационные системы и ПО для
          бизнеса, которые повышают эффективность бизнеса.
        </p>
      </div>
    </section>
    <section class="services">
      <h2 class="h2">
        Основные услуги
        <div class="cards">
          <div class="card">
            <img src="../../assets/img/card1.svg" class="top" alt="" />
            <img src="../../assets/img/ugal.svg" alt="" class="left" />
            <div></div>
            <h3>Разработка мобильных приложений</h3>
            <p class="desc">
              Мы создаем мобильные приложения, которые нравятся пользователям. Воспользовавшись преимуществами
              искусственного интеллекта, машинного обучения,
              Интернета вещей и других высокотехнологичных технологий для создания шедевров приложений, которые
              сохранятся.
            </p>
            <router-link @click="scrolling" v-bind:to="{ name: 'servicesm' }" class="uz">
              <img class="hhover" src="../../assets/img/cloud.svg" alt="" />
              <img class="hover" src="../../assets/img/hcloud.svg" alt="" />
              <p class="more">Узнать больше</p>
              <p class="all">→</p>
            </router-link>
          </div>
          <div class="card">
            <img src="../../assets/img/card2.svg" class="top" alt="" />
            <img src="../../assets/img/ugal.svg" alt="" class="left" />
            <div></div>
            <h3>Разработка программного обеспечения</h3>
            <p class="desc">
              Уже более 10 лет мы освоили лучшие веб-технологии для реализации проектов, в которые вложены инвестиции.
              Надежный лидер рынка в разработке
              высокопроизводительных веб-интерфейсов для любого бизнеса.
            </p>
            <router-link @click="scrolling" v-bind:to="{ name: 'servicesd' }" class="uz">
              <img class="hhover" src="../../assets/img/cloud.svg" alt="" />
              <img class="hover" src="../../assets/img/hcloud.svg" alt="" />
              <p class="more">Узнать больше</p>
              <p class="all">→</p>
            </router-link>
          </div>
          <div class="card">
            <img src="../../assets/img/card3.svg" class="top" alt="" />
            <img src="../../assets/img/ugal.svg" alt="" class="left" />
            <div></div>
            <h3>Разработка веб приложений</h3>
            <p class="desc">
              Мы не только идем в ногу с «тенденциями дизайна», но и ориентируемся на пользователей, что делает наши
              услуги наиболее эффективными на всем рынке.
              Превосходство с 2010 года. Создадим идеальное веб приложение именно для вас.
            </p>
            <router-link @click="scrolling" v-bind:to="{ name: 'servicesd' }" class="uz">
              <img class="hhover" src="../../assets/img/cloud.svg" alt="" />
              <img class="hover" src="../../assets/img/hcloud.svg" alt="" />
              <p class="more">Узнать больше</p>
              <p class="all">→</p>
            </router-link>
          </div>
        </div>
      </h2>
    </section>
    <section class="projects">
      <h2 class="h2">Наши проекти</h2>
      <swiper :navigation="true" :pagination="turu" :modules="modules" class="mySwiper">
        <swiper-slide>
          <img src="../../assets/img/foto.jpg" alt="" class="foto" />
          <div class="info">
            <h3>Компания по производству фотокниг Fototeca</h3>
            <p>
              Программное решение, автоматизирующее производство изделий – от создания дизайна до выдачи клиенту. Была
              создана система, которая позволяет
              профессиональному фотографу – клиенту компании — формировать изделие (фотокнигу) в нужном формате и виде,
              оплатить и сразу передать заказ в
              производство.
            </p>
            <router-link @click="scrolling" v-bind:to="{ name: 'fototeca' }" class="uz">
              <img class="hhover" src="../../assets/img/cloud.svg" alt="" />
              <img class="hover" src="../../assets/img/hcloud.svg" alt="" />
              <p class="more">Узнать больше</p>
              <p class="all">→</p>
            </router-link>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/foto1.jpg" alt="" class="foto" />
          <div class="info">
            <h3>Копировальная сеть Copyland</h3>
            <p>
              Разработана информационная система для управления процессами, контроля и отслеживания работы полиграфической
              компании. Даное приложение
              адаптировано под существующие процессы компании.
            </p>
            <router-link @click="scrolling" v-bind:to="{ name: 'copyapp' }" class="uz">
              <img class="hhover" src="../../assets/img/cloud.svg" alt="" />
              <img class="hover" src="../../assets/img/hcloud.svg" alt="" />
              <p class="more">Узнать больше</p>
              <p class="all">→</p>
            </router-link>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/foto2.jpg" alt="" class="foto" />
          <div class="info">
            <h3>BizDoc | СЭД</h3>
            <p>
              В основе разработки системы BizDoc — современный инструментарий, который позволит вам гибко настраивать и
              адаптировать систему под бизнес-задачи
              вашей компании. Вы сможете полностью автоматизировать документооборот, оптимизировать связанные с ним
              бизнес-процессы.
            </p>
            <router-link @click="scrolling" v-bind:to="{ name: 'copyland' }" class="uz">
              <img class="hhover" src="../../assets/img/cloud.svg" alt="" />
              <img class="hover" src="../../assets/img/hcloud.svg" alt="" />
              <p class="more">Узнать больше</p>
              <p class="all">→</p>
            </router-link>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/foto3.jpg" alt="" class="foto" />
          <div class="info">
            <h3>Туристическая компания Almaty City Tour</h3>
            <p>
              Разработана информационная система для управления процессами, контроля и отслеживания работы полиграфической
              компании. Даное приложение
              адаптировано под существующие процессы компании.
            </p>
            <router-link @click="scrolling" v-bind:to="{ name: 'travel' }" class="uz">
              <img class="hhover" src="../../assets/img/cloud.svg" alt="" />
              <img class="hover" src="../../assets/img/hcloud.svg" alt="" />
              <p class="more">Узнать больше</p>
              <p class="all">→</p>
            </router-link>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/foto4.jpg" alt="" class="foto" />
          <div class="info">
            <h3>Специальное приложение для интернет-магазинов</h3>
            <p>Программа T-Data была разработана для интернет-магазинов, чтобы аккумулировать данные из различных
              источников, прайс-листов и поставщиков.</p>
            <router-link @click="scrolling" v-bind:to="{ name: 'store' }" class="uz">
              <img class="hhover" src="../../assets/img/cloud.svg" alt="" />
              <img class="hover" src="../../assets/img/hcloud.svg" alt="" />
              <p class="more">Узнать больше</p>
              <p class="all">→</p>
            </router-link>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/foto5.jpg" alt="" class="foto" />
          <div class="info">
            <h3>X-Factoring</h3>
            <p>
              Автоматизированная система управления факторинговыми операциями SofIA Factoring. Базовая функциональность
              системы позволяет автоматизировать все
              этапы работы с контрагентами и документами. <br />
              Имеющиеся интерфейсы с бухгалтерской учетной системой и системой банк-клиент повышают уровень автоматической
              обработки и позволяют минимизировать
              число ошибок.
            </p>
            <router-link @click="scrolling" v-bind:to="{ name: 'xfac' }" class="uz">
              <img class="hhover" src="../../assets/img/cloud.svg" alt="" />
              <img class="hover" src="../../assets/img/hcloud.svg" alt="" />
              <p class="more">Узнать больше</p>
              <p class="all">→</p>
            </router-link>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/foto6.jpg" alt="" class="foto" />
          <div class="info">
            <h3>Приложение для пациентов с диагностированным диабетом</h3>
            <p>
              Было разработано удобное мобильное приложение(Android, IOS), которое поможет пользователям контролировать
              состояние здоровья (сахар, артериальное
              давление, гемоглобин), отслеживать процесс лечения и приема лекарств, за счет отслеживания состояния
              пациентов и хранения медицинских данных для
              использования в научных целях.
            </p>
            <router-link @click="scrolling" v-bind:to="{ name: 'pacient' }" class="uz">
              <img class="hhover" src="../../assets/img/cloud.svg" alt="" />
              <img class="hover" src="../../assets/img/hcloud.svg" alt="" />
              <p class="more">Узнать больше</p>
              <p class="all">→</p>
            </router-link>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/foto7.jpg" alt="" class="foto" />
          <div class="info">
            <h3>Мобильное приложение для водителей</h3>
            <p>
              Мобильное приложение для водителей позволяет держать свой баланс под полным контролем и снять деньги в любое
              удобное время. Основная задача
              моментальный вывод денег с баланса профиля водителя, на банковскую карточку водителя.
            </p>
            <router-link @click="scrolling" v-bind:to="{ name: 'driver' }" class="uz">
              <img class="hhover" src="../../assets/img/cloud.svg" alt="" />
              <img class="hover" src="../../assets/img/hcloud.svg" alt="" />
              <p class="more">Узнать больше</p>
              <p class="all">→</p>
            </router-link>
          </div>
        </swiper-slide>
      </swiper>
    </section>
  </div>
  <How />
  <div class="container">
    <section class="tools">
      <h2 class="h2">Инструменты и технологии</h2>
      <div class="imgishkas">
        <img class="imgishka" src="https://devcloud.kz/assets/img/Frame%201.png" alt="" />
      </div>

    </section>
    <section class="ex">
      <h2 class="h2">Наш опыт</h2>
      <div class="ex-content">
        <router-link @click="scrolling" :to="{ name: 'travel' }" class="ex-card">
          <img :src="'ex.png'" alt="" />
          <h3>Туризм</h3>
          <p>
            Создание различных решений в области туризма. Разработка индивидуальных туров, CRM-система для управления
            клиентскими услугами. Создание системы
            расчётов туров. Создание веб- приложения, что обеспечит полный цикл работы менеджеров тура.
          </p>
        </router-link>
        <router-link @click="scrolling" :to="{ name: 'panel' }" class="ex-card">
          <img :src="'ex1.png'" alt="" />
          <h3>Строительство</h3>
          <p>
            Внедрение комплексных решений в строительстве. Информационная витрина, которая интегрирует информацию из
            различных источников. Создание портала и
            настольного приложения для управления и автоматического сбора данных из ситем.
          </p>
        </router-link>
        <router-link @click="scrolling" :to="{ name: 'copyland' }" class="ex-card">
          <img :src="'ex2.png'" alt="" />
          <h3>Финансы</h3>
          <p>
            Внедрение банковских систем для интеграции с международными системами денежных переводов, систем согласования
            бюджетных запросов и оперативного
            контроля использования бюджета, системы автоматизации бизнес- процессов кредитования.
          </p>
        </router-link>
        <router-link @click="scrolling" :to="{ name: 'xfac' }" class="ex-card">
          <img :src="'ex4.jpg'" alt="" />
          <h3>Обучение</h3>
          <p>
            Корпоративное решение для организаций, осуществляющих обучение и тестирование персонала. Веб-приложение для
            администрирования обучения сотрудников -
            с возможностью создания учебных курсов, практических и тестовых заданий, отслеживания прогресса учеников.
          </p>
        </router-link>
      </div>
    </section>
    <section class="tools tulc">
      <h2 class="h2">С кем мы работаем</h2>
      <div class="imgishkass">
        <img :src="'freim.png'" alt="" />
      </div>

    </section>
  </div>
  <Message id="targetElement" />
</template>

<script setup lang="ts">

import Message from "../../components/Message/Message.vue";
import How from "../../components/How/How.vue";
import { ref, onMounted, computed } from "vue";
const saveScrollPosition = () => {
  localStorage.setItem("scrollPosition", window.scrollY.toString());
};
onMounted(() => {
  const savedScrollPosition = localStorage.getItem("scrollPosition");
  if (savedScrollPosition) {
    window.scrollTo({
      top: parseInt(savedScrollPosition),
      behavior: "smooth",
    });
  }
  window.addEventListener("scroll", saveScrollPosition);
});
const currentNumbers = ref([0, 0, 0, 0]);
const targets = [98, 30, 5, 20];
const section = ref<HTMLElement | null>(null);
const myVideo = ref<HTMLVideoElement | null>(null);
const modules = [Navigation, Pagination];
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
onMounted(() => {
  if (myVideo.value) {
    myVideo.value.addEventListener("ended", handleVideoEnded);
  }
});
const scrollToTarget = (e: MouseEvent) => {
  e.preventDefault();

  const targetElement = document.getElementById('targetElement');
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
};
const handleVideoEnded = () => {
  if (myVideo.value) {
    myVideo.value.currentTime = 0;
    setTimeout(() => {
      if (myVideo.value) {
        myVideo.value.play();
      }
    }, 1000);
  }
};
onMounted(() => {
  const options = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  }, options);

  if (section.value) {
    observer.observe(section.value);
  }
});
const turu = computed(() => {
  if (window.innerWidth < 550) {
    return true
  } else {
    return false
  }
})
const scrolling = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
const animateCounters = () => {
  const increment = 1;
  const elements = [
    section.value?.querySelector(".counter-1 h3"),
    section.value?.querySelector(".counter-2 h3"),
    section.value?.querySelector(".counter-3 h3"),
    section.value?.querySelector(".counter-4 h3"),
  ];

  const increaseNumber = (index: number) => {
    if (currentNumbers.value[index] < targets[index]) {
      setTimeout(() => {
        currentNumbers.value[index] += increment;
        increaseNumber(index);
      }, 12);
    }
  };
  for (let i = 0; i < elements.length; i++) {
    increaseNumber(i);
  }
};
</script>

<style lang="scss" scoped>
.counter h3 {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s, transform 0.5s;
}

.counter h3.animate {
  opacity: 1;
  transform: translateY(0);
}

.swiper {
  margin-bottom: 100px;
}

@import "./home.scss";
</style>
