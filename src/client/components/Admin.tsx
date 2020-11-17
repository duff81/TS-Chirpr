import * as React from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import { chirp } from "../types";

const Admin: React.FC<ISingleChirpProps> = (props: ISingleChirpProps) => {
  const [chirp, setChirp] = React.useState<chirp>({
    id: "",
    name: "",
    content: "",
  });

  React.useEffect(() => {
    (async () => {
      try {
        let res = await fetch(`/api/chirps/${props.match.params.id}`);
        let chirp = await res.json();
        console.log(chirp);
        setChirp(chirp);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const insertChirp = async (id: string) => {
    await fetch(`/api/chirps/${id}`, {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({content: chirp.content})
    });
    props.history.push("/");
  };
  const deleteChirp = async (id: string) => {
    await fetch(`/api/chirps/${id}`, {
        method: "DELETE"
    });

    props.history.push("/");
};

  const contentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setChirp({
      id: chirp.id,
      name: chirp.name,
      content: e.target.value,
    });

  return (
    <div className="container">
    <div className="card shadow-lg m-2">
        <div className="card-body">
            <div className="row">
                <h5 className="card-title">@{chirp.name}</h5>
            </div>
            <div className="row">
                <textarea className="card-text" defaultValue={chirp.content} cols={50} rows={15} onChange={(e) => contentChange(e)}></textarea>
            </div>
            <button className="btn btn-sm btn-outline-dark float-right mx-1" onClick={() => insertChirp(chirp.id)}>Save</button>
            <button className="btn btn-sm btn-outline-dark float-right mx-1" onClick={() => deleteChirp(chirp.id)}>Delete</button>
        </div>
    </div>
</div>
  );
};

interface ISingleChirpProps extends RouteComponentProps<{ id: string }> {}



export default Admin ;
