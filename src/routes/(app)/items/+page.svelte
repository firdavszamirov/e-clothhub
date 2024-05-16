<script lang="ts">
    import type { PageData } from './$types';
    import { goto } from '$app/navigation';

    // Function to format createdAt date to a shorter version
    // Function to format createdAt date to a shorter version
const formatCreatedAt = (createdAt: string | Date): string => {
    const date = typeof createdAt === 'string' ? new Date(createdAt) : createdAt;
    return date.toLocaleDateString(); // Modify this according to your desired format
};


    export let data: PageData;
</script>

<div class="flex justify-between border-2 text-center py-5">
    <h1 class="text-4xl font-bold">Items</h1>
    <a href="/items/create" class="text-lg text-center bg-green-200 py-2 px-4 rounded-full border-2 border-green-400">Create a new Item</a>
</div>

<div class="">
    <table class="mx-auto">
        <thead>
            <tr class="text-nowrap bg-green-300 border-b-2 border-green-600">
                <th class="px-2">Available</th>
                <th class="px-2">Image</th>
                <th class="px-2">Name</th>
                <th class="px-2">Description</th>
                <th class="px-2">Price</th>
                <th class="px-2">Created At</th>
                <th class="px-2">Actions</th>
            </tr>
        </thead>
        <tbody>
            {#each data.feed as item (item.id)}
                <tr class="bg-green-200 border-b-2 border-green-400">
                    <td class="text-center">{item.isAvailableForPurchase}</td>
                    <td><img src={item.imagePath} alt="item{item.id}" class="lg:w-52 md:w-40 m-2 rounded-xl"></td>
                    <td class="text-center">{item.name}</td>
                    <td class="text-center">{item.description}</td>
                    <td class="text-center">{item.price}</td>
                    <!-- Display shorter version of createdAt -->
                    <td class="text-center">{formatCreatedAt(item.createdAt)}</td>
                    <td class="text-center"><button class="border-2 border-green-300 py-2 px-3 rounded-xl m-2" on:click={() => goto(`/items/${item.id}`)}>Publish or Delete</button></td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
