import buttonAdd from '../../atoms/button-add/index.vue';
import tButton from '../../atoms/button/index.vue';
import todo from '../todo/index.vue';
import modal from "../modal/index.vue";

export default {
    data(){
        return{
            showModal: false,
            itemForDel: null,
            modal:{
                text:'',
                action:''
            },
            list:[
                {
                    id:'1',
                    check:false,
                    name:'First',
                    toodoList:[
                        {
                            id:'1',
                            checked:false,
                            name:'First',
                        },
                        {
                            id:'2',
                            checked:false,
                            name:'two',
                        },
                        {
                            id:'3',
                            checked:false,
                            name:'First',
                        },
                        {
                            id:'3',
                            checked:false,
                            name:'First',
                        },
                        {
                            id:'3',
                            checked:false,
                            name:'First',
                        },
                        {
                            id:'3',
                            checked:false,
                            name:'First',
                        },
                    ]
                },
                {
                    id:'2',
                    check:false,
                    name:'Second',
                    toodoList:[
                        {
                            id:'1',
                            checked:false,
                            name:'First',
                        },
                        {
                            id:'2',
                            checked:false,
                            name:'First',
                        },
                    ]
                }
            ]
        }
    },
    created(){
        this.getCookie();
    },
    components:{
        tButton,
        buttonAdd,
        todo,
        modal,
    },
    methods:{
        saveCookie(){
            document.cookie = JSON.stringify(this.list)+ ';  path=/;';
            this.getCookie();
        },
        getCookie(){
            if(document.cookie == ''){
                document.cookie = JSON.stringify(this.list)+ ';  path=/;';
            }
            const cookieNotes = document.cookie;
            if(cookieNotes.length){
                const newNotes = cookieNotes.split(';', 1);
                let list = JSON.parse(newNotes[0]);
                this.list = list;
            }
        },
        openModalRemoveNote(item){
            this.itemForDel = item;
            this.modal.text='Delete this note ?';
            this.modal.action='removeNote';
            this.showModal = true;
        },
        removeNote(){
            let index = this.list.indexOf(this.itemForDel);
            this.list.splice(index, 1);
            this.saveCookie();
        },
        modalResult(result){
            if(result){
                this.removeNote(this.itemForDel);
                this.cancelModal();
            }else{
                this.itemForDel = null;
                this.cancelModal();
            }
        },
        cancelModal(){
            this.showModal = false;
            this.modal.text='';
            this.modal.action='';
        }
    },

};