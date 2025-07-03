export default function useFilterDataArray(filters, dataArray) {
  let finalData = dataArray.value.data
  for(let filter in filters) {
    let type = filters[filter].typeFilter
    
    //Фильтрация по числу больше меньше
    if(type == 'number' && (filters[filter].from || filters[filter].to)) {
        const from = filters[filter].from ? filters[filter].from : 0;
        const to = filters[filter].to ? filters[filter].to : 'all';

        //Фильтрация в том случае когда to задано
        if(to != 'all') {
            finalData = finalData.filter(item => {
                return Math.round(item[filters[filter].for]) >= Math.round(from) && Math.round(item[filters[filter].for]) <= Math.round(to)
            })
        } else { //Фильтрация в том случае когда to не задано
            finalData = finalData.filter(item => {
                return Math.round(item[filters[filter].for]) >= Math.round(from)
            })
        }

    }
    //Фильрация по дате больше меньше
    if (type === 'date' && (filters[filter].from || filters[filter].to)) {
        const from = filters[filter].from ? new Date(filters[filter].from) : null;
        const to = filters[filter].to ? new Date(filters[filter].to) : null;
        
        finalData = finalData.filter(item => {
            const itemDate = new Date(item[filters[filter].for]);
            
            // Проверяем, что дата корректна
            if (isNaN(itemDate.getTime())) return false;
            
            // Фильтрация
            let valid = true;
            if (from) valid = valid && itemDate >= from;
            if (to) {
            // Добавляем 1 день к конечной дате, чтобы включить весь день
            const toDatePlusDay = new Date(to);
            toDatePlusDay.setDate(to.getDate() + 1);
            valid = valid && itemDate < toDatePlusDay;
            }
            return valid;
        });
    }
  }
  //Возврощаем масив со всеми изменениями
  return finalData
}