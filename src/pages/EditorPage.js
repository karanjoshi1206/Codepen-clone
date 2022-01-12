import { useEffect, useState } from "react";
import Editor from "../components/Editor";
import useLocalStorage from "../hooks/useLocalStorage";
import "./EditorPage.css";
function EditorScreen() {
	const [html, setHtml] = useLocalStorage("html", "");
	const [css, setCss] = useLocalStorage("css", "");
	const [js, setJs] = useLocalStorage("js", "");
	const [srcDoc, setSrcDoc] = useState("");
	useEffect(() => {
		const timeout = setTimeout(() => {
			setSrcDoc(`
			<html>
			  <body>${html}</body>
			  <style>${css}</style>
			  <script>${js}</script>
			</html>
		  `);
		}, 250);

		return () => clearTimeout(timeout);
	}, [html, css, js]);

	return (
		<>
			<div className='editorMain'>
				<div className='pane topPane'>
					<Editor
						language='xml'
						displayName='HTML'
						value={html}
						onChange={setHtml}
					/>
					<Editor
						language='css'
						displayName='CSS'
						value={css}
						onChange={setCss}
					/>
					<Editor
						language='javascript'
						displayName='JavaScript'
						value={js}
						onChange={setJs}
					/>
				</div>
				<div className='pane bottomPane'>
					<h1 style={{ color: "black" }}>Output</h1>
					<iframe
						sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin '
						title='Output'
						src=''
						frameBorder='0'
						width='100%'
						height='100%'
						srcDoc={srcDoc}
					/>
				</div>
			</div>
		</>
	);
}
export default EditorScreen;
