<template>
  <div class="container m-4" v-if="product">
    <div class="row">
      <div class="bg-secondary w-100 p-2 mb-2">
        <router-link to="/" class="text-white">Back to list</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <img
          class="img-responsive w-75"
          src="https://giftguideonline.com.au/custom/domain_1/image_files/sitemgr_photo_22446.jpg"
        />
      </div>
      <div class="col-md-6">
        <h4>
          {{ product[0].name }}
          <b-badge v-if="product[0].condition === 'New'">New</b-badge>
        </h4>
        <p>
          Category:
          <span v-for="item in categoryNames" :key="item">
            &nbsp; <b-badge>{{ item }}</b-badge>
          </span>
        </p>
        <p><strong>Price</strong>: ${{ product[0].price }} + Free shipping</p>
        <p><strong>Sku</strong>: {{ product[0].sku }}</p>
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 variant="secondary"
                >Description</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-1"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text
                  ><p v-html="product[0].description"></p
                ></b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  data() {
    return {
      categoryNames: [],
    };
  },
  computed: {
    product() {
      this.getCategoryNames();
      return this.$store.state.productdetail;
    },
  },
  methods: {
    getCategoryNames() {
      const allCatList = this.$store.state.categories;
      let addCatList = [];
      this.$store.state.productdetail[0].categories.forEach((element) => {
        allCatList.forEach((item) => {
          if (item.id === element) {
            addCatList.push(item.name);
          }
        });
      });
      this.categoryNames = addCatList;
      return this.categoryName;
    },
  },
  mounted() {
    this.$store.dispatch("getProductDetail");
  },
};
</script>
