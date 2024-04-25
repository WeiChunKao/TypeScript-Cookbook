<script lang="ts">
	import { order } from '../store/stores';

	$: count = $order.productCount || 0;
	$: displayText =
		count === 0 ? '(No Selection)' : `${count} product(s), ` + `$${$order.total.toFixed(2)}`;
</script>

<div class="p-1 bg-secondary text-white text-end">
	{displayText}
	<a href="/order" class="btn btn-sm btn-primary m-1"> Submit Order </a>
</div>
