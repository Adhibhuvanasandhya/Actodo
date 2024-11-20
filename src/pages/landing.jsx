import Header from "../components/Header"
import TodoContainer from "../components/Todocontainer"
import Card from "../components/card"
import { useLocation } from "react-router-dom"

function Landing()
{
    const data = useLocation()
    return( <div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
          {/*Header */}
          <Header username={data.state.user} />
          {/*Card */}
          <div className="flex justify-between my-5 gap-7 flex-wrap">
            <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
            <Card bgcolor={"#FD6663"} title={"November"} subtitle={"10:45:08"} />
            <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
  
          </div>
          {/*Todo Container */}
          <TodoContainer/>
  
  
        </div>
  
      </div>)
}
export default Landing