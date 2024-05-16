<script lang="ts">
    import type { ActionData } from "./$types";
    import { enhance} from "$app/forms";

    export let form: ActionData;
</script>

<div class="h-screen bg-stone-300 flex flex-col space-y-6 place-content-center">
    <a href="/" class="mx-auto text-4xl font-bold">ClothHub</a>
    <div class="bg-neutral-200/40 rounded-2xl w-fit mx-auto p-5 flex flex-col space-y-6">
        <h1 class="text-3xl font-bold text-left">Sign up</h1>
        <form method="post" use:enhance>
            <div class="flex flex-col">
                <label for="name">Name:</label>
                <input
                        class="w-64 rounded-xl bg-neutral-100 text-black px-2 py-0.5"                        placeholder="Name"
                        type="text"
                        name="name"
                        id="name"
                        required
                />
            </div>
            <div class="flex flex-col">
                <label for="email">Email</label>
                <input
                        class="w-64 rounded-xl bg-neutral-100 text-black px-2 py-0.5"                        placeholder="Email address"
                        type="email"
                        name="userEmail"
                        id="userEmail"
                        required
                />
            </div>
            <div class="flex flex-col">
                <label for="password">Password</label>
                <input
                        class="w-64 rounded-xl bg-neutral-100 text-black px-2 py-0.5"                        placeholder="Password"
                        type="password"
                        name="password"
                        id="password"
                        required
                />
            </div>
            <div class="text-center">
                <button type="submit" class="mx-auto mt-4 text-white font-medium bg-green-600 py-2 px-10 rounded-2xl">Sign up</button>
            </div>
        </form>
        <div class="text-center mt-4">
            <p>Have an Account?</p><a href="/auth/signin" class="mx-auto font-medium py-2 px-4 rounded-xl">Login</a>
        </div>
        <a href="/" class="opacity-60">Back</a>
    </div>
</div>
