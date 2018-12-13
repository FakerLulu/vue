var bus = new Vue()

Vue.component('chariot',{
    template : "#chariot-template",
    props : ['chariot'],
    methods : {
        pick : function(event){
            let num = this.chariot.number
            this.chariot.picked = true
            bus.$emit('pick',num)
        },
        change : function (s) {
            let a = this.chariot.number-s
            b = this.$el.lastElementChild
            if(a==0){
                b.textContent = "가즈아ㅏㅏ!"
                b.disabled = true
                return
            }
            if(a>0){
                b.textContent = "말 줍기"
                b.disabled = false
                return
            }
            if(a<0){
                b.textContent = "말 버리기"
                b.disabled = false
                return
            }
            
            
        }
    },
        created () {
            bus.$on('change',this.change)
        }
    

})

new Vue({
    el:".container",
    data : {
        chariots : [
            {
                name : '올림푸스',
                number : 4,
            },
            {
                name : '사기타',
                number : 3,
            },
            {
                name : '이카루스',
                number : 2,
            },
            {
                name : '아브락사스',
                number : 1,
            },
        ]
    },
    methods:{
        printing : function(num){
            bus.$emit('change',num);
        }
    },
    created () {
            bus.$on('pick',this.printing)
    }
    
    
})