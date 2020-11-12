import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { chirp } from "../types";



const AddChirp: React.FC<IAddChirpProps>= (props: IAddChirpProps)=>{
  const [chirp,setChirp]=React.useState <chirp>({
    user: "",
    text: ""
  });
  const userChange= (e: React.ChangeEvent<HTMLInputElement>) => setChirp({
    user: e.target.value,
    text: chirp.text
  });
  const textChange= (e: React.ChangeEvent<HTMLTextAreaElement>) =>setChirp({
    user: chirp.user,
    text: e.target.value
  });
  const saveChirp = async ()=>{
    await fetch ("/api/chirps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(chirp)
    });
    props.history.push ("/")
  }
  return (
    <div className="container">
        <div className="card shadow-lg m-2">
            <div className="card-body">
                <div className="row">
                    <input type="text" className="card-title" defaultValue="" onChange={userChange}/>
                </div>
                <div className="row">
                    <textarea className="card-text" defaultValue={chirp.text} cols={50} rows={15} onChange={textChange}></textarea>
                </div>
                <button className="btn btn-sm btn-outline-dark float-right mx-1" onClick={saveChirp}>Save</button>
            </div>
        </div>
    </div>
)
}

interface IAddChirpProps extends RouteComponentProps {}
export default AddChirp
