import { useNavigate } from "react-router-dom"

function Home(){
    const navigate=useNavigate()
    return(<>
    <h1>Welcome To Home Page</h1>
    <button onClick={()=>navigate('/')}>Registration Page</button>
    </>)
}
export default Home