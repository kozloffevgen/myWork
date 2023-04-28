<template>
  <svg
    :class="baseClass"
    :viewBox="svgViewBox"
    class="base-svg"
    v-html="path"
  >
  </svg>
</template>

<script>
import SvgPaths from '../plugins/SvgPaths';

export default {
  name: 'BaseSvg',
  props: {
    name: { type: String, required: true },
    svgViewBox: { type: String, default: '0 0 50 50' },
  },
  data() {
    return {
      path: SvgPaths[this.name],
    };
  },
  computed: {
    baseClass() {
      return `base-svg-${this.name}`;
    },
  },
};
</script>

<style lang="less" scoped>
.base-svg {
  width: var(--svg-width, 50px);
  height: var(--svg-height, 50px);
}
</style>
