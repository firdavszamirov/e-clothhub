import type {Actions} from "../../../../.svelte-kit/types/src/routes/(app)/items/$types";
import {redirect} from "@sveltejs/kit";

export const actions: Actions = {
    logout: async (event) => {
        event.cookies.delete('AuthorizationToken', {path: '/'});

        throw redirect(303, '/');
    }
}