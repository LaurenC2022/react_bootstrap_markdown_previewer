import { createRoot } from "react-dom/client";
import Previewer from "./Previewer";
import Editor from "./Editor";
import "./style.scss";
import { useState } from "react";

// import * as bootstrap from "bootstrap";

const App = () => {
  const [markdown, setmarkdown] = useState(
    "# Welcome to my React Markdown Previewer!",
  );

  return (
    <div>
      <header className="row pt-2 mb-5">
        <h1 className="text-center">Markdown Previewer</h1>
      </header>
      <div className="vstack gap-3  align-items-center">
        <Editor markdown={markdown} setmarkdown={setmarkdown} id="editor" />
        <Previewer id="preview">{markdown}</Previewer>
      </div>
      <br />

      <footer className="text-center">
        <p>
          Markdown Previewer built by Lauren Collins.
          <br />
          Portfolio webstite found at{" "}
          <a href="https://laurenCollins.dev" target="_blank">
            www.LaurenCollins.dev
          </a>
        </p>
      </footer>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
