import * as React from "react";
import { Link } from "react-router-dom";

export interface AllChirpsProps {}

export interface AllChirpsState {
  chirps: {
    id: string;
    user: string;
    text: string;
  }[];
}

class AllChirps extends React.Component <AllChirpsProps, AllChirpsState>{
    constructor (props: AllChirpsProps){
        super(props)
        this.state={
            chirps: []
        }
    }
}


export default AllChirps;
