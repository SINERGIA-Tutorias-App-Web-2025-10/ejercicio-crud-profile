<script>

const defaultStyle = {
  width: '400px'
};

export default {
  name: "create-and-edit",


  props: {
    entity: null,
    visible: Boolean,
    entityName: ' ',
    edit: Boolean,
    size: 'default'
  },

  methods: {

    onCancelRequested() {
      this.$emit('canceled-shared');
    },

    onSaveRequested() {
      this.$emit('saved-shared', this.entity);
    },

    getHeaderTitle() {
      return `${this.edit ? 'Edit' : 'New'} ${this.entityName}`;
    },

    getSubmitLabel() {
      return this.edit ? 'Update' : 'Create';
    },

    getDialogStyle() {
      let dialogStyle = defaultStyle;
      dialogStyle = this.size === 'standard' ? { width: '600px' } : defaultStyle;
      dialogStyle = this.size === 'large' ? { width: '900px' } : dialogStyle;
      return dialogStyle;
    }
  },

  created() {
    console.log("create-and-edit component created");
  }


}
</script>



<template>
  <pv-dialog v-bind:visible="visible" :modal="true" :style="getDialogStyle()" class="p-fluid" :header="entityName">

    <template #header>
      <div class="flex justify-content-start">
        <div>{{ getHeaderTitle() }}</div>
      </div>
    </template>

    <!-- Quien use el componente establece el contenido -->
    <slot name="content"></slot>

    <template #footer>
      <div class="flex justify-content-end">
        <pv-button type="button" :label="getSubmitLabel()" class="p-button-text" icon="pi pi-check" @click="onSaveRequested"/>
        <pv-button type="button" label="Cancel" severity="secondary" class="p-button-text" icon="pi pi-times"
                   @click="onCancelRequested"/>
      </div>
    </template>
  </pv-dialog>
</template>






<style scoped>

</style>