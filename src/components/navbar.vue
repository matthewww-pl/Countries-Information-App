<script setup lang="ts">
  const cookies = useCookies()
  
  const { t, locale } = useI18n()

  const isDark = useDark()
  const toggleDark = useToggle(isDark)

  watch(isDark, () => {
    cookies.set('darkMode',isDark.value, { maxAge: 60*60*24*7 })
  })

  watch(locale, () => {
    cookies.set('locale', locale.value, { maxAge: 60*60*24*7 })
  })

  const setLang = (lang: string) =>{
    locale.value = lang
  }
</script>

<template>
  <div>
    <nav class="relative w-full flex flex-wrap items-center justify-between py-4 bg-amber-100 dark:bg-gray-800 shadow-lg navbar navbar-expand-lg">
      <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <router-link to="/" class="text-xl">
          <img src="/vite.svg" style="height: 30px" alt="logo" loading="lazy" />
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
                  <button type="button" :class="{'bg-gray-100 dark:bg-gray-700': locale == 'pl'}" class="rounded-l px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0" @click="setLang('pl')">
                    Polski
                  </button>
                  <button type="button" :class="{'bg-gray-100 dark:bg-gray-700': locale == 'en'}" class="rounded-r px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0" @click="setLang('en')">
                    English
                  </button>
                </div>
              </div>
            </li>
            <li class="nav-item px-2">
              <button @click="toggleDark()">
                <svg class="ml-5 mt-2 w-7 text-blue-600" v-if="!isDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"/>
                </svg>
                <svg class="ml-5 mt-2 w-5 text-blue-600" v-if="isDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                  <path fill="currentColor" d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"/>
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>