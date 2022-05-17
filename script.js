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
        taskDelete: () => {
            console.log("delete")
        }
    }
})