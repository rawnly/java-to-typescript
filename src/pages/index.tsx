import { NextPage } from 'next';
import { useState } from 'react';
import dynamic from 'next/dynamic';

import { transformJavaToTypescript } from '../utils';
const CodeEditor = dynamic(import('../components/editor'), { ssr: false });
import { Row, Col } from 'reactstrap';

interface Props {}

const Page: NextPage<Props> = (_) => {
	const [javaCode, setJavaCode] = useState('');
	const formatCode = (code: string) => code.replace(/\t/gi, '    ');

	return (
		<section className='w-100vw h-100vh p-4 d-flex justify-content-center align-items-center h-100 container container-fluid'>
			<Row className='w-100'>
				<Col xs={6}>
					<h3>Java</h3>
					<CodeEditor
						placeholder='Paste your Java code here.'
						mode='java'
						value={javaCode}
						onChange={(value) => setJavaCode(formatCode(value))}
					/>
				</Col>
				<Col xs={6}>
					<h3>Typescript</h3>
					<CodeEditor
						placeholder='TypeScript Code'
						readOnly
						mode='typescript'
						value={transformJavaToTypescript(javaCode)}
					/>
					<small className='text-muted'>This editor is read-only</small>
				</Col>
			</Row>
		</section>
	);
};

export default Page;
