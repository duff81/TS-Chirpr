import * as express from "express";
import { GetChirp, GetChirps, UpdateChirp, CreateChirp, DeleteChirp } from "../utils/chirpstore"

const router = express.Router();

router.get("/", (req, res) => {
  let data = GetChirps();
  console.log(data);
  const chirps = Object.keys(data).map((key) => {
    return {
      id: key,
      user: data[key].user,
      text: data[key].text
    };
  });
  chirps.pop();
  res.json(chirps)
});

router.get("/:id?", (req, res) => {
  const id = req.params.id;
  res.send(GetChirp(id))
})

router.post("/", (req, res) => {
  let chirpObj: chirp = {
    user: req.body.user,
    text: req.body.text
  }
  CreateChirp(chirpObj)
  res.send("You did it!");
});

router.put("/:id?", (req: express.Request, res: express.Response) => {
  const id = req.params.id;
  let chirpObj: chirp = {
    user: req.body.user,
    text: req.body.text
  }
  UpdateChirp(id, chirpObj);
  res.send("Smart change!");
});

router.delete("/:id?", (req, res) => {
  const id: string = req.params.id;
  DeleteChirp(id);

  res.send("don't worry we won't tell anyone...");
});


interface chirp {
  user: string,
  text: string
}
export default router
