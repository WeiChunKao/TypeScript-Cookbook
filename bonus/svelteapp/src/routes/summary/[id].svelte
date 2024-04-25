<!--
<script context="module" lang="ts">
	export async function load({ page, fetch, session, context }) {
		let id: string = page.params.id;

		return {
			status: 200,
			props: { id: id }
		};
	}
</script>
-->
<script lang="ts">
	import { page } from '$app/stores';

	//export let id: string;
	let id: string = $page.params.id;
</script>

<div class="m-2 text-center">
	<h2>Thanks!</h2>
	<p>Thanks for placing your order.</p>
	<p>Your order is #{id}</p>
	<p>We'll ship your goods as soon as possible.</p>
	<a href="/products" class="btn btn-primary">OK</a>
</div>
