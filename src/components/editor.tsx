import AceEditor from 'react-ace';
import React from 'react';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/theme-monokai';

interface Props {
	mode: string;
	readOnly?: boolean;
	onChange?: (value: string) => void;
	value?: string;
	placeholder?: string;
}

export default (props: Props) => (
	<AceEditor
		placeholder={props.placeholder}
		fontSize={17}
		tabSize={2}
		mode={props.mode}
		theme='monokai'
		onChange={props.onChange}
		value={props.value}
		readOnly={props.readOnly}
		className='w-100 m-0'
	/>
);
