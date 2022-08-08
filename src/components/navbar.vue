<script setup lang="ts">
  const { t, locale } = useI18n()

  const isDark = useDark()
  const toggleDark = useToggle(isDark)
</script>

<template>
  <div>
    <nav class="relative w-full flex flex-wrap items-center justify-between py-4 bg-amber-100 dark:bg-gray-800 shadow-lg navbar navbar-expand-lg">
      <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <router-link to="/" class="text-xl">
          <img src="vite.svg" style="height: 30px" alt="logo" loading="lazy" />
        </router-link>
        <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
          <li class="nav-item p-2">
            <router-link to="/" class="nav-link text-2xl text-gray-700 dark:text-gray-200 hover:text-gray-600 p-0" href="#">{{ $t('title') }}</router-link>
          </li>
        </ul>
        <button class="navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
          class="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
          </path>
        </svg>
        </button>
        <div class="collapse navbar-collapse flex items-center justify-center relative" id="navbarSupportedContent">
          <ul class="navbar-nav flex items-center list-style-none mr-0">
            <li class="nav-item px-2">
              <div class="flex items-center justify-center">
                <div class="inline-flex" role="group">
                  <button type="button" :class="{'bg-gray-100 dark:bg-gray-700': locale == 'pl'}" class="rounded-l px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0" @click="locale = 'pl'">
                    Polski
                  </button>
                  <button type="button" :class="{'bg-gray-100 dark:bg-gray-700': locale == 'en'}" class="rounded-r px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0" @click="locale = 'en'">
                    English
                  </button>
                </div>
              </div>
            </li>
            <li class="nav-item px-2">
              <button @click="toggleDark()">Dark/Light</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>