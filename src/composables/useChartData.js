import { computed } from 'vue';

export default function useChartData(dataArray, objName, label) {

    const chartData = computed(() => {
        // Инициализируем массив для 12 месяцев с нулевыми значениями
        const monthlyData = new Array(12).fill(0);
        
        dataArray.value.forEach(el => {
        const elDate = new Date(el.date);
        const monthNumber = elDate.getMonth(); // 0-11
        const quantity = Number(el[objName]) || 0;
        
        monthlyData[monthNumber] += quantity;
        });
        
        return {
        labels: [
            "Январь", "Февраль", "Март", "Апрель", 
            "Май", "Июнь", "Июль", "Август", 
            "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
        ],
        datasets: [{
            label,
            data: monthlyData,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
        };
    });

    return {
        chartData
    };
}