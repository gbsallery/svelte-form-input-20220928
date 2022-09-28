import {api} from '../api';
import type {Actions} from './$types';

export const actions: Actions = {
    add: async ({request}) => {
        console.log("Sitting here waiting for someone to call...");
        const form = await request.formData();
        console.log(form.get('code'));

        await api('POST', `activity`, {
            name: form.get('name'),
            code: form.get('code')
        });
    },
    edit: async ({request}) => {
        const form = await request.formData();

        await api('PATCH', `activity/${form.get('code')}`, {
            name: form.get('name')
        });
    },
    delete: async ({request}) => {
        const form = await request.formData();

        await api('DELETE', `activity/${form.get('code')}`);
    }
};
