<template>
  <div>
    <h1>Copy To Clipboard</h1>
    <div>
      <input type="text" v-model="text" /><button @click="handleCopy">
        handleCopy
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';

export default {
  setup() {
    const copyToClipboard = useCopyToClipboard();
    const text = ref('');
    const handleCopy = () => {
      copyToClipboard(text.value);
    };
    return {
      text,
      handleCopy,
    };
  },
};
</script>
