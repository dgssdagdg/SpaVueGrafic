<template>
    <input :value="modelValue" @input="updateInput" type="text" class="filter-from-to-input">
</template>

<script>
export default {
    props: {
        modelValue: [String, Number, Date]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    },
    name: 'my-input'
}
</script>

<style scoped>
.filter-from-to-input {
  width: 100%;
  height: 30px;
  border: 1px solid #000;
  padding: 0 10px;
}
</style>