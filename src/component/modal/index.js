import tButton from '../../atoms/button/index.vue'

export default {
    props:['text', 'action'],
    components: {
        tButton
    },
    methods:{
        modalButtonTrue(){
            this.$emit('modalResult',true, this.action)
        },
        modalButtonFalse(){
            this.$emit('modalResult',false)
        },
    }
}