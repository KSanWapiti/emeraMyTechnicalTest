<template>
  <main>
    <div
      class="px-4 py-6 sm:px-0 mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
    >
      <div class="sm:text-center lg:text-left">
        <div class="guideSection">
          <h2
            class="guideTitle text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
          >
            Todo List
          </h2>
          <!-- <div id="app-6">
            <p>Clickez en dessous pour ajoutez une nouvelle tâche</p>
            <input v-model="message" class="py-3" />
            <button v-on:click="send">Send</button>
          </div> -->

          <ol>
            <li v-for="todo in list">
              {{ todo }}
            </li>
          </ol>

          <!-- <p class="text-base text-gray-500">
            This app, built with Vue 3, is using
            <a
              href="https://tailwindui.com"
              class="text-indigo-600 underline hover:text-indigo-500"
              >Tailwind UI</a
            >
            as a CSS Framework.
          </p> -->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { reactive } from '@vue/reactivity'

import axios from 'axios'

export default {
  data () {
    return {
      list: null,
      message: 'Hello new task'
    }
  },

  send (event) {
    alert('Bonjour ' + this.message + ' !')
  },

  mounted () {
    console.log('begin')

    axios
      .get(
        'http://localhost:5000/emeratest-4dd32/us-central1/api/getTodoList',
        {
          headers: {}
        }
      )
      .then(res => {
        this.list = res.data
        console.log(this.list)
      })
      .catch(err => console.log(err))
  }
}
</script>

<style>
.guideSection {
  margin-bottom: 48px;
}

.guideTitle {
  margin-bottom: 24px;
}
</style>
