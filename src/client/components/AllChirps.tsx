import * as React from "react";
import { chirp } from "../types";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

const AllChirps: React.FC<IAllChirpsProps> = () => {
  const [chirps, setChirps] = React.useState<chirp[]>([]);

  React.useEffect(() => {
    getChirps();
  }, []);

  const getChirps = async () => {
    try {
      let res = await fetch("/api/chirps/");
      let chirps: chirp[] = await res.json();
      console.log(chirps[11])
      chirps.reverse();
      setChirps(chirps);
        
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      {chirps.map((chirp: chirp, key) => (
        <div key={uuid()} className="card shadow-lg m-2">
          <div className="card-body">
            <h5 className="card-title">{chirp.name}</h5>
            <p className="card-text">{chirp.content}</p>
            <Link to={`/chirp/${chirp.id}/admin`}>
              <button className="btn btn-sm btn-outline-dark float-right">
                Options
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

interface IAllChirpsProps {}
export default AllChirps;
