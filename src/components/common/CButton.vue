<template>
  <button
    class="common-btn"
    :type="btnType"
  >
    {{ value }}
    <slot name="extra-element" />
  </button>
</template>

<script>
const defaultTypes = {
  bt: 'button',
  sb: 'submit',
};

export default {
  name: 'CButton',
  props: {
    btnType: {
      type: String,
      default: defaultTypes.bt,
      validator: (val) => Object.values(defaultTypes).includes(val),
    },
    value: {
      type: String,
      default: 'Button',
    }
  },
};
</script>

<style lang="less" scoped>
.common-btn {
  color: var(--color-text-default);
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  background-color: var(--bg-color, var(--color-bg-button));
  padding-top: 12px;
  padding-bottom: 12px;
  padding-inline: var(--padding-inline-input, 10px);
  cursor: pointer;

  &:hover {
    background-color: var(--bg-color-hover, var(--color-bg-button-hover));
  }
}
</style>