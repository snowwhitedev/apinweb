<template>
  <form class="profile-form shadow-md rounded">
    <div class="form-input">
      <label for="form-label">Email</label>
      <input type="text" placeholder="Email" v-model="email" />
    </div>
    <div>
      <input type="hidden" name="userName" v-model="email" />
      <input type="hidden" name="language_id" v-model="languageId" />
      <input type="hidden" name="currency_id" v-model="currencyId" />
      <input type="hidden" name="status" v-model="status" />
      <input type="hidden" name="role" v-model="role" />
    </div>
    <div v-if="showResult" class="mt-1">
      <p v-if="!isError" class="text-teal-700 font-semibold">
        Account was registered!
      </p>
      <p v-if="isError" class="text-red-700 font-semibold rounded">
        Oops, Something went wrong!
      </p>
    </div>
    <div class="form-input">
      <button
        type="button"
        class="bg-teal-500 text-white font-semibold rounded register-btn"
        @click="onRegister"
      >
        <spinner v-if="isLoading" color="#ffffff" :width="36" :height="36" />
        <span v-if="!isLoading">Create account</span>
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import axios from "../../axios";
import Spinner from "../../components/UI/Spinner.vue";
export default {
  components: {
    Spinner
  },
  setup() {
    const email = ref();
    const languageId = ref("1");
    const currencyId = ref("Eur");
    const status = ref("10");
    const role = ref("authentificated");
    const showResult = ref(false);
    const isLoading = ref(false);
    const isError = ref(false);

    async function onRegister() {
      isLoading.value = true;
      showResult.value = false;
      const sendData = {
        email: email.value,
        username: email.value,
        language_id: languageId.value,
        currency_id: currencyId.value,
        status: status.value,
        role: role.value
      };

      try {
        await axios.post(`user`, sendData);
        isError.value = false;
      } catch {
        isError.value = true;
      }
      showResult.value = true;
      isLoading.value = false;
    }

    return {
      email,
      languageId,
      currencyId,
      status,
      role,
      showResult,
      isError,
      isLoading,
      onRegister
    };
  }
};
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
  padding: 40px 10px 40px 10px;
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
.register-btn {
  height: 48px;
}
</style>
