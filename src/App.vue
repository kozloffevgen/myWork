<template>
  <div class="app">
    <MenuCatalogs />
    <CardsCatalog />
  </div>
</template>

<script>
import MenuCatalogs from './components/MenuCatalogs.vue';
import CardsCatalog from './components/CardsCatalog.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    CardsCatalog,
    MenuCatalogs,
  },
  methods: {
    ...mapActions(['checkData'])
  },
  async created() {
    await this.checkData();
  }
};
</script>

<style lang="less" scoped>
.app {
  display: flex;
  gap: 20px;
  margin: 20px;
}
</style>