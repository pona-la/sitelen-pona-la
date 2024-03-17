<script lang="ts">
	import { onMount } from 'svelte'

	export let name: string;
	export let url: string;
	export let ucsur: boolean;
	export let ascii: boolean;

	let el: Element
	let font: Promise<FontFace>
	if (typeof window !== 'undefined') {
		onMount(() => {
			const observer = new IntersectionObserver((entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const face = new FontFace(
							`"${name}"`,
							`url("${url}")`
						)
						font = face.load()
						if (!document.fonts.has(face)) {
							document.fonts.add(face)
						}
					}
				})
			})
			observer.observe(el)
		})
	}
</script>

<div bind:this={el}>
	<div class="mt-4">
	{#await font}
	loading...
	{:then}
		<div>
			{#if ucsur}
			<div class="text-5xl" style:font-family={`"${name}", "Adobe NotDef"`}>
				<slot name="ucsur" />
			</div>
			{:else if ascii}
			<div class="text-5xl" style:font-family={`"${name}", "Adobe NotDef"`}>
				<slot name="latin" />
			</div>
			{:else}
			<span class="text-2xl">
				󱥡󱤂󱤀
				nasin sitelen ni li sona ala e nasin ASCII e nasin Unicode. o toki e ni tawa tan ona.
			</span>
			{/if}
		</div>
	{:catch err}
	<span class="text-2xl">
		󱥈󱤀
		nasin sitelen ni li pakala. ona li pona ala tawa ilo sina. o toki e ni tawa tan ona.
	</span>
	{/await}
	</div>
</div>
