<template>
  <div class="theme">
    <h1>Theme</h1>
    <div>
      <input type="radio" value="white" v-model="theme" /> White
      <input type="radio" value="black" v-model="theme" /> Black
      <button @click="handleSwitchTheme">Change</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useTheme } from '../../hooks/useTheme';

export default {
  setup() {
    const changeTheme = useTheme();
    const theme = ref('white');
    const handleSwitchTheme = () => {
      changeTheme(theme.value);
    };
    return {
      theme,
      handleSwitchTheme,
    };
  },
};
</script>

<style>
html[theme="black"] .theme {
  background: black;
}
</style>
