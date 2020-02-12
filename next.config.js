module.exports = require('@zeit/next-sass')(
	require('@zeit/next-css')({
		publicRuntimeConfig: {
			CODEFUND_ID: process.env.CODEFUND_ID,
			HOTJAR_ID: process.env.HOTJAR_ID,
			GA_ID: process.env.GA_ID,
		},
	}),
);
