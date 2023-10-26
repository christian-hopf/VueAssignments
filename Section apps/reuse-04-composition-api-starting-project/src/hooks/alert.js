import { ref } from 'vue';

export default function useAlert(initVisibility = false) {
  const alertIsVisible = ref(initVisibility);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }

  return [alertIsVisible, showAlert, hideAlert];
}
