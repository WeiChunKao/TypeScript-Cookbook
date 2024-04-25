<script lang="ts">
	import { HttpHandler } from '../data/httpHandler';
	import { order } from '../store/stores';

	function submit() {
		new HttpHandler().storeOrder($order).then((id) => {
			location.href = `/summary/${id}`;
		});
	}
</script>

<div>
	<h3 class="text-center bg-primary text-white p-2">Order Summary</h3>
	<div class="p-3">
		<table class="table table-sm table-striped">
			<thead>
				<tr>
					<th>Quantity</th>
					<th>Product</th>
					<th class="text-end">Price</th>
					<th class="text-end">Subtotal</th>
				</tr>
			</thead>
			<tbody>
				{#each $order.orderLines as line}
					<tr>
						<td>{line.quantity}</td>
						<td>{line.product.name}</td>
						<td class="text-end">${line.product.price.toFixed(2)}</td>
						<td class="text-end">${line.total.toFixed(2)}</td>
					</tr>
				{/each}
			</tbody>
			<tfoot>
				<tr>
					<th class="text-end" colSpan="3">Total:</th>
					<th class="text-end">${$order.total.toFixed(2)}</th>
				</tr>
			</tfoot>
		</table>
	</div>
	<div class="text-center">
		<a href="/products" class="btn btn-secondary m-1"> Back </a>
		<button class="btn btn-primary m-1" on:click={submit}>Submit Order</button>
	</div>
</div>
