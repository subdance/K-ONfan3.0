<template>
	<div class="main-container">
		<theater></theater>
		<div class="section-container">
			<cross></cross>
		</div>
	</div>
</template>

<script>
import theater from "@/components/home/home_theater"
import cross from "@/components/home/home_cross"
export default {
	components: {
		theater,
		cross
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
