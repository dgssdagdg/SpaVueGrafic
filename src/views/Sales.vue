<script setup>
import usePagination from '@/composables/usePagination';
import useFetchData from '@/composables/useFetchData'
import useFilterDataArray from '@/composables/useFilterDataArray';
import useChartData from '@/composables/useChartData';
import { ref, onMounted, reactive } from "vue";

//Информация по фильтру
const filters  = reactive({
    discountPercent: {
        title: 'Discount Percent',
        from: ref(),
        to: ref(),
        for: 'discount_percent',
        typeFilter: 'number'
    },
    totalPrice: {
        title: 'Total Price',
        from: ref(),
        to: ref(),
        for: 'total_price',
        typeFilter: 'number'
    },
    forPay: {
        title: 'For Pay',
        from: ref(),
        to: ref(),
        for: 'for_pay',
        typeFilter: 'number'
    },
    date: {
        title: 'Date',
        from: ref(),
        to: ref(),
        for: 'date',
        typeFilter: 'date'
    },
    lastChangeDate: {
        title: 'Last Change Date',
        from: ref(),
        to: ref(),
        for: 'last_change_date',
        typeFilter: 'date'
    }
})

const dataArray = ref([]); // Переменная для хранения данных
const filtratedDataArray = ref([]) // Переменная для хранения фильтрованных данных

//Задаем данные переменной
onMounted(async () => {
  try {
    dataArray.value = await useFetchData('/api/sales', '2021-01-01', '2025-03-31', page.value);
    filtratedDataArray.value = useFilterDataArray(filters, dataArray)
    console.log(dataArray.value);
    
  } catch (e) {
    console.error(e);
  }
});

// Колбэк для загрузки данных
const fetchIncomes = async (page) => {
  dataArray.value = await useFetchData('/api/sales', '2021-01-01', '2025-03-31', page);
  filtratedDataArray.value = useFilterDataArray(filters, dataArray)
};

//Фильртруем по нажатию на кнопку
function activeFilter() {
  filtratedDataArray.value = useFilterDataArray(filters, dataArray)
}

// Инициализация пагинации
const { page, maxPage, isLoading, changePage } = usePagination(1, fetchIncomes);

// Получаем данные для графика
const { chartData } = useChartData(filtratedDataArray, 'discount_percent', 'Продажи')
</script>

<template>
<div class="grafic">
  <BarChart :chartData="chartData" style="width: 100%;"></BarChart>
</div>
<div class="main-body">
    <my-filter
      @active-btn="activeFilter"
      :filters="filters"
    ></my-filter>

    <div class="main-body-end">
      <my-table
        :datas="filtratedDataArray"
      ></my-table>

      <my-pagination
          :maxPage="maxPage"
          :page="page"
          @change-page="changePage"
      ></my-pagination>
    </div>
</div>
</template>

<style lang="scss" scoped>
.main-body {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}
.main-body-end {
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>