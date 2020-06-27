<template>
    <div class="container">
        <div class="row-m">
<!--            title begin              -->
            <div class="list__title">
                <h1>Todo list</h1>
            </div>
<!--             title end               -->
<!--             list template           -->
            <transition-group
                    name='bounce'
                    class="list"
                    tag='ul'>
                <li
                        class="list__item"
                        v-for="(item,index) in list"
                        :key="item.id">
                    <div class="list__numb">{{index + 1}}.</div>
                    <div class="list__name"> {{item.name}} </div>
                    <div class="list__right">
                        <router-link
                                :to="{name: 'notesEdit', params: {id:index}}"
                                class="list__edit"> edit
                        </router-link>
                        <div
                              class="list__remove"
                              @click="openModalRemoveNote(item)"
                              :for="index + 1"> remove </div>
                    </div>
                    <!-- todoList begin -->
                    <todo :toodoList="item.toodoList"></todo>
                    <!-- todoList end -->
                </li>
            </transition-group>
<!--             list template end          -->
<!--              button add new note       -->
            <div class="list__add">
                <buttonAdd
                    :id="list.length"></buttonAdd>
            </div>
<!--              button add new note end      -->
        </div>
<!--              modal begin                  -->
        <modal v-if="showModal"
            :text="modal.text"
            :action="modal.action"
            @modalResult="modalResult"
        > </modal>
<!--              modal end                  -->
    </div>

</template>
<script src="./index.js"></script>