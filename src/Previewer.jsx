const Previewer = () => {
  return (
    <div
      id="previewerContainer"
      className="border-top border-bottom border-light mx-3 w-75 rounded"
    >
      <h2 className="ps-1 border-bottom border-light">
        <i class="fa fa-free-code-camp" title="no-stack-dub-sack"></i> Previewer
      </h2>
      <p id="preview"></p>
    </div>
  );
};

export default Previewer;
