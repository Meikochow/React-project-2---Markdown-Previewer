var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var renderer = new marked.Renderer();
renderer.link = function (href, title, description) {
  return "<a target=\"_blank\" href=\"" + href + "\">" + description + '</a>';
};
marked.setOptions({
  breaks: true });var

MPreviewer = function (_React$Component) {_inherits(MPreviewer, _React$Component);
  function MPreviewer(props) {_classCallCheck(this, MPreviewer);var _this = _possibleConstructorReturn(this, (MPreviewer.__proto__ || Object.getPrototypeOf(MPreviewer)).call(this,
    props));
    _this.state = {
      input: initialText };

    _this.handleChange = _this.handleChange.bind(_this);return _this;

  }_createClass(MPreviewer, [{ key: "handleChange", value: function handleChange(
    e) {
      this.setState({
        input: e.target.value });

    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", null,
          React.createElement("header", null, React.createElement("li", { className: "fa fa-free-code-camp fa-2x" }), " ", React.createElement("h1", { style: { display: "inline" } }, "Markdown Previewer")),
          React.createElement("div", { className: "editorHeader" },
            React.createElement("h2", null, "Editor")),

          React.createElement(Editor, { onChange: this.handleChange, markdown: this.state.input }),
          React.createElement("div", { className: "previewHeader" },
            React.createElement("h2", { style: { display: 'inline' } }, "Previewer")),

          React.createElement(Preview, { markdown: this.state.input }),
          React.createElement("footer", null, "Coded by Victor Cojocaru. 2018")));



    } }]);return MPreviewer;}(React.Component);

var Editor = function Editor(props) {
  return (
    React.createElement("textarea", { id: "editor",
      value: props.markdown,
      onChange: props.onChange,
      type: "text" }));

};

var Preview = function Preview(props) {
  return (
    React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(props.markdown, { renderer: renderer }) } }));

};
var initialText = "# Header\n\n## sub-header\n### sub-sub-header\n  \nOne line code, `<div></div>`\n\n```\n// Multi-line code:\n\nfunction life() {\nif(sad){\nplay(music.mp3);\n }\n}\n```\n\n**_both_** bold and italic text  \n**bold** text\n_italic_ text\n\n~~Text you don't like~~ crossed text\n\n[Markdown Documentation](https://marked.js.org/#/README.md#marked) Links\n> Block Quotes\n\nTables\n\n1st column header | 2nd column header | 3rd column header\n------------ | ------------- | ------------- \n1st column X 2nd row | 2nd column X 2nd row | 3rd column X 2nd row\n1st column X 3rd row | 2nd column X 3rd row | 3rd column X 3rd row\n\nBullet list\n- 1st level deep\n  - 2nd level deep\n     - 3rd level deep\n        - 4th level deep\n\nNumbered lists in which the numeration occurs even if not repected by the user\n1. 1st Item\n1. 2nd Item\n1. 3rd Item\n-  4th Item\n*  5th Item\n\nEmbedded images\n![React Logo w/ Text](https://markdown-here.com/img/icon256.png)\n";
















































ReactDOM.render(React.createElement(MPreviewer, null), app);