<template>
    <div class="content">
        <div class="yaohao">
            摇号
            <div @click="Switch">切换<span v-if="is_not_editable">手动</span><span v-if="!is_not_editable">自动</span></div>
            <span @click="Horn()" v-if="is_not_editable">换一注</span>
            <div class="shoudong" @click="modify()" v-if="!is_not_editable">修改</div>
            <div class="code" v-for="(item,index) in 3" :key="index">
                <input 
                type="text" 
                v-model="numberArray[index]" 
                ref="NoteNumber" 
                maxlength="1" 
                class="input_code" 
                v-focus="index===currentIndex"
                @input="handleInput($event,index)"
                oninput="value=value.replace(/[^\d]/g,'')" 
                pattern="[0-9]*"
                @keyup.delete="onDelete($event,index)"
                :disabled="is_not_editable">
            </div>
            <div class="AddNote" @click="addNote()">添加一注</div>
        </div>
    </div>
</template>

<script>
import ManipulateArrays from '@/commonJs/ManipulateArrays.js'
export default {
    data() {
        return {
            // 输入框是否不可编辑
            is_not_editable: true,
            currentIndex: '',
            numberArray:[],
            codeList: [
                {
                    code_number: '223'
                },
                {
                    code_number: '223'
                }
            ]
        }
    },
    watch: {
        numberArray(newName) {
            console.log("获取到的值",newName,newName.length)
        }
    },
    directives: {
        focus: {
            componentUpdated: function (el, obj) {
                obj.value && el.focus()
            }
        }
    },
    mounted() {
        // this.Horn()
    },
    methods: {
        // =====================点击事件=====================
        // 切换
        Switch() {
            if(this.is_not_editable) {
                this.is_not_editable = false
            } else {
                this.is_not_editable = true
            }
        },
        // 摇号
        Horn() {
            let random_number = ManipulateArrays.getRndInteger(0,1000)
            this.numberArray = random_number.split("")
        },
        // 唤起键盘
        EvokeKeyboard() {
            console.log("获取到的值",this.$refs.NoteNumber)
            this.$refs.NoteNumber.focus()
        },
        // 增加一注
        addNote() {
            console.log("增加一注")
        },
        // 修改
        modify() {
            console.log("修改")
        },  
        // ===================输入框事件=====================
        handleInput (e, index) {
            this.currentIndex = index
            console.log("获取到的输入框的值",index,e.target.value)
            // e.target.value = this.validateNumber(e.target.value)
            e.target.value !== '' && ++this.currentIndex
            // !this.code.includes('') && this.$emit('onCompleted', this.code.join(''))
        },
        validateNumber (val) {
            return val.replace(/\D/g, '')
        },
        onDelete (e, index) {
            if (e.target.value === '') {
                this.currentIndex = index - 1 
            }
        },
        // ========================文案==========================
        // 自己输入的幸运号
        EnterTheLuckyNumber(newName) {
            let LuckyNumber = newName
            if(LuckyNumber.length == 3) {
                LuckyNumber = LuckyNumber
            } else if(LuckyNumber.length == 2) {
                LuckyNumber = `0${LuckyNumber}`
            } else if(LuckyNumber.length == 1) {
                LuckyNumber = `00${LuckyNumber}`
            } else {
                LuckyNumber = ''
            }
            if(LuckyNumber) {
                this.numberArray = LuckyNumber.split("")
            } else {
                this.numberArray = []
            }
        }
    }
}
</script>


<style lang="less" scoped>

</style>