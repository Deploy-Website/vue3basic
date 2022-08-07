<template>
  <q-dialog>
    <q-card style="width: 700px; max-width: 80vw">
      <q-card-section>
        <div class="text-h6">Add Task</div>
      </q-card-section>

      <q-form class="column justify-evenly q-pa-xl">
        <q-input
          v-model="taskItem.name"
          filled
          label="Your name"
          class="q-mb-md"
        />

        <q-input
          filled
          type="text"
          label="Your description *"
          v-model="taskItem.description"
        />
      </q-form>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn
          flat
          label="Submit"
          color="primary"
          @click="onSubmit(taskItem)"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { useTaskStore } from "stores/task-store.js";
import { reactive, ref } from "vue";

const task = {
  name: "",
  description: "",
  status: false,
  dateStart: "",
  dateEnd: "",
};

const taskStore = useTaskStore();
const taskItem = ref(task);

const onSubmit = (taskItem) => {
  taskStore.addItem(taskItem);
  this.taskItem = {};
};
</script>
