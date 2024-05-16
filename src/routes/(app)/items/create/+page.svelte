<script lang="ts">
    import type { ActionData } from "./$types";

    export let form: ActionData;
</script>

<div class="page bg-stone-200 mx-auto w-3/4 mt-10 rounded-xl p-3">
    <form method="post" action="?/create" class="flex flex-col">
        <h1 class="text-2xl m-auto font-medium my-5">ClothHub</h1>
        {#if form?.missing}<p class="error text-red-600">Missing field required!</p>{/if}
        <input
            class="rounded-lg px-2 py-1 text-black focus:outline-stone-500 mb-3"
            name="name"
            placeholder="Item Name"
            type="text"
            value={form?.name ?? ""}
        />
        <textarea
            class="rounded-lg px-2 py-1 bg-stone-500 text-white focus:outline-stone-700 h-72"
            name="description"
            placeholder="Enter your description"
            rows="8"
        ></textarea>
        <input
            class="rounded-lg mb-3 px-2 py-1 text-black focus:outline-stone-500"
            name="price"
            placeholder="Price"
            type="price"
            value={form?.price ?? ""}
        />
        <input type="file" id="imagePath" name="imagePath" />
        <button type="submit" class="mt-5 rounded-xl bg-stone-600 text-stone-300 text-lg font-medium py-1">Create Item!</button>
        <a class="back m-auto mt-2 w-1/2 text-center rounded-xl bg-stone-100 font-medium" href="/">Cancel</a>
    </form>
</div>
