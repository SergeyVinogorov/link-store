const elipsize = require("ellipsize");
//generating uniq id
export function uuid() {
  return Math.random().toString(16).slice(2);
}
// method for crop text
export function elipseText(input, length) {
  return elipsize(input, length);
}
// for localStorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("links");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("links", serializedState);
  } catch {
    // ignore write errors
  }
};
export const getAllLinks = (category) => {
  let result = [];
  category.forEach((el) => {
    el.links.forEach((link) => result.push(link));
  });
  return result;
};
export const filterBySearch = (arr, search) => {
  const result = arr.filter((linkName) => {
    return linkName.title.toLowerCase().includes(search.toLowerCase());
  });
  return result;
};
