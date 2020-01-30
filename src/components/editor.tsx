import AceEditor from 'react-ace';
import React, { useState, useRef } from 'react';
import cx from 'classnames';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/theme-github';

export type Theme = 'github' | 'dracula' | 'monokai';

interface Props {
	mode: string;
	readOnly?: boolean;
	onChange?: (value: string) => void;
	value?: string;
	placeholder?: string;
	theme?: Theme;
	fontSize?: number;
	alwaysFocused?: boolean;
}

export default (props: Props) => {
	const [isFocused, setFocus] = useState(true);
	const editor = useRef();

	return (
		<AceEditor
			ref={editor}
			fontSize={props.fontSize ?? 18}
			tabSize={2}
			enableLiveAutocompletion
			enableSnippets
			mode={props.mode}
			value={props.value}
			readOnly={props.readOnly}
			onChange={props.onChange}
			onFocus={() => !props.readOnly && setFocus(true)}
			onBlur={() => (!props.alwaysFocused ? setFocus(false) : (editor.current as any).refEditor.focus())}
			focus={props.alwaysFocused}
			placeholder={props.placeholder}
			theme={props.theme ?? 'dracula'}
			className={cx('w-100 m-0 rounded shadow-sm editor', {
				shadow: isFocused,
			})}
		/>
	);
};
