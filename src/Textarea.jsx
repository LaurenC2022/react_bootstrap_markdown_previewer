const Textarea = () => {
  return (
    <div
      id="textareaContainer"
      className="border-top border-light mx-5 w-50 rounded"
    >
      <h2 className="ps-1">
        <i class="fa fa-free-code-camp" title="no-stack-dub-sack"></i> Editor
      </h2>
      <div className="textareaContainer">
        <textarea className="rounded w-100" id="editor"></textarea>
      </div>
    </div>
  );
};

export default Textarea;
