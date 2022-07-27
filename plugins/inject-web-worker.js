import SomeWorker from "~/assets/some-worker.worker.js";

export default (context, inject) => {
  inject("worker", {
    createSomeWorker() {
      return new SomeWorker();
    }
  });
};
