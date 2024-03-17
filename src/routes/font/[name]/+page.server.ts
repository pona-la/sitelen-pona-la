import type { EntryGenerator } from './$types';
import fonts from '$lib/all.json';

export const entries: EntryGenerator = () => {
	return Object.keys(fonts).map(x => ({ "name": x }))
};
