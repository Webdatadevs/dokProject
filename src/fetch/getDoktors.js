import axios from "axios"
import { getDoktors } from "../components/redux/slice/userSlice"

const getDoktorsFunction = async (dispatch) =>{
    await axios.get("https://dokdatabase.onrender.com/doktors")
    .then((res)=>{
        console.log(res.data)
        dispatch(getDoktors(res.data))
    })
    .catch((err) => {
        console.log(err)
    })
}

export default getDoktorsFunction