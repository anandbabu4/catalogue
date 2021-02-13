<template>
  <div class="w-75 mx-auto">
    <b-table
      striped
      hover
      id="products-table"
      :items="products"
      :fields="fields"
      @row-clicked="productDetail"
      small
    ></b-table>
    <Pagination></Pagination>
  </div>
</template>

<script>
import Pagination from './Pagination.vue';
export default {
  components: { Pagination },
  name: "DataGrid",
  data() {
    return {
      perPage: 100,
      fields: ["id", "name", "sku"],
    };
  },
  computed: {
    products() {
      return this.$store.state.products.data;
    }
  },
  methods: {
    productDetail(record) {
      this.$store
        .dispatch("getProductDetail", record.id)
        .then(() => this.$router.push("/product/" + record.id));
    },
  },
};
</script>