import Markdown from "marked-react";

const Previewer = ({ children }) => {
  <marked className="use"></marked>;
  return (
    <div
      id="previewerContainer"
      className="border-top border-bottom border-light mx-3 w-75 rounded h-auto border-dark container-fluid"
    >
      <h2 className="ps-1 border-bottom border-light border-dark">
        <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>{" "}
        Previewer
      </h2>
      <div
        className="text-break h-auto mx-2 preview overflow-auto"
        id="preview"
      >
        <Markdown gfm="true" breaks="true">
          {children}
        </Markdown>
      </div>
    </div>
  );
};

export default Previewer;
