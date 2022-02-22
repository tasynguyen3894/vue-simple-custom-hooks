<template>
  <div>
    <h1>Page Visibility</h1>
    <div>
      <input type="text" v-model="title" placeholder="Title when page hidden" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { usePageVisibility } from '../../hooks/useVisibility';

export default {
  setup() {
    const title = ref('');
    const baseTitle = document.title;
    usePageVisibility((hidden) => {
      document.title = hidden ? title.value : baseTitle;
    });

    return {
      title,
    };
  },
};
</script>
