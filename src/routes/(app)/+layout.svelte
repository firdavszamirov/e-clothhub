<script lang="ts">
    import type { LayoutData } from "../$types";
    import Icon from '@iconify/svelte';
    import {goto} from "$app/navigation";

    export let data: LayoutData;

    const { user } = data
</script>
<div class="flex justify-between px-10 py-5 bg-neutral-300 shadow-xl font-medium mx-5 mt-4 rounded-xl">
    <a href="/" class="text-xl font-bold">ClothHub</a>
    <a href="/items">All Items</a>
    <div class="flex space-x-5">
        {#if user}
            <a href="/cart" aria-disabled="true"><Icon icon="mdi:cart" class="mt-1" /></a>
            <h1><button on:click={() => goto(`/profile/${user.id}`)}>{user.name}</button></h1>
            <form action="?/logout" method="post">
                <button type="submit">Logout</button>
            </form>
            {:else}
                <a href="/auth/signup">Sign Up</a>
                <a href="/auth/signin">Sign In</a>
            {/if}
        </div>
    </div>
<div class="py-10 px-20 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8">
    <slot />
</div>