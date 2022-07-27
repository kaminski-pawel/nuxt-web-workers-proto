<template>
  <div>
    <button @click="startWorker">Start Web Worker</button>
  </div>
</template>>


<script>
import Vue from "vue";

export default Vue.extend({
  methods: {
    startWorker() {
      const worker1 = this.$worker.createSomeWorker();
      worker1.addEventListener("message", this.workerResponseHandler);
      worker1.postMessage("Do expensive work!");
    },
    workerResponseHandler(event) {
      console.log("[MAIN thread]", event.data);
    },
  },
});
</script>