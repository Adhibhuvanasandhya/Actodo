import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SignUp(props)
{
    const navigate = useNavigate()
    const users = props.users
    const setusers = props.setusers

    const [eusername, seteusername] = useState()
    const [epassword, setepassword] = useState()
    function handleUinput(evt){
        seteusername(evt.target.value)

    }
    function handlePinput(evt)
    {
        setepassword(evt.target.value)
    }
    function addUser()
    {
        setusers([...users,{username:eusername, password:epassword}])
        navigate("/")
    }
    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi! 👋</h1>
                <p>I help you manage your activities after you login :)</p>

                <div className="flex flex-col gap-2 my-2">
                    <input type="text" onChange={handleUinput} className="w-52 border-black p-1 bg-transparent border rounded-r-md" placeholder="Username"></input>
                    <input type="text" onChange={handlePinput} className="w-52 border-black p-1 bg-transparent border rounded-r-md" placeholder="Password"></input>
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-r-md" placeholder="Confirm Password"></input>
                    <button onClick={addUser} className="bg-[#FCA201] w-24 p-1 rounded-md"> Singn Up</button>

                    <p>Already have an account?<Link to={'/'} className="underline">Login</Link> </p>

                </div>
            </div>
        </div>
    )
}
export default SignUp