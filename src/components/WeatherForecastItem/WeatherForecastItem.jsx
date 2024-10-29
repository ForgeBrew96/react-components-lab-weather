import './WeatherForecastItem.css'

const WeatherForecastItem = (props) => {
    return (
        <div>
            <h2>{ props.day }</h2>
            <img src={ props.img } alt={ props.imgAlt } />
            <p><span>conditions: </span>{ props.conditions }</p>
            <p><span>time: </span>{ props.time }</p>
        </div>
    )
};


export default WeatherForecastItem;