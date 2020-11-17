import * as express from "express";
import { OkPacket } from "mysql";
import db from "../DB";

const router: express.Router = express.Router();

router.get("/", async (req: express.Request, res: express.Response) => {
  try {
    const data = await db.Chirps.allChirps();
    res.json(data);
  } catch (error) {
    res.sendStatus(500)
    console.log(error)
  }
});

router.get("/:id", async (req: express.Request, res: express.Response) => {
  try {
    const id: number = Number(req.params.id);
    const data = await db.Chirps.oneChirp(id);
    res.send(data[0])
  } catch (error) {
    res.sendStatus(500)
    console.log(error)
  }
});

router.put("/:id?", async (req: express.Request, res: express.Response) => {

  try {
    const id: number = Number(req.params.id)
    const newChirpContent = req.body.content;
    await db.Chirps.updateChirp(newChirpContent, id);

    res.status(200).send(`Updated chirp %{id}`)

  } catch (err) {
    console.log(err);
    res.status(500).send(err)
  }
});
router.post("/", async (req: express.Request, res: express.Response) => {

  try {
    const newUserName = req.body.name;
    const newChirpContent = req.body.content;

    const newUser = await db.Users.insertChirp(newUserName)
    const newUserId = newUser.insertId;

    const newChirp = await db.Chirps.insertChirp(newUserId, newChirpContent);
    res.status(200).send(`
    user created with id: ${newUserId} 
    chirp created with id: ${newChirp.insertId}
    `)

  } catch (err) {
    console.log(err);
    res.status(500).send(err)
  }
});

router.delete("/:id", async (req: express.Request, res: express.Response) => {
 try{
   
  const id: number = Number(req.params.id);
  await db.Mentions.deleteChirp(id);
  await db.Chirps.deleteChirp(id);
  res.send(`chirp ${id} was deleted`)
  } catch (err){
    console.log (err);
    res.status(500).send(err)
  }
});

export default router