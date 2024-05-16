import type {Actions, PageServerLoad} from './$types'
import db from '$lib/Database/db'
import {redirect} from "@sveltejs/kit";

export const load: PageServerLoad = async ({ params: {id} }) => {
    const item = await db.item.findUnique({
        where: { id: Number(id) },
    });

    return { item };
}

export const actions = {
    makeAvailable: async ({ params: { id } }) => {
        await db.item.update({
            where: { id: Number(id) },
            data: {
                isAvailableForPurchase: true,
            },
        });

        throw redirect(303, `/items`);
    },makeNotAvailable: async ({ params: { id } }) => {
        await db.item.update({
            where: { id: Number(id) },
            data: {
                isAvailableForPurchase: false,
            },
    });

    throw redirect(303, `/items`);
},delete: async ({ params: { id } }) => {
        await db.item.delete({
            where: { id: Number(id) },
        });

        throw redirect(303, `/`);
    },
    logout: async (event) => {
        event.cookies.delete('AuthorizationToken', {path: '/'});

        throw redirect(303, '/');
    }
}satisfies Actions;