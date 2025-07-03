<template>
<div class="main-filter">
    <div class="main-filter-title">Фильтры</div>
    <div class="main-filter-body">
    <my-input-from-to
        v-for="(filter, index) in filters"
        :key="index"
        :data="filter"
    ></my-input-from-to>
    <button
        @click="$emit('active-btn')"
        type="button"
        class="main-filter-btn"
    >Сохронить</button>
    </div>
</div>
</template>

<script>
export default {
    props: {
        filters: Object
    },
    name: 'my-filter'
}
</script>

<style lang="scss" scoped>
.main-filter {
  background-color: rgb(228, 240, 245);
  padding: 20px;
  border-radius: 10px;
}
.main-filter-title {
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 20px;
}
.main-filter-body {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}
.main-filter-btn {
  width: 100%;
  height: 70px;
  border: 2px solid #000;
  padding: 0 10px;
  font-weight: 600;
  grid-column-start: span 12;
  border-radius: 10px;
  transition: all .3s ease 0s;
  &:hover {
    color: gray;
    border-color: gray;
  }

}
</style>