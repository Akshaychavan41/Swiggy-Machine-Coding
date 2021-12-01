import FileElement from "./FileElement";

export default class View {
  constructor() {
    const navEle = document.getElementById("nav");
  }

  renderData(data) {
    //create file element
    const eleData = data.map((item) => {
      const folderEle = new FileElement(item.title, item.type, item);
      const children = this.renderChild(folderEle, item);
      return folderEle;
    });
    console.log(eleData);
    document.getElementById("nav").append(...eleData);
  }

  renderChild(element, data) {
    if (data.children.length > 0) {
      const childELe = document.createElement("div");
      childELe.classList.add("children");
      const eleData = data.children.map((item) => {
        const folderEle = new FileElement(item.title, item.type, item);
        folderEle.classList.add("child");
        this.renderChild(folderEle, item);
        return folderEle;
      });
      childELe.append(...eleData);
      //   childELe.style.display = "none";
      element.append(childELe);
      return true;
    } else {
      return false;
    }
  }

  addEventListener() {
    document.getElementById("nav").addEventListener("click", (e) => {
      console.log();
      //   if ((e.target.className = "btn")) {
      //     this.toggleChildrenHide(e.target.parentNode);
      //   }

      this.getPath(e.target);
    });
  }
  toggleChildrenHide(element) {
    const ele = element.querySelector(".children");
    ele.classList.toggle("hide");
  }
  getPath(element) {
    const stack = [];

    let el = element;
    while (el.parentNode !== null) {
      console.log(el);
      stack.push(el.innerText);
      el = el.parentNode;
    }
    console.log(stack);
  }
}
