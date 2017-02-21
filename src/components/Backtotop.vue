<template>
    <el-button v-show="scrollt" type="primary" icon="arrow-up" @click="scrollFn"></el-button>
</template>
<script>
export default {
    name: 'Backtotop',
    data(){
        return {
        }
    },
    props: ["scrollt"],
    methods: {
        scrollFn(pars) {
             document.body.scrollTop = 0;
             App.$emit("topp")
        }
    }
}
</script>
<style scoped>
.el-button {
    position: fixed;
    right: 0;
    bottom: 100px;
}

.el-icon-up {
    color: black;
}
</style>
<!-- 




 -->
<!-- <template>
    <ul>
        <li v-for="item in dataList">{{item}}</li>
    </ul>
</template>
<script>
export default {
    props: {
        dataList: []
    }
}
</script>


<template>
    <component-child v-bind:data-list="dataList"> </component-child>
    <input v-model="dataInput" v-on:keyup.13="addDataItem()"></input>
</template>
<script>
import ComponentChild from './child.vue'
export default {
    data() {
        return {
            dataInput: "",
            dataList: ['hello world!', 'welcome to use vue.js']
        }
    }, components: {
        ComponentChild
    }, methods: {
        addDataItem() {
            let self = this
            if (!(self.dataInput && self.dataInput.length > 0)) {
                return
            }
            self.dataList.push(self.dataInput) self.dataInput = ""
        }
    }
}
</script>
 -->
