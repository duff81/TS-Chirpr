import * as React from "react";
import { chirp } from "../types";
import { Link } from "react-router-dom";

const AllChirps: React.FC<IAllChirpsProps> = () => {
  const [chirps, setChirps] = React.useState<chirp[]>([]);

  React.useEffect(() => {
    getChirps();
  }, []);

  const getChirps = async () => {
    try {
      let res = await fetch("/api/chirps/");
      let chirps: chirp[] = await res.json();
      chirps.reverse();
      setChirps(chirps);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      {chirps.map((chirp: chirp) => (
        <div key={chirp.id} className="card shadow-lg m-2">
          <div className="card-body">
            <h5 className="card-title">@{chirp.user}</h5>
            <p className="card-text">{chirp.text}</p>
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
