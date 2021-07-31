import React from 'react';
import './bots-page.styles.css';
import DetailsCard from '../../components/card/card.component';
import BroImg from '../../assets/images/bro.PNG';
import LkbImg from '../../assets/images/lkb.PNG';

const bots = [
    {
        "name": "Bro",
        "profile-pic-url": BroImg,
        "git-link": "https://github.com/scamper07/BroDiscordBot"
    },
    {
        "name": "Lkb",
        "profile-pic-url": LkbImg
    }
]

const BotsPage = () =>
    (<div className="bots-page-conatiner">
       <div className="bots-title">
            <div className="line-animation">BOTS</div>
        </div>
       <div className="cards-container">
           {bots.map(bot => 
           <DetailsCard title={bot.name} image={bot['profile-pic-url']} cardLinks={[{'url': bot['git-link'], 'text': "Github"}]}/>
           )}
       </div>
    </div>)

export default BotsPage