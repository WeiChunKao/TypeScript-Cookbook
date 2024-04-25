<script context="module" lang="ts">
	import type { Product } from '../data/entities';
	import { Order } from '../data/entities';
	import { HttpHandler } from '../data/httpHandler';
	import { products, selectedCategory, order } from '../store/stores';

	export async function load({ page, fetch, session, context }) {
		new HttpHandler().loadProducts().then((p) => {
			products.set(p);
		});
		selectedCategory.set('All');
		order.set(new Order());

		return {
			status: 200
		};
	}
</script>

<script lang="ts">
	import ProductItem from '../components/ProductItem.svelte';
	import CategoryList from '../components/CategoryList.svelte';
	import Header from '../components/Header.svelte';

	$: categories = ['All', ...new Set($products.map((p) => p.category))];
	$: filteredProducts = $products.filter(
		(p) => $selectedCategory === 'All' || $selectedCategory === p.category
	);

	function handleSelectCategory(event) {
		$selectedCategory = event.detail as string;
		categories = categories;
	}

	function handelAddToCart(event) {
		let product = event.detail.product as Product;
		let quantity = event.detail.quantity as number;
		$order.addProduct(product, quantity);
		$order = $order;
	}
</script>

<div>
	<Header />
	<div class="container-fluid">
		<div class="row">
			<div class="col-3 p-2">
				<CategoryList {categories} on:selectCategory={handleSelectCategory} />
			</div>
			<div class="col-9 p-2">
				{#each filteredProducts as product}
					<ProductItem {product} on:addToCart={handelAddToCart} />
				{/each}
			</div>
		</div>
	</div>
</div>
