import { defineStore } from 'pinia';

const idMax = (arrays) => {
  var ids = arrays.map(item => { return item.id; });
  return Math.max(...ids);
}

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [
      {
        id: 1,
        name: "Task 1",
        description: "Hoc Java",
        status: false,
        dateStart: "12/12/2012",
        dateEnd: "12/12/1212"
      },
      {
        id: 2,
        name: "Task 2",
        description: "Hoc Spring boot",
        status: false,
        dateStart: "12/12/2012",
        dateEnd: "12/12/1212"
      },
      {
        id: 3,
        name: "Task 3",
        description: "Hoc HTML/CSS",
        status: false,
        dateStart: "12/12/2012",
        dateEnd: "12/12/1212"
      },
      {
        id: 4,
        name: "Task 4",
        description: "Hoc Spring boot",
        status: false,
        dateStart: "12/12/2012",
        dateEnd: "12/12/1212"
      },
      {
        id: 5,
        name: "Task 5",
        description: "Hoc HTML/CSS",
        status: false,
        dateStart: "12/12/2012",
        dateEnd: "12/12/1212"
      },
      {
        id: 6,
        name: "Task 6",
        description: "Hoc HTML/CSS",
        status: false,
        dateStart: "12/12/2012",
        dateEnd: "12/12/1212"
      },
    ],
  }),
  getters: {

  },
  actions: {
    removeItem(id) {
      this.tasks = this.tasks.filter(item => item.id !== id);
    },
    addItem(item) {
      let generateId = idMax(this.tasks);
      item.id = ++generateId;
      this.tasks.push(item);
      item.id = 0;
    }
  },
});
