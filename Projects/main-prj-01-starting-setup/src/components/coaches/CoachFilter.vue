<template>
  <base-card>
    <h2>Find a Coach</h2>
    <span class="filter-option">
      <label for="frontend">Frontend</label>
      <input type="checkbox" id="frontend" checked @change="setFilter" />
    </span>
    <span class="filter-option"
      ><label for="Backend">Backend</label>
      <input type="checkbox" id="backend" checked @change="setFilter" />
    </span>
    <span class="filter-option"
      ><label for="Career">Career</label>
      <input type="checkbox" id="career" checked @change="setFilter" />
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['update-filter'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const input = event.target.id;
      const checked = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [input]: checked,
      };
      this.filters = updatedFilters;
      this.$emit('update-filter', updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
