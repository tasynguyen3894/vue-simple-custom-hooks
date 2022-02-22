<template>
  <div>
    <h1>Network Status</h1>
    <div>You are {{ status }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useNetworkStatus } from '../../hooks/useNetworkStatus';

export default {
  setup() {
    const status = ref('online');
    useNetworkStatus((value) => {
      status.value = value;
    });
    return {
      status,
    };
  },
};
</script>
