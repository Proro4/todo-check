export default {
    props: ['toodoList'],
    data(){
        return{
            colShowItems: 3,
            list: null,
            showButton: true,
        }
    },
    created(){
        this.list = this.toodoList.slice(0,this.colShowItems)
    },
    methods:{
        showMore(){
            this.list = this.toodoList.slice(0,this.toodoList.length);
            this.showButton = false;
        },
        showHide(){
            this.list = this.toodoList.slice(0,3);
            this.showButton = true;
        }
    }
}