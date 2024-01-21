<template>
  <div class="container">
    <section class="kess">
      <div class="tks">
        <h2 class="h4">Формирование требований</h2>
        <div class="na">
          <div class="tri">
          <div @click="chang('poka', 0)" class="rt">1</div>
          <div @click="chang('poka', 1)" class="rt">2</div>
          <div @click="chang('poka', 2)" class="rt">3</div>
        </div>
        <img src="../../assets/img/worik1.svg" alt="" class="worik">
        </div>
        
        
        <div class="bigs">
          <h5>{{ nasri }}</h5>
          <div class="punct" v-for="mnas in mnasri[res]" key="1">
            <div>—&#160;&#160;</div>
            <p>{{ mnas }}</p>
          </div>
          <a @click="scrollToTarget" href="#">Связаться с нами</a>
        </div>
      </div>
      <div class="tks vb">
        <h2 class="h4">Проектирование</h2>
        <div class="na xyy">
          <div class="tri">
          <div @click="chang('poka1', 0)" class="rt as">1</div>
          <div @click="chang('poka1', 1)" class="rt as">2</div>
          <div @click="chang('poka1', 2)" class="rt as">3</div>
        </div>
        <img src="../../assets/img/worik2.svg" alt="" class="worik">
        </div>
        
        <div class="biks">
          <h5>{{ nasriisho }}</h5>
          <div class="punct" v-for="mnas in mnasriisho[res2]" key="2">
            <div>—&#160;&#160;</div>
            <p>{{ mnas }}</p>
          </div>
          <a @click="scrollToTarget" href="#">Связаться с нами</a>
        </div>
      </div>
      <div class="tks">
        <h2 class="h4">Разработка продукта</h2>
        <div class="na">
          <div class="tri">
          <div @click="chang('poka2', 0)" class="rt ast">1</div>
          <div @click="chang('poka2', 1)" class="rt ast">2</div>
          <div @click="chang('poka2', 2)" class="rt ast">3</div>
          <div @click="chang('poka2', 3)" class="rt ast">4</div>
        </div>
        <img src="../../assets/img/worik3.svg" alt="" class="worik">
        </div>
        
        <div class="bigs">
          <h5>{{ nasrimm }}</h5>
          <div class="punct" v-for="mnas in mnasrimm[res3]" key="2">
            <div>—&#160;&#160;</div>
            <p>{{ mnas }}</p>
          </div>
          <a @click="scrollToTarget" href="#">Связаться с нами</a>
        </div>
      </div>
      <div class="tks vb">
        <h2 class="h4">Тестирование</h2>
        <div class="na xyy">
          
          <div class="tri">
            <div @click="chang('poka3', 0)" class="rt asy">1</div>
            <div @click="chang('poka3', 1)" class="rt asy">2</div>
            <div @click="chang('poka3', 2)" class="rt asy">3</div>
          </div>
          <img src="../../assets/img/worik4.svg" alt="" class="worik">
        </div>
        <div class="biks">
          <h5>{{ nasrimm2 }}</h5>
          <div class="punct" v-for="mnas in mnasrimm2[res4]" key="2">
            <div>—&#160;&#160;</div>
            <p>{{ mnas }}</p>
          </div>
          <a @click="scrollToTarget" href="#">Связаться с нами</a>
        </div>
      </div>
      <div class="tks lst">
        <h2 class="h4">Тестирование</h2>
        <div class="na">
          <div class="tri">
          <div @click="chang('poka4', 0)" class="rt asu">1</div>
        </div>
        <img src="../../assets/img/worik5.svg" alt="" class="worik">
        </div>
        
        <div class="bigs">
          <h5>{{ nasrimm3 }}</h5>
          <div class="punct" v-for="mnas in mnasrimm3[0]" key="2">
            <div>—&#160;&#160;</div>
            <p>{{ mnas }}</p>
          </div>
          <a @click="scrollToTarget" href="#">Связаться с нами</a>
        </div>
      </div>
    </section>
  </div>
  <Message id="targetElement"/>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
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
const vantusri = ref<string[]>([
  '1. ЗАДАЧА',
  '2. РЕЗУЛЬТАТ',
  '3. ВОВЛЕЧЕННЫЕ ЧЛЕНЫ КОМАНДЫ',
  '4. WEB ТЕХНОЛОГИИ'
])
const mnasri = ref([
  {
    0: 'Выполнить вместе с клиентом весь проект на основе первоначального предложения и договоренности',
    1: 'Составить подробное представление о целях и бизнес-задачах клиента',
    2: 'Понимание конкурентной среды',
    3: 'Понимание целевой аудитории, рынка и географии',
    4: 'Разъясняя все вопросы, которые есть у команды, опубликовать для клиента первоначальный анализ'
  },
  {
    0: 'Иметь точное и ясное представление о целях клиента и проекта',
    1: 'Получение отзывов клиентов и разъяснений по всем открытым вопросам',
    2: 'Наличие всей информации, необходимой для этапа проектирование',
  },
  {
    0: 'Менеджер проекта',
    1: 'Технический руководитель',
    2: 'Владелец проекта / Заказчик',
    3: 'Бизнес-аналитик',
  }
])
const mnasriisho = ref([
  {
    0: 'Создание всей необходимой документации для успешного выполнения проекта',
    1: 'Получение подтверждения и согласования со стороны клиента по документам и материалам',
    2: 'Определение плана проекта'
  },
  {
    0: 'Иметь четкое и точное планирование проекта',
    1: 'Чтобы все было подробно задокументировано, не оставляя ничего на случаи или предположений',
    2: 'Получить одобрение клиента и подписать документацию и план проекта',
  },
  {
    0: 'Подробная техническая спецификация',
    1: 'План проекта с подробным планированием этапов',
    2: 'Тестовые примеры и сценарии',
    3: 'Истории пользователей',
    4: 'Каркасы',
  }
])
const mnasrimm = ref([
  {
    0: 'Удовлетворение требований к интеграции фронтенда, бэкэнда, веб-сервисов и API',
    1: 'Подготовить стратегию по методологии Agile Scrum',
    2: 'Учитывайте аспекты мультитенантности, масштабируемости, интеграции с третьими сторонами',
    3: 'Понимание целевой аудитории, рынка и географии',
    4: 'Чтобы настроить частоту подготовительных этапов/ контрольных точек на 2-3 недели',
  },
  {
    0: 'База данных. : MongoDB, Mysql, PostgreSQL, Firebase',
    1: 'Открытый исходный код: Drupal, Magento, WordPress',
    2: 'Бэкэнд. : Laravel, Ruby, Python, Node.JS, Java',
    3: 'Внешний интерфейс. : AngularJS, ReactJS, VueJS Html5, CSS',
  },
  {
    0: 'iOS: ObjectiveC, Swift, xCode',
    1: 'Android: Java, Android studio',
    2: 'Hybrid. : Ionic, ReactNative',
  },
  {
    0: 'Менеджер проекта',
    1: 'Руководитель группы',
    2: 'Front-End разработчики',
    3: 'Back-End разработчики',
    4: 'Инженер QA',
  }
])
const mnasrimm3 = ref([
  {
    0: 'Улучшение продукта с помощью гибкого подхода',
    1: 'Регулярные проверки безопасности',
    2: 'Резервное копирование кода раз в две недели',
    3: 'Постоянное обновление системы на основе выпуска нового программного обеспечения / версии',
    4: 'Полное тестирование системы каждый месяц на предмет ошибок, несовместимости и ошибок',
  },
])
const mnasrimm2 = ref([
  {
    0: 'Каждый этап тестируется вручную',
    1: 'Об ошибках сообщается и добавляется в список невыполненных заказов',
    2: 'После исправления ошибки предоставляется качественный релиз, а затем окончательная демонстрация проекта отправляется клиенту на утверждение',
    3: 'Регрессионное тестирование после каждого этапа для обеспечения правильного функционирования предыдущих утвержденных этапов'
  },
  {
    0: 'Модульное тестирование',
    1: 'Ручное тестирование',
    2: 'Регрессионное тестирование',
    3: 'Автоматизация тестирования',
    4: 'Тестирование безопасности',
    5: 'Проверка кода',
  },
  {
    0: 'Менеджер по работе с клиентами',
    1: 'Менеджер проекта',
    2: 'QA',
  }
])
let nasri = ref<string>(vantusri.value[0])
let nasriisho = ref<string>(vantusri.value[0])
let nasrimm = ref<string>(vantusri.value[0])
let nasrimm2 = ref<string>(vantusri.value[0])
let nasrimm3 = ref<string>(vantusri.value[0])
let res = ref<number>(0)
let res2 = ref<number>(0)
let res3 = ref<number>(0)
let res4 = ref<number>(0)
const chang = (text: string, i: number) => {
  if (text == 'poka') {
    nasri.value = vantusri.value[i]
    res.value = i
    const els = document.getElementsByClassName('rt');
    for (let j = 0; j < els.length; j++) {
      if (j !== i) {
        (els[j] as HTMLDivElement).style.background = 'none';
        (els[j] as HTMLDivElement).style.color = '#000';
      } else {
        (els[j] as HTMLDivElement).style.background = '#29A28C';
        (els[j] as HTMLDivElement).style.color = '#fff';
      }
    }
  }
  if (text == 'poka1') {
    nasriisho.value = vantusri.value[i]
    res2.value = i
    const els = document.getElementsByClassName('as');
    for (let j = 0; j < els.length; j++) {
      if (j !== i) {
        (els[j] as HTMLDivElement).style.background = 'none';
        (els[j] as HTMLDivElement).style.color = '#000';
      } else {
        (els[j] as HTMLDivElement).style.background = '#29A28C';
        (els[j] as HTMLDivElement).style.color = '#fff';
      }
    }
  }
  if (text == 'poka2') {
    nasrimm.value = vantusri.value[i]
    res3.value = i
    const els = document.getElementsByClassName('ast');
    for (let j = 0; j < els.length; j++) {
      if (j !== i) {
        (els[j] as HTMLDivElement).style.background = 'none';
        (els[j] as HTMLDivElement).style.color = '#000';
      } else {
        (els[j] as HTMLDivElement).style.background = '#29A28C';
        (els[j] as HTMLDivElement).style.color = '#fff';
      }
    }
  }
  if (text == 'poka3') {
    nasrimm2.value = vantusri.value[i]
    res4.value = i
    const els = document.getElementsByClassName('asy');
    for (let j = 0; j < els.length; j++) {
      if (j !== i) {
        (els[j] as HTMLDivElement).style.background = 'none';
        (els[j] as HTMLDivElement).style.color = '#000';
      } else {
        (els[j] as HTMLDivElement).style.background = '#29A28C';
        (els[j] as HTMLDivElement).style.color = '#fff';
      }
    }
  }
  if (text == 'poka4') {
    const els = document.getElementsByClassName('asu');
    for (let j = 0; j < els.length; j++) {
      if (j !== i) {
        (els[j] as HTMLDivElement).style.background = 'none';
        (els[j] as HTMLDivElement).style.color = '#000';
      } else {
        (els[j] as HTMLDivElement).style.background = '#29A28C';
        (els[j] as HTMLDivElement).style.color = '#fff';
      }
    }
  }
}
onMounted(() => {
  (document.getElementsByClassName('rt')[0] as HTMLDivElement).style.background = '#29A28C';
  (document.getElementsByClassName('as')[0] as HTMLDivElement).style.background = '#29A28C';
  (document.getElementsByClassName('asy')[0] as HTMLDivElement).style.background = '#29A28C';
  (document.getElementsByClassName('ast')[0] as HTMLDivElement).style.background = '#29A28C';
  (document.getElementsByClassName('asu')[0] as HTMLDivElement).style.background = '#29A28C';
  (document.getElementsByClassName('rt')[0] as HTMLDivElement).style.color = '#fff';
  (document.getElementsByClassName('as')[0] as HTMLDivElement).style.color = '#fff';
  (document.getElementsByClassName('asy')[0] as HTMLDivElement).style.color = '#fff';
  (document.getElementsByClassName('ast')[0] as HTMLDivElement).style.color = '#fff';
  (document.getElementsByClassName('asu')[0] as HTMLDivElement).style.color = '#fff';
})
</script>

<style lang="scss" scoped>
@import './work.scss';
</style>