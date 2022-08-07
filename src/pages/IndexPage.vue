<template>
  <q-page class="q-pa-md" :class="{ 'body--dark': isToggle }">
    <h2>{{ countStore.counter }}</h2>
    <q-btn-group push>
      <q-btn push label="Increament" icon="add" @click="countStore.increment" />
      <q-btn
        color="secondary"
        push
        label="decreament"
        icon="remove"
        @click="countStore.decreament"
      />
    </q-btn-group>
    <h4 v-if="$q.platform.is.mobile">Double: {{ countStore.doubleCount }}</h4>
    <h1 class="text-primary bg-yellow">Test style</h1>
    <p id="text-test">Text style scss</p>
    <q-toggle v-model="isToggle" color="yellow" />
  </q-page>
</template>

<script setup>
import { computed, defineComponent, ref } from "vue";
import { useCounterStore } from "../stores/example-store.js";
import { useQuasar } from "quasar";

const countStore = useCounterStore();
const $q = useQuasar();

const isToggle = ref(false);
</script>
<style scoped lang="scss">
#text-test {
  color: $yellow-14;
  background-color: $light-green-10;
}

.body--dark {
  background: #000;
}
</style>
