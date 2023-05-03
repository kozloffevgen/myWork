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
        <div
          v-for="(item, key) in data"
          :key="key"
          class="menu-catalogs__item"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "MenuCatalog",
  computed: {
    ...mapState(['data']),
  }
};
</script>

<style lang="less" scoped>
.menu-catalogs {
  width: 380px;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__settings {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__search-input {
    --max-width-input: 100%;
    --padding-inline-input: 10px 34px;
  }

  &__search-svg {
    position: absolute;
    inset-inline-end: 10px;
  }

  &__item {
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 15px;
    margin-bottom: 15px;
  }
}
</style>
