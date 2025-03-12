function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/quiz-count-BzjjG1dS.js","assets/use-call-dom-DDNnwvp7.js","assets/just-validate.es-C73wyOde.js","assets/quiz-save-answers-uHH33NEH.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{u as r,_ as o}from"./lazy-load-BxtKHmtZ.js";const i=[{importFn:()=>o(()=>import("./quiz-count-BzjjG1dS.js"),__vite__mapDeps([0,1,2])),selector:".quiz"},{importFn:()=>o(()=>import("./quiz-save-answers-uHH33NEH.js"),__vite__mapDeps([3,1])),selector:".quiz__btn"}];i.forEach(({importFn:t,selector:_})=>r(t,_));
