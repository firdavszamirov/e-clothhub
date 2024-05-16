import type {LayoutServerLoad} from "./$types";
import {redirect} from "@sveltejs/kit";

export const load: LayoutServerLoad = (event) => {
    const user = event.locals.user;

    if (!user) {
        throw redirect(303, '/auth/signin');
    }
    
    return {
        user
    };
};

/*
* adding actions to handle adding more of the same item with
* (+ and -) buttons.
* adding an action to checkout
* action to logout in (+page.server.ts) file
* */