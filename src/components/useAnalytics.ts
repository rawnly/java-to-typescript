import ReactGA from 'react-ga';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default (analyticsId: string) => {
	if (!analyticsId) return;

	const router = useRouter();
	const debug = process.env.NODE_ENV !== 'production';

	useEffect(() => {
		try {
			ReactGA.initialize(analyticsId, { debug });
			ReactGA.pageview(router.pathname);
		} catch (e) {
			console.error(e);
		}
	}, []);
};
