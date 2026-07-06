import { AddTask } from "@/components/AddTask";
import TaskCard from "@/components/TaskCard";
import { createATask } from "@/lib/actions";
import { getTasks } from "@/lib/task";
import { Button } from "@heroui/react";
import Link from "next/link";


const TasksPage = async() => {
    const tasks = await getTasks();
    return (
        <div>
            <h2>Tasks : {tasks.length}</h2>
            <AddTask createATask={createATask}/>
            <Link href="/task/new"><Button variant="outline">Add Task</Button></Link>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto">
                 {
                    tasks.map(task => <TaskCard key={task.id} task={task}></TaskCard>)
                 }
            </div>
        </div>
    );
};

export default TasksPage;