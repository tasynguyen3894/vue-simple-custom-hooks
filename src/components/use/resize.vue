<template>
  <div>
    <h1>Resize</h1>
    <div>Width: {{ width }}</div>
    <div>Height: {{ height }}</div>
  </div>
</template>

<script>
import { useWindowResize } from '../../hooks/useWindowResize';

export default {
  setup() {
    const { width, height } = useWindowResize();
    return {
      width,
      height
    };
  },
};
</script>
