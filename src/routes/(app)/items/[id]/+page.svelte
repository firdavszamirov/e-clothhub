<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;

    const { item } = data;

</script>

<div>
    <h2 class="text-3xl font-bold border-b-2 border-black">{item.name}</h2>
</div>
<div class="w-3/4 mt-10 rounded-xl p-3 space-y-5 grid grid-cols-2 gap-5 mb-2">
    <form method="post" action="?/makeAvailable" class="flex flex-col bg-neutral-100 p-4 rounded-2xl shadow-xl">
        <h2 class="font-medium">Would you like to make this Item available for purchase?</h2>
        <button type="submit" class="py-3 px-5 bg-green-400 rounded-2xl m-4 border-2 border-green-700">Yes!</button>
    </form>
    <form method="post" action="?/makeNotAvailable" class="flex flex-col bg-neutral-100 p-4 rounded-2xl shadow-xl">
        <h2 class="font-medium">Would you like to make this Item hidden?</h2>
        <button type="submit" class="py-3 px-5 bg-green-400 rounded-2xl m-4 border-2 border-green-700">Yes!</button>
    </form>
    <form method="post" action="?/delete" class="flex flex-col bg-neutral-100 p-4 rounded-2xl shadow-xl">
        <h2>Would you like to delete this Item?</h2>
        <button type="submit" class="py-3 px-5 bg-red-400 rounded-2xl m-4 border-2 border-red-700">Yes!</button>
    </form>
</div>

<a href="/items" class="m-5 bg-neutral-200 rounded-t-2xl px-5 py-2 border-2 border-t-black/20">Back to all Items</a>
