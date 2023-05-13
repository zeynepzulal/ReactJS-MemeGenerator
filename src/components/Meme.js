
import React from "react";
import "../styles/Meme.css"

export default function Meme(){

   const [meme,setMeme] = React.useState({  //state de obje olarak tuttuk.
      topText: "",
      bottomText: "",
      image:"https://i.imgflip.com/3si4.jpg",
   });
   
   const [allImages,setAllImages] = React.useState([]);

   React.useEffect( () => {
      async function getImages(){
         const res = await fetch("https://api.imgflip.com/get_memes");
         const data = await res.json();
         setAllImages(data.data.memes);
         console.log(data);
      }
      getImages()
   },[]);

   function getMemeImage(){
      const randomNumber = Math.floor(Math.random() * allImages.length);
      const url = allImages[randomNumber]?.url;
     
      setMeme((prevState) => {
         return{...prevState, image: url} // (... = spread mezhodu )önceki seyleri kopyaliyor sadece virgülden sonrakini degistiriyor , set ediyor.
      });
      console.log(url);
   }
   //getMemeImage(); sonsuz döngüye girdigi için yorum satirina aldik




   function handleChange(event){
      //console.log(event); objenin içerigini görmek için yazdik
      const {name,value} = event.target;  // object distrugting

      console.log(name); //topText
      console.log(value); //kullanici inputu
      

      setMeme((prevMeme) => ({
         ...prevMeme,     //3nokta kopyaliyor.
         [name]:value  // degisken oldugunu anlamasi için [] koyduk.
      }))
   }


 return(
    <>
     <div className="form">
      <input 
      type="text"
      placeholder="Top Text"
      className="form-input"
      name="topText" //ayirt edici olarak kullandik
      value ={meme.topText}
      onChange={handleChange}
      />

      <input 
      type="text"
      placeholder="Bottom Text"
      className="form-input"
      name="bottomText"
      value ={meme.bottomText}
      onChange={handleChange}
      />

      <button className="form-btn" onClick={getMemeImage}>Get a new meme Image</button>
    </div>

    <div className="meme">
      <img src={meme.image} className="meme-image" alt="meme" />
      <h2 className="meme-text top">{meme.topText}</h2>
      <h2 className="meme-text bottom">{meme.bottomText}</h2>
    </div>


    </>
   
 )
}