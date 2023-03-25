import {reactive} from 'vue'

const store = {
    state:reactive({
        msg:'hellow'
    }),
    changeMsg:function(){
        this.state.msg='你好啊'
    }
}

export default store