<template>
  <div class="catalogs-content">
      <CardItem
        v-for="(item, key) in filteredData"
        :key="key"
        :item="item"
        class="catalogs-content__item"
      />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CardItem from './CardItem.vue';

export default {
  name: 'CardsCatalog', 
  components: {
    CardItem,
  },
  computed: {
    ...mapState(['data']),
    filteredData() {
      const [catalog] = Object.values(this.data).map((catalog) => catalog);

      return catalog.items;
    },
  },
};
</script>

<style lang="less" scoped>
.catalogs-content {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 20px;
  width: 100%;
  justify-content: space-between;
}
</style>
