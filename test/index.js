import test from 'ava';

import Sharer from '../src/index';

test.beforeEach(t => {
});

test('simple test', t => {
	const url = "http://www.google.fr";
	t.truthy(Sharer.getFacebookURL(url));
});
