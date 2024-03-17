<script lang="ts">
	import fonts from '$lib/all.json'
	import TextPreview from '../../text-preview.svelte'

	export let data
	let selectedStyle: number = 0
	const font = fonts[data.name as keyof typeof fonts]
</script>

<div class="flex h-screen">
	<div class="bg-orange-100 grow">
	<div class="flex flex-col items-center px-4 h-screen overflow-scroll">
		<div class="max-w-screen-lg w-full mt-16">
		<h1 class="font-bold text-5xl">{font.name}</h1>
		<p class="text-xl py-4">kulupu nasin ni li tan {font.designer}</p>

		<TextPreview name={font.fonts[0].name} url={"/families/"+data.name+"/"+font.fonts[0].filename} ucsur={font.ucsurCodepoints} ascii={font.asciiLigatures} weight={`${font.fonts[0].weight}`} style={font.fonts[0].style.toLowerCase()}>
			<div slot="ucsur" class="text-7xl text-center py-8">
			󱤑󱦐󱥖󱥅󱥸󱤐󱤂󱦑󱤧󱥠󱤉󱥕󱤙󱥵󱤼󱦜
			</div>
			<div slot="latin" class="text-7xl text-center py-8">
			jan [sama olin namako jaki ala] li sitelen e pu kepeken wawa mute.
			</div>
		</TextPreview>


		<hr class="h-1 mx-auto my-4 bg-orange-200 border-0 rounded md:my-10" />
		<h2 class="text-3xl font-bold">nasin lukin</h2>
		{#each font.fonts as {name, weight, style, filename}}

		<div class="py-6">
			<h3 class="text-lg">{name} {weight}</h3>
			<TextPreview name={name} url={"/families/"+data.name+"/"+filename} ucsur={font.ucsurCodepoints} ascii={font.asciiLigatures} weight={weight.toString()} style={style.toLowerCase()}>
				<div slot="ucsur" class="text-6xl">
				󱤑󱦐󱥖󱥅󱥸󱤐󱤂󱦑󱤧󱥠󱤉󱥕󱤙󱥵󱤼󱦜
				</div>
				<div slot="latin" class="text-6xl">
				jan [sama olin namako jaki ala] li sitelen e pu kepeken wawa mute.
				</div>
			</TextPreview>
			<a class="text-md pt-6 text-orange-600 underline block" href={"/families/"+data.name+"/"+filename} download>o kama jo</a>
		</div>

		{/each}

		<hr class="h-1 mx-auto my-4 bg-orange-200 border-0 rounded md:my-10" />
		<select bind:value={selectedStyle} class="p-1 rounded-lg bg-orange-300">
			{#each Object.entries(font.fonts) as [idx, {name}]}
			<option value={idx}>{name}</option>
			{/each}
		</select>

		<div class="py-4">
			<h3 class="text-lg">{font.fonts[selectedStyle].name} {font.fonts[selectedStyle].weight} lon suli 48px</h3>
			<TextPreview name={font.fonts[selectedStyle].name} url={"/families/"+data.name+"/"+font.fonts[selectedStyle].filename} ucsur={font.ucsurCodepoints} ascii={font.asciiLigatures} weight={font.fonts[selectedStyle].weight.toString()} style={font.fonts[selectedStyle].style.toLowerCase()}>
				<div slot="ucsur" class="text-[48px]">
				󱤑󱦐󱥖󱥅󱥸󱤐󱤂󱦑󱤧󱥠󱤉󱥕󱤙󱥵󱤼󱦜
				</div>
				<div slot="latin" class="text-[48px]">
				jan [sama olin namako jaki ala] li sitelen e pu kepeken wawa mute.
				</div>
			</TextPreview>
		</div>

		<div class="py-4">
			<h3 class="text-lg">{font.fonts[selectedStyle].name} {font.fonts[selectedStyle].weight} lon suli 36px</h3>
			<TextPreview name={font.fonts[selectedStyle].name} url={"/families/"+data.name+"/"+font.fonts[selectedStyle].filename} ucsur={font.ucsurCodepoints} ascii={font.asciiLigatures} weight={font.fonts[selectedStyle].weight.toString()} style={font.fonts[selectedStyle].style.toLowerCase()}>
				<div slot="ucsur" class="text-[36px]">
				󱤑󱦐󱥖󱥅󱥸󱤐󱤂󱦑󱤧󱥠󱤉󱥕󱤙󱥵󱤼󱦜
				</div>
				<div slot="latin" class="text-[36px]">
				jan [sama olin namako jaki ala] li sitelen e pu kepeken wawa mute.
				</div>
			</TextPreview>
		</div>

		<div class="py-4">
			<h3 class="text-lg">{font.fonts[selectedStyle].name} {font.fonts[selectedStyle].weight} lon suli 32px</h3>
			<TextPreview name={font.fonts[selectedStyle].name} url={"/families/"+data.name+"/"+font.fonts[selectedStyle].filename} ucsur={font.ucsurCodepoints} ascii={font.asciiLigatures} weight={font.fonts[selectedStyle].weight.toString()} style={font.fonts[selectedStyle].style.toLowerCase()}>
				<div slot="ucsur" class="text-[32px]">
				󱤑󱦐󱥖󱥅󱥸󱤐󱤂󱦑󱤧󱥠󱤉󱥕󱤙󱥵󱤼󱦜
				</div>
				<div slot="latin" class="text-[32px]">
				jan [sama olin namako jaki ala] li sitelen e pu kepeken wawa mute.
				</div>
			</TextPreview>
		</div>

		<div class="py-4">
			<h3 class="text-lg">{font.fonts[selectedStyle].name} {font.fonts[selectedStyle].weight} lon suli 22px</h3>
			<TextPreview name={font.fonts[selectedStyle].name} url={"/families/"+data.name+"/"+font.fonts[selectedStyle].filename} ucsur={font.ucsurCodepoints} ascii={font.asciiLigatures} weight={font.fonts[selectedStyle].weight.toString()} style={font.fonts[selectedStyle].style.toLowerCase()}>
				<div slot="ucsur" class="text-[22px]">
				󱤑󱦐󱥖󱥅󱥸󱤐󱤂󱦑󱤧󱥠󱤉󱥕󱤙󱥵󱤼󱦜
				</div>
				<div slot="latin" class="text-[22px]">
				jan [sama olin namako jaki ala] li sitelen e pu kepeken wawa mute.
				</div>
			</TextPreview>
		</div>

		<div class="py-4">
			<h3 class="text-lg">{font.fonts[selectedStyle].name} {font.fonts[selectedStyle].weight} lon suli 16px</h3>
			<TextPreview name={font.fonts[selectedStyle].name} url={"/families/"+data.name+"/"+font.fonts[selectedStyle].filename} ucsur={font.ucsurCodepoints} ascii={font.asciiLigatures} weight={font.fonts[selectedStyle].weight.toString()} style={font.fonts[selectedStyle].style.toLowerCase()}>
				<div slot="ucsur" class="text-[16px]">
				󱤑󱦐󱥖󱥅󱥸󱤐󱤂󱦑󱤧󱥠󱤉󱥕󱤙󱥵󱤼󱦜
				</div>
				<div slot="latin" class="text-[16px]">
				jan [sama olin namako jaki ala] li sitelen e pu kepeken wawa mute.
				</div>
			</TextPreview>
		</div>

		<h2 class="text-3xl pt-8 font-bold">nimi ale</h2>

		<div class="py-4">
			<h3 class="text-xl">nimi pu ale</h3>
			<TextPreview name={font.fonts[selectedStyle].name} url={"/families/"+data.name+"/"+font.fonts[selectedStyle].filename} ucsur={font.ucsurCodepoints} ascii={font.asciiLigatures} weight={font.fonts[selectedStyle].weight.toString()} style={font.fonts[selectedStyle].style.toLowerCase()}>
				<div slot="ucsur" class="text-[0.5in]">
				󱤀󱤁󱤂󱤃󱤄󱤅󱤆󱤇󱤈<br/>
				󱤉󱤊󱤋<br/>
				󱤌󱤍󱤎󱤏<br/>
				󱤐󱤑󱤒󱤓<br/>
				󱤔󱤕󱤖󱤗󱤘󱤙󱤚󱤛󱤜󱤝󱤞󱤟󱤠<br/>
				󱤡󱤢󱤣󱤤󱤥󱤦󱤧󱤨󱤩󱤪󱤫󱤬󱤭󱤮󱤯<br/>
				󱤰󱤱󱤲󱤳󱤴󱤵󱤶󱤷󱤸󱤹󱤺󱤻󱤼<br/>
				󱤽󱤾󱤿󱥀󱥁󱥂󱥃<br/>
				󱥄󱥅󱥆<br/>
				󱥇󱥈󱥉󱥊󱥋󱥌󱥍󱥎󱥏󱥐󱥑󱥒󱥓󱥔󱥕<br/>
				󱥖󱥗󱥘󱥙󱥚󱥛󱥜󱥝󱥞󱥟󱥠󱥡󱥢󱥣󱥤󱥥󱥦<br/>
				󱥧󱥨󱥩󱥪󱥫󱥬󱥭󱥮<br/>
				󱥯󱥰󱥱󱥲󱥳󱥴<br/>
				󱥴󱥵󱥶󱥷<br/>
				</div>
				<div slot="latin" class="text-[0.5in]">
				a akesi ala alasa ale anpa ante anu awen <br/>
				e en esun <br/>
				ijo ike ilo insa <br/>
				jaki jan jelo jo <br/>
				kala kalama kama kasi ken kepeken kili kiwen ko kon kule kulupu kute <br/>
				la lape laso lawa len lete li lili linja lipu loje lon luka lukin lupa <br/>
				ma mama mani meli mi mije moku moli monsi mu mun musi mute <br/>
				nanpa nasa nasin nena ni nimi noka <br/>
				o olin ona <br/>
				open pakala pali palisa pan pana pi pilin pimeja pini pipi poka poki pona pu <br/>
				sama seli selo seme sewi sijelo sike sin sina sinpin sitelen sona soweli suli suno supa suwi <br/>
				tan taso tawa telo tenpo toki tomo tu <br/>
				unpa uta utala walo wan waso <br/>
				waso wawa weka wile <br/>
				</div>
			</TextPreview>
		</div>

		<div class="py-4">
			<h3 class="text-xl">nimi ku suli</h3>
			<TextPreview name={font.fonts[selectedStyle].name} url={"/families/"+data.name+"/"+font.fonts[selectedStyle].filename} ucsur={font.ucsurCodepoints} ascii={font.asciiLigatures} weight={font.fonts[selectedStyle].weight.toString()} style={font.fonts[selectedStyle].style.toLowerCase()}>
				<div slot="ucsur" class="text-[0.5in]">
				󱥹󱥺󱥻󱥼󱥽󱥾󱥿󱦀󱦁󱦂󱦃󱦄󱦅󱦆󱦇󱦈
				</div>
				<div slot="latin" class="text-[0.5in]">
				kin oko kipisi leko monsuta tonsi jasima kijetesantakalu soko meso epiku kokosila lanpan n misikeke ku
				</div>
			</TextPreview>
		</div>

		<div class="py-4">
			<h3 class="text-xl">nimi ku lili</h3>
			<TextPreview name={font.fonts[selectedStyle].name} url={"/families/"+data.name+"/"+font.fonts[selectedStyle].filename} ucsur={font.ucsurCodepoints} ascii={font.asciiLigatures} weight={font.fonts[selectedStyle].weight.toString()} style={font.fonts[selectedStyle].style.toLowerCase()}>
				<div slot="ucsur" class="text-[0.5in]">
				󱦠󱦡󱦢󱦣
				</div>
				<div slot="latin" class="text-[0.5in]">
				pake apeja majuna powe
				</div>
			</TextPreview>
		</div>

		<div class="py-4">
			<h3 class="text-xl">sitelen ante</h3>
			<TextPreview name={font.fonts[selectedStyle].name} url={"/families/"+data.name+"/"+font.fonts[selectedStyle].filename} ucsur={font.ucsurCodepoints} ascii={font.asciiLigatures} weight={font.fonts[selectedStyle].weight.toString()} style={font.fonts[selectedStyle].style.toLowerCase()}>
				<div slot="ucsur" class="text-[0.5in]">
				、「」︑﹁﹂󱦐󱦑󱦜 󱦝
				</div>
				<div slot="latin" class="text-[0.5in]">
				、「」︑﹁﹂()&#123;&#125;.:
				</div>
			</TextPreview>
		</div>

		</div>
	</div>
	</div>
</div>

