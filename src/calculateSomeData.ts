addEventListener("message", (ev: MessageEvent) => {
  let result = ev.data;

  console.log("MESSAGE", ev);
  while (result < 1000000000) {
    result += 1;
  }

  console.log("SENDING", result);
  postMessage(result);
});
