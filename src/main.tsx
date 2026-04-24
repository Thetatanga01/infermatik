import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { i18nReady } from "./i18n";
import "./index.css";

const el = document.getElementById("root");
if (el) {
  void i18nReady
    .then(() => {
      createRoot(el).render(<App />);
    })
    .catch((err) => {
      console.error("i18n init failed:", err);
      createRoot(el).render(<App />);
    });
}
