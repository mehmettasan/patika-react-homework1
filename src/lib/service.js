import axios from "axios";

const getUser = async (userID)=>{
    const {data:user} = await axios(`https://jsonplaceholder.typicode.com/users/${userID}`)
    return user;
}

export default getUser;