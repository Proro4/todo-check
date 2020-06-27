import tButton from '../../atoms/button/index.vue';
import modal from "../modal/index.vue";
import router from '../../router';

export default {
    data() {
        return{
            showModal:false,
            rollBackToggle: false,
            changedNote: false,
            notChangesNote:null,
            idNumbTodo:0,
            newNote:false,
            noteCurrentId:null,
            list:[],
            nameNote:'',
            noteTodo:{
                name:'',
                id:'',
                toodoList:[]
            },
            modal:{
                text:'',
                action:''
            },
        }
    },
    components: {
        tButton,
        modal
    },
    created(){
        this.getCookie();
    },
    methods: {
        addNoteTodo(){
            this.idNumbTodo++;
            this.noteTodo.toodoList.push({
                id: this.idNumbTodo,
                name: '',
                checked: false,
            });
            this.сheckNoteChange();
        },
        removeNoteTodo(item) {
            let index = this.noteTodo.toodoList.indexOf(item);
            this.noteTodo.toodoList.splice(index, 1);
            this.сheckNoteChange();
        },
        completeNoteTodo(){
            if(this.newNote){
                this.noteTodo.id = (Math.random() * 10000).toFixed(0);
                this.list.push(this.noteTodo)
                document.cookie = JSON.stringify(this.list) + ';  path=/;';
                router.push({name:'home'})
            }else{
                document.cookie = JSON.stringify(this.list) + ';  path=/;';
                router.push({name:'home'})
            }
        },
        getCookie(){
            const cookieNotes = document.cookie;
            if(cookieNotes.length){
                const newNotes = cookieNotes.split(';', 1);
                let list = JSON.parse(newNotes[0]);
                this.list = list;
            }
            this.typeEditNotes();
        },
        typeEditNotes(){
            this.noteCurrentId = router.history.current.params.id;
            if(this.list[this.noteCurrentId]){
                this.noteTodo = this.list[this.noteCurrentId];
                this.idNumbTodo = this.noteTodo.toodoList.length;
            }else{
                this.newNote = true;
            }
        },
        сheckNoteChange(){
            if(!this.newNote){
                const newNotes = document.cookie.split(';', 1);
                let list = JSON.parse(newNotes[0]);
                if(JSON.stringify(list[this.noteCurrentId]) === JSON.stringify(this.noteTodo)){
                    this.changedNote = false;
                }else{
                    this.changedNote = true;
                }
            }
        },
        removeChanges(){
            this.modal.text='Cancel all changes ?';
            this.modal.action='removeChanges';
            this.showModal = true;
        },
        removeThisNote(){
            this.modal.text='Cancel this note ?';
            this.modal.action='remove';
            this.showModal = true;
        },
        modalResult(result, action){
            if(result){
                if(action == 'removeChanges'){
                    router.push({name:'home'})
                }else if(action == 'remove'){
                    let index = this.list.indexOf(this.list[this.noteCurrentId]);
                    this.list.splice(index, 1);
                    document.cookie = JSON.stringify(this.list) + ';  path=/;';
                    router.push({name:'home'})
                }
                this.showModal = false;
            }else{
                this.showModal = false;
            }
        },
        rollBack(){
            const newNotes = document.cookie.split(';', 1);
            let list = JSON.parse(newNotes[0]);
            this.noteTodo = list[this.noteCurrentId];
            this.rollBackToggle = true;
            this.сheckNoteChange();
        },
        rollforward(){
            this.noteTodo = this.list[this.noteCurrentId];
            this.rollBackToggle = false;
            this.сheckNoteChange();
        }
    },
}