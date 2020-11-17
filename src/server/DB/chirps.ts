import { Query } from "./index";


const allChirps = async () => Query("SELECT chirps.content, chirps.id, users.name FROM chirps JOIN users on users.id = chirps.userid;");

const oneChirp= async (id: number)=>Query("SELECT chirps.*, users.name FROM chirps JOIN users on users.id = chirps.userid WHERE chirps.id = ?", [id])

const insertChirp = (userid: number, content: string) => Query("INSERT INTO chirps (userid, content) VALUES (?, ?);", [userid, content]);

const updateChirp = (content: string, id: number) => Query("UPDATE chirps SET content = ? WHERE chirps.id = ?", [content, id]);

const deleteChirp = (id: number) => Query("DELETE FROM chirps WHERE chirps.id = ?;", [id]);

export default {
    allChirps,
    oneChirp,
    insertChirp,
    updateChirp,
    deleteChirp
}