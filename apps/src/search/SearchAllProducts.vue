<template>
  <div>
    <loader :active="isLoading" />
    <div class="sgds-container search-content" v-show="!isLoading">
      <p class="search-result-status">
        {{
          `Showing ${
            isNonEmptySearch ? searchResults.length : totalPages
          } out of ${totalPages}`
        }}
      </p>
      <h6 class="is-danger" v-if="errorMsg">{{ errorMsg }}</h6>
      <div class="card-grid-container grid-25rem">
        <div
          class="sgds-card-list"
          v-for="result of searchResults"
          :key="result.url"
        >
          <card>
            <template v-slot:main-content>
              <h4>
                <a :href="result.url" v-html="result.title"></a>
              </h4>
              <p v-html="result.description"></p>
            </template>
            <template v-slot:front-matter-attributes>
              <div class="spacing-container-vertical spacing-16">
                <div v-if="result.targetGroup !== '' " class="spacing-container-vertical spacing-8">
                  <strong>Target Group</strong>
                  <p v-html="result.targetGroup"></p>
                </div>
                <div class="spacing-container-vertical spacing-8">
                  <strong>Category</strong>
                  <p v-html="result.category"></p>
                </div>
              </div>
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
      isLoading,
      totalPages,
      isNonEmptySearch,
      searchResults,
      generateSearchResults,
      errorMsg,
    } = useLunrSearch();

    generateSearchResults({
      queryParam: queryParam,
      jsonPath: "/search/products.json",
      lunrIndexFields: [
        "title",
        "description",
        "targetGroup",
        "category",
        "content",
        "random",
      ],
    });

    document.getElementById("query-all-products").value = queryParam;

    return {
      totalPages,
      isLoading,
      isNonEmptySearch,
      searchResults,
      errorMsg,
    };
  },
};
</script>