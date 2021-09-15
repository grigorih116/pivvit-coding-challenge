<template>
  <div class="offering-cards">
    <b-card-group deck>
      <b-card v-for="offering in offerings" :key="offering.id" :title="offering.title">
        {{ offering.price }}
        <b-button v-b-modal.modal-1 @click="buy(offering)">
          Buy
        </b-button>
      </b-card>
    </b-card-group>
    <b-modal id="modal-1" :title="selectedOffering.title" @ok="onSubmit">
      <b-form>
        <b-form-group
          label="Name"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="purchase.customerName"
            type="text"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Quantity"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="purchase.quantity"
            min="1"
            type="number"
            required
          ></b-form-input>
        </b-form-group>
      </b-form>
      <span> {{ totalPrice }} </span>
    </b-modal>
  </div>
</template>

<script>
export default {
    name: "Offerings",
    data(){
      return {
        offerings: [],
        selectedOffering: {},
        purchase:{}
      }
    },
    computed: {
      totalPrice(){
        return this.selectedOffering.price * this.purchase.quantity
      }
    },
    mounted(){
      this.getOfferings()
    },
    methods:{
      getOfferings(){
        this.axios.get("offerings").then(({data})=>{
          this.offerings = data.offerings
          console.log(data);
        })
      },
      buy(offering){
        this.selectedOffering = offering  
        this.purchase = {quantity: 1, offeringID: offering.id }
      },
      onSubmit(){
        this.axios.post("purchases", this.purchase).then((data)=>{
          console.log(data);
        })
      }
    }
}
</script>

<style>
.offering-cards{
  width: 300px;
}
</style>