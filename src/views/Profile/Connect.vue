<template>
  <form class="profile-form shadow-md rounded">
    <div class="form-input">
      <label for="form-label">Email</label>
      <input type="text" placeholder="Email" />
    </div>
    <div class="form-input">
      <label for="form-label">Password</label>
      <input type="password" placeholder="Password" />
    </div>
    <div class="form-input">
      <button
        type="button"
        class="bg-teal-500 text-white font-semibold rounded p-2"
      >
        Connect
      </button>
    </div>
    <div class="form-input">
      <button
        type="button"
        class="bg-teal-500 text-white font-semibold rounded p-2"
        @click="$router.push({ path: `/profile/register` })"
      >
        Create account
      </button>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
.profile-form {
  position: relative;
  width: 300px;
  max-width: 90%;
  margin: 0 auto;
  margin-top: -50px;
  z-index: 999;
  background: #ffffff;
  padding: 60px 10px 40px 10px;
  /* border: 1px solid #aaaaaa; */
}
.form-input {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 30px;
}
.form-input input {
  border: 1px solid #2c7a7b;
  border-radius: 5px;
  padding: 5px 10px;
}
.form-input:first-child {
  margin-top: 0;
}
.form-input input:focus {
  outline: none;
}
.form-input button:focus {
  outline: none;
}
</style>
