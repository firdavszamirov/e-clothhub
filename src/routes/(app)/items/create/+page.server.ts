import db from "$lib/Database/db";
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from "./$types";
import type { PageServerLoad } from "../$types";

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();

        const name = data.get("name");
        const description = data.get("description");
        const price = data.get("price");
        const imagePath = data.get("imagePath");



        if (!name || !description ||!price || !imagePath) {
            return fail(400, { name, description, price, missing: true });
        }

        if (typeof name != "string" || typeof description != "string" || typeof price != "string" || typeof imagePath != "string") {
            return fail(400, { incorrect: true })
        }
        

        await db.item.create({
            data: {
                isAvailableForPurchase: false,
                name,
                description,
                price,
                imagePath
            },
        });

        throw redirect(303, `/`)
    },
    logout: async (event) => {
        event.cookies.delete('AuthorizationToken', {path: '/'});

        throw redirect(303, '/');
    }
} satisfies Actions;

export const load: PageServerLoad = (event) => {
    const user = event.locals.user;

    if (!user){
        throw redirect(303, '/auth/signin')
    }

    return {
        user
    };
};