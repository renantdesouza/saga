import configureProdStore from './configureStore.prod';
import configureDevStore from './configureStore.dev';

export default process.env.NODE_ENV === 'production' ? configureProdStore : configureDevStore;
