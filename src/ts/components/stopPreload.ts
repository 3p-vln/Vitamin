export function stop() {
  const loadingIsFinished = new Event('loadingIsFinished');
  document.dispatchEvent(loadingIsFinished);
  console.log(loadingIsFinished);
}