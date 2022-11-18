import { FiberManualRecord, Info } from '@material-ui/icons'
import React from 'react'
import './Widgets.css'

const Widgets = () => {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleleft">
                <FiberManualRecord />
            </div>
            <div className="widgets__articleright">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Tech News</h2>
                <Info />
            </div>
            {newsArticle("TWD at top with 500k subscriber", "Top news - 9099 readers")}
            {newsArticle("Qualcomm Snapdragon 775 Series", "Top news - 8760 readers")}
            {newsArticle("Amazfit T-Rex Pro Hands", "Top news - 999 readers")}
            {newsArticle("Apple Music Service Feature for iOS", "Top news - 899 readers")}
            {newsArticle("Mars Rover Perseverance Takes First Drive", "Top news - 799 readers")}
            {newsArticle("Twitter CEO Jack Dorsey Auctions Tweet", "Top news - 599 readers")}
        </div>
    )
}

export default Widgets
