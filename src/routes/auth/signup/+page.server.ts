// src/routes/signup/+page.server.ts

import { fail } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import {createUser} from "$lib/Database/user.model";

const validateEmail = (email: string) => {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
}

export const actions: Actions = {
    // 1.
    default: async ( event ) => {
        const data = Object.fromEntries(await event.request.formData());



        if (!data.name || !data.userEmail || !data.password) {
            return fail(400, { error: "missing data" })
        }

        const {name, userEmail, password} = data as { name: string; userEmail: string; password: string };



        if (!name || !userEmail) {
            return fail(400, { name, userEmail, missing: true });
        }


        if (!validateEmail(userEmail)) {
            return fail(400, { name, incorrect: true });
        }

        const {error} = await createUser( name, userEmail, password );


        if (error) {
            return fail(500, {error})
        }

        throw redirect(303, `/`)
    }
} satisfies Actions;