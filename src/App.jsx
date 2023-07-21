import { createRoot } from "react-dom/client";
import Previewer from "./Previewer";
import EditorView from "./Textarea";
import "./style.scss";
import * as bootstrap from "bootstrap";
import Textarea from "./Textarea";

const App = () => {
  return (
    <div>
      <header className="row pt-2 mb-5">
        <h1 className="text-center">Markdown Previewer</h1>
      </header>
      <div className="vstack gap-3  align-items-center">
        <Textarea id="editor" />
        <Previewer id="preview" />
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
