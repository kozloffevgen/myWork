<template>
  <div class="common-input__container">
    <input
      :type="type"
      :name="name"
      :placeholder="placeholder"
      class="common-input"
    >

    <slot name="extra-element" />
  </div>
</template>
<script>
export default {
  name: 'CInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    name: String,
    placeholder: String,
  },
};
</script>

<style lang="less" scoped>
.common-input {
  width: 100%;
  max-width: var(--max-width-input, 200px);
  padding-top: 12px;
  padding-bottom: 12px;
  padding-inline: var(--padding-inline-input, 10px);
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  box-sizing: border-box;
  outline: none;

  &:active,
  &:focus,
  &:focus-visible {
    border-color: var(--border-color-active);
  }

  &__container {
    width: 1005;
    position: relative;
    display: flex;
    align-items: center;
  }
}
</style>
