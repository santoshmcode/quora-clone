import React,{useState} from 'react';
import './PostPage.css';
import {FiEdit2, FiRss} from 'react-icons/fi'
import {AiOutlineScan} from 'react-icons/ai'
import {VscAccount} from 'react-icons/vsc'
import {FaRegComment} from 'react-icons/fa'
import {IoPersonOutline} from 'react-icons/io5'
import {IoEllipsisHorizontalOutline, IoArrowRedoOutline, IoArrowDownSharp, IoOpenOutline} from 'react-icons/io5'
import {RiUserFollowLine} from 'react-icons/ri';
import Editor from './Editor'
import { Sidebar } from './sidebar/Sidebar';
import { Message } from '../message/Message';


export const PostPage = () => {

    const [display, setDisplay] = useState("none");
    const [btn, setBtn] = useState("block");
    const [editDis, setEditDis] = useState("none");
    const [check, setCheck] = useState(true);
    

    const handleDisplay = () => {
        setDisplay("block");
        setBtn("none");
    }

    const handleLess = () => {
        setDisplay("none");
        setBtn("block");
    }

    const setDis = () => {
        if(check) {
            setEditDis("block");
            setCheck(false)
        }
        else{
            setEditDis("none");
            setCheck(true)

        }


    }

    const handleEditDis = () => {
        setDis();
    }

    return (

    <div style={{width: '100%'}}>
        <div className="outer">
            <div className="outer-left">
                <div className="left-tags">
                    <div>Opinions</div>
                    <div>Perspective</div>
                    <div>India</div>
                    <div id="top-edit-icon"><div><FiEdit2></FiEdit2></div></div>
                </div>

                <div className="left-title">
                    How is India Viewed From Outside?
                </div>

                <div className="left-answer-icon">
                    <div className="answer-icon">
                        <div className="answer-icon-inner">
                            <div className="answer-svg"><svg width="24px" height="24px" viewBox="0 0 24 24"><g id="answer" transform="translate(2.500000, 3.500000)" stroke="none" stroke-width="1.5" fill="white" fill-rule="evenodd"><g id="pen" transform="translate(9.000000, 9.000000) rotate(-315.000000) translate(-9.000000, -9.000000) translate(7.000000, -1.000000)"><path d="M2,8.8817842e-16 L2,8.8817842e-16 L2,8.8817842e-16 C3.1045695,6.85269983e-16 4,0.8954305 4,2 L4,16 L2.00256278,20 L0,16 L0,2 L0,2 C-1.35267774e-16,0.8954305 0.8954305,1.09108686e-15 2,8.8817842e-16 Z" id="pen_body" class="icon_svg-stroke" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><polygon id="pen_tip" class="icon_svg-fill_as_stroke" fill="currentColor" transform="translate(2.000000, 18.750000) scale(1, -1) translate(-2.000000, -18.750000) " points="2 17.5 3.25 20 0.75 20"></polygon></g><path d="M12,16 L17,16 L17,11 M7,1 L2,1 L2,6" id="bg" class="icon_svg-stroke" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></g></svg></div>
                            <div onClick={handleEditDis}>Answer</div>
                        </div>
                        <div className="answer-icon-inner">
                            <div><svg width="24px" height="24px" viewBox="0 0 24 24"><g stroke="none" fill="none" fill-rule="evenodd" stroke-linecap="round"><g id="follow" class="icon_svg-stroke" stroke="#666" stroke-width="1.5"><path d="M14.5,19 C14.5,13.3369229 11.1630771,10 5.5,10 M19.5,19 C19.5,10.1907689 14.3092311,5 5.5,5" id="lines"></path><circle id="circle" cx="7.5" cy="17" r="2" class="icon_svg-fill" fill="none"></circle></g></g></svg></div>
                            <div>Follow</div>
                        </div>
                       <div className="answer-icon-inner">
                            <div><svg width="24px" height="24px" viewBox="0 0 24 24"><g class="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd"><g transform="translate(10.000000, 5.000000)" class="icon_svg-fill" fill="none"><path d="M10,15.5 C10,12.7385763 7.76142375,10.5 5,10.5 C2.23857625,10.5 0,12.7385763 0,15.5 M5,8 C7.209139,8 9,6.209139 9,4 C9,1.790861 7.209139,0 5,0 C2.790861,0 1,1.790861 1,4 C1,6.209139 2.790861,8 5,8 Z"></path></g><path d="M6,10 L8.5,13 L6,16 M3,13.0244257 L8.49508293,13.0244257" stroke-linecap="round" stroke-linejoin="round"></path></g></svg></div>
                            <div>Request</div>
                        </div>
                    </div>
                    <div className="share-icon">
                        <div><div><svg width="24px" height="24px" viewBox="0 0 24 24"><g id="comment" class="icon_svg-stroke icon_svg-fill" stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd"><path d="M12.0711496,18.8605911 C16.1739904,18.8605911 19.5,15.7577921 19.5,11.9302955 C19.5,8.102799 16.1739904,5 12.0711496,5 C7.96830883,5 4.64229922,8.102799 4.64229922,11.9302955 C4.64229922,13.221057 5.02055525,14.429401 5.67929998,15.4641215 C5.99817082,15.9649865 4.1279592,18.5219189 4.56718515,18.9310749 C5.02745574,19.3598348 7.80252458,17.6358115 8.37002246,17.9406001 C9.45969688,18.5258363 10.7235179,18.8605911 12.0711496,18.8605911 Z"></path></g></svg></div></div>
                        <div><div><svg width="24px" height="24px" viewBox="0 0 24 24"><g id="downvote" class="icon_svg-stroke icon_svg-fill" stroke="#666" fill="none" stroke-width="1.5" fill-rule="evenodd" stroke-linejoin="round"><polygon transform="translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000) " points="12 4 3 15 9 15 9 20 15 20 15 15 21 15"></polygon></g></svg></div></div>
                        <div><div><svg width="24px" height="24px" viewBox="0 0 24 24"><g id="share" class="icon_svg-stroke" stroke="#666" fill="none" stroke-width="1.5" fill-rule="evenodd" stroke-linejoin="round"><path d="M12.0001053,2.99989467 L4.00010533,12.7776724 L9.33343867,12.7776724 C9.78266695,14.7041066 10.5048892,16.2782509 11.5001053,17.5001053 C12.4953215,18.7219597 13.9953215,19.8886264 16.0001053,21.0001053 C15.3415908,19.6668553 14.8428108,18.1668553 14.5037654,16.5001053 C14.16472,14.8333553 14.2190556,13.5925444 14.666772,12.7776724 L20.0001053,12.7776724 L12.0001053,2.99989467 Z" transform="translate(12.000105, 12.000000) rotate(90.000000) translate(-12.000105, -12.000000) "></path></g></svg></div></div>
                        <div><div><svg width="24px" height="24px" viewBox="0 0 24 24"><g id="overflow" class="icon_svg-stroke" stroke-width="1.5" stroke="#666" fill="none" fill-rule="evenodd"><path d="M5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 C6.1045695,10 7,10.8954305 7,12 C7,13.1045695 6.1045695,14 5,14 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 C20.1045695,10 21,10.8954305 21,12 C21,13.1045695 20.1045695,14 19,14 Z"></path></g></svg></div></div>
                    </div>
                    
                </div>

                <hr />

                <div className="editor" style={{display: editDis, marginTop: "10px"}}>
                    <Editor />
                </div>

                <div className="left-ad">
                    <div className="left-ad-top">
                        <div className="left-ad-title">Ad by Amazon Services</div>
                        <div><svg width="24px" height="24px" viewBox="0 0 24 24"><g id="overflow" class="icon_svg-stroke" stroke-width="1.5" stroke="#666" fill="none" fill-rule="evenodd"><path d="M5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 C6.1045695,10 7,10.8954305 7,12 C7,13.1045695 6.1045695,14 5,14 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 C20.1045695,10 21,10.8954305 21,12 C21,13.1045695 20.1045695,14 19,14 Z"></path></g></svg></div>
                    </div>
                    <div className="left-ad-header">All the power, not all the cost</div>
                    <div className="left-ad-body">Discover the best WordPress themes, plugins, UI kits, icons, templates, mockups, style guides.</div>
                    <div className="left-ad-button">
                        <div><IoOpenOutline></IoOpenOutline></div>
                        <div>Learn more</div>
                    </div>
                </div>

                <hr />

                <div className="left-answer-no">
                    30 Answers
                </div>

                <hr />

                <div className="answer-tag">
                    <div className="answer-tag-left">
                        <div>
                            <img src="https://freesvg.org/img/Male-Avatar.png" />
                        </div>
                        <div className="author-tag">
                            <div><span>Sumit Gupta</span>, Co-founder and CEO at CoinDCX</div>
                            <div style={{fontSize:'13px'}}>Answered Apr 12</div>
                        </div>
                    </div>
                    <div className="answer-tag-right">
                         <div>
                            <RiUserFollowLine></RiUserFollowLine>
                        </div>
                    </div>
                </div>

                 <div>
                        A cryptocurrency or crypto is a digital currency and you can think of it as a digital dollar or digital INR as instead of paper money, it uses an online ledger for transactions. They provide a medium of exchange and allow individuals to directly make payments to each other.

                        <br/><br/>Bitcoin is a type of cryptocurrency, and is a digital form of cash that was invented in 2009 by an entity called Satoshi Nakamoto. How cryptocurrency works is on a technology called Blockchain which provides a peer-to-peer network and transactions are recorded on the blocks of the blockchain.

                        <br/><br/><span style={{display: btn}}>The decentralized nature of...<button onClick={handleDisplay} style={{textDecoration: 'underline'}}>more</button></span>
                </div>

                <div style={{display: display}}>
                    The decentralized nature of the blockchain makes cryptocurrencies immune to the old ways of government control and interference. Transactions are secured as the technology uses cryptography and are validated using a consensus mechanism such as Proof-of-stake. Various computers that are connected to a blockchain verify transactions on the network using these consensus mechanisms.

Upon successful verification of transactions, these transactions are grouped and chained together as blocks in the blockchain. This process of creating new blocks is known as mining and the people doing it are called miners. Miners are rewarded for their effort and resources spent on mining, in the form of crypto paybacks. Hence, the technology provides an incentive for people to maintain the blockchain and establish its authenticity.
                    <img src="https://qphs.fs.quoracdn.net/main-qimg-d2cc101eedb9805d6d2471296791bd16" width="100%" />
                    Source: MLSDev
                    The technology is such that it provides:
                    <ul>
                        <li>Transparency of transaction data</li>
                        <li>Faster transfer of payments</li>
                    </ul>
                    
                    
                    Lower transaction costs
                    Secure payments               <button onClick={handleLess} style={{textDecoration:"underline"}}>less</button>
                </div>

                



            </div>
            
            <div className="outer-right">
                <Sidebar />
            </div>

        </div>

        <Message />
    </div>
    )
}
