export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');

export const declOfNum = (number: number, titles: [string, string, string]): string => {
	const cases = [2, 0, 1, 1, 1, 2]
	return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
};

export const baseUrl = (url: string) => {
	const site = import.meta.env.DEV ? 'http://localhost:4321' : import.meta.env.SITE;
	const base = import.meta.env.BASE_URL;
	const lastSlash = base === '/' ? '' : '/';
	return new URL(url, `${site}${base}${lastSlash}`).href;
}