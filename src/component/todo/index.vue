<template>
    <ul class="todo" v-if="toodoList">
        <li
            v-for="item in list"
            :key="item.id"
        >
            <input
                    type="checkbox"
                    :id="item.id"
                    v-model="item.checked"
                    disabled>
            <label
                    :for="item.id">
                {{item.name}}</label>
        </li>
        <li v-if="toodoList.length > 3 && showButton"
            class="todo__more"
            @click="showMore"
        >
            ...
        </li>
        <li v-if="toodoList.length > 3 && !showButton"
            class="todo__more"
            @click="showHide">
            hide
        </li>
    </ul>
</template>
<script src="./index.js"></script>