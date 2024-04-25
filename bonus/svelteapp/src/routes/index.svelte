<script context="module" lang="ts">
	export async function load({ page, fetch, session, context }) {
		return {
			status: 302,
			redirect: '/products'
		};
	}
</script>
