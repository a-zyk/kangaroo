<script>
	import { weight } from '../stores/store.js';

	$: mer = ($weight.kg ** 0.75 * 95).toFixed(2);

	$: proteinGDay = ($weight.kg ** 0.75 * 6).toFixed(2);

	$: totalKangaroo = ((proteinGDay * 100) / 22).toFixed(2);

	$: kangarooCal = (totalKangaroo * 0.98).toFixed(2);

	$: oils = ($weight.kg * 0.4).toFixed(2);

	$: oilCal = (oils * 8).toFixed(2);

	$: carb = ((carbCal * 100) / $weight.carbs).toFixed(2);

	$: carbCal = (mer - oilCal - kangarooCal).toFixed(2);
</script>

<div class="text-lg flex items-center mt-56 md:mt-20">
	<div
		class="rounded-lg shadow-md p-5 bg-white border-gray-200 border  mx-auto inline-flex flex-col "
	>

	{#if $weight.kg && $weight.carbs }
	<div class="text-center font-bold mb-3">Day requirement</div>
		<div><span class="font-bold">Kangaroo</span> {totalKangaroo} g</div>

		<div> <span class="font-bold">Sunflower oil</span> {oils} ml</div>

		<div class="pb-2"><span class="font-bold">Cooked carb</span> {carb} g</div>
		{/if}

		<div class="pb-2">
			<label for="weight">Body weight</label>
			<input  class="rounded-md px-3 py-2 border border-gray-600" type="number" id="weight" bind:value={$weight.kg} />
		</div>

		<div>
			<label for="sweet">Sweet potato</label>
			<input id="sweet" value="71" type="radio" bind:group={$weight.carbs} name="carbohydrates" />
		</div>

		<div>
			<label for="quinoa">Quinoa</label>
			<input id="quinoa" value="120" type="radio" bind:group={$weight.carbs} name="carbohydrates" />
		</div>

		<div>
			<label for="butternut">Butternut squash</label>
			<input
				id="butternut"
				value="40"
				type="radio"
				bind:group={$weight.carbs}
				name="carbohydrates"
			/>
		</div>
	</div>
</div>
