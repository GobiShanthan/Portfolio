import {WiSnow,WiRain,WiFog,WiDayCloudy,WiNightCloudy,WiDaySunny,WiNightClear,WiThunderstorm,WiShowers,WiSleet,WiSmoke, WiSandstorm, WiRaindrops, WiCloudy, WiCloudyGusts, WiCloudyWindy, WiRainMix, WiNightThunderstorm, WiNightShowers, WiNightRain, WiNightRainMix, WiNightSnow, WiNightSleet, WiNightSleetStorm, WiNightFog, WiNightCloudyGusts, WiNightCloudyWindy} from 'react-icons/wi'
import {BiCloudDrizzle,BiCloudLightRain,BiCloudRain} from 'react-icons/bi'
import { RiHazeLine } from 'react-icons/ri'



const hours = new Date().getHours()
const dayTime = hours > 6 && hours < 20

const IconsDisplay =({icons})=>{

    switch(icons){
        case'thunderstorm with light rain':return dayTime? <WiThunderstorm/>:<WiNightThunderstorm/>
        case'thunderstorm with rain':return dayTime? <WiThunderstorm/>:<WiNightThunderstorm/>
        case'thunderstorm with heavy rain':return dayTime?<WiThunderstorm/>:<WiNightThunderstorm/>
        case'thunderstorm with light drizzle':return dayTime?<WiThunderstorm/>:<WiNightThunderstorm/>
        case'thunderstorm with drizzle': return dayTime?<WiThunderstorm/>:<WiNightThunderstorm/>
        case'thunderstorm with heavy drizzle':return dayTime?<WiThunderstorm/>:<WiNightThunderstorm/>
        case'thunderstorm with hail':return dayTime?<WiThunderstorm/>   :<WiNightThunderstorm/>
        case 'light drizzle':return dayTime?<BiCloudDrizzle/>:<WiNightShowers/>
        case'drizzle':return dayTime?<BiCloudDrizzle/>:<WiNightShowers/>
        case'heavy drizzle':return dayTime? <BiCloudDrizzle/>:<WiNightShowers/>
        case'light rain':return dayTime?<BiCloudLightRain/>:<WiNightRain/>
        case'moderate rain':return dayTime?<WiRain/>:<WiNightRain/>
        case'heavy rain': return dayTime?<BiCloudRain/>  :<WiNightRain/>
        case'freezing rain':return dayTime?<WiRainMix/> :<WiNightRainMix/>
        case'light shower rain':return dayTime?<WiShowers/>:<WiNightShowers/>
        case 'shower rain':return dayTime?<WiShowers/>:<WiNightShowers/>
        case'heavy shower rain':return dayTime?<WiShowers/>:<WiNightShowers/>
        case'light snow':return dayTime? <WiSnow/>:<WiNightSnow/>
        case'snow':return dayTime?<WiSnow/>:<WiNightSnow/>
        case'heavy snow':return dayTime?<WiSnow/>:<WiNightSnow/>
        case'mix snow/rain': return dayTime?<WiSnow/> :<WiNightRainMix/> 
        case'sleet':return dayTime?<WiSleet/> :<WiNightSleet/>
        case'heavy sleet':return dayTime?<WiSleet/>  :<WiNightSleetStorm/> 
        case 'snow shower':return dayTime?<WiSnow/>:<WiNightSnow/>
        case'heavy snow shower':return dayTime? <WiSnow/> :<WiNightSnow/>
        case'flurries':return dayTime? <WiRaindrops/> :<WiNightShowers/>
        case'mist':return dayTime?<WiFog/>:<WiNightFog/>
        case'smoke':return <WiSmoke/>
        case'haze': return <RiHazeLine/> 
        case'sand/dust':return <WiSandstorm/> 
        case'fog':return dayTime?<WiFog/>  :<WiNightFog/> 
        case'freezing Fog':return dayTime?<WiFog/>:<WiNightFog/>
        case'clear sky':return dayTime?<WiDaySunny/>:<WiNightClear/>
        case'few clouds':return dayTime? <WiCloudy/>:<WiNightCloudy/>
        case'scattered clouds':return dayTime?<WiCloudyGusts/>:<WiNightCloudyGusts/>
        case'broken clouds':return dayTime?<WiCloudyWindy/>:<WiNightCloudyWindy/>
        case'overcast clouds': return dayTime ? <WiDayCloudy/> :<WiNightCloudy/> 
        case'unknown precipitation':return dayTime?<WiRain/> :<WiNightRain/>


        default:return dayTime?<WiDaySunny/>:<WiNightClear/>
}
}

export {IconsDisplay}