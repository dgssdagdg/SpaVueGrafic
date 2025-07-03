<script>
export default {
    props: {
        datas: {
            type: [Object, Array],
        }
    },
    name: 'my-table'
}
</script>

<template>
<table class="table">
    <thead>
        <tr>
            <th 
              v-for="(date, index) in datas[0]" 
              :key="index"
              scope="col"
            >{{ index }}</th>
        </tr>
    </thead>
    <tbody>
        <tr v-if="datas.length === 0">
            <td colspan="11">Данные загружаются...</td>
        </tr>
        <tr
            v-else
            v-for="(data, index) in datas"
            :key="index"
        >
            <th
              v-for="(dat, index) in data"
              :key="index"
            >{{ dat }}</th>
        </tr>
    </tbody>
</table>
</template>

<style lang="scss" scoped>
table {
    max-width: 100%;
    width: 100%;
    display: block;
    overflow-x: auto;
    border-collapse: collapse;
    border: 2px solid rgb(140 140 140);
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: 500;
}

thead {
  background-color: rgb(228 240 245);
}
th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

td:last-of-type {
  text-align: center;
}

tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}

tfoot th {
  text-align: right;
}

tfoot td {
  font-weight: bold;
}
</style>