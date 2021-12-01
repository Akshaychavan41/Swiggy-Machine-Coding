import View from "./app/view";
import { data } from "./mock";
import "./style.scss";

export const loadApp = () => {
  const viewService = new View();

  viewService.renderData(data);
  viewService.addEventListener();
};

loadApp();
