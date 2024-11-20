
import Todoitem from "./Todoitem"

function TodoList(props)
{
    const activityarr = props.activityarr
    const setactivityarr = props.setactivityarr
    return(
        <div className="bg-[#BEB4EB] border rounded-md p-2 flex-grow">
        <h1 className="text-2xl font-medium">Today's Activity</h1>
        {activityarr.length ===0?<p>You haven't added anything yet</p> : ""}
        {
            activityarr.map(function(item,index){
                return <Todoitem  id={item.id} activity={item.activity} index={index} activityarr={activityarr} setactivityarr={setactivityarr}/>
            })

        }
    </div>
    )
}
export default TodoList