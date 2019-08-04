import enUS from '../locales/en-US/common.json';
import ptBR from '../locales/pt-BR/common.json';

const Languages = {
	EN_US: 'en-US',
	PT_BR: 'pt-BR'
};

const resources = {
	'en-US': enUS,
	'pt-BR': ptBR,
};

const defaultLanguage = Languages.EN_US;

const browserLanguage = window.navigator.language;

const language = browserLanguage && resources[browserLanguage] !== undefined ? browserLanguage : defaultLanguage;

export default (key) => {
	if (key === undefined) {
		return null;
	}

	let node = resources[language];

	const splitted = key.split('.');

	const callback = (ignoredValue, key) => (
		node = node[splitted[key]]
	);

	splitted.forEach(callback);

	return node || key;
};