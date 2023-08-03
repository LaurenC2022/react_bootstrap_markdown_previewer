const Editor = ({ markdown, setmarkdown }) => {
  return (
    <div
      id="textareaContainer"
      className="border-top border-light mx-5 w-50 rounded border-dark"
    >
      <h2 className="ps-1">
        <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>{" "}
        Editor
      </h2>
      <div className="textareaContainer">
        <textarea
          className="rounded w-100"
          id="editor"
          value={markdown}
          onChange={(e) => setmarkdown(e.target.value)}
          placeholder="I want to drink your blood... blah blah blah -Drakula"
        ></textarea>
      </div>
    </div>
  );
};

export default Editor;
