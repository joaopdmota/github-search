<template>
  <SearchView />
</template>

<script>
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import SearchView from './components/SearchView/SearchView.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

export default {
  name: 'App',
  components: {
    SearchView,
  },
};
</script>
<style>
* {
  font-family: 'Roboto regular';
}
@font-face {
  font-family: 'Roboto regular';
  src: url('./assets/fonts/Roboto-Regular.ttf');
}
</style>
