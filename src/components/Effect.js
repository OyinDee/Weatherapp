import React from 'react'
import {useEffect, useState} from "react"
import axios from "axios"
import useAxios from "./useAxios"
import "../index.css"
import img1 from "../Wallpapers/w1.jpg"
import img2 from "../Wallpapers/w2.webp"
import img3 from "../Wallpapers/w3.jpg"
import img4 from "../Wallpapers/w4.jpg"
import img5 from "../Wallpapers/w5.jpg"
import img6 from "../Wallpapers/w6.jpg"
import img7 from "../Wallpapers/w7.jpg"
import img8 from "../Wallpapers/w8.jpg"
import img9 from "../Wallpapers/w9.jpg"
import img10 from "../Wallpapers/w10.webp"
import img11 from "../Wallpapers/w11.jpg"
import img12 from "../Wallpapers/w12.jpg"
import img13 from "../Wallpapers/w13.jpg"
import Container from "./Container"


var dataa
export default function Effect() {

    const urll="https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=31fe60a104e32be3553f171cf4fc0053"
    const [num, setNum ] = useState(0)
    const [long, setLong ] = useState(0)
    const [lati, setLati ] = useState(0)
    const [nameof, setNameof] = useState('')
    const [tempof, setTempof] = useState(0)
    const [desc, setDesc] = useState('')
    const [ctempof, setcTempof] = useState(0)
        let slideIndex = 0;

        
        const check=()=>{
            const options = {
                method: 'GET',
                url: "https://api.openweathermap.org/data/2.5/weather?q=ogbomoso&appid=31fe60a104e32be3553f171cf4fc0053"
            };
    
              axios.request(options).then(function (response) {
                  let dataa=(response.data)
                  let dataaa=(response.data.main)
                  let datade=(response.data.weather[0].description)
                  
                  console.log(dataa);
                  setNameof(dataa.name)
                  setTempof(dataaa.temp)
                  setDesc(datade)
                  setcTempof(((dataaa.temp)-273).toFixed(2))
                  
                  
                }).catch(function (error) {
                    console.error(error.message);
                });
            }
        const getLocation=()=>{

            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition((response)=>{
                    console.log(response.coords.latitude)
                console.log(response.coords.longitude)            
                setLong(response.coords.longitude)
                setLati(response.coords.latitude) 
                check()
            })


        }
        
        else{
            console.log("Browser does not support")
        }
        
    }

        
        const showSlides=()=> {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}
            slides[slideIndex-1].style.display = "block";
            setTimeout(showSlides, 6000);
        }
        showSlides();




        return (
            <>
 {/* <div>{tempof}*C</div> */}
 <div></div>

 <div></div>
        {/* <button onClick={getLocation}>Check location</button>
        <button onClick={check}>Check weather</button> */}
        <div className="slideshow-container">


<Container dynimage={img1} cctempof={ctempof} cdesc={desc} cnameof={nameof} cgetLocation={getLocation}></Container>
<Container dynimage={img2} cctempof={ctempof} cdesc={desc} cnameof={nameof} cgetLocation={getLocation}></Container>
<Container dynimage={img3} cctempof={ctempof} cdesc={desc} cnameof={nameof} cgetLocation={getLocation}></Container>
<Container dynimage={img4} cctempof={ctempof} cdesc={desc} cnameof={nameof} cgetLocation={getLocation}></Container>
<Container dynimage={img5} cctempof={ctempof} cdesc={desc} cnameof={nameof} cgetLocation={getLocation}></Container>
<Container dynimage={img6} cctempof={ctempof} cdesc={desc} cnameof={nameof} cgetLocation={getLocation}></Container>
{/* <Container dynimage={img7} cctempof={ctempof} cdesc={desc} cnameof={nameof} cgetLocation={getLocation}></Container> */}
<Container dynimage={img8} cctempof={ctempof} cdesc={desc} cnameof={nameof} cgetLocation={getLocation}></Container>
<Container dynimage={img9} cctempof={ctempof} cdesc={desc} cnameof={nameof} cgetLocation={getLocation}></Container>
<Container dynimage={img10} cctempof={ctempof} cdesc={desc} cnameof={nameof} cgetLocation={getLocation}></Container>
<Container dynimage={img11} cctempof={ctempof} cdesc={desc} cnameof={nameof} cgetLocation={getLocation}></Container>
<Container dynimage={img12} cctempof={ctempof} cdesc={desc} cnameof={nameof} cgetLocation={getLocation}></Container>
<Container dynimage={img13} cctempof={ctempof} cdesc={desc} cnameof={nameof} cgetLocation={getLocation}></Container>
  </div>
       </>
)


}