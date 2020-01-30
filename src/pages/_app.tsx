import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/master.scss';

export default ({ Component, pageProps }) => (
	<>
		<Component {...pageProps} />
		<style jsx global>
			{`
				html,
				body {
					width: 100%;
					height: 100%;

					padding: 0;
					margin: 0;
				}

				.h-100vh {
					height: 100vh !important;
				}

				.w-100vw {
					width: 100vw;
				}
			`}
		</style>
	</>
);
