<script lang="ts">
    import type { ActionData } from "./$types";
    import { enhance} from "$app/forms";

    export let form: ActionData;
</script>



<div class="h-screen bg-stone-300 flex flex-col space-y-6 place-content-center">
    <a href="/" class="mx-auto text-4xl font-bold">ClothHub</a>

    <div class="bg-neutral-200/40 rounded-2xl w-fit mx-auto p-5 flex flex-col space-y-6">
        <h1 class="text-3xl font-bold text-left">Login</h1>

        <section>
            <form method="post" use:enhance>
                <div class="group flex flex-col">
                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email" class="w-64 rounded-xl bg-neutral-100 text-black px-2 py-0.5" required />
                </div>

                <div class="group flex flex-col">
                    <label for="password">Password:</label>
                    <input type="password" name="password" id="password" class="w-64 rounded-xl bg-neutral-100 text-black px-2 py-0.5" required />
                </div>

                <div class="text-center">
                    <button type="submit" class="mx-auto mt-4 text-white font-medium bg-green-600 py-2 px-10 rounded-2xl">Login</button>
                </div>
            </form>

            <div class="text-center mt-4">
                <p>Don't have an account?</p><a href="/auth/signup" class="mx-auto font-medium py-2 px-4 rounded-xl">Sign Up</a>
            </div>
            <a href="/" class="opacity-60">Back</a>
        </section>
    </div>
</div>
