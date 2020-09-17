<template>
  <div id="nav">
    <div class="bg-white h-12 p-4 flex justify-around">
      <div class="text-white">
        <router-link to="/home">
          <svg viewBox="0 0 20 20" fill="currentColor" class="search w-6 h-6">
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </router-link>
      </div>
      <div class="text-white">
        <router-link to="/offers">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            class="receipt-tax w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
              clip-rule="evenodd"
            />
          </svg>
        </router-link>
      </div>
      <div class="text-white">
        <router-link to="/help">
          <svg viewBox="0 0 20 20" fill="currentColor" class="menu w-6 h-6">
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
#nav {
  padding: 10px !important;
}
</style>
