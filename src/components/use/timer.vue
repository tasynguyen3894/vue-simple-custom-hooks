<template>
  <div>
    <h1>Timer</h1>
    <div>Round: {{ roundNumber }}</div>
    <div>
      <button @click="start">Start</button>
      <button v-if="!isPaused" @click="pause">Pause</button>
      <button v-if="isPaused" @click="resume">Resume</button>
      <button @click="stop">Stop</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useTimer } from '../../hooks/useTimer';

export default {
  setup() {
    const roundNumber = ref(0);
    const { start, stop, pause, resume, isPaused } = useTimer(handleTimer);
    function handleTimer(round) {
      roundNumber.value = round;
    }
    return {
      start,
      stop,
      pause,
      resume,
      isPaused,
      roundNumber,
    };
  },
};
</script>
