import * as searchRequest from '~/Api/searchAxios';

export const search = async (q = '', type = 'less') => {
    try {
        const res = await searchRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });

        return res.data;
    } catch (err) {
        console.log(err);
    }
};
