import React, { useState } from "react";
import "./Editor.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
const Editor = (props) => {
	const { displayName, language, value, onChange } = props;
	const [open, setOpen] = useState(true);
	function handleChange(editor, data, value) {
		onChange(value);
	}

	return (
		<div className={`Editor ${open === true ? "" : "collapsed"}`}>
			<div className='editorTitle'>
				{displayName}
				<button onClick={() => setOpen((prevOpen) => !prevOpen)}>
					<i className='fas fa-compress-alt'></i>
				</button>
			</div>
			<ControlledEditor
				onBeforeChange={handleChange}
				value={value}
				className='code-mirror-wrapper'
				options={{
					lineWrapping: true,
					lint: true,
					mode: language,
					lineNumbers: true,
					theme: "material",
				}}
			/>
		</div>
	);
};

export default Editor;
