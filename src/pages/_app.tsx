import 'bootstrap/dist/css/bootstrap.min.css';
import getConfig from 'next/config';
import '../styles/master.scss';

const { publicRuntimeConfig: env } = getConfig();

export default ({ Component, pageProps }) => (
	<>
		<Component {...pageProps} />
		{/* Hotjar Tracking Code for https://fedevitale.dev */}
		{!!env.HOTJAR_ID && (
			<script
				dangerouslySetInnerHTML={{
					__html: `
				(function(h,o,t,j,a,r){
					h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
					h._hjSettings={hjid:${env.HOTJAR_ID},hjsv:6};
					a=o.getElementsByTagName('head')[0];
					r=o.createElement('script');r.async=1;
					r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
					a.appendChild(r);
			})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
			`,
				}}
			/>
		)}

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
