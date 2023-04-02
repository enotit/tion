const output = document.getElementById("output");

const editor = CodeMirror.fromTextArea(document.getElementById("code"), {
	mode: "python",
	lineNumbers: true,
	theme: "darcula"
});
