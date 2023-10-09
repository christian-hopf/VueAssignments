<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !this.email.isValid }">
      <label for="email">Enter your email address</label>
      <input
        type="email"
        id="email"
        v-model.trim="email.value"
        @blur="resetValidity('email')"
      />
      <p v-if="!email.isValid">
        Please enter a valid email address of the form 'name@domain.com'
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !this.message.isValid }">
      <label for="message">Message</label>
      <textarea
        id="message"
        rows="5"
        v-model.trim="message.value"
        @blur="resetValidity('message')"
      ></textarea>
      <p v-if="!message.isValid">Please enter a to send to this coach</p>
    </div>
    <div class="actions">
      <base-button>Send Message</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: {
        value: '',
        isValid: true,
      },
      message: {
        value: '',
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    resetValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.email.value === '' || !this.email.value.includes('@')) {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.message.value === '') {
        this.message.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
