<template>
  <div>
    <h1>Storage</h1>
    <div>Message in storage: {{ message }}</div>
    <div>
      <input type="text" v-model="messageInput" /><button
        @click="changeMessage"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStorage } from '../../hooks/useStorage';

export default {
  setup() {
    const [message, setMessage] = useStorage('message');
    const messageInput = ref('');
    const changeMessage = () => {
      setMessage(messageInput.value);
    };
    return {
      message,
      messageInput,
      changeMessage,
    };
  },
};
</script>
