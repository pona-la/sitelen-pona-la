<script>
  import "../app.css";
</script>

<div class="flex flex-col">
  <div class="sticky top-0 text-5xl bg-orange-300 p-4 h-20">
    <div class="flex items-center justify-between flex-row">
      <div class="flex-1"><a href="/">󱥭󱥠</a></div>
      <!-- <input class="h-full max-h-96 bg-orange-50 rounded-lg" /> -->
      <div class="flex-1"></div>
    </div>
  </div>
  <div class="grow">
    <slot />
  </div>
</div>
