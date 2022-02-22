<template>
  <div>
    <h1>Viewport</h1>
    <div>Device: {{ device }}</div>
  </div>
</template>

<script>
import { useViewport } from '../../hooks/useViewport';

export default {
  setup() {
    const { device } = useViewport();
    return {
      device,
    };
  },
};
</script>

