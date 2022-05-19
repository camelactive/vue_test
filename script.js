var App = new Vue({
    el: '#toDoListApp',
    data: {
        title: 'toDoListApp',
        ButtonText: 'Add new Task',
        newTask: "",
        tasks: JSON.parse(localStorage.getItem("memory")) || [],

    },
    methods: {
        newTaskClick: () => {
            App.tasks.push(App.newTask);
            App.newTask = "";
            localStorage.setItem("memory", JSON.stringify(App.tasks))
        },
        taskDelete: (id) => {
            App.tasks.splice(id, 1)
            localStorage.setItem("memory", JSON.stringify(App.tasks))
        },
        taskUp: (id) => {
            if (id != 0) {
                let myArr = JSON.parse(localStorage.getItem("memory"))
                let upItem = myArr[id];
                let downItem = myArr[id - 1];
                myArr[id - 1] = upItem;
                myArr[id] = downItem;
                localStorage.setItem("memory", JSON.stringify(myArr));
                App.tasks = myArr
            }
        },
        taskDown: (id) => {
            let myArr = JSON.parse(localStorage.getItem("memory"))
            let upItem = myArr[id];
            let downItem = myArr[id + 1];
            myArr[id + 1] = upItem;
            myArr[id] = downItem;
            localStorage.setItem("memory", JSON.stringify(myArr));
            App.tasks = myArr
        },
        taskDone: (target) => {
            console.log(target.path[2])
        }
    }
})