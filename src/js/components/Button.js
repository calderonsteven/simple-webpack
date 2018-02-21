/**
 * @class Button
 * @description add click handler
 */
export default class Button {
  constructor(config) {
    console.log("Hi, I'm a button");

    // config.element.onclick = config.clickfn;
    const {element, clickfn} = config;
    element.onclick = clickfn;
  }
}
