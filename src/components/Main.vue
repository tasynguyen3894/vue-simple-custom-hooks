<template>
  <div class="hello">
    <Theme />
    <Resize />
    <Storage />
    <CopyToClipboard />
    <ScrollToBottom />
    <NetworkStatus />
    <Visibility />
    <Timer />
    <Viewport />
    <ClickOutside />
  </div>
</template>

<script>
import Resize  from './use/resize.vue';
import Storage from './use/storage.vue'
import CopyToClipboard from './use/copyToClipboard.vue'
import Theme from './use/theme.vue'
import NetworkStatus from './use/networkStatus.vue'
import Visibility from './use/visibility.vue';
import Viewport from './use/viewport.vue';
import ScrollToBottom from './use/scrollToBottom.vue';
import Timer from './use/timer.vue';
import ClickOutside from './use/clickOutside.vue';

export default {
  name: 'HelloWorld',
  components: {
    Resize,
    Storage,
    CopyToClipboard,
    Theme,
    NetworkStatus,
    Visibility,
    Viewport,
    ScrollToBottom,
    Timer,
    ClickOutside
  }
}
</script>

