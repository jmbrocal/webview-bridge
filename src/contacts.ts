import {postMessageToNativeApp} from './post-message';

export const requestContact = ({
    filter = 'phone',
}: {filter?: 'phone' | 'email'} = {}) =>
    postMessageToNativeApp({type: 'GET_CONTACT_DATA', payload: {filter}});
