import AddTodoForm from "./AddTodoform"
import TodoList from "./Todolist"
import { useState } from "react"
function TodoContainer() {
    const [activityarr, setactivityarr] = useState([
        {
            id:1,
            activity:"Go for a walk"
        }
    ])
    return (
        <div>
            <div className="flex gap-5 flex-wrap">
                <AddTodoForm activityarr={activityarr} setactivityarr={setactivityarr} />
                <TodoList activityarr={activityarr} setactivityarr={setactivityarr} />
            </div>
        </div>
    )
}
export default TodoContainer