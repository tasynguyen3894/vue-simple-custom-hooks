<template>
  <div>
    <h1>Scroll To Bottom</h1>
    <div>
      {{ isBottom ? "is bottom" : "..." }}
    </div>
    <div><button @click="resetScrollToButton">Reset</button></div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useScrollToBottom } from '../../hooks/useScrollToBottom';

export default {
  setup() {
    const isBottom = ref(false);
    useScrollToBottom(() => {
      isBottom.value = true;
    });
    const resetScrollToButton = () => {
      isBottom.value = false;
    };
    return {
      isBottom,
      resetScrollToButton,
    };
  },
};
</script>
