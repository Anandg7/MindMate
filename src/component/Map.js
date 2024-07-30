import React,{useState,useEffect} from 'react'
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import 'leaflet-control-geocoder';
import 'leaflet-routing-machine';
import 'leaflet.locatecontrol';

export default function Map() {
    useEffect(() => {
        // display Map (Initialization)
        const map = L.map('map').setView([20.593684, 78.96288], 5);
    
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    
        //for search box
        const geocoder = L.Control.geocoder().addTo(map);
    
        //Get user location on map
        L.control.locate().addTo(map);
    
        // It's important to return a cleanup function in useEffect to remove any event listeners or do any necessary cleanup
        return () => {
          map.remove();
        };
      }, []); // Empty dependency array ensures this effect runs only once
    
      return <div id="map" style={{ height: '100vh', width: '100%' }} />;
    };
