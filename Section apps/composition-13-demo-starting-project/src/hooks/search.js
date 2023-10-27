import { search } from 'core-js/fn/symbol';
import { ref, computed, watch } from 'vue';

export default function useSearch(items, searchProperty) {
  const enteredSearchTerm = ref('');
  const activeSearchTerm = ref('');
  const availableItems = computed(function () {
    let filteredItems = [];
    if (activeSearchTerm.value) {
      filteredItems = items.value.filter((item) =>
        item[searchProperty].includes(activeSearchTerm.value)
      );
    } else if (items.value) {
      filteredItems = items.value;
    }
    return filteredItems;
  });

  watch(enteredSearchTerm, function (newVal) {
    setTimeout(() => {
      if (newVal === enteredSearchTerm.value) {
        activeSearchTerm.value = newVal;
      }
    }, 300);
  });

  function updateSearch(val) {
    enteredSearchTerm.value = val;
  }

  return {
    enteredSearchTerm,
    availableItems,
    updateSearch,
  };
}
