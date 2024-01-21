<template>
  <section class="message">
      <img src="../../assets/img/tu.png" class="arhiv" alt="">
    <div class="ips">
      <p class="abc">Есть вопросы? Задавайте!</p>
      <input @input="nameCheck" ref="name11" v-model="names" @keydown.prevent.enter="check(1)" type="text" class="name"
        placeholder="Имя">
      <div class="namis">
        <input type="email" ref="name22" class="nami" v-model="email" @keydown.prevent.enter="check(2)"
          placeholder="E-mail">
        <input type="text" ref="name33" v-model="name3" @keydown="char" @input="addPlus" @focus="addPlus"
          @keydown.prevent.enter="check(3)" class="nami" placeholder="Телефон">
      </div>
      <div class="class">
        <textarea rows="4" ref="name44" v-model="text" @keydown.prevent.enter="check(4)"
          placeholder="Message&#13;&#10;Напишите своё сообщение..." class="messagj" cols="50">

      </textarea>
        <img class="tg" @click="sendd" src="../../assets/img/fraim1.svg" alt="">
        <img class="tg2" src="../../assets/img/fraim2.svg" alt="">
      </div>
      <transition name="v">
        <div v-if="fail || success" class="er notice">{{ noticeContent }}</div>
      </transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
let names = ref<string>('')
let name3 = ref<string>('')
let text = ref<string>('')
let fail = ref<boolean>(false)
let success = ref<boolean>(false)
let email = ref<string>('')
let name33 = ref<HTMLElement | null>(null)
let name22 = ref<HTMLElement | null>(null)
let name11 = ref<HTMLElement | null>(null)
let name44 = ref<HTMLElement | null>(null)
let noticeContent = ref<string>('')
watchEffect(() => {
  if (fail.value) {
    noticeContent.value = 'Заполните поля корректно!'
  }
  if (success.value) {
    noticeContent.value = 'Ваш вопрос отправлен!'
    console.log('success');
  }
})
const nameCheck = () => {
  const namesf = names.value.split('')
  namesf[0] = namesf[0].toUpperCase()
  names.value = namesf.join('')
}
const addPlus = (event: Event) => {
  const target = event.target as HTMLInputElement
  const inputValue = target.value
  if (inputValue.length === 0) {
    name3.value = "+";
  } else {
    name3.value = inputValue;
  }

};
const char = (event: KeyboardEvent) => {
  const charCode = event.keyCode
  if ((charCode < 48 || charCode > 57) && charCode !== 8 && charCode !== 9) {
    if (charCode < 96 || charCode > 105) {
      event.preventDefault();
    }
  }
  if (name3.value.length >= 13 && event.key !== 'Backspace' && event.key !== 'Delete') {
    event.preventDefault();
  }
};
const check = (num: number) => {
  const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  if (num === 1 && names.value !== '') {
    name22.value?.focus();
  } else if (num === 2) {
    if (pattern.test(email.value) === true) {
      name33.value?.focus();
    } else {
      fail.value = true
    }
  } else if (num === 3 && name3.value !== '+' && name3.value.length > 11) {
    name44.value?.focus();
  } else if (num === 4 && text.value !== '') {
    sendd();
  } else {
    fail.value = true
  }
  setTimeout(() => {
    fail.value = false
  }, 3000);
}
const sendd = () => {
  const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (text.value == '') {
    name44.value?.focus();
    fail.value = true
    setTimeout(() => {
      fail.value = false
    }, 3000);
  } else if (names.value == '') {
    name11.value?.focus();
    fail.value = true
    setTimeout(() => {
      fail.value = false
    }, 3000);
  } else if (pattern.test(email.value) === false) {
    name22.value?.focus();
    fail.value = true
    setTimeout(() => {
      fail.value = false
    }, 3000);
  } else if (name3.value == '+' || name3.value == '' || name3.value.length < 11) {
    name33.value?.focus();
    fail.value = true
    setTimeout(() => {
      fail.value = false
    }, 3000);
  } else {
    success.value = true
    names.value = ''
    text.value = ''
    name3.value = ''
    email.value = ''
    setTimeout(() => {
      success.value = false
    }, 3000);
  }

}
</script>

<style scoped>
@import './message.scss';
</style>
