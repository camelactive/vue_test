var App = new Vue({
    el: '#toDoListApp',
    data: {
        title: 'toDoListApp',
        ButtonText: 'Add new Task',
        newTask: "",
        tasksDones: JSON.parse(localStorage.getItem("done")) ? JSON.parse(localStorage.getItem("done")) : [],
        tasks: JSON.parse(localStorage.getItem("memory")) ? JSON.parse(localStorage.getItem("memory")) : [],
        checked: "",
        icons: ["-", "+"],
    },
    methods: {
        newTaskClick: () => {
            if (App.newTask != "") {
                App.tasks.push(App.newTask);
                App.newTask = "";
                localStorage.setItem("memory", JSON.stringify(App.tasks));
                App.tasksDones.push(App.icons[0]);
                localStorage.setItem("done", JSON.stringify(App.tasksDones));
            }
        },
        taskDelete: (id) => {
            App.tasks.splice(id, 1)
            localStorage.setItem("memory", JSON.stringify(App.tasks))
            App.tasksDones.splice(id, 1)
            localStorage.setItem("done", JSON.stringify(App.tasksDones))
        },
        taskUp: (id) => {
            if (id != 0) {
                let myArrText = JSON.parse(localStorage.getItem("memory"));
                let myArrDone = JSON.parse(localStorage.getItem("done"));
                let upItem = myArrText[id];
                let downItem = myArrText[id - 1];
                let upItemDone = myArrDone[id];
                let downItemDone = myArrDone[id - 1];
                myArrText[id - 1] = upItem;
                myArrText[id] = downItem;
                myArrDone[id - 1] = upItemDone;
                myArrDone[id] = downItemDone;
                localStorage.setItem("memory", JSON.stringify(myArrText));
                localStorage.setItem("done", JSON.stringify(myArrDone));
                App.tasks = myArrText;
                App.tasksDones = myArrDone;

            }
        },
        taskDown: (id) => {

            let myArrText = JSON.parse(localStorage.getItem("memory"));
            let myArrDone = JSON.parse(localStorage.getItem("done"));
            let upItem = myArrText[id];
            let downItem = myArrText[id + 1];
            let upItemDone = myArrDone[id];
            let downItemDone = myArrDone[id + 1];
            myArrText[id + 1] = upItem;
            myArrText[id] = downItem;
            myArrDone[id + 1] = upItemDone;
            myArrDone[id] = downItemDone;
            localStorage.setItem("memory", JSON.stringify(myArrText));
            localStorage.setItem("done", JSON.stringify(myArrDone));
            App.tasks = myArrText;
            App.tasksDones = myArrDone;
        },
        test: () => {
            console.log("test-TAB");
            App.tasks = ["Посрать", "Вытереть жопу", "Помыть руки", "Позвонить Андрюше", "Сходить в гудвин", "Попить кофе"]
        },

        taskDone: (id) => {
            if (App.tasksDones[id] == App.icons[0]) {
                App.tasksDones.splice(id, 1, App.icons[1])
                localStorage.setItem("done", JSON.stringify(App.tasksDones))
            } else {
                App.tasksDones.splice(id, 1, App.icons[0])
                localStorage.setItem("done", JSON.stringify(App.tasksDones))
            }

        },
        taskDoneRander: (id) => {

            if (App.tasksDones[id] == App.icons[1]) {
                console.log(App.tasksDones[id]);
                App.checked = "checked";
                // console.log(checked)
                // console.log(App.checked);
            } else if (App.tasksDones[id] == App.icons[0]) {
                console.log(App.tasksDones[id]);
                App.checked = "";
                // console.log(checked)
                // console.log(App.checked);
            }
        }

    }
})