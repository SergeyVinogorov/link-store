const elipsize = require("ellipsize");
//generating uniq id
export function uuid() {
  return Math.random().toString(16).slice(2);
}
// method for crop text
export function elipseText(input, length) {
  return elipsize(input, length);
}
//plugin for vuex
export function saveStatePlugin(store) {
  store.subscribe((mutation, state) => {
    localStorage.setItem("board", JSON.stringify(state.board));
  });
}
