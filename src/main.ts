import "./style.css";

import Alpine from "alpinejs";
import blogApp from "./blog";

declare global {
  interface Window {
    Alpine: typeof import("alpinejs");
  }
}

window.Alpine = Alpine;
Alpine.data("blogApp", blogApp);
Alpine.start();
