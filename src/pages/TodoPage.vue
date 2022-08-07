<template>
  <q-page class="q-pa-md">
    <div class="row justify-evenly">
      <todo-item @comfirmDelete="onDelete($event)"></todo-item>
    </div>
    <q-btn color="primary" icon="add" label="Add" @click="medium = true" />
    <add-task v-model="medium" persistent></add-task>
    <comfirm-delete v-model="isDeleteDialog"></comfirm-delete>
  </q-page>
</template>
<script>
import AddTask from "src/components/Dialog/AddTask.vue";
import ComfirmDelete from "src/components/Dialog/ComfirmDelete.vue";
import TodoItem from "components/TodoItem.vue";
import { useTaskStore } from "stores/task-store.js";
export default {
  components: {
    TodoItem,
    AddTask,
    ComfirmDelete,
  },
  data() {
    return {
      medium: false,
      isDeleteDialog: false,
    };
  },

  setup() {
    const taskStore = useTaskStore();
    const onDelete = (id) => {
      taskStore.removeItem(id);
    };
    return { onDelete };
  },
};
</script>
