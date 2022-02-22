<template>
  <div ref="container">
    <h1>Click Outside</h1>
    <div>{{ message }}</div>
  </div>  
</template>

<script>
import { ref } from 'vue';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

export default {
  setup() {
    const container = ref(null);
    const message = ref('');
    const handleClickOutside = () => {
      message.value = 'Click outside!';
    }
    useOnClickOutside(container, handleClickOutside)
    return {
      container,
      message,
      handleClickOutside
    }
  },
}
</script>
