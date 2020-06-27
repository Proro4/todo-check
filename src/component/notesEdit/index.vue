<template>
    <div class="container">
        <div class="row-m">
            <h1 v-if="newNote">
                add/edit note # {{list.length + 1}}
            </h1>
            <h1 v-else>
                add/edit note # {{noteCurrentId + 1}}
            </h1>
            <div class="note-edit">
                <div class="note-edit__top">
                    <div class="note-edit__name">
                        Name note:
                        <input
                                type="text"
                                v-model="noteTodo.name"
                                @keyup="сheckNoteChange()">
                    </div>
                    <router-link
                            class="note-edit__back"
                            v-if="newNote" :to="{name:'home'}">
                        back
                    </router-link>
                    <div
                            v-else
                            @click="removeChanges"
                            class="note-edit__back">back
                    </div>
                </div>

                <!--             todo list template           -->
                <transition-group
                        name='bounce'
                        class="note-edit__list"
                        tag='ul'>
                    <li v-for="(item,index) in noteTodo.toodoList"
                        :key="item.id">
                        {{index+1}}.
                        <input
                                :id="item.id"
                                type="checkbox"
                                v-on:change="сheckNoteChange()"
                                v-model="item.checked">
                        <label :for="item.id">
                            <input
                                    type="text"
                                    v-model="item.name"
                                    @keyup="сheckNoteChange()">
                        </label>
                        <div
                                class="note-edit__remove"
                                @click="removeNoteTodo(item)"
                        >Remove
                        </div>
                    </li>
                </transition-group>
                <!--             todo list template  end        -->
                <div>
                    <div class="note-edit__buttons">
                        <tButton
                                :name="'add todo'"
                                :className="'blue'"
                                :clickButton="addNoteTodo"></tButton>
                        <span>
                            <span
                                    class="note-edit__changes"
                                    :class="{'active': changedNote}"
                                    @click="rollBack"
                            >
                               <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    width="511.63px" height="511.631px" viewBox="0 0 511.63 511.631" style="enable-background:new 0 0 511.63 511.631;"
                                    xml:space="preserve">
                                            <g>
                                                <path d="M496.5,233.842c-30.841-76.706-114.112-115.06-249.823-115.06h-63.953V45.693c0-4.952-1.809-9.235-5.424-12.85
                                                    c-3.617-3.617-7.896-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426L5.424,179.021C1.809,182.641,0,186.922,0,191.871
                                                    c0,4.948,1.809,9.229,5.424,12.847L151.604,350.9c3.619,3.613,7.902,5.428,12.85,5.428c4.947,0,9.229-1.814,12.847-5.428
                                                    c3.616-3.614,5.424-7.898,5.424-12.848v-73.094h63.953c18.649,0,35.349,0.568,50.099,1.708c14.749,1.143,29.413,3.189,43.968,6.143
                                                    c14.564,2.95,27.224,6.991,37.979,12.135c10.753,5.144,20.794,11.756,30.122,19.842c9.329,8.094,16.943,17.7,22.847,28.839
                                                    c5.896,11.136,10.513,24.311,13.846,39.539c3.326,15.229,4.997,32.456,4.997,51.675c0,10.466-0.479,22.176-1.428,35.118
                                                    c0,1.137-0.236,3.375-0.715,6.708c-0.473,3.333-0.712,5.852-0.712,7.562c0,2.851,0.808,5.232,2.423,7.136
                                                    c1.622,1.902,3.86,2.851,6.714,2.851c3.046,0,5.708-1.615,7.994-4.853c1.328-1.711,2.561-3.806,3.71-6.283
                                                    c1.143-2.471,2.43-5.325,3.854-8.562c1.431-3.237,2.43-5.513,2.998-6.848c24.17-54.238,36.258-97.158,36.258-128.756
                                                    C511.63,291.039,506.589,259.344,496.5,233.842z"/>
                                            </g>
                                </svg>
                            </span>
                            <span
                                    class="note-edit__changes back"
                                    :class="{'active': rollBackToggle}"
                                    @click="rollforward">
                               <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    width="511.63px" height="511.631px" viewBox="0 0 511.63 511.631" style="enable-background:new 0 0 511.63 511.631;"
                                    xml:space="preserve">
                                            <g>
                                                <path d="M496.5,233.842c-30.841-76.706-114.112-115.06-249.823-115.06h-63.953V45.693c0-4.952-1.809-9.235-5.424-12.85
                                                    c-3.617-3.617-7.896-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426L5.424,179.021C1.809,182.641,0,186.922,0,191.871
                                                    c0,4.948,1.809,9.229,5.424,12.847L151.604,350.9c3.619,3.613,7.902,5.428,12.85,5.428c4.947,0,9.229-1.814,12.847-5.428
                                                    c3.616-3.614,5.424-7.898,5.424-12.848v-73.094h63.953c18.649,0,35.349,0.568,50.099,1.708c14.749,1.143,29.413,3.189,43.968,6.143
                                                    c14.564,2.95,27.224,6.991,37.979,12.135c10.753,5.144,20.794,11.756,30.122,19.842c9.329,8.094,16.943,17.7,22.847,28.839
                                                    c5.896,11.136,10.513,24.311,13.846,39.539c3.326,15.229,4.997,32.456,4.997,51.675c0,10.466-0.479,22.176-1.428,35.118
                                                    c0,1.137-0.236,3.375-0.715,6.708c-0.473,3.333-0.712,5.852-0.712,7.562c0,2.851,0.808,5.232,2.423,7.136
                                                    c1.622,1.902,3.86,2.851,6.714,2.851c3.046,0,5.708-1.615,7.994-4.853c1.328-1.711,2.561-3.806,3.71-6.283
                                                    c1.143-2.471,2.43-5.325,3.854-8.562c1.431-3.237,2.43-5.513,2.998-6.848c24.17-54.238,36.258-97.158,36.258-128.756
                                                    C511.63,291.039,506.589,259.344,496.5,233.842z"/>
                                            </g>
                                </svg>
                            </span>
                            <tButton
                                    v-if="!newNote"
                                    :name="'remove'"
                                    :className="'red'"
                                    :clickButton="removeThisNote"></tButton>

                            <tButton
                                    v-if="noteTodo.name != '' && newNote"
                                    :name="'Complete'"
                                    :className="'green'"
                                    :clickButton="completeNoteTodo"></tButton>
                            <tButton
                                    v-if="!newNote && changedNote"
                                    :name="'Complete'"
                                    :className="'green'"
                                    :clickButton="completeNoteTodo"></tButton>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!--              modal begin                  -->
        <modal v-if="showModal"
               :text="modal.text"
               :action="modal.action"
               @modalResult="modalResult"
        ></modal>
        <!--              modal end                  -->
    </div>
</template>
<script src="./index.js"></script>