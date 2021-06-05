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
          Exercise overview
        </h2>
        <p
          class="text-basetext-gray-500"
        >
          For this exercise, you will create another page in this app that will fetch tasks from an API and display them.
        </p>
        <p
          class="text-basetext-gray-500"
        >
          You're free to display them the way you want, the ideal being showing and allowing to switch between 2 different views: list & grid.
        </p>
          <p
          class="text-basetext-gray-500"
        >
        If you can add, update, and delete tasks, that's a bonus! 
      </p>
        </div>
        <div class="guideSection">
        <h2
          class="guideTitle text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
        >
          Frameworks used
        </h2>
        <p
          class="text-base text-gray-500"
        >
          This app, built with Vue 3, is using <a
            href="https://tailwindui.com"
            class="text-indigo-600 underline hover:text-indigo-500"
            >Tailwind UI</a> as a CSS Framework.
        </p>
        <p
          class="text-base text-gray-500"
        >
        We advise taking a look at <a
            href="https://2x.antdv.com/components/overview/"
            class="text-indigo-600 underline hover:text-indigo-500"
            >Ant Design</a> for easy & beautiful components.
            </p>

          </div>

          <div class="guideSection">
        <h2
          class="guideTitle text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
        >
          Back-end
        </h2>
        <p
          class="text-base text-gray-500"
        >
         You can use whatever you want to simulate an API that will return a list of tasks, and eventually allow to add/update/delete them.
        </p>
        <p
          class="text-base text-gray-500"
        >
         The tasks should have at list a name, status (done or not), and eventually deadline and description.
        </p>
        <p
          class="text-base text-gray-500"
        >
        You can take a look at <a
            href="https://dev.to/znick1982/how-to-fake-your-api-for-todo-list-5e85"
            class="text-indigo-600 underline hover:text-indigo-500"
            >this tutorial</a> for inspiration.
            </p>
            <p
          class="text-base text-gray-500"
        >
        Please let us know if you need any help setting up an API that you can consume from the front-end.
        </p>
          </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style>

.guideSection{
  margin-bottom: 48px;
}

.guideTitle{
  margin-bottom: 24px;
}

</style>
