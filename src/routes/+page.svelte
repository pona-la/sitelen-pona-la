<script lang="ts">
    import VirtualList from 'svelte-tiny-virtual-list';
    import TextPreview from './text-preview.svelte';
    import data from '$lib/all.json'

    let selectedLicense: string | undefined
    let selectedStyle: string | undefined
    let wantsAscii = false
    let wantsUcsur = false
    let wantsCartouches = false
    let wantsCombine = false
    let wantsExtension = false
    let wantsVariants = false
    let wantsRandom = false

    let viewingSidebar = false

    function toggleSidebar() {
      viewingSidebar = !viewingSidebar
    }

    const licenses = [... new Set(Object.values(data).map(x => x.license))].toSorted()

    let entries = Object.entries(data)

    let filtered: typeof entries
    $: filtered = entries
        .filter(x => selectedLicense === undefined || selectedLicense === "ale" || x[1].license === selectedLicense)
        .filter(x => selectedStyle === undefined || selectedStyle === "ale" || x[1].category === selectedStyle)
        .filter(x => !wantsAscii || x[1].asciiLigatures)
        .filter(x => !wantsUcsur || x[1].ucsurCodepoints)
        .filter(x => !wantsCartouches || x[1].cartouches)
        .filter(x => !wantsCombine || x[1].combinedGlyphs)
        .filter(x => !wantsExtension || x[1].extendedGlyphs)
        .filter(x => !wantsVariants || x[1].variantGlyphs)
        .filter(x => !wantsRandom || x[1].randomizedGlyphs)
</script>

<svelte:head>
    <title>tomo sitelen</title> 
</svelte:head>

<div class="flex">
  <div class="md:h-screen {viewingSidebar ? "" : "max-w-96 h-full sticky top-20"} text-xl bg-orange-200 dark:bg-stone-950 dark:text-white {viewingSidebar ? "fixed bottom-0 left-0 right-0 pb-16" : "hidden"} md:block p-4 space-y-4">
    <div>
      <div class="font-bold">lipu lawa</div>
      <select bind:value={selectedLicense} class="p-1 rounded-lg bg-orange-100 dark:bg-stone-900 w-full">
        <option value="ale">lipu lawa ale</option>
        {#each licenses as license}
        <option value={license}>
          {license}
        </option>
        {/each}
      </select>
    </div>

    <div>
      <div class="font-bold">nasin lukin</div>
      <select bind:value={selectedStyle} class="p-1 rounded-lg bg-orange-100 dark:bg-stone-900 w-full">
        <option value="ale">nasin lukin ale</option>
        <option value="LINJA_LUKA">linja luka</option>
        <option value="LINJA_ILO">linja ilo</option>
        <option value="KIWEN">kiwen</option>
        <option value="LEKO">leko</option>
      </select>
    </div>

    <div>
      <div class="font-bold">ken pi nasin sitelen</div>
      <div class="flex flex-col">
        <label>
          <input type="checkbox" bind:checked={wantsAscii} />
          nimi lon sitelen Latin li ken kama sitelen pona
        </label>
        <label>
          <input type="checkbox" bind:checked={wantsUcsur} />
          nasin sitelen li sona e sitelen UCSUR
        </label>
        <label>
          <input type="checkbox" bind:checked={wantsCartouches} />
          nimi li ken sitelen poki
        </label>
        <label>
          <input type="checkbox" bind:checked={wantsCombine} />
          nimi tu li ken kama wan
        </label>
        <label>
          <input type="checkbox" bind:checked={wantsExtension} />
          nimi li ken kama suli
        </label>
        <label>
          <input type="checkbox" bind:checked={wantsVariants} />
          nimi li ken ante lukin
        </label>
        <label>
          <input type="checkbox" bind:checked={wantsRandom} />
          nimi "jaki" en nimi sama li ante lukin
        </label>
      </div>
    </div>
  </div>

  <button type="button" class="fixed bottom-3 left-3 z-50 md:hidden bg-orange-400 p-2 rounded-lg" on:click={toggleSidebar}>wile sina</button>

  <div class="bg-orange-100 dark:bg-stone-900 px-4 grow">
    <div class="flex flex-col items-center">
      <div class="max-w-screen-lg w-full">
        {#each filtered as [key, info]}
        <a href="/font/{key}">
          <div class="bg-orange-300 dark:bg-stone-800 dark:border-2 dark:border-orange-500 dark:text-white my-10 p-4 rounded-lg">
            <div>
              <span class="font-bold text-lg">{info.name}</span>
              {info.version}
              <span class="mx-1">|</span>
              <span>nasin {info.fonts.length}</span>
              <span class="mx-4">|</span>
              <span>tan {info.designer}</span>
            </div>
            <TextPreview name={info.fonts[0].name} url={"/families/"+key+"/"+info.fonts[0].filename} ucsur={info.ucsurCodepoints} ascii={info.asciiLigatures} weight={`${info.fonts[0].weight}`} style={info.fonts[0].style.toLowerCase()}>
              <div slot="ucsur">
                󱤑󱦐󱥖󱥅󱥸󱤐󱤂󱦑󱤧󱥠󱤉󱥕󱤙󱥵󱤼󱦜
              </div>
              <div slot="latin">
                jan [sama olin namako jaki ala] li sitelen e pu kepeken wawa mute.
              </div>
            </TextPreview>
          </div>
        </a>
        {/each}
        <div class="pb-8 md:hidden"></div>
      </div>
    </div>
  </div>
</div>

