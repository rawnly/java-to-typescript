import dynamic from 'next/dynamic';
import { useState } from 'react';
const CodeEditor = dynamic(import('../components/editor'), { ssr: false });
import { transformJavaToTypescript } from '../utils';

export default () => {
	const [javaCode, setJavaCode] = useState('');
	const formatCode = (code: string) => code.replace(/\t/gi, '    ');

	return (
		<section className='container d-flex justify-content-center align-items-center'>
			<CodeEditor mode='java' value={javaCode} onChange={(value) => setJavaCode(formatCode(value))} />
			<CodeEditor mode='typescript' value={transformJavaToTypescript(javaCode)} />
		</section>
	);
};
