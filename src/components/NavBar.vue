<template>
<div class="header">
    <div class="header-logo">Vue Grafic</div>
    <nav class="header-nav">
        <ul class="header-list">
            <li><RouterLink
                :class="{'_header-link-active': route.name === 'Incomes'}"
                to="/incomes"
                class="header-link"
                >Доходы</RouterLink>
            </li>
            <li><RouterLink 
                :class="{'_header-link-active': route.name === 'Orders'}"
                to="/orders" 
                class="header-link"
                >Заказы</RouterLink>
            </li>
            <li><RouterLink 
                :class="{'_header-link-active': route.name === 'Sales'}"
                to="/sales" 
                class="header-link"
                >Продажи</RouterLink>
            </li>
            <li><RouterLink
                :class="{'_header-link-active': route.name === 'Stocks'}"
                to="/stocks" 
                class="header-link"
                >Склады</RouterLink>
            </li>
        </ul>
    </nav>
</div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    flex-direction: column;
    min-width: 30%;
    background-color: #fff;
    min-height: 100%;
    padding: 40px 20px;
    border-right: 2px solid gray;
}
.header-logo {
    font-size: 45px;
    line-height: calc(49 / 45 * 100%);
    font-weight: 600;
    margin-bottom: 100px;
}
.header-nav {
}
.header-list {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    & li {
        width: 100%;
        display: flex;
    }
}
.header-link {
    font-weight: 600;
    color: black;
    border-bottom: 1px solid #000;
    width: 100%;
    padding: 5px 0;
    transition: all .3s ease 0s;
    &:hover {
        color: gray;
        border-color: gray;
    }
}
._header-link-active {
    border-width: 2px;
    font-weight: 700;
}
</style>