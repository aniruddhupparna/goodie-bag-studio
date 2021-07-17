import React from 'react'
import './about-page.styles.css';
import DetailsCard from '../../components/card/card.component';

const members = [
    {
        "name": "Pavan",
        "nickname": "Vatican-Cameos",
        "profile-pic-url": "https://avatars.githubusercontent.com/u/9047260?v=4",
        "git-link": "https://github.com/Vatican-Cameos"
    },
    {
        "name": "Preetham Kulai",
        "nickname": "scamper07",
        "profile-pic-url": "https://avatars.githubusercontent.com/u/5275731?v=4",
        "git-link": "https://github.com/scamper07"
    },
    {
        "name": "Mahesh",
        "nickname": "mahilion",
        "profile-pic-url": "https://avatars.githubusercontent.com/u/5725205?v=4",
        "git-link": "https://github.com/mahilion"
    },
    {
        "name": "Koushik N",
        "nickname": "Koushik1994",
        "profile-pic-url": "https://avatars.githubusercontent.com/u/22327701?v=4",
        "git-link": "https://github.com/Koushik1994"
    },
    {
        "name": "PUNITH B M",
        "nickname": "bmpunith",
        "profile-pic-url": "https://avatars.githubusercontent.com/u/14996055?v=4",
        "git-link": "https://github.com/bmpunith"
    },
    {
        "name": "Aniruddh K.",
        "nickname": "aniruddhupparna",
        "profile-pic-url": "https://avatars.githubusercontent.com/u/25810438?v=4",
        "git-link": "https://github.com/aniruddhupparna"
    }
]
const AboutPage = () =>
    (<div className="about-page-conatiner">
       <div className="members-title">
            <div className="line-animation">MEMBERS</div>
        </div>
       <div className="cards-container">
           {members.map(member => 
           <DetailsCard title={member.name} details={member.nickname} image={member['profile-pic-url']} cardLinks={[{'url': member['git-link'], 'text': "Github"}]}/>
           )}
       </div>
    </div>)

export default AboutPage