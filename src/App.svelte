<script>
	import { PictureSource } from 'svelte-picture-source'
</script>

<style>
	img {
		width: 100%;
	}
</style>

<h1>svelte-picture-source demo</h1>

<h2>Plain resize and format conversion</h2>
<picture>
	<PictureSource
		original="/images/cube.jpg"
		srcset="/_/cube-1400w.webp 1400w, /_/cube-700w.webp 700w"
		type="image/webp" />
	<PictureSource
		original="/images/cube.jpg"
		srcset="/_/cube-1400w.jpg 1400w, /_/cube-700w.jpg 700w" />
	<img src="/images/cube.jpg" alt="A rubik's cube" />
</picture>

<h2>Art direction</h2>
<picture>
	<PictureSource
		original="/images/cube-narrow.jpg"
		media="(max-width: 699px)"
		srcset="/_/cube-800.jpg 800w, /_/cube-400w.jpg 400w" />
	<PictureSource
		original="/images/cube.jpg"
		media="(min-width: 700px)"
		srcset="/_/cube-1400w.jpg 1400w, /_/cube-700w.jpg 700w" />
	<img src="/images/cube.jpg" alt="A rubik's cube" />
</picture>
