import * as express from "express";
import chirpstore, { GetChirp, UpdateChirp, CreateChirp, DeleteChirp } from "../utils/chirpstore"

import chirpMarket from "../DB/chirps"
import DB from "../DB";

const router:express.Router = express.Router();

router.get("/", async(req: express.Request, res: express.Response)=>{
  try{
    const chirps= await chirpMarket.allChirps();
    res.send(chirps);
  }catch (error){
    res.sendStatus(500)
    console.log(error)
  }
});

router.get("/:id", async (req: express.Request, res:express.Response) => {
  try {
    let id = parseInt(req.params.id)
    res.json((await chirpMarket.oneChirp(id)))
  } catch (error){
    res.sendStatus(500)
    console.log(error)
  }

router.put("/:id?", async(req: express.Request, res: express.Response) => {
  
  try { 
    res.json (await chirpMarket.editChirp(req.body.content, req.body.id));

  } catch (error){
    console.log(error)
  }
   
  // let chirpObj: chirp = {
  //   id= id,
  //   userid: req.body.user,
  //   text: req.body.text
  // }
  // UpdateChirp(id, chirpObj);
  // console.log(id)
  // res.send("Smart change!");
});   
  // const newChirp= await chirpMarket.oneChirp(0)
  // console.log(chirpMarket.oneChirp(0))
  // const chirp ={
  //   id:id,
  //   userid: newChirp.userid,
  //   content: newChirp.content
  // };
  // res.send(JSON.stringify(chirp))
})

// router.get("/:id?", (req: express.Request, res:express.Response) => {
//   const id = req.params.id;
//   const data=GetChirp(id)
//   const chirp ={
//     id:id,
//     user: data.user,
//     text: data.text
//   };
//   res.send(JSON.stringify(chirp))
// })
// router.get("/", (req: express.Request, res:express.Response) => {
//   const data = GetChirp();
//   const chirps = Object.keys(data).map((key) => {
//     return {
//       id: key,
//       user: data[key].user,
//       text: data[key].text, 
//     };
  
//   });
//   chirps.pop();
//   res.json(chirps)
  
// });



// router.post("/", (req: express.Request, res: express.Response) => {
//   let chirpObj: chirp = {
    
//     id=id,userid: req.body.user,
//     content: req.body.content
//   }
//   CreateChirp(chirpObj)
//   res.send("You did it!");
//   console.log()
// });



router.delete("/:id?", (req:express.Request, res:express.Response) => {
  const id: string = req.params.id;
  DeleteChirp(id);
  console.log(id)

  res.send("don't worry we won't tell anyone...");
});


interface chirp {
  id: number,
  userid: string,
  content: string
}
export default router
