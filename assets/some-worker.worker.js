self.addEventListener("message", (event) => {
  console.log("[Web Worker]", event.data);
  expensiveWork();
});

function expensiveWork() {
  setTimeout(() => {
    self.postMessage("Expensive work on a background thread is done.");
  }, 2000);
}
