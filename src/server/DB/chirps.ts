import * as express from "express";
import { Query } from "./index";


const allChirps = async () => Query("SELECT chirps.content, chirps.id, users.name FROM chirps join users on users.id = chirps.userid;");
const oneChirp= async (id: number)=>Query("select Chirps.*, users.name from chirps join users on users.id = chirps.userid where chirps.id = ?", [id])
const editChirp= async (content: string, id: number)=> Query("update Chirps set content = ? where id =?;",[content,id])
// const postChirp=
// const deleteChirp=


// post - insert into chirps...

// put - update chirps...

// delete - delete from chirps


export default {
    allChirps,
    oneChirp,
    editChirp
}