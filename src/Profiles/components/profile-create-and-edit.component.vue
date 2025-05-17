<script>

import CreateAndEdit from "../../shared/components/create-and-edit.component.vue";

export default {

  name: "profile-create-and-edit",
  components: {CreateAndEdit},

  props: {
    itemEntity: null,
    visible: Boolean
  },

  data() {
    return {
      submitted: false
    }
  },

  methods: {

    onCancelRequested() {
      this.$emit('cancel-requested');
    },

    onSaveRequested() {
      this.submitted = true;
      this.$emit('save-requested', this.itemEntity);
    }
  },

  created() {
    console.log('Supply Create and Edit Dialog component created');
  }
}

</script>



<template>


  <create-and-edit :entity="itemEntity" :visible="visible" :entityName="itemEntity.name"
                   @canceled-shared="onCancelRequested" @saved-shared="onSaveRequested">


    <template #content>

      <div class="field">
        <pv-float-label class="field mt-4">
          <label for="id"> ID </label>
          <pv-input-text id="id" v-model="itemEntity.id" :class="{ 'p-invalid': submitted && !itemEntity.id}"/>
        </pv-float-label>

        <pv-float-label class="field mt-4">
          <label for="firstName"> Name </label>
          <pv-input-text id="firstName" v-model="itemEntity.firstName" :class="{ 'p-invalid': submitted && !itemEntity.firstName}"/>
        </pv-float-label>

        <pv-float-label class="field mt-4">
          <label for="lastName"> Last Name </label>
          <pv-input-text id="lastName" v-model="itemEntity.lastName" :class="{ 'p-invalid': submitted && !itemEntity.lastName}"/>
        </pv-float-label>

        <pv-float-label class="field mt-4">
          <label for="email"> Email </label>
          <pv-input-text id="email" v-model="itemEntity.email" :class="{ 'p-invalid': submitted && !itemEntity.email}"/>
        </pv-float-label>

        <pv-float-label class="field mt-4">
          <label for="username"> Username </label>
          <pv-input-text id="username" v-model="itemEntity.username" :class="{ 'p-invalid': submitted && !itemEntity.username}"/>
        </pv-float-label>

        <pv-float-label class="field mt-4">
          <label for="role"> Role </label>
          <pv-input-text id="role" v-model="itemEntity.role" :class="{ 'p-invalid': submitted && !itemEntity.role}"/>
        </pv-float-label>



      </div>


    </template>





  </create-and-edit>

</template>

<style>

</style>