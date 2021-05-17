import React,{useState,useEffect} from "react";
import { format } from 'date-fns';
import ReactJson from 'react-json-view'

export default function Dados() {

  const [json,setJson] = useState("");

  useEffect(()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(p){
          setJson(
            {latitude: p.coords.latitude, longitude: p.coords.longitude, hora: format(new Date(p.timestamp), 'HH:mm')})
      });
      
    } else { 
      console.log("ERROR");
    }
  }, []);

  return (
    <div className="landing-container">
      <div>
        <ReactJson src={json} />
      </div>
       
    </div>
  );
}