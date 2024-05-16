<script lang="ts">
    import type {PageData} from './$types'

    export let data: PageData

    const { user } = data;
</script>

<div class="flex flex-col justify-between">
    <div>
        <h1 class="text-6xl font-medium">{user.name}</h1>
        <h1 class="mt-5 text-xl">{user.email}</h1>
    </div>
    <form action="?/delete" class="flex flex-col bg-neutral-100 w-fit p-4 mt-20 rounded-2xl shadow-xl">
        <p class="text-nowrap px-5">Your account can also be deleted!</p>
        <button type="submit" class="py-3 px-5 text-nowrap bg-red-400 rounded-2xl m-4 border-2 border-red-700">Delete Account</button>
    </form>
</div>