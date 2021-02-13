<template>
  <div>
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav class="mx-auto overflow-auto text-nowrap">
          <b-nav-item
            v-for="category in categories"
            :key="category.id"
            @click="filterProducts(category.id);"
            >{{ category.name }}</b-nav-item
          >
        </b-navbar-nav>
      </b-navbar>
    </div>
    <data-grid></data-grid>
  </div>
</template>

<script>
import DataGrid from "./DataGrid.vue";
export default {
  components: { DataGrid },
  name: "ProductList",
  data() {
    return {
      msg: "Product Listing",
    };
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("getCategories");
    this.$store.dispatch("getProducts");
  },
  methods: {
    filterProducts(id) {
      this.$store.dispatch("getCatId", id);
      this.$store.dispatch("getCurrentPage", 1);
      this.$store.dispatch("getProducts");
    },
  },
};
</script>
