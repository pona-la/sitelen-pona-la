<script lang="ts">
	import { onMount } from 'svelte'

	export let name: string;
	export let url: string;
	export let ucsur: boolean;
	export let ascii: boolean;
	export let weight: string;
	export let style: string;

	let el: Element
	let font: Promise<any>
	if (typeof window !== 'undefined') {
		onMount(() => {
			const observer = new IntersectionObserver((entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const face = new FontFace(
							`${name}`,
							`url("${window.location.protocol}//${window.location.host}${url}")`,
							{
								weight: weight,
								style: style
							}
						)

						font = face.load().then(loadedFace => {
							document.fonts.add(loadedFace)
							return document.fonts.load(`16px ${name}`)
						})
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
			<div class="text-5xl" style:font-family={[name, "Adobe NotDef"]} style:font-weight={weight} style:font-style={style}>
				<slot name="ucsur" />
			</div>
			{:else if ascii}
			<div class="text-5xl" style:font-family={[name, "Adobe NotDef"]} style:font-weight={weight} style:font-style={style}>
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

		{err}
	</span>
	{/await}
	</div>
</div>
