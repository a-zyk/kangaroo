<script>
import {weight} from "../src/stores/store.js"

$: mer = (($weight.kg**0.75) * 95).toFixed(2);

$: proteinGDay = (($weight.kg**0.75) * 6).toFixed(2);

$: totalKangaroo = (proteinGDay * 100 /22).toFixed(2);

$: kangarooCal = (totalKangaroo * 0.98).toFixed(2)

$: oils = $weight.kg * 0.4;

$: oilCal = oils * 8

$: carb = ((carbCal * 100) / ($weight.carbs)).toFixed(2)

$: carbCal = (mer - oilCal - kangarooCal).toFixed(2)

</script>


<label for="weight">Body weight</label>
<input type="number"  id="weight" bind:value={$weight.kg}/> 

<div>
<label for=sweet>Sweet potatoe</label>
<input id="sweet" value="71" type="radio"  bind:group={$weight.carbs} name="carbohydrates"/>
</div>

<div>
<label for="quinoa">Quinoa</label>
<input id="quinoa" value="120" type="radio" bind:group={$weight.carbs} name="carbohydrates"/>
</div>

<div>
<label for="butternut">Butternut squash</label>
<input id="butternut" value="40" type="radio" bind:group={$weight.carbs} name="carbohydrates"/>
</div>



<div> Kangaroo needed per day {totalKangaroo} g.</div>



<div>Sunflower oil needed {oils} ml</div>



<div>Total carb {carb} g</div>




