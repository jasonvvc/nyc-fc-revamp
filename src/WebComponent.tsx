import { createRoot, Root } from "react-dom/client";
import App from "./App";
import "./index.css";

class FirstConstructionZone extends HTMLElement {
  private root: Root | null = null;
  private mountPoint: HTMLDivElement | null = null;

  connectedCallback() {
    // Create mount point
    this.mountPoint = document.createElement("div");
    this.appendChild(this.mountPoint);

    // Mount React app
    this.root = createRoot(this.mountPoint);
    this.root.render(<App />);
  }

  disconnectedCallback() {
    // Cleanup
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
    if (this.mountPoint) {
      this.mountPoint.remove();
      this.mountPoint = null;
    }
  }
}

// Register the custom element
customElements.define("first-construction-zone", FirstConstructionZone);

export default FirstConstructionZone;
