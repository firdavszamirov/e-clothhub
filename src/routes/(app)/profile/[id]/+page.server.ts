import db from "$lib/Database/db";
import {redirect} from "@sveltejs/kit";
import type {PageServerLoad} from "./$types";

export const load: PageServerLoad = (event) => {
    const user = event.locals.user;

    if(!user) {
        throw redirect(303, `/auth/signin`)
    }
    return {
        user
    };
};

export const actions = {
    delete: async ({ params: { id } }) => {
        await db.user.delete({
            where: { id: Number(id) },
        });

        throw redirect(303, `/`);
    },
}