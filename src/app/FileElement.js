export default class FileElement {
  constructor(name, type, item) {
    const folderEle = document.createElement("div");
    folderEle.classList.add("folder");
    const folderText = document.createElement("p");
    // folderText.style.display = "inline-block";
    if (name.charAt(0) === ".") {
      folderText.classList.add("dimmer");
    }
    folderText.innerText = name;

    if (item?.children?.length > 0) {
      const btn = document.createElement("button");
      btn.innerText = "+";
      btn.classList.add("btn");
      folderEle.append(btn);
    }
    folderEle.append(folderText);
    return folderEle;
  }
}
