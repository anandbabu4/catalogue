<template>
  <b-pagination
    variant="dark"
    v-model="currentPage"
    align="center"
    :total-rows="rows"
    :per-page="perPage"
    aria-controls="products-table"
    @input="getPageData(currentPage)"
  ></b-pagination>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      msg: "Inside grid",
      perPage: 100,
      currentPage: this.$store.state.currentpage,
      fields: ["id", "name", "sku"],
    };
  },
  computed: {
    products() {
      return this.$store.state.products.data;
    },
    rows() {
      if (!this.$store.state.products.meta) return 0;
      return this.$store.state.products.meta.pagination.total;
    },
  },
  methods: {
    getPageData(currentPage) {
      this.$store.dispatch("getCurrentPage", currentPage);
      return this.$store.dispatch("getProducts");
    },
    productDetail(record) {
      this.$store
        .dispatch("getProductDetail", record.id)
        .then(() => this.$router.push("/product/" + record.id));
    },
  },
};
</script>