<script setup lang="ts">
  import AutoComplete from 'primevue/autocomplete';
  import json from '../assets/countries.json'

  const { t, locale } = useI18n()

  const search = reactive({
    country: null,
    display: true,
  })

  const country = reactive({
    loading: false,
    data: ref(),
    error: reactive({
      status: false,
      message: ""
    })
  })
  
  const countries = ref(json.data)
  const filteredCountries = ref();

  const searchList= (event: any) => {
    setTimeout(() => {
      if (!event.query.trim().length) {
          filteredCountries.value = [...countries.value];
      }else {
          filteredCountries.value = countries.value.filter((country: any) => {
              return country.toLowerCase().startsWith(event.query.toLowerCase());
          });
      }
    }, 250);
  };

  const searchCountry = async () => {
    if(!search.country){
      return
    }
    country.error.status = false
    country.data = null
    country.loading = true

    const { data, isFinished, error} = await useAxios('https://restcountries.com/v3.1/name/'+search.country)

    country.loading = false

    if(isFinished && data.value && !error.value){
      country.data = data
    }

    if(isFinished && error.value){
      country.error.status = true;
      country.error.message = 'notFound'
    }
  }
</script>

<template>
  <div class="flex justify-center">
    <div v-if="search.display">
      <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
        <AutoComplete v-model="search.country" :suggestions="filteredCountries" @complete="searchList($event)" class="p-inputtext-lg form-control relative flex-auto min-w-0 block w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
        <button @click="searchCountry()" class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div class="flex justify-center mt-20" v-if="country.loading">
    <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div class="flex justify-center mt-20" v-if="country.error.status">
    <div class="bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center justify-center w-full text-center" role="alert">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
      </svg>
      <span v-if="country.error.message=='notFound'">{{ $t('search.error.notFound') }}</span>
    </div>
  </div>
  <div class="flex justify-center mt-20" v-if="country.data">
    <div class="flex justify-center">
      <ul class="bg-white rounded-lg text-gray-900 tracking-tight w-full">
        <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"> {{ $t('search.result.countryName') }}: {{ locale=='en' ? country.data[0].name.common : country.data[0].translations.pol.common }}</li>
        <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"> {{ $t('search.result.officialName') }}: {{ locale=='en' ? country.data[0].name.official : country.data[0].translations.pol.official }}</li>
        <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"> {{ $t('search.result.capital') }}: {{ country.data[0].capital[0] }}</li>
        <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"> {{ $t('search.result.region') }}: {{ country.data[0].region }}</li>
        <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"> {{ $t('search.result.subregion') }}: {{ country.data[0].subregion }}</li>
        <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"> {{ $t('search.result.area') }}: {{ country.data[0].area }}</li>
        <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"> {{ $t('search.result.population') }}: {{ country.data[0].population }}</li>
        <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"> {{ $t('search.result.timezones') }}: {{ country.data[0].timezones }}</li>
        <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"> {{ $t('search.result.flag') }}: {{ country.data[0].flag }}</li>
        <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"> {{ $t('search.result.maps') }}: <a :href="country.data[0].maps.googleMaps" class="text-gray-700 hover:text-blue-500">{{ country.data[0].maps.googleMaps }}</a></li>
      </ul>
    </div>
  </div>
</template>