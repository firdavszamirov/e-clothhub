import type {Actions, PageServerLoad} from './$types'
import {redirect} from "@sveltejs/kit";
import db from '$lib/Database/db'

export const load = (async () => {

    const response = await db.item.findMany({
        where: { isAvailableForPurchase: true },
    })

// 2.
    return { feed: response };
}) satisfies PageServerLoad;

export const actions: Actions = {
    logout: async (event) => {
        event.cookies.delete('AuthorizationToken', {path: '/'});

        throw redirect(303, '/');
    },
    /* adding items to cart

    }*/
}