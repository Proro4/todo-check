import Vue from 'vue';
import Router from 'vue-router';
import Notes from './component/notes/index.vue';
import NotesEdit from './component/notesEdit/index.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes:[
        {
            name:'home',
            path:'/',
            component:Notes
        },
        {
            name:'notesEdit',
            path:'/edit/:id',
            component:NotesEdit
        },
    ]
});