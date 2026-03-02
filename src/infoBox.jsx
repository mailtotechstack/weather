import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({Info}){
  const imageUrl = {
    cold : "https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
    hot : "https://plus.unsplash.com/premium_photo-1761916092337-2125999f903c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    rain : "https://plus.unsplash.com/premium_photo-1663099753562-4afbb1b613e6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1177",
  }
    return(<div>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Info.humidity > 80 ? imageUrl.rain : Info.temp > 15 ?imageUrl.hot : imageUrl.cold}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Info.city}&nbsp;{Info.humidity > 80 ? <ThunderstormIcon/> : Info.temp > 15 ?<SunnyIcon/> : <SevereColdIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div>
              <p>Temperature = {Info.temp}&deg;C</p>
              <p>Humidity = {Info.humidity}&deg;C</p>
              <p>Min Temp = {Info.tempMin}&deg;C</p>
              <p>Max Temp = {Info.tempMax}&deg;C</p>
              <p>The weather can be described as <b>{Info.type}</b> and feels like {Info.feelsLike} &deg;C</p>
          </div>
        </Typography>
      </CardContent>
    </Card>

    </div>)
}