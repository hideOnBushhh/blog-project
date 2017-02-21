<template>
    <div  id="app" @mousewheel="scrollFn" @top="topFn">
        <Articles />
        <Backtotop :scrollt.sync="scrollT1"></Backtotop>
    </div>
</template>
<script>
import Articles from './components/Articles'
import Backtotop from './components/Backtotop'
import eventHub from './components/eventHub'

export default {
    name: 'app',
    components: {
        Articles,
        Backtotop
    },
    data() {
        return {
            scrollT1: 0
        }
    },
    methods: {
        scrollFn() {
            this.scrollT1 = document.body.scrollTop>800? document.body.scrollTop:0;
        },topFn(){
        	scrollFn
        }
    }
}

</script>
<style scoped>
</style>
