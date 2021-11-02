import { useState } from 'react';
import styled from 'styled-components';
import { AllComments } from './AllComments';
import { IconGrp } from './IconGrp';

const dummydata = [
    {   id:"1",
        userImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1200px-Crystal_Clear_kdm_user_female.svg.png",
        userName: "Kalpan Chaula",
        Designation: "Software Engineer at google",
        lastUpdatedDate: "june 2021",
        heading: "What are the major differences between Python and R for data science?",
        content: "So eventually, the best ideas from either language find their way into the other making both languages similarly useful & valuable.If you’re too impatient to wait for a particular feature in your language of choice, it's also worth noting that there is excellent language interoperability between Python and R. That is, you can run R code from Python using the rpy2 package, and you can run Python code from R using reticulate. That means that all the features present in one language can be accessed from the other language.",
        images:["https://www.speexx.com/wp-content/uploads/icon-think-user-centric-1.png","https://kinsta.com/wp-content/uploads/2019/10/user-registration-plugins-1024x512.png"]
        
    },
    {
           id:"2",
        userImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1200px-Crystal_Clear_kdm_user_female.svg.png",
        userName: "Kalpan Chaula",
        Designation: "Software Engineer at google",
        lastUpdatedDate: "june 2021",
        heading: "What are the major differences between Python and R for data science?",
        content: "So eventually, the best ideas from either language find their way into the other making both languages similarly useful & valuable.If you’re too impatient to wait for a particular feature in your language of choice, it's also worth noting that there is excellent language interoperability between Python and R. That is, you can run R code from Python using the rpy2 package, and you can run Python code from R using reticulate. That means that all the features present in one language can be accessed from the other language.",
        images:["https://www.speexx.com/wp-content/uploads/icon-think-user-centric-1.png","https://kinsta.com/wp-content/uploads/2019/10/user-registration-plugins-1024x512.png"]
        
    },
      {
           id:"3",
        userImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1200px-Crystal_Clear_kdm_user_female.svg.png",
        userName: "Kalpan Chaula",
        Designation: "Software Engineer at google",
        lastUpdatedDate: "june 2021",
        heading: "What are the major differences between Python and R for data science?",
        content: "So eventually, the best ideas from either language find their way into the other making both languages similarly useful & valuable.If you’re too impatient to wait for a particular feature in your language of choice, it's also worth noting that there is excellent language interoperability between Python and R. That is, you can run R code from Python using the rpy2 package, and you can run Python code from R using reticulate. That means that all the features present in one language can be accessed from the other language.",
        images:[]
        
    }
   
]

export const QandA = () => {
    const [unhide, setUnhide] = useState(false);
    const [ID, setID] = useState("");
    const [showComments, setShowComments] = useState("");
    const [commentToogle,setCommentToogle]=useState(false)


    const handleUnhide = (id) => {
        setID(id)
        setUnhide(true)
    }

       const handleComments = (id) => {
           setShowComments(id)
           setCommentToogle(!commentToogle)
    }
    return (
        <>
            {dummydata.map((e,i)=><Container>
                    <div className="header">
                        <img src={e.userImg} alt="" />
                        <div className="user">
                        <p> {e.userName} -<label htmlFor=""> Follow</label></p>
                        <span>address -updated date</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className="textContent">
                        <h4>{e.heading }</h4>
                        <p onClick={() => { handleUnhide(e.id) }}>{ e.content.slice(0,152)} <label className={unhide&&ID===e.id?`hide`:`unhide`}> (more)</label> <span className={unhide&&ID===e.id?`unhide`:`hide`}>{ e.content.slice(152)}</span></p>

                        </div>

                      {  e.images.length>0 && e.images.map((el,i)=><div key={i} className="imageSection">
                          {i===0?<img src={el} alt="" />:e.id===ID&&<img src={el} alt="" /> }
                        </div>)}
                </div>
                <IconGrp handleComments={handleComments} toogle={commentToogle} showComments={showComments} id={ e.id}/>
                
                {e.id===showComments&&commentToogle&&<AllComments />}
            </Container>)}
        </>
    )
}


const Container = styled.div`
width: 35.625rem;
margin-left: 20rem;
margin-top: 4rem;
border:.5px solid rgb(222,224,225);
box-shadow: 0px 0px 5px rgb(222,224,225);
border-radius: 8px;
.header{
    padding-top: 1rem;
    padding-left: 1rem;
    display: flex;
    .user{
        margin-top: 0px;
        padding-top: 3px;
        margin-left: 5px;
        p{
            font-size: 13px;
            font-weight: 700;
            color: #282829;
            line-height: .3cm;
            padding-top: 0px;
        label{
            color:#2e69ff;
            font-weight: 500;
        }

        }
        span{
            font-size: 13px;
        }
    }
    img{
        width: 2.25rem;
        height:2.25rem;
        border-radius: 50%;
    }
}
.content{

    
    .textContent{
        padding: 1rem;
        h4{
            color:#282829;
        }
        p{
            position: relative;
            cursor: pointer;
            font-size: 15px;
            line-height: 21px;
           color:#282829;
            label{
                position: absolute;
                right: .5rem;
                top: 1.3rem;
                color: #195faa;
            }
        }
        .more{
            color:"blue";
        }

        .hide{
            display: none;
        }
        .unhide{
            display: block;
        }

    }
    .imageSection{
    width:100%;
    img{
        width: 100%;
    }
    }
}


`;
