import React from 'react'
import {useEffect, useState} from "react"
import axios from "axios"
import "../index.css"
import img1 from "../Wallpapers/w1.jpg"
export default function Container({dynimage, cctempof, cdesc, cnameof, cgetLocation}) {

    return (
        <>
    <div className="mySlides fade">
    <div className="numbertext">{cctempof}°C</div>
    <div className="numbertext1">{cdesc}</div>
<img src={dynimage} className="all"/>
 <div className="text">{cnameof}</div>
 <button className="btn" onClick={cgetLocation}>Get started</button>
  </div>
        </>
    )
}
