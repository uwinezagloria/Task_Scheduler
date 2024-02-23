var taskScheduler=[
    {title:'touch typing study',
    description:'practicing touch typing study',
    duedate:'03- 13-2024',
    completed:'false',
    },
    {title:'working on my project',
    description:'discoverying new ways to make backend',
    duedate:'2024-05-12',
    completed:false,
    }
];
for(let i=0;i<taskScheduler.length;i++){
    console.log(taskScheduler[i]);
}
//adding task in your task scheduler
function addTask(taskTitle,taskDescription,taskDuedate ,taskCompleted){
    let addedTask={
        title:taskTitle,
        description:taskDescription,
        duedate:taskDuedate,
        completed:taskCompleted,
    };
taskScheduler.push(addedTask);
for(let i=0;i<taskScheduler.length;i++){
console.log(taskScheduler[i]);
}
}
console.log("ALL MY TAsK");
addTask('Morning Revision','revising javascript content','2024-12-08',true);
addTask("calling mum","telling stories with family","2024-11-11",false);
//sorting according to date
let sortedtask=taskScheduler.sort((a, b) => new Date(a.duedate) - new Date(b.dueDate));
console.log("sorted array");
console.log(sortedtask);
    //updating task scheduler
function updatingTask(title,duedate,description,completed){
for (let i=0;i<taskScheduler.length;i++){
    if(taskScheduler[i].title === title){
      taskScheduler[i].duedate =dueDate;
      taskScheduler[i].description = description;
      taskScheduler[i].completed = completed;
    }
 }

}
updatingTask('read', 'old book', '2026-08-10', true);

    //removing task from scheduler
    function removetask(from,to){
 taskScheduler.splice(from,to);
    }
removetask(1,1);
//tasks after removing a atask
for(let i=0;i<taskScheduler.length;i++){
    console.log(taskScheduler[i]);
    }