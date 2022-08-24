
<script>
	import { page } from '$app/stores';

	let navItems = [
		{ name: 'Derm Foods', link: '/dermFood' },
		{ name: 'Home cooked diet', link: '/' }
	];

	const ACTIVE_CLASSES = 'border-white border-b-2 font-bold';
</script>

<nav class="bg-green-700 mb-2">
	<ul class="flex-col items-center md:flex-row flex justify-evenly">
		{#each navItems as navItem}
			<li class="py-3  text-white {$page.url.pathname == navItem.link ? ACTIVE_CLASSES : ''}">
				<a href={navItem.link}>{navItem.name}</a>
			</li>
		{/each}
	</ul>
</nav>