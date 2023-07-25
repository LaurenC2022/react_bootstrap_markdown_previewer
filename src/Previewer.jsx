import remarkGfm from "https://esm.sh/remark-gfm@3";
import ReactMarkdown from "react-markdown";

const Previewer = ({ children }) => {
  return (
    <div
      id="previewerContainer"
      className="border-top border-bottom border-light mx-3 w-75 rounded h-auto"
    >
      <h2 className="ps-1 border-bottom border-light">
        <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>{" "}
        Previewer
      </h2>
      <div className="text-break h-auto mx-2">
        <p id="preview">
          <ReactMarkdown remarkPlugins={[remarkGfm]} className="overflow-auto">
            {children}
          </ReactMarkdown>
        </p>
      </div>
    </div>
  );
};

export default Previewer;
