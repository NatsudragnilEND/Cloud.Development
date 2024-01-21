<template>
  <section class="how">
    <div class="container">
      <h2 class="h2">Наш процесс работы</h2>
      <Transition name="v">
        <div v-if="countKey" :key="`${countKey}`" class="how-content">
          <div class="numbers">
            <button class="d" @click="another(0)">1</button>
            <button class="d" @click="another(1)">2</button>
            <button class="d" @click="another(2)">3</button>
            <button class="d" @click="another(3)">4</button>
            <button class="d" @click="another(4)">5</button>
            <button class="d" @click="another(5)">6</button>
          </div>
          <img v-lazy="`${pro.img}`" class="jim" alt="" />
          <div class="desc">
            <h4>{{ pro.title }}</h4>
            <p>{{ pro.explaining }}</p>
            <router-link @click="scrolling" :to="{ name: 'works' }" class="uz">
              <img class="hhover" src="../../assets/img/cloud.svg" alt="" />
              <img class="hover" src="../../assets/img/hcloud.svg" alt="" />
              <p class="more">Узнать больше</p>
              <p class="all">→</p>
            </router-link>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
interface prop {
  img: String;
  title: String;
  explaining: String;
}
const pro = ref<prop>({
  img: "p1.jpg",
  title: "1. Мастерская открытий",
  explaining:
    "Мы придаем первостепенное значение пониманию и документированию входов, предпочтений клиентов, дизайна и брендов. И проясните все открытые моменты, чтобы получить точное и ясное представление о целях как клиентов, так и проекта. Мы работаем в рамках совместного подхода с участием  заинтересованных сторон, чтобы согласовать бизнес-процессы.",
});
let images = ref<String[]>([
  "p1.jpg",
  "p2.jpg",
  "p3.jpg",
  "p4.jpg",
  "p5.jpg",
  "p6.jpg",
]);
let titles = ref<String[]>([
  "1. мастерская открытий",
  "2. формирование требований",
  "3. проектирование",
  "4. разработка продукта",
  "5. тестирование",
  "6. техническое обслуживание",
]);
let descc = ref<String[]>([
  "Мы придаем первостепенное значение пониманию и документированию входов, предпочтений клиентов, дизайна и брендов. И проясните все открытые моменты, чтобы получить точное и ясное представление о целях как клиентов, так и проекта. Мы работаем в рамках совместного подхода с участием  заинтересованных сторон, чтобы согласовать бизнес-процессы.",
  "Выполнить вместе с клиентом весь проект на основе первоначального предложения и договоренности Составить подробное представление о целях и бизнес-задачах клиента Понимание конкурентной среды Понимание целевой аудитории, рынка и географии Разъясняя все вопросы, которые есть у команды, опубликовать для клиента первоначальный анализ",
  "Создание всей необходимой документации для успешного выполнения проекта Получение подтверждения и согласования со стороны клиента по документам и материалам Определение плана проекта",
  "Удовлетворение требований к интеграции фронтенда, бэкэнда, веб-сервисов и API Подготовить стратегию по методологии Agile Scrum Учитывайте аспекты мультитенантности, масштабируемости, интеграции с третьими сторонами Понимание целевой аудитории, рынка и географии Чтобы настроить частоту подготовительных этапов/ контрольных точек на 2-3 недели",
  "Каждый этап тестируется вручную Об ошибках сообщается и добавляется в список невыполненных заказов После исправления ошибки предоставляется качественный релиз, а затем окончательная демонстрация проекта отправляется клиенту на утверждение Регрессионное тестирование после каждого этапа для обеспечения правильного функционирования предыдущих утвержденных этапов",
  "Улучшение продукта с помощью гибкого подхода Регулярные проверки безопасности Резервное копирование кода раз в две недели Постоянное обновление системы на основе выпуска нового программного обеспечения / версии Полное тестирование системы каждый месяц на предмет ошибок, несовместимости и ошибок",
]);
onMounted(() => {
  const current = document.getElementsByClassName("d") as HTMLCollectionOf<HTMLElement>;
  current[0].classList.add("d2");
})
const countKey = ref<boolean>(true)
let im = ref<number>(0)
const another = (index: number) => {
  if (im.value !== index) {
    countKey.value = false
    setTimeout(() => {
      countKey.value = true
    }, 300);
    setTimeout(() => {
      pro.value.img = images.value[index];
      pro.value.title = titles.value[index];
      pro.value.explaining = descc.value[index];
      const current = document.getElementsByClassName("d") as HTMLCollectionOf<HTMLElement>;
      for (let i = 0; i < current.length; i++) {
        const element = current[i];
        element.classList.remove("d2");
      }
      current[index].classList.add("d2");
    }, 310);
  }

  im.value = index
};
const scrolling = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
@import "./how.scss";
</style>
