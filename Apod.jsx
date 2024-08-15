import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const APOD = () => {
    const [apodData, setApodData] = useState(null);
    const [loading, setLoading] = useState(true);

    const API_KEY = 'LUxradWshmb3LvX3ZP6gCyLeq3Di0wgKX4JqfVEI';
    const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

    useEffect(() => {
        const fetchAPOD = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setApodData(data);
                setLoading(false);
            } catch (error) {
                console.error('Error APOD data:', error);
                setLoading(false);
            }
        };

        
    }, [API_URL]);

    
}

export default APOD;