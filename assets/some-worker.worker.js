self.addEventListener("message", (event) => {
  console.log("[Web Worker]", event.data);
  expensiveWork();
});

async function expensiveWork() {
  for (let i = 1; i < 3; i++) {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`);
    const data = await resp.json();
    self.postMessage(data);
  }
}
