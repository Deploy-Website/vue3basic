<template>
  <q-card
    class="my-card col-md-3 q-ma-sm height__100"
    :class="task.status ? 'bg-green-6' : 'bg-orange-3'"
    flat
    bordered
    v-for="task in taskStore.tasks"
    :key="task.id"
  >
    <q-card-section horizontal class="row justify-center">
      <q-card-section class="col">
        <div class="text-overline">Overline</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ task.name }}</div>
        <div class="text-caption">
          {{ task.description }}
        </div>
      </q-card-section>

      <q-card-section class="col flex">
        <q-checkbox
          v-model="task.status"
          :label="task.status ? 'Done' : 'Doing'"
          color="teal"
          class="self-start"
        />
        <q-img
          class="rounded-borders self-center"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
      </q-card-section>
    </q-card-section>

    <q-separator />

    <q-card-actions class="">
      <q-btn flat round icon="event" />
      <q-btn flat>{{ task.dateStart }}</q-btn>
      <q-btn flat>{{ task.dateEnd }}</q-btn>
      <q-btn flat v-if="task.status" @click="comfirmDelete(task.id)">
        Delete
      </q-btn>
    </q-card-actions>
  </q-card>
</template>
<script>
import { useTaskStore } from "stores/task-store.js";
export default {
  setup(props, context) {
    const taskStore = useTaskStore();
    const comfirmDelete = (id) => {
      context.emit("comfirmDelete", id);
    };
    return { taskStore, comfirmDelete };
  },
  emits: ["comfirmDelete"],
};
</script>

<style lang="scss" scoped>
.height__100 {
  height: 100% !important;
}
</style>
