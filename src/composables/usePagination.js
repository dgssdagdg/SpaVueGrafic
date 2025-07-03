import { ref } from 'vue';

export default function usePagination(initialPage = 1, fetchCallback) {
    const page = ref(initialPage);
    const maxPage = ref(10);
    const isLoading = ref(false);

    async function changePage(activePage) {
        if (typeof activePage === 'number') {
            page.value = activePage;
        } else if (activePage === 'plus' && page.value < maxPage.value) {
            page.value += 1;
        } else if (activePage === 'minus' && page.value > 1) {
            page.value -= 1;
        }

        isLoading.value = true;
        try {
            await fetchCallback(page.value);
        } finally {
            isLoading.value = false;
        }
    }

    return {
        page,
        maxPage,
        isLoading,
        changePage,
    };
}