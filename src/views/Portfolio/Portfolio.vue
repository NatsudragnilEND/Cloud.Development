<template>
  <div class="container">
    <h2 class="h2">
      Портфолио
    </h2>
    <div class="portfolio">
      <div class="content">
        <img src="../../assets/img/port1.png" class="conn" alt="">
        <div class="aps">
          <h3>Автоматизированная выгрузка счет-фактур на портал esf.gov.kz |
            ESF Integra</h3>
          <p>Гибкий и удобный инструмент для интеграции биллинговых систем с порталом esf.gov.kz</p>
          <router-link @click="scrolling" :to="{ name: 'factur' }">Узнать</router-link>
        </div>
      </div>
      <div class="content">
        <img src="../../assets/img/port2.png" class="conn" alt="">
        <div class="aps">
          <h3>Цифровизация в строительстве | Панель Руководителя</h3>
          <p>Разработана управленческая панель для руководителя строительной компании и мобильное веб-решение для
            управления строительными проектами
          </p>
          <router-link @click="scrolling" :to="{ name: 'panel' }">Узнать</router-link>
        </div>
      </div>
      <div class="content">
        <img src="../../assets/img/port3.png" class="conn" alt="">
        <div class="aps">
          <h3>Автоматизация производство по фотокниг</h3>
          <p>Автоматизировали производство с момента создания дизайна до выдачи изделия клиенту</p>
          <router-link @click="scrolling" :to="{ name: 'fototeca' }">Узнать</router-link>
        </div>
      </div>
      <div class="content">
        <img src="../../assets/img/port4.png" class="conn" alt="">
        <div class="aps">
          <h3>Автоматизация копировательной сети</h3>
          <p>Разработана информационная система для управления процессами, контроля и отслеживания работы полиграфической
            компании</p>
          <router-link @click="scrolling" :to="{ name: 'copyapp' }">Узнать</router-link>
        </div>
      </div>
      <div class="content">
        <img src="../../assets/img/port5.png" class="conn" alt="">
        <div class="aps">
          <h3>Система электронного документооборота |
            СЭД</h3>
          <p>Программа для внутреннего документооборота компании — ускоренная обработка документов, согласование,
            систематизация и хранение</p>
          <router-link @click="scrolling" :to="{ name: 'copyland' }">Узнать</router-link>
        </div>
      </div>
      <div class="content">
        <img src="../../assets/img/port6.png" class="conn" alt="">
        <div class="aps">
          <h3>Автоматизация туристической фирмы
          </h3>
          <p>Внедрена система автоматического расчета туров
          </p>
          <router-link @click="scrolling" :to="{ name: 'travel' }">Узнать</router-link>
        </div>
      </div>
      <div class="content">
        <img src="../../assets/img/port7.png" class="conn" alt="">
        <div class="aps">
          <h3>Автоматическая обработка
            прайс листов интернет-магазина</h3>
          <p>Программа T-Data разработана для интернет-магазинов, для аккумуляции данных из различных источников,
            прайс-листов и поставщиков</p>
          <router-link @click="scrolling" :to="{ name: 'store' }">Узнать</router-link>
        </div>
      </div>
      <div class="content">
        <img src="../../assets/img/port8.png" class="conn" alt="">
        <div class="aps">
          <h3>X-Factoring</h3>
          <p>Автоматизированная система управления факторинговыми операциями SofIA Factoring</p>
          <router-link @click="scrolling" :to="{ name: 'xfac' }">Узнать</router-link>
        </div>
      </div>
      <div class="content">
        <img src="../../assets/img/port9.png" class="conn" alt="">
        <div class="aps">
          <h3>Приложение для водителей Android и iOS</h3>
          <p>Devcloud Solutions разработает систему мобильных приложений Android и iOS для водителей, которая позволит
            держать свой баланс под полным контролем и снять деньги в любое удобное время</p>
          <router-link @click="scrolling" :to="{ name: 'driver' }">Узнать</router-link>
        </div>
      </div>
      <div class="content">
        <img src="../../assets/img/port0.png" class="conn" alt="">
        <div class="aps">
          <h3>Приложение для пациентов с диагностированным диабетом
          </h3>
          <p>Мобильное приложение, которое поможет пользователям контролировать состояние здоровья (сахар, артериальное
            давление, гемоглобин), отслеживать процесс лечения и приема лекарств</p>
          <router-link @click="scrolling" :to="{ name: 'pacient' }">Узнать</router-link>
        </div>
      </div>
    </div>
  </div>
  <Message />
</template>

<script setup lang="ts">
import Message from '../../components/Message/Message.vue';
const scrolling = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>@import './portfolio.scss';</style>