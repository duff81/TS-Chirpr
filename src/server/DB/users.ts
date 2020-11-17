import { Query } from "./index";

const insertChirp =async(id: number) => Query ("SELECT chirps.id, chirps.content, users.name FROM chirps JOIN users on chirps.userid=users.id WHERE chirps.id=?;",[id])


export default {
    insertChirp   
}