<template>
  <div class="app">
    <MenuCatalogs />
    <CardsCatalog />
  </div>
</template>

<script>
import MenuCatalogs from './components/MenuCatalogs.vue';
import CardsCatalog from './components/CardsCatalog.vue';

export default {
  name: 'App',
  components: {
    CardsCatalog,
    MenuCatalogs,
  },
};
</script>