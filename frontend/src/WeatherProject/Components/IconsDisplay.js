import {WiSnow,WiRain,WiFog,WiDayCloudy,WiNightCloudy,WiDaySunny,WiNightClear,WiThunderstorm,WiShowers,WiSleet,WiSmoke, WiSandstorm, WiRaindrops, WiCloudy, WiCloudyGusts, WiCloudyWindy, WiRainMix, WiNightThunderstorm, WiNightShowers, WiNightRain, WiNightRainMix, WiNightSnow, WiNightSleet, WiNightSleetStorm, WiNightFog, WiNightCloudyGusts, WiNightCloudyWindy} from 'react-icons/wi'
import {BiCloudDrizzle,BiCloudLightRain,BiCloudRain} from 'react-icons/bi'
import { RiHazeLine } from 'react-icons/ri'



const hours = new Date().getHours()
const dayTime = hours > 6 && hours < 20

const IconsDisplay =(icons)=>{

    switch(icons){
        case'Thunderstorm with light rain':return dayTime? <WiThunderstorm/>:<WiNightThunderstorm/>
        case'Thunderstorm with rain':return dayTime? <WiThunderstorm/>:<WiNightThunderstorm/>
        case'Thunderstorm with heavy rain':return dayTime?<WiThunderstorm/>:<WiNightThunderstorm/>
        case'Thunderstorm with light drizzle':return dayTime?<WiThunderstorm/>:<WiNightThunderstorm/>
        case'Thunderstorm with drizzle': return dayTime?<WiThunderstorm/>:<WiNightThunderstorm/>
        case'Thunderstorm with heavy drizzle':return dayTime?<WiThunderstorm/>:<WiNightThunderstorm/>
        case'Thunderstorm with Hail':return dayTime?<WiThunderstorm/>   :<WiNightThunderstorm/>
        case 'Light Drizzle':return dayTime?<BiCloudDrizzle/>:<WiNightShowers/>
        case'Drizzle':return dayTime?<BiCloudDrizzle/>:<WiNightShowers/>
        case'Heavy Drizzle':return dayTime? <BiCloudDrizzle/>:<WiNightShowers/>
        case'Light Rain':return dayTime?<BiCloudLightRain/>:<WiNightRain/>
        case'Moderate rain':return dayTime?<WiRain/>:<WiNightRain/>
        case'Heavy Rain': return dayTime?<BiCloudRain/>  :<WiNightRain/>
        case'Freezing rain':return dayTime?<WiRainMix/> :<WiNightRainMix/>
        case'Light shower rain':return dayTime?<WiShowers/>:<WiNightShowers/>
        case 'Shower rain':return dayTime?<WiShowers/>:<WiNightShowers/>
        case'Heavy shower rain':return dayTime?<WiShowers/>:<WiNightShowers/>
        case'Light snow':return dayTime? <WiSnow/>:<WiNightSnow/>
        case'Snow':return dayTime?<WiSnow/>:<WiNightSnow/>
        case'Heavy Snow':return dayTime?<WiSnow/>:<WiNightSnow/>
        case'Mix snow/rain': return dayTime?<WiSnow/> :<WiNightRainMix/> 
        case'Sleet':return dayTime?<WiSleet/> :<WiNightSleet/>
        case'Heavy sleet':return dayTime?<WiSleet/>  :<WiNightSleetStorm/> 
        case 'Snow shower':return dayTime?<WiSnow/>:<WiNightSnow/>
        case'Heavy snow shower':return dayTime? <WiSnow/> :<WiNightSnow/>
        case'Flurries':return dayTime? <WiRaindrops/> :<WiNightShowers/>
        case'Mist':return dayTime?<WiFog/>:<WiNightFog/>
        case'Smoke':return <WiSmoke/>
        case'Haze': return <RiHazeLine/> 
        case'Sand/dust':return <WiSandstorm/> 
        case'Fog':return dayTime?<WiFog/>  :<WiNightFog/> 
        case'Freezing Fog':return dayTime?<WiFog/>:<WiNightFog/>
        case'Clear Sky':return dayTime?<WiDaySunny/>:<WiNightClear/>
        case'Few clouds':return dayTime? <WiCloudy/>:<WiNightCloudy/>
        case'Scattered clouds':return dayTime?<WiCloudyGusts/>:<WiNightCloudyGusts/>
        case'Broken clouds':return dayTime?<WiCloudyWindy/>:<WiNightCloudyWindy/>
        case'Overcast clouds': return dayTime ? <WiDayCloudy/> :<WiNightCloudy/> 
        case'Unknown Precipitation':return dayTime?<WiRain/> :<WiNightRain/>


        default:return dayTime?<WiDaySunny/>:<WiNightClear/>
}
}

export {IconsDisplay}