import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { chirp } from "../types"

const Admin: React.FC<ISingleChirpProps> = (props: ISingleChirpProps) => {
    const [chirp, setChirp]=React.useState<chirp>({
        id: "",
        user: "",
        text: ""
    });
    React.useEffect(()=>{
        (async () =>{
            try{
                let res =await fetch (`/api/chirps/${props.match.params.id}`);
                let chirp =await res.json();
                setChirp(chirp);
            }catch (err){
                console.log(err)
            }
        })();
    },[])
    const deleteChirp =async (id:string)=>{
        await fetch(`/api/chirps/${id}`,{
            method: "DELETE"
        });
        props.history.push("/")
    }
    const editChirp =async (id:string)=>{
        const newChirp ={
            user: chirp.user,
            text: chirp.text
        } 
          await fetch (`/api/chirps/${id}`,{
              method: "PUT",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(newChirp)
          });
          props.history.push("/");
    };
    const textChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setChirp({
        id: chirp.id,
        user: chirp.user,
        text: e.target.value
    });

     return (
        <div className="container">
            <div className="card shadow-lg m-2">
                <div className="card-body">
                    <div className="row">
                        <h5 className="card-title">@{chirp.user}</h5>
                    </div>
                    <div className="row">
                        <textarea className="card-text" defaultValue={chirp.text} cols={50} rows={15} onChange={(e) => textChange(e)}></textarea>
                    </div>
                    <button className="btn btn-sm btn-outline-dark float-right mx-1" onClick={() => editChirp(chirp.id)}>Save</button>
                    <button className="btn btn-sm btn-outline-dark float-right mx-1" onClick={() => deleteChirp(chirp.id)}>Delete</button>
                </div>
            </div>
        </div>
    )    
}

interface ISingleChirpProps extends RouteComponentProps <{id: string}> {};

export default Admin;
