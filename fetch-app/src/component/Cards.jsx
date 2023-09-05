import React, { useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Cards() {
  const [news, setNews] = useState([]);

  const fetchNews = () => {
    axios.get("https://dummyjson.com/products")
      .then((response) => {
        setNews(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }

  return (
    <div className='container my-3'>
      <div className='row'>
        <div className='col-4'>
          <button className='btn btn-primary' onClick={fetchNews}>Fetch</button>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          {news.map((item, index) => (
            <div className='col-4' key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={item.thumbnail}
                   
                  title={item.title} 
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;

