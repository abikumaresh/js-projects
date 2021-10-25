import React from 'react'
import './SeasonDisplay.css'

const seasonConfig = {
    summer : {
        text : "Lets hit the beach!",
        iconName : "sun"
    },
    winter : {
        text : "Burr, it's chilly",
        iconName : "snowflake"
    }
}

const getSeason = (lat, month) => {
    console.log(month)
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {
    console.log(props.lat)
    const season = getSeason(props.lat, new Date().getMonth())
    console.log(season)
    const {text, iconName} = seasonConfig[season]

    return (<div>
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive icon ${iconName}` } />
            <h1>{text}</h1>
            <i className={`icon-right massive icon ${iconName}` }/>
        </div>       

    </div>)
}

export default SeasonDisplay