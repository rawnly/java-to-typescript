import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';
const { publicRuntimeConfig: env } = getConfig();

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);

		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<title>Java -> TypeScript</title>

					<meta httpEquiv='X-UA-Compatible' content='IE=7' />
					<meta name='description' content='Java -> TypeScript.' />
					<meta name='theme-color' content='#0080ff' />

					<meta property='og:site_name' content='Java -> TypeScript' />
					<meta property='og:title' content='Java -> TypeScript' />
					<meta property='og:description' content='🧪 Java -> TypeScript' />
					<meta property='og:url' content='https://java-to-typescript.now.sh' />

					<meta name='twitter:site' content='@fedevitaledev' />

					<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
				</Head>
				<body>
					<Main />
					<NextScript />

					<div id='codefund'></div>
					{process.env.NODE_ENV === 'production' && !!env.CODEFUND_ID && (
						<script src={`https://app.codefund.io/properties/${env.CODEFUND_ID}/funder.js`} async></script>
					)}
				</body>
			</Html>
		);
	}
}

export default MyDocument;
