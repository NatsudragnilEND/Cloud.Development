<template>
  <div class="container">
    <section class="aboutinf">
      <img src="../../assets/img/bigabout.svg" alt="" class="fifth balsh">
      <div class="description">
        <h2 class="h4">О нас</h2>
        <p class="cverx">
          Devcloud объединяет кучу увлеченных умов, чтобы воплотить ваши представления в реальность, обеспечивая
          потрясающий цифровой опыт для ваших пользователей. От дизайна веб-сервисов, разработки мобильных приложений, и
          до решений, которые мы разрабатываем, ускоряющие эффективность и стимулирующие рост наших клиентов.
          <br> <br>
          С 2010 года мы стремимся к постоянному достижению и повышению уровня производительности. Используя мощь
          технологий мы предоставляем комплексные решения для малых, средних и для начинающих предприятий с
          многомиллионным финансированием.
        </p>
        <a @click="scrollToTarget" href="#">Связаться с нами</a>
      </div>
    </section>
    <How />
    <section class="posl">
      <h2 class="h2">Наши ценности</h2>
    </section>
    <div class="clients">
      <img class="fifth" src="../../assets/img/client1.svg" alt="">
      <div class="galki">
        <div class="galka">
          <img src="../../assets/img/galka.svg" alt="">
          <p class="wizs">
            Клиенты — это друзья. Мы считаем что каждая их проблема — наша.
          </p>
        </div>
        <div class="galka">
          <img src="../../assets/img/galka.svg" alt="">
          <p class="wizs">
            Ожидайте дизайнерское мышление, креативность и решение проблем.
          </p>
        </div>
        <div class="galka">
          <img src="../../assets/img/galka.svg" alt="">
          <p class="wizs">
            Ответственность — именно это и есть нашая повседневная практика.
          </p>
        </div>
      </div>
    </div>
    <div class="clients rev">
      <img src="../../assets/img/client2.svg" class="fifth" alt="">
      <div class="galki">
        <div class="galka">
          <img src="../../assets/img/galka.svg" alt="">
          <p class="wizs">
           Мы не предполагаем. Мы приходим к решению задач путем  умозаключений.
          </p>
        </div>
        <div class="galka">
          <img src="../../assets/img/galka.svg" alt="">
          <p class="wizs">
            Мы — универсальный центр взаимодействия с потребителями.
          </p>
        </div>
        <div class="galka">
          <img src="../../assets/img/galka.svg" alt="">
          <p class="wizs">
            Мы знаем, как играть в цифровую игру для ценности бренда.
          </p>
        </div>
      </div>
    </div>
  </div>
  <Message id="targetElement"/>
</template>

<script setup lang="ts">
import How from '../../components/How/How.vue'
import Message from '../../components/Message/Message.vue'
const scrollToTarget = (e: MouseEvent) => {
  e.preventDefault();

  const targetElement = document.getElementById('targetElement');
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
};
</script>

<style lang="scss" scoped>
@import './aboutus.scss';
</style>