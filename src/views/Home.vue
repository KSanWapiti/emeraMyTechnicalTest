<template>
  <main>
    <div
      class="px-4 py-6 sm:px-0 mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
    >
      <div class="sm:text-center lg:text-left">
        <h2
          class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
        >Technical test for
          <br class="xl:hidden" />
          <a
            target="_blank"
            class="text-indigo-600 underline hover:text-indigo-500"
            href="https://emera.app"
            >Emera</a
          >
        </h2>
        <p
          class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
        >
        This sample app is a technical test for junior web devs.
        The goal is to see if you can jump into an existing app and add your own features to it.
        Do what you can, what's important is that you show that you are resourceful.
        </p>
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md shadow">
            <router-link to="/guide"
            custom
            v-slot="{ navigate, href, isExactActive }"
          >
          <a
              :href="href"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >
            See Instructions
            </a>
          </router-link>

             
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="https://github.com/Kagigz/emeratechnicaltest"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              Github Project
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {}
</script>
