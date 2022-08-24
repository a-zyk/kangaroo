<script>
	import '../app.css';
	import Nav from '../components/nav.svelte';
</script>

<Nav/>

<div class="relative overflow-hidden min-h-screen">
	<img class="md:w-full w-[160%] max-w-[160%] fixed top-0 left-0 opacity-[0.8] z-[-1]" src="/img.jpg" />

	<slot />
</div>
