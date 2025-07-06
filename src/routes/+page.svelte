<script lang="ts">
	import { Stage, Layer, Rect } from "$lib/components/konva";
</script>

<Stage width={500} height={500}>
	<Layer>
		<Rect width={200} height={200} x={20} y={40} fill="purple" stroke="white" strokeWidth={4} draggable />
	</Layer>
</Stage>

<style>
	:global {
		body {
			background-color: #222;
			color: white;
		}
	}
</style>