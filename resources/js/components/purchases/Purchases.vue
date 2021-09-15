<template>
  <div>
    <b-table 
      :items="purchases"
      :fields="fields"
    >
      <template #cell(title)="data">
        <span>{{ data.item.offering.title }}</span>
      </template>
      <template #cell(price)="data">
        <span>{{ data.item.offering.price }}</span>
      </template>
      <template #cell(total)="data">
        <span>{{ data.item.offering.price * data.item.quantity }}</span>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
    name: "Purchases",
    data(){
      return {
        purchases: [],
        fields: [
          {
            key: "id" , 
            label: "Purchase ID"
          },
          {
            key: "title" , 
            label: "Offering title"
          },
          "quantity",
          {
            key: "price" , 
            label: "Unit price"
          },
          {
            key: "total" , 
            label: "Total"
          },
        ]
      }
    },
    mounted(){
      console.log("test");
      this.getPurchases()
    },
    methods:{
      getPurchases(){
        this.axios.get("purchases").then(({data})=>{
          console.log(data);
          this.purchases = data.purchases
        })
      },
      
    }
}
</script>

<style>
</style>