<template>
 <div id='app'>
   <router-view/>
   <FooterGuide v-show="$route.meta.showFooter"/>
 </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {

  async mounted () {
    // this.$store.dispatch('getAddress')
    this.getAddress()

  },
  methods:{
    ...mapActions(['getAddress'])
  },
  components:{
    FooterGuide
  }  
}
</script>

<style lang="stylus">
  #app{
      width 100%
      height 100%
      background-color #f5f5f5
    }
</style>
