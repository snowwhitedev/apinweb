<template>
  <div>
    <h3 class="font-bold text-3xl text-left">Add Agency</h3>
    <form class="text-left mt-4">
      <div class="form-input">
        <p class="font-semibold text">Name&nbsp;&nbsp;</p>
        <input class="border border-teal-500 rounded p-1" />
      </div>
      <div class="form-input">
        <p class="font-semibold text mt-2">Category&nbsp;&nbsp;</p>
        <input class="border border-teal-500 rounded p-1" />
      </div>
      <div class="form-input">
        <p class="font-semibold text mt-2">Address&nbsp;&nbsp;</p>
        <input class="border border-teal-500 rounded p-1" />
      </div>
      <div class="form-input">
        <p class="font-semibold text mt-2">Email&nbsp;&nbsp;</p>
        <input class="border border-teal-500 rounded p-1" />
      </div>
      <div class="form-input">
        <p class="font-semibold text mt-2">Telephone&nbsp;&nbsp;</p>
        <input class="border border-teal-500 rounded p-1" />
      </div>
      <div class="form-input">
        <button
          class="bg-transparent hover:bg-teal-500 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded float-right mt-4"
        >
          Add
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.form-input {
  width: 100%;
  max-width: 320px;
}
.form-input input {
  width: 100%;
}
</style>
