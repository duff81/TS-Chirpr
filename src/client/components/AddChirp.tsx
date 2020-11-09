import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

export interface AddChirpProps extends RouteComponentProps {}

export interface AddChirpState {
  user: string;
  text: string;
}

class AddChirp extends React.Component<AddChirpProps, AddChirpState> {
  constructor(props: AddChirpProps) {
    super(props);
    this.state = {
      user: " ",
      text: " ",
    };
    this.newSubmit = this.newSubmit.bind(this);
  }

  async newSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    const data = { user: this.state.user, text: this.state.text };
    e.preventDefault();
    if (this.state.user && this.state.text) {
      try {
        await fetch("/api/chirps/", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json",
          },
        });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("error");
    }
  }
}

export default AddChirp
