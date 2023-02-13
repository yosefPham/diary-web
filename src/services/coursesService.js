import * as httpRequest from '~/utils/httpRequest';

export const cources = async () => {
    try {
        const res = await httpRequest.get('user/course', {
            params: {},
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
