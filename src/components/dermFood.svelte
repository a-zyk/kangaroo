<script>
	import foods from '../food_info.json';

	let shownFoods = foods;
	let selectedProtein;

	let searchInput = '';

	let species = 'dog';

	let form = 'dry';

	let hasWetOptions = '';

	let hydrolised = '';

	let suitableForGrowth = '';

	let allProteins = foods.map((food) => food.protein.split(', ')).flat();
	let proteinOptions = [...new Set(allProteins)];

	$: {
		shownFoods = foods
			.filter((food) => {
				return food.animal == species;
			})
			.filter((food) => {
				return food.form == form;
			})
			.filter((food) => {
				if (form === 'dry' && hasWetOptions) {
					return food.wet_and_dry.length;
				} else {
					return true;
				}
			})
			.filter((food) => {
				if (hydrolised) {
					return food.hydrolysed.length;
				} else {
					return true;
				}
			})
			.filter((food) => {
				if (suitableForGrowth) {
					return food.young_animals.length;
				} else {
					return true;
				}
			});
	}
</script>

<div class=" mx-auto p-4 mt-6 mb-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
	<div class=" flex gap-5 mb-5 card items-center">
		<div>
			<input
				class="peer hidden"
				type="radio"
				bind:group={species}
				name="species"
				id="dog"
				value="dog"
			/>
			<label
				class="px-4 py-2 text-white font-semibold peer-checked:bg-green-700 rounded-md bg-gray-500 cursor-pointer"
				for="dog">Dog</label
			>
		</div>

		<div>
			<input
				class="peer hidden"
				type="radio"
				bind:group={species}
				name="species"
				id="cat"
				value="cat"
			/>
			<label
				class="px-4 py-2 text-white font-semibold peer-checked:bg-green-700 cursor-pointer rounded-md bg-gray-500"
				for="cat">Cat</label
			>
		</div>
	</div>

	<div class="flex gap-5 mb-5 card items-center">
		<div>
			<input class="peer hidden" type="radio" bind:group={form} name="form" id="dry" value="dry" />
			<label
				class="px-4 py-2 text-white font-semibold peer-checked:bg-green-700 rounded-md bg-gray-500 cursor-pointer"
				for="dry">Dry</label
			>
		</div>

		<div>
			<input class="peer hidden" type="radio" bind:group={form} name="form" id="wet" value="wet" />
			<label
				class="px-4 py-2 text-white font-semibold peer-checked:bg-green-700 cursor-pointer rounded-md bg-gray-500"
				for="wet">Wet</label
			>
		</div>
	</div>

	<div>
		{#if form == 'dry'}
			<div>
				<input
					id="options"
					type="checkbox"
					name="options"
					bind:checked={hasWetOptions}
					value="yes"
				/>
				<label for="options" class="cursor-pointer">Has wet option</label>
			</div>
		{/if}
		<div>
			<input
				id="hydrolised"
				type="checkbox"
				name="hydrolised"
				bind:checked={hydrolised}
				value="yes"
			/>
			<label for="hydrolised" class="cursor-pointer">Hydrolised diet</label>
		</div>

		<div>
			<input
				id="growth"
				type="checkbox"
				name="gorwth"
				bind:checked={suitableForGrowth}
				value="yes"
			/>
			<label for="growth" class="cursor-pointer">Suitable for growth</label>
		</div>
	</div>
</div>

<!-- <div class="flex">
	<select bind:value={selectedProtein}>
		{#each proteinOptions as protein}
			<option value={protein}>{protein}</option>
		{/each}
	</select>
</div>

<div class="flex flex-col">
	<label>Search</label>
	<input bind:value={searchInput} class="border-2" />
</div> -->

<table class="mb-6 w-full text-left border border-gray-800">
	<thead class="bg-green-700 text-white">
		<tr >
			<th class="p-2">Species</th>
			<th class="p-2">Manufacturer</th>
			<th class="p-2">Title</th>
			<th class="p-2">Protein</th>
			<th class="p-2">Carbohydrate</th>
			<th class="p-2">Form</th>
		</tr>
	</thead>
	<tbody>
		{#each shownFoods as food}
			<tr class="even:bg-gray-200 odd:bg-green-200">
				<td class="p-2">{food.animal}</td>
				<td class="p-2">{food.manufacturer}</td>
				<td class="p-2">{food.title}</td>
				<td class="p-2">{food.protein}</td>
				<td class="p-2">{food.carbohydrate}</td>
				<td class="p-2">{food.form}</td>
			</tr>
		{/each}
	</tbody>
</table>
