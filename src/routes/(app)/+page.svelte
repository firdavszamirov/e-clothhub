<script lang="ts">
    import type { PageData } from './$types'

    export let data: PageData;


</script>

{#each data.feed as item (item.id)}
        <div class="lg:w-72 md:w-52 sm:w-44 p-6 bg-neutral-50 rounded-2xl flex flex-col justify-between">
            <img src={item.imagePath} alt="item" class="w-full items-center rounded-2xl">
            <div class="">
                <h1 class="text-lg font-medium">{item.name}</h1>
                <p class="mt-4">{item.description}</p>
                <p class="text-green-700 text-right px-2">{item.price}$</p>
                <form action="?/Add" class="mt-4">
                    <button type="submit" class="px-4 py-2 bg-green-300 rounded-full border-2 border-green-600">Add to Cart</button>
                </form>
            </div>
        </div>
    {/each}