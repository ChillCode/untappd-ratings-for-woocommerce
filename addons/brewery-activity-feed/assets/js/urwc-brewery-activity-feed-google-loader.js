/**
 * Load Google Maps using dynamic library import.
 *
 * We can only add one Google Map initializer so same language and API key per all shortcodes.
 *
 * https://developers.google.com/maps/documentation/javascript/load-maps-js-api#dynamic-library-import
 */

/**
 *
 * @param g
 */
((g) => {
	let h;
	let a;
	let k;
	const p = 'The Google Maps JavaScript API';
	const c = 'google';
	const l = 'importLibrary';
	const q = '__ib__';
	const m = document;
	let b = window;
	b = b[c] || (b[c] = {});
	const d = b.maps || (b.maps = {});
	const r = new Set();
	const e = new URLSearchParams();
	const u = () =>
		h ||
		(h = new Promise(async (f, n) => {
			await (a = m.createElement('script'));
			e.set('libraries', [...r] + '');
			for (k in g)
				e.set(
					k.replace(/[A-Z]/g, (t) => '_' + t[0].toLowerCase()),
					g[k]
				);
			e.set('callback', c + '.maps.' + q);
			a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
			d[q] = f;
			a.onerror = () => (h = n(Error(p + ' could not load.')));
			a.nonce = m.querySelector('script[nonce]')?.nonce || '';
			m.head.append(a);
		}));
	d[l]
		? console.warn(p + ' only loads once. Ignoring:', g)
		: (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
})({
	key: urwc_settings.map_api_key,
	v: 'weekly',
	language: urwc_settings.map_lang,
});
