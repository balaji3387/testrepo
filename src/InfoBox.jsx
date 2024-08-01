import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function InfoBox({info}){
    
    const INIT_URL="https://images.app.goo.gl/jvP9ErUez2MkrWyM7";
    return(
        <>
        <div className="InfoBox">
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
       {/* <CardMedia
          image=""
          alt="green iguana"
        />*/}
        <img src="c2.jpg" height="200"width="200"></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <p>temperature  :{info.temp}&deg;C</p>
            <p>Max temperature :{info.tempMax}&deg;C</p>
            <p>Min temperature :{info.tempMin}&deg;C</p>
            <p>humidity:{info.humidity}</p>
            <p>The weather can be described as{info.weather} and feels like {info.feelslike}&deg;C</p>
    
        </CardContent>

    </Card>
    </div>
        </div>
        
        </>
    );
}