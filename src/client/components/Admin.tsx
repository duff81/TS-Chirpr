import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

class Admin extends React.Component<AdminProps, AdminState>{
    constructor(props: AdminProps){
        super(props);
        this.state={
            chirp: {user:" ", text: " "},
            id: this.props.match.params.id,
            user:" ",
            text:" "
        }
    // this.editChirps = this.editChirps.bind (this);
    // this.deleteChirp = this.deleteChirp.bind (this);
} 
async componentDidMount (){
    // let id =this.props.match.params.id
    try{
        let resChirp = await fetch(`/api/chirps/${this.props.match.params.id}`)
        let chirp=await resChirp.json();
        this.setState({user: chirp.user, text: chirp.text})
    } catch(err){
        console.log(err)
    } 
} 
    };
    


  

export interface AdminProps extends RouteComponentProps<{ id:string }> {}

interface Chirp{
    user:string,
    text:string
}

export interface AdminState {
    chirp:Chirp,
    id:string,
    user: string,
    text: string
}

export default Admin;