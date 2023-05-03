<template>
  <div class="card-item">
    <div class="card-item__img-container">
      <img
        class="card-item__img"
        :src="item.img"
        alt=""
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    item: {
      type: Object,
      required: true,
    }
  }
};
</script>

<style lang="less" scoped>
.card-item {
  width: 300px;
  height: 500px;
  padding: 30px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  box-sizing: border-box;

  &__img-container {
    padding: 20px;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background-color: var(--color-bg-grey);
  }

  &__img {
    width: 100%;
  }
}
</style>
