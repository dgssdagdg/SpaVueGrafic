const API_HOST = 'http://109.73.206.144:6969';
const API_KEY = 'E6kUTYrYwZq2tN4QEtyzsbEBk3ie';

export default async function useFetchData(endpoint, dateFrom, dateTo, page, limit = 25) {
  try {
    const url = new URL(`${API_HOST}${endpoint}`);
    url.searchParams.append('dateFrom', dateFrom);
    if(dateTo){ url.searchParams.append('dateTo', dateTo);}
    url.searchParams.append('page', page);
    url.searchParams.append('limit', limit);
    url.searchParams.append('key', API_KEY);

    const response = await fetch(url.toString());
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    return await response.json(); // Возвращаем данные, а не Promise
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}