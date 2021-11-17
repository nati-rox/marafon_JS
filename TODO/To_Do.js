let taskList = [];
let numberId = 0;

const STATUS_NEW = 'Todo';
const STATUS_IN_PROGRESS = 'In Progress';
const STATUS_DONE = 'Done';

const PRIORITY_HIGH = 'high';
const PRIORITY_NORMAL = 'normal';
const PRIORITY_LOW = 'low';

const PRIORITIES = [
    PRIORITY_HIGH,
    PRIORITY_NORMAL,
    PRIORITY_LOW,
]
const STATUSES = [
    STATUS_NEW,
    STATUS_IN_PROGRESS,
    STATUS_DONE,
]

function addTask(nameTask){
    const list = {
        id: numberId,
        name: nameTask,
        status: STATUS_NEW,
        priority: PRIORITY_NORMAL,
    }
    taskList.push(list);
    numberId++;
    return (nameTask);
}

function findTask(nameTask){
    return taskList.find(task => task.name == nameTask);
}

function changeStatus(nameTask, taskStatus){
    const task = findTask(nameTask);
    if (task){
        task.status = taskStatus;
    }
}

function changePriority(nameTask, taskPriority){
    const task = findTask(nameTask);
    if (task){
        task.priority = taskPriority
    }
}

function deleteTask(nameTask){
    for(let index in taskList){
        if (taskList[index].name === nameTask)
        {
            taskList.splice(index, 1);
        }
    }
}

function showBy(typeSort){
    let tmp = []
    if (typeSort == 'status') {
        for (let status_ of STATUSES) {
            for (let obj of taskList) {
                if (obj.status == status_ ) {
                   tmp.push(obj)
                }
            }
        }
    } else if (typeSort == 'priority') { 
        for (let priority of PRIORITIES) {
            for (let obj of taskList) {
                if (obj.priority == priority ) {
                    tmp.push(obj)
                }
            }
        }
    }
    taskList = tmp;
}

function showList(){
    
    console.log(taskList);
}

function main(){
    addTask('create a post');
    addTask('to wash a car');
    addTask('to buy milk');
    addTask('to ride a bike');

    changeStatus('to wash a car', STATUS_DONE);
    changePriority('create a post', PRIORITY_LOW);

    deleteTask('to ride a bike');
    addTask('test');

    changePriority('to ride a bike', PRIORITY_HIGH);
    changePriority('test', PRIORITY_HIGH);
    changeStatus('test', STATUS_IN_PROGRESS);
    changeStatus('to ride a bike', STATUS_DONE);

    showBy('priority');
    showBy('status');
    
    showList();
}

main();