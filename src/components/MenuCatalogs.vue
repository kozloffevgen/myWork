<template>
  <div class="menu-catalogs">
    <h2 class="menu-catalogs__title">Меню каталогов</h2>

    <div class="menu-catalogs__container">
      <div class="menu-catalogs__settings">
        <CInput
          class="menu-catalogs__search-input"
          name="menu-serach"
          placeholder="Коиск"
          svgName="search"
        >
          <template #extra-element>
            <CSvg
              class="menu-catalogs__search-svg"
              name="search"
            />
          </template>
        </CInput>

        <CButton 
          value="Добавить"
        />
      </div>
      <div class="menu-catalogs__content">

      </div>
    </div>
  </div>
</template>

<script>
import CSvg from './common/CSvg.vue';

export default {
    name: "MenuCatalog",
    components: { CSvg }
};
</script>

<style lang="less" scoped>
.menu-catalogs {
  &__container {
    display: flex;
  }

  &__settings {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__search-input {
    --padding-inline-input: 10px 34px;
  }

  &__search-svg {
    position: absolute;
    inset-inline-end: 10px;
  }
}
</style>
