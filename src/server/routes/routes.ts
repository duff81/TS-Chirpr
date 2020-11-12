import * as express from "express";
import { GetChirp, GetChirps, UpdateChirp, CreateChirp, DeleteChirp } from "../utils/chirpstore"

const router:express.Router = express.Router();

router.get("/", (req: express.Request, res:express.Response) => {
  const data = GetChirps();
  const chirps = Object.keys(data).map((key) => {
    return {
      id: key,
      user: data[key].user,
      text: data[key].text, 
    };
  
  });
  chirps.pop();
  res.json(chirps)
  
});

router.get("/:id?", (req: express.Request, res:express.Response) => {
  const id = req.params.id;
  const data=GetChirp(id)
  const chirp ={
    id:id,
    user: data.user,
    text: data.text
  };
  res.send(JSON.stringify(chirp))
})

router.post("/", (req: express.Request, res: express.Response) => {
  let chirpObj: chirp = {
    user: req.body.user,
    text: req.body.text
  }
  CreateChirp(chirpObj)
  res.send("You did it!");
  console.log()
});

router.put("/:id?", (req: express.Request, res: express.Response) => {
  const id:string = req.params.id;
  let chirpObj: chirp = {
    user: req.body.user,
    text: req.body.text
  }
  UpdateChirp(id, chirpObj);
  console.log(id)
  res.send("Smart change!");
});

router.delete("/:id?", (req:express.Request, res:express.Response) => {
  const id: string = req.params.id;
  DeleteChirp(id);
  console.log(id)

  res.send("don't worry we won't tell anyone...");
});


interface chirp {
  user: string,
  text: string
}
export default router
