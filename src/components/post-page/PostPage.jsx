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


export const PostPage = () => {

    const [display, setDisplay] = useState("none");
    const [btn, setBtn] = useState("block");
    const [editDis, setEditDis] = useState("none");
    

    const handleDisplay = () => {
        setDisplay("block");
        setBtn("none");
    }

    const handleEditDis = () => {
        setEditDis("block");
    }

    return (

    <div style={{width: '100%'}}>
        <div className="outer">
            <div className="outer-left">
                <div className="left-tags">
                    <div>Opinions</div>
                    <div>Perspective</div>
                    <div>India</div>
                    <FiEdit2></FiEdit2>
                </div>

                <div className="left-title">
                    How is India Viewed From Outside?
                </div>

                <div className="left-answer-icon">
                    <div className="answer-icon">
                        <div className="answer-icon-inner">
                            <div><AiOutlineScan></AiOutlineScan></div>
                            <div onClick={handleEditDis}>Answer</div>
                        </div>
                        <div className="answer-icon-inner">
                            <div><FiRss></FiRss></div>
                            <div>Follow</div>
                        </div>
                       <div className="answer-icon-inner">
                            <div><IoPersonOutline></IoPersonOutline></div>
                            <div>Request</div>
                        </div>
                    </div>
                    <div className="share-icon">
                        <FaRegComment></FaRegComment>
                        <IoArrowDownSharp></IoArrowDownSharp>
                        <IoArrowRedoOutline></IoArrowRedoOutline>
                        <IoEllipsisHorizontalOutline></IoEllipsisHorizontalOutline>
                    </div>
                    
                </div>

                <hr />

                <div style={{display: editDis, marginTop: "10px"}}>
                    <Editor />
                </div>

                <div className="left-ad">
                    <div className="left-ad-title">
                        <div>Ad by Amazon Services</div>
                        <div><IoEllipsisHorizontalOutline></IoEllipsisHorizontalOutline></div>
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
                    Secure payments
                </div>

                



            </div>
            
            <div className="outer-right">
                <div className="right-head">Related Questions</div>
                <hr />
                <div className="right-body">Did you ever get a request for a favor from a relative who never showed any respect or</div>
                <div className="right-body">What did someone say to you that instantly made you realize their life was in danger?</div>
                <div className="right-body">Have you ever lost any respect for someone instantly?</div>
                <div className="right-body">What made you respect someone today?</div>
                <div className="right-body">Who has totally lost your respect? Why?</div>
                <div className="right-body">How can you make others respect you?</div>

                <div className="right-footer">Ask a question</div>
            </div>
        </div>
    </div>
    )
}
