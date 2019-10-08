<template>
	<div class="main-container">
		<theater></theater>
		<div class="section-container">
			<cross></cross>
			<people></people>
		</div>
	</div>
</template>

<script>
import theater from "@/components/home/home_theater"
import cross from "@/components/home/home_cross"
import people from "@/components/home/home_people"
export default {
	components: {
		theater,
		cross,
		people
	}
}
</script>

<style lang="scss" scoped>
	* {
		box-sizing: border-box;
	}
	.section-container {
		background: #ff6e7f;
        background: -webkit-linear-gradient(to bottom, #bfe9ff, #ff6e7f);
        background: linear-gradient(to bottom, #bfe9ff, #ff6e7f);
	}
</style>
