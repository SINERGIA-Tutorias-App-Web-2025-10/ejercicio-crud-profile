<script>


import ProfileCreateAndEdit from "../components/profile-create-and-edit.component.vue";
import {Profile} from "../model/profile.entity.js";
import {ProfilesApiService} from "../services/profiles-api.service.js";
import DataManager from "../../shared/components/data-manager.component.vue";

export default {
  name: "profile-management",

  components: {
    DataManager,
    ProfileCreateAndEdit
  },


  data() {
    return {
      title: { singular: 'Profile', plural: 'Profiles' },
      arrayItems: [],
      itemObject: new Profile({}),
      selectedItems: [],
      componentApiService: null,
      createAndEditDialogIsVisible: false,
      isEdit: false,
      submitted: false,
    }
  },



  methods: {

    //#region Utility Methods
    notifySuccessfulAction(message) {
      this.$toast.add({severity: 'success', summary: 'Success', detail: message, life: 3000});
    },

    findIndexById(id) {
      return this.arrayItems.findIndex(item => item.id === id);
    },
    //#endregion

    //#region Event Handlers
    onNewItem() {
      this.itemObject = new Profile({});
      this.isEdit = false;
      this.submitted = false;
      this.createAndEditDialogIsVisible = true;
    },

    onEditItem(item) {
      this.itemObject = new Profile(item);
      this.isEdit = true;
      this.submitted = false;
      this.createAndEditDialogIsVisible = true;
    },

    onDeleteItem(item) {
      this.itemObject = new Profile(item);
      this.delete();
    },

    onDeleteSelectedItems(selectedItems) {
      this.selectedItems = selectedItems;
      this.deleteSelectedItems();
    },

    onCancelRequested() {
      this.createAndEditDialogIsVisible = false;
      this.submitted = false;
      this.isEdit = false;
    },

    onSaveRequested(item) {

      console.log('onSaveRequestedManagement', item);

      this.submitted = true;

      if (item.id) {
        this.update();
      } else {
        this.create();
      }

      this.createAndEditDialogIsVisible = false;
      this.isEdit = false;
    },
    //#endregion

    //#region CRUD Operations
    create() {
      this.componentApiService.create(this.itemObject).then(response => {
        let newItem = new Profile(response.data);
        this.arrayItems.push(newItem);
        this.notifySuccessfulAction('profiles created successfully');
      }).catch(error => {
        console.error("Error creating a profiles",error);
      });
    },

    update() {
      this.componentApiService.update(this.itemObject.id, this.itemObject).then(response => {
        let index = this.findIndexById(this.itemObject.id);
        this.arrayItems[index] = new Profile(response.data);
        this.notifySuccessfulAction('profiles updated successfully');
      }).catch(error => {
        console.error("Error updating a profiles",error);
      });
    },

    delete() {
      this.componentApiService.delete(this.itemObject.id).then(() => {
        let index = this.findIndexById(this.itemObject.id);
        this.arrayItems.splice(index, 1);
        this.notifySuccessfulAction('profiles deleted successfully');
      }).catch(error => {
        console.error("Error deleting a profiles",error);
      });
    },

    deleteSelectedItems() {
      this.selectedItems.forEach((variable) => {
        this.componentApiService.delete(variable.id).then(() => {
          this.arrayItems = this.arrayItems.filter((b) => b.id !== variable.id);
        }).catch(error => {
          console.error("Error deleting a profiles", error);
        });
      });

      this.notifySuccessfulAction('profiles deleted successfully');
    },
    //#endregion

    getAllSupplies() {

      this.componentApiService.getAllResources().then(response => {
        console.log("profiles response", response.data);

        this.arrayItems = response.data.map(resource => new Profile(resource));

        console.log("profiles resources", this.arrayItems);
      }).catch(error => {
        console.error("Error getting profiles",error);
      });
    }
  },


  //#region Lifecycle Hooks
  created() {

    this.componentApiService = new ProfilesApiService('/profiles');
    this.getAllSupplies();

    console.log("profiles Management component created");
  }
  //#endregion

}

</script>


<template>
  <div class="page-container p-2 flex flex-column h-full w-full overflow-hidden">

    <div class="header-container w-full">
      <h2>{{$t('components.title-profile')}}</h2>
    </div>


    <data-manager
        :title="title"
        v-bind:items="arrayItems"
        v-bind:label-name="$t('profiles.button-new-profile')"
        v-on:new-item-requested-manager="onNewItem"
        v-on:edit-item-requested-manager="onEditItem($event)"
        v-on:delete-item-requested-manager="onDeleteItem($event)"
        v-on:delete-selected-items-requested-manager="onDeleteSelectedItems($event)">

      <template #custom-columns-manager >

        <pv-column
            :sortable="true"
            field="id"
            header="ID"
        />


        <pv-column
            :sortable="true"
            field="firstName"
            header="First Name"

        />

        <pv-column
            :sortable="true"
            field="lastName"
            header="Last Name"

        />

        <pv-column
            :sortable="true"
            field="email"
            header="Email"
        />

        <pv-column
            :sortable="true"
            field="username"
            header="Username"
        />

        <pv-column
            :sortable="true"
            field="role"
            header="Role"
        />


      </template>

    </data-manager>

    <profile-create-and-edit
        :edit = "isEdit"
        :item-entity="itemObject"
        :visible="createAndEditDialogIsVisible"
        v-on:cancel-requested="onCancelRequested"
        v-on:save-requested="onSaveRequested($event)">
    </profile-create-and-edit>

  </div>

</template>

<style>

</style>