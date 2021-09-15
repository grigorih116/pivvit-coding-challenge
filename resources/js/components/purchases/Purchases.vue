<template>
  <div class="offering-cards">
    <b-table-lite :items="purchases"></b-table-lite>
  </div>
</template>

<script>
export default {
    name: "Purchases",
    data(){
      return {
        purchases: [],
      }
    },
    mounted(){
      console.log("test");
      this.getPurchases()
    },
    methods:{
      getPurchases(){
        this.axios.get("purchases").then(({data})=>{
          this.purchases = data.purchases
        })
      },
      
    }
}
</script>

<style>
.offering-cards{
  width: 300px;
}
</style>