<template>
  <div>
    <loader :active="isLoading" />
    <div class="sgds-container search-content" v-show="!isLoading">
      <h2 :style="{ marginBottom: '16px' }">
        {{
          isNonEmptySearch
            ? `Search results for: "${searchQuery}"`
            : `Search for anything here!`
        }}
      </h2>
      <h6 class="is-danger" v-if="errorMsg">{{ errorMsg }}</h6>
      <div v-if="isNonEmptySearch" class="card-grid-container grid-25rem">
        <div
          class="sgds-card-list"
          v-for="result of searchResults"
          :key="result.url"
        >
          <card>
            <template v-slot:main-content>
              <h4 class="title">
                <a :href="result.url" v-html="result.title"></a>
              </h4>
              <p v-html="result.content"></p>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../lib/Loader.vue";
import Card from "../lib/Card.vue";
import useLunrSearch from "../composables/useLunrSearch";

export default {
  components: { Loader, Card },
  setup() {
    let queryParam = new URL(window.location.href).searchParams.get("query");
    const {
      searchQuery,
      isLoading,
      isNonEmptySearch,
      searchResults,
      generateSearchResults,
      errorMsg,
    } = useLunrSearch();

    generateSearchResults({
      queryParam: queryParam,
      jsonPath: "/search/pages.json",
      lunrIndexFields: ["title", "content", "category"],
    });

    return {
      searchQuery,
      isLoading,
      isNonEmptySearch,
      searchResults,
      errorMsg,
    };
  },
};
</script>