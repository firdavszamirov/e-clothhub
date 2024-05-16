import type { PageServerLoad, Actions } from "./$types";
import { redirect, fail} from "@sveltejs/kit";
import { login } from "$lib/Database/user.model";

export const load: PageServerLoad = (event) => {
    const user = event.locals.user;

    if (user) {
        throw redirect(303, '/');
    }
}

export const actions: Actions = {
    default: async (event) => {
        const formData = Object.fromEntries(await event.request.formData());

        if (!formData.email || !formData.password) {
            return fail(400, {
                error: 'Missing email or password'
            });
        }

        const { email, password } = formData as { email: string; password: string };

        const { error, token } = await login(email, password);

        if (error) {
            return fail(400, { error });
        }

        event.cookies.set('AuthorizationToken', `Bearer ${token}`, {
            httpOnly: true,
            path: '/',
            secure: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 24,
        })
        console.log(formData)

        throw redirect(303, '/')
    }
}