import Head from "next/head";
import { dbController } from "../utils/dbController";
import all from "../utils/all.json";

export default function Home() {
  // Create the collection "allcharacters"

  const controller = new dbController();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("creando--->");
    try {
      all.map(async(objeto)=>{
         await controller.addNewDoc("allcharacters",objeto)
      })
     
    } catch (error) {
      console.log("este es el error -->",error)
    }
    
  };
  const handleData=async(e)=>{
    await controller.getData("allCharacters")
  }
  return (
    <div>
      <Head>
        <title>Starwars Challenge</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button style={{ backgroundColor: "red" }} onClick={handleSubmit}>
        Crear json{" "}
      </button>
      <button style={{ backgroundColor: "red" }} onClick={handleData}>
        getData{" "}
      </button>
    </div>
  );
}
