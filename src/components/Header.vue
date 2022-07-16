<template>
  <nav class="flex items-center justify-between flex-wrap bg-gray-900 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <router-link to="/"><span class="font-semibold text-xl tracking-tight">Star Wars Vue-TS-Tailwind</span></router-link>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-yellow-300 hover:text-white mr-4">Home</router-link>
      <router-link to="/about" class="block mt-4 lg:inline-block lg:mt-0 text-yellow-300 hover:text-white mr-4">About</router-link>
    </div>
    <div>
      <a href="https://github.com/Umk1nus" class="text-white  font-semibold inline-block text-sm px-4 py-2 leading-none border rounded shadow-lg hover:hover:shadow-yellow-300 hover:border-transparent hover:text-gray-900 hover:bg-yellow-300 mt-4 lg:mt-0">Github</a>
    </div>
  </div>
</nav>
</template>