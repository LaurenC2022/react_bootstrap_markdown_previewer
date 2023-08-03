import { createRoot } from "react-dom/client";
import Previewer from "./Previewer";
import Editor from "./Editor";
import "./style.scss";
import { useState } from "react";
import { useEffect } from "react";
// import initialMarkDown from "./initialMarkDown.json";
// import * as bootstrap from "bootstrap";

const App = () => {
  // const [markdown, setmarkdown] = useState(initialMarkDown);

  const [markdown, setmarkdown] = useState(``);

  //Dynamically Load Markdown files into React
  useEffect(() => {
    //import is a dynamic import
    import(`./initialMarkDown.md`)
      .then((res) => {
        //fetch:
        //default is the default export of the module
        //res is the module itself
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setmarkdown(res));
      })
      .catch((err) => console.log(err));
  }, []);

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
