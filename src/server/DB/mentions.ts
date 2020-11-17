import {Query}  from "./index";

const deleteChirp= (chirpid: number)=>Query("DELETE FROM mentions WHERE mentions.chirpid =?;",[chirpid])

export default {
    deleteChirp
}