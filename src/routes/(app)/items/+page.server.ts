import type {Actions, PageServerLoad} from './$types'
import db from '$lib/Database/db'
import {redirect} from "@sveltejs/kit";

export const load = (async () => {

    const response = await db.item.findMany()
    
    return { feed: response };
}) satisfies PageServerLoad;


export const actions: Actions = {
    logout: async (event) => {
        event.cookies.delete('AuthorizationToken', {path: '/'});

        throw redirect(303, '/');
    }
}