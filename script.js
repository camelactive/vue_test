var app = new Vue({
    el: '#toDoListApp',
    data: {
        title: 'toDoListApp',
        ButtonText: 'Add new Task',
        newTask: "",
        tasks: JSON.parse(localStorage.getItem("memory")) || [],

    },
    methods: {
        newTaskClick: () => {
            app.tasks.push(app.newTask);
            app.newTask = "";
            localStorage.setItem("memory", JSON.stringify(app.tasks))
        },
        taskDelete: (id) => {
            console.log("delete");
            console.log(id);
            console.log(app.tasks)
            app.tasks.splice(id, 1)
            localStorage.setItem("memory", JSON.stringify(app.tasks))
        }
    }
})