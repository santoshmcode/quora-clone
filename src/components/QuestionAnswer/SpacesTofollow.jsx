import styled from "styled-components"
import anonymous from './Images/anonimous.jpeg';
import husandwives from './Images/husbandandwives.jpeg';
import memes from './Images/memes.jpeg';
import itconfessions from './Images/itconfessions.png';
import communication from './Images/communication.png';
import facts from './Images/factsandknowledge.png';
import womens from './Images/womenzone.jpeg'
import married from './Images/marriedlife.jpeg'
import family from './Images/indianfamily.jpeg'
import life from './Images/lifestuff.jpeg'

const SpacetoFollowData = [
    
    {
        img: anonymous,
        title: "The anonymously writes",
        content:"If you want to experiaence something new, follow"
    },
    {
        img: husandwives,
        title: "Husbands and wives",
        content:"About husbands and wives(why you need to ..."
    },
    {
        img: memes,
        title: "Memes Are Life♥️",
        content:"Sarcasm😝 | Dank Memes😂 | Trolls🤡 | Comics😆 |..."
    },
    {
        img: itconfessions,
        title: "IT Confessions",
        content:"Open Confession is Good For Soul"    
    },
    {
        img: communication,
        title: "Communication Skills",
        content:"Share your experience, tips & tricks to deal with people."
    },
    {
        img: facts,
        title: "Daily facts and knowledge",
        content:"This is about a knowledge of everything"
    },
    {
        img: womens,
        title: "Womens zone",
        content:"CAREER /FASHION -LIFESTYLE /WOMENS..."
    },
     {
        img: married,
        title: "MARRIED LIFE - Lets Talk Facts",
        content:"Early days of Marriage (Vs) Later life/True love in..."
    },
      {
        img: family,
        title: "Indian family things",
        content:"In India, we find different types of joint families. We..."
    },
       {
        img: life,
        title: "Life's stuffs",
        content:"This space is about experiences of our life and..."
    }
]

export const SpacesTofollow = () => {
    return (
        <SpaceFollow>
            <div className="heading">
                <p>Spaces to follow</p>
            </div>
            {SpacetoFollowData.map((e, i) => <div key={i} className="contents">
                <div className="main" style= {i===SpacetoFollowData.length-1?{borderBottom:"none"}:null}>
                    <img src={e.img} alt="" />
                    <div className="text" style= {i===0?{borderTop:"none"}:null}>
                        <span>{ e.title}</span>
                        <p>{ e.content}</p>
                    </div>
                </div>
            </div>)}
            
        </SpaceFollow>
    )
}


const SpaceFollow = styled.div`
width:14.135rem;
border: 1px solid var(--primary-border-color);
height: fit-content;
position: absolute;
right: 4rem;
top: 4rem;
border-radius: 5px;
font-size: var(--primary-small-label-font-size);
box-shadow: 0px 0px 5px rgb(222,224,225);

    .heading {
        padding-left: .5rem;
        min-height: 2.4rem;
        border-bottom: 1px solid rgb(230,231,232);
        p{
            padding-top: .5rem;
            padding-left: 1rem;
            font-size: var(--primary-paragraph-font-size);
            font-weight: 500;
        }
    }
    .contents {
        min-height:4.6rem;
        width: 100%;
        padding-top: 1rem;
        /* padding-left: .8rem; */
        &:hover{
            cursor: pointer;
            background-color:#fafafa;
        }

        .main {
        display: flex;
        width: 13rem;
        padding-bottom: .5rem;
        border-bottom: 1px solid #d9dadb;
        margin:auto;
            img {
            height: 1.5rem;
            border-radius: 5px;
            }
            .text {
                padding-left: 8px;
                span {
                    font-weight: 500;
                }
                p {
                    color: var(--primary-light-paragraph-font-color);
                }
            }
        }
    }
`;