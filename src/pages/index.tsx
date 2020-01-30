import { NextPage } from 'next';
import { useState } from 'react';
import dynamic from 'next/dynamic';

import { transformJavaToTypescript } from '../utils';
const CodeEditor = dynamic(import('../components/editor'), { ssr: false });
import { Row, Col, FormGroup } from 'reactstrap';
import { Theme } from '../components/editor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface Props {}

const Page: NextPage<Props> = (_) => {
	const [javaCode, setJavaCode] = useState('');
	const [theme, setTheme] = useState<Theme>('dracula');
	const [fontSize, setFontSize] = useState(20);
	const formatCode = (code: string) => code.replace(/\t/gi, '    ');

	return (
		<section className='w-100vw h-100vh p-4 d-flex justify-content-center align-items-center container-fluid dotted'>
			<div className='pin top left'>
				<h3>Java to TypeScript</h3>
			</div>

			<div className='pin top right' style={{ fontSize: 28 }}>
				<a href='https://github.com/rawnly/java-to-typescript'>
					<FontAwesomeIcon icon={faGithub} />
				</a>
			</div>

			<Row className='w-100'>
				<Col xs={6}>
					<h3>Java</h3>
					<CodeEditor
						mode='java'
						theme={theme}
						value={javaCode}
						fontSize={fontSize}
						alwaysFocused
						placeholder='Paste your Java code here.'
						onChange={(value) => setJavaCode(formatCode(value))}
					/>
				</Col>
				<Col xs={6}>
					<h3>Typescript</h3>
					<CodeEditor
						readOnly
						theme={theme}
						mode='typescript'
						fontSize={fontSize}
						placeholder='TypeScript Code'
						value={transformJavaToTypescript(javaCode)}
					/>
					<small className='text-muted'>This editor is read-only</small>
				</Col>
			</Row>

			<div className='pin bottom center'>
				<small>Preferences:</small>
				<div className='mb-1'></div>
				<div
					className='card flex-row p-4 shadow shadow-sm d-flex justify-content-between align-items-center'
					style={{ width: '80vw', maxWidth: 400, background: 'white' }}>
					<div>
						<label htmlFor='theme'>Theme</label>
						<select
							className='form-control form-control-sm'
							name='theme'
							id='theme'
							value={theme}
							onChange={(e) => setTheme(e.target.value as any)}
							style={{ width: 150 }}>
							<option value='github'>GitHub</option>
							<option value='dracula'>Dracula</option>
							<option value='monokai'>Monokai</option>
						</select>
					</div>

					<div>
						<label htmlFor='fontSize'>FontSize</label>
						<input
							type='number'
							min='12'
							max='24'
							id='fontSize'
							name='fontSize'
							value={fontSize}
							onChange={(e) => setFontSize(parseInt(e.target.value))}
							className='form-control form-control-sm'
							style={{ width: 75 }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Page;
