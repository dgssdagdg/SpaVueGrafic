<template>
    <div class="pagination">
        <button @click="$emit('change-page', 'minus')" class="pagination-btn">prev</button>
        <div class="pagination-numbers">
            <div
                v-for="activePage in maxPage"
                :key="activePage"
                :class="[activePage === page ? '_pagination-number-active' : '']"
                @click="$emit('change-page', activePage)"
                class="pagination-number"
            >
                {{ activePage }}
            </div>
        </div>
        <button @click="$emit('change-page', 'plus')" class="pagination-btn">next</button>
    </div>
</template>

<script>
export default {
    props: {
        maxPage: {
            type: Number,
            required: true
        },
        page: {
            type: Number,
            default: 1
        }
    },
    name: 'my-pagination'
}
</script>

<style lang="scss" scoped>
.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}
.pagination-btn {
    border: 1px solid #000;
    padding: 5px 10px;
    border-radius: 5px;
    transition: all .3s ease 0s;
    &:hover {
        background-color: rgb(175, 222, 241);
    }
}
.pagination-numbers {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
}
.pagination-number {
    padding: 10px;
    border: 1px solid #000;
    cursor: pointer;
    transition: all .3s ease 0s;
    &:hover {
        background-color: rgb(175, 222, 241);
    }
}
._pagination-number-active {
    background-color: rgb(175, 222, 241);
}
</style>