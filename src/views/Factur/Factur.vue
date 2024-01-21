<template>
  <div class="container">
    <section class="start">
      <div class="wrapper">
        <h2 class="he">
          Автоматизированная выгрузка счет-фактур на портал esf.gov.kz |
          ESF Integra
        </h2>
      </div>

      <div class="flf">
        <img src="https://devcloud.kz/assets/img/Frame%2044%20(3).png" alt="">
        <ul class="fuel">
          <li>
            <div class="li"></div>
            <div class="stilia">Синхронизация справочников биллинговой системы</div>
          </li>
          <li>
            <div class="li"></div>
            <div class="stilia">Формирование списка счетов-фактур для отправки в систему ИС ЭСФ</div>
          </li>
          <li>
            <div class="li"></div>
            <div class="stilia">Автоматический и ручной режимы отправки счетов фактур
            </div>
          </li>
          <li>
            <div class="li"></div>
            <div class="stilia">Автоматический контроль изменения статусов ИС ЭСФ</div>
          </li>
          <li>
            <div class="li"></div>
            <div class="stilia">Обратная синхронизация статусов биллинговой системы</div>
          </li>
          <li>
            <div class="li"></div>
            <div class="stilia">Фильтрация данных, поиск, экспорт и другие функции системы</div>
          </li>
          <li>
            <div class="li"></div>
            <div class="stilia">Разграничение прав доступа по ролям, филиальная структура</div>
          </li>
          <a href="#" @click="scrollToTarget">Связаться с нами</a>
        </ul>

      </div>
    </section>
  </div>
  <div class="technoblade-never-dies">
    <div class="diff"></div>
    <div class="technoblade-never-dies-content">
      <h3 class="bl">Технологии</h3>
      <p>ASP.net, C #, MVC, Microsoft SQL server, Java</p>
    </div>
  </div>
  <div class="technooo" @click="ope(0)">
    <h3>Технологии</h3>
    <img src="../../assets/img/vnizi.svg" class="rotatEl" alt="">
  </div>
  <transition name="us">
    <div class="technooo" v-if="opened[0]">
      <p>ASP.net, C #, MVC, Microsoft SQL server, Java</p>
    </div>
  </transition>
  <div class="technooo" @click="ope(1)">
    <h3>предыстория</h3>
    <img src="../../assets/img/vnizi.svg" class="rotatEl" alt="">
  </div>
  <transition name="us">
    <div class="technooo" v-if="opened[1]">
      <p>Повысили эффективность работы компании «Beeline» и «Coca-Cola» и ее сотрудников за счет автоматизации и
        организации процесса выписки электронных счетов-фактур путем интеграции биллинговой системы с порталом esf.gov.kz.
        Разработанное приложение адаптировано под существующие процессы компании.</p>
    </div>
  </transition>
  <swiper :pagination="true" :modules="modules" class="mySwiper lol">
    <swiper-slide>
      <div class="flexd">
        <h5>2 000 000 +</h5>
        <p>счет-фактур выгружены на портал esf.gov.kz</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="flexd">
        <h5>15 000</h5>
        <p>счет-фактур ежемесячно выгружаются</p>
      </div>
    </swiper-slide>
  </swiper>
  <div class="jss">
    <div class="flexd dodasi">
      <h5>2 000 000 +</h5>
      <p>счет-фактур выгружены на портал esf.gov.kz</p>
    </div>
    <div class="flexd">
      <h5>15 000</h5>
      <p>счет-фактур ежемесячно выгружаются</p>
    </div>
  </div>
  <div class="technoblade-never-dies axa">
    <div class="diff"></div>
    <div class="technoblade-never-dies-content">
      <h3 class="bl">Предыстория</h3>
      <p>Повысили эффективность работы компании «Beeline» и «Coca-Cola» и ее сотрудников за счет автоматизации и
        организации процесса выписки электронных счетов-фактур путем интеграции биллинговой системы с порталом esf.gov.kz.
        Разработанное приложение адаптировано под существующие процессы компании.</p>
    </div>
  </div>
  <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" spaceBetween="50"
    :initialSlide="1" :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    }" :pagination="true" :modules="modules" class="mySwiper mas">
    <swiper-slide class="swip"><img src="../../assets/img/scrin1.svg" class="hope" alt=""></swiper-slide>
    <swiper-slide class="swip"><img src="../../assets/img/scrin2.svg" class="hope" alt=""></swiper-slide>
    <swiper-slide class="swip"><img src="../../assets/img/scrin3.svg" class="hope" alt=""></swiper-slide>
    <img src="../../assets/img/main.svg" alt="" class="main">
  </swiper>
  <swiper :pagination="true" :modules="modules" class="mySwiper nl">
    <swiper-slide>
      <img src="../../assets/img/screenshot1.svg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/img/screenshot2.svg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/img/screenshot3.svg" alt="">
    </swiper-slide>
  </swiper>
  <section class="udob">
    <h2 class="h2">Удобство и простота интеграции</h2>
    <div class="polncon">
      <div class="firs">
        <img src="../../assets/img/sv1.svg" alt="">
        <p class="doc">Удобная работа</p>
        <img src="../../assets/img/sv2.svg" alt="">
        <p class="doc">Платформа</p>
        <img src="../../assets/img/sv3.svg" alt="">
      </div>
      <img src="../../assets/img/sv6.svg" alt="">
      <div class="firs sec">
        <p class="doc">Подключайте любую систему</p>
        <div class="ladno">
          <img src="../../assets/img/ladno.svg" alt="">
          <div class="li"></div>
          <h3>Система поддерживает филиальную структуру, выборку данных согласно настраиваемым фильтрам, отслеживание
            статусов, возвраты, пакетную обработку счетов-фактур, настройку личных и корпоративных ключей электронной
            цифровой подписи.</h3>
        </div>
        <p class="doc">Централизованный доступ</p>
        <img src="../../assets/img/sv5.svg" alt="">
        <p class="doc">Контролируйте процесс</p>
      </div>
    </div>
    <div class="rell">
      <img src="../../assets/img/sv7.svg" class="img" alt="">
      <h3>Подключайте любую систему</h3>
      <img src="../../assets/img/punct1.svg" alt="">
      <h3>Удобная работа</h3>
      <p>Система поддерживает филиальную структуру, выборку данных согласно настраиваемым фильтрам, отслеживание статусов,
        возвраты, пакетную обработку счетов-фактур, настройку личных и корпоративных ключей электронной цифровой подписи.
      </p>
      <h3>Централизованный доступ</h3>
      <p>Система использует такие веб-технологии, позволяющие организовать оперативный и централизованный доступ к
        функционалу системы сотрудникам Компании. В системе присутствует поддержка Active Directory</p>
      <h3>Платформа</h3>
      <p>Платформа eXpressApp Framework, на базе которой реализована система, позволяет гибко и последовательно расширять
        функционал, имеет встроенную систему отчетности и мониторинга. Интерфейсы платформы разработаны признанными
        лидерами в области реализации функционала ERP систем.</p>
      <h3>Контролируйте процесс</h3>
      <p>В системе организовано отслеживание ошибочных, некорректно заполненных документов, контроль и проверка на всех
        уровнях интеграции, минимизация человеческого фактора.</p>
    </div>
    <div class="technooo blade" @click="ope(2)">
      <h3>Подключайте любую систему</h3>
      <img src="../../assets/img/vnizi.svg" class="rotatEl" alt="">
    </div>
    <transition name="us">
      <div class="technooo" v-if="opened[2]">
        <p>Внутренние механизмы позволяют легко организовать выгрузку и передачу данных из Вашей системы! Все что для этого нужно — произвести простую привязку данных из вашей биллинговой системы с системой ЭСФ Интегра. Об остальном позаботится сама система.</p>
      </div>
    </transition>
    <div class="technooo blade" @click="ope(3)">
      <h3>Удобная работа</h3>
      <img src="../../assets/img/vnizi.svg" class="rotatEl" alt="">
    </div>
    <transition name="us">
      <div class="technooo" v-if="opened[3]">
        <p>Система поддерживает филиальную структуру, выборку данных согласно настраиваемым фильтрам, отслеживание статусов, возвраты, пакетную обработку счетов-фактур, настройку личных и корпоративных ключей электронной цифровой подписи.</p>
      </div>
    </transition>
    <div class="technooo blade" @click="ope(4)">
      <h3>Централизованный доступ</h3>
      <img src="../../assets/img/vnizi.svg" class="rotatEl" alt="">
    </div>
    <transition name="us">
      <div class="technooo" v-if="opened[4]">
        <p>Система использует такие веб-технологии, позволяющие организовать оперативный и централизованный доступ к функционалу системы сотрудникам Компании. В системе присутствует поддержка Active Directory.</p>
      </div>
    </transition>
    <div class="technooo blade" @click="ope(5)">
      <h3>Платформа</h3>
      <img src="../../assets/img/vnizi.svg" class="rotatEl" alt="">
    </div>
    <transition name="us">
      <div class="technooo" v-if="opened[5]">
        <p>Платформа eXpressApp Framework, на базе которой реализована система, позволяет гибко и последовательно расширять функционал, имеет встроенную систему отчетности и мониторинга. Интерфейсы платформы разработаны признанными лидерами в области реализации функционала ERP систем.</p>
      </div>
    </transition>
    <div class="technooo blade" @click="ope(6)">
      <h3>Контролируйте процесс</h3>
      <img src="../../assets/img/vnizi.svg" class="rotatEl" alt="">
    </div>
    <transition name="us">
      <div class="technooo" v-if="opened[6]">
        <p>В системе организовано отслеживание ошибочных, некорректно заполненных документов, контроль и проверка на всех уровнях интеграции, минимизация человеческого фактора.</p>
      </div>
    </transition>
  </section>
  <Adins />
  <Message id="targetElement" />
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
const scrollToTarget = (e: MouseEvent) => {
  e.preventDefault();

  const targetElement = document.getElementById('targetElement');
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
};import Adins from '../../components/adins/Adins.vue'
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
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
const modules = [Pagination, EffectCoverflow]
import { EffectCoverflow, Pagination } from 'swiper/modules';
</script>

<style lang="scss" scoped>@import './factur.scss';</style>