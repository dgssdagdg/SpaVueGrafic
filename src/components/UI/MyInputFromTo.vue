<script>
export default {
  props: {
      data: {
          type: [Object, Array]
      }
  },
  name: 'my-input-from-to'
}
</script>

<template>
<div class="filter-from-to">
    <div class="filter-from-to-title">{{ data.title }}</div>
    <div v-if="data.typeFilter == 'number'" class="filter-from-to-inputs">
      <my-input
        v-model="data.from"
        placeholder="от"
        type="number"
      ></my-input>

      <my-input
        v-model="data.to"
        placeholder="до"
        type="number"
      ></my-input>
    </div>
    <div v-if="data.typeFilter == 'date'" class="filter-from-to-inputs">
      <my-input
        v-model="data.from"
        type="date"
        class="filter-from-to-input"
      ></my-input>
      <my-input 
        v-model="data.to" 
        type="date" 
        class="filter-from-to-input"
      ></my-input>
    </div>
</div>
</template>

<style lang="scss" scoped>
.filter-from-to {
  grid-column-start: span 4;
}
.filter-from-to-title {
  margin-bottom: 15px;
  font-weight: 600;
}
.filter-from-to-inputs {
  display: flex;
  align-items: center;
  gap: 20px;
}
.filter-from-to-input {
  width: 100%;
  height: 30px;
  border: 1px solid #000;
  padding: 0 10px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
</style>