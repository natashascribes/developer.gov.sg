import Vue from "vue";
import SearchAllProducts from "./SearchAllProducts.vue";
import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI);

new Vue({
  el: "#search-app-all-products",
  render: (h) => h(SearchAllProducts),
});
