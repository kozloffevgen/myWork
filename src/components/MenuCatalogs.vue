<template>
  <div class="menu-catalogs">
    <h2 class="menu-catalogs__title">Меню каталогов</h2>

    <div class="menu-catalogs__settings">
      <BaseSvg name="settings" />
    </div>
    <div class="menu-catalogs__container">

    </div>
  </div>
</template>

<script>
import BaseSvg from './common/BaseSvg.vue';

export default {
  name: 'MenuCatalog',
  components: {
    BaseSvg,
  },
};
</script>
