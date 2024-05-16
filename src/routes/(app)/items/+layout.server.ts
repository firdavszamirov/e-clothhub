import type {LayoutServerLoad} from "./$types";
import {redirect} from "@sveltejs/kit";

export const load: LayoutServerLoad = (event) => {
    const user = event.locals.user;

    if (!user) {
        throw redirect(303, `/auth/signin`)
    }
    return {
        user
    };
};