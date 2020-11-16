import { Query } from "./index";
import DB from "../db"
const allUsers = async () => Query("SELECT * FROM users");
console.log(allUsers)

// post - insert into chirps...

// put - update chirps...

// delete - delete from chirps


export default {
    allUsers
    
}