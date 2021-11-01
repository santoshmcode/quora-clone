import React from 'react';
import './PostPage.css';
import {FiEdit2, FiRss} from 'react-icons/fi'
import {AiOutlineScan} from 'react-icons/ai'
import {VscAccount} from 'react-icons/vsc'
import {FaRegComment} from 'react-icons/fa'
import {IoPersonOutline} from 'react-icons/io5'
import {IoEllipsisHorizontalOutline, IoArrowRedoOutline, IoArrowDownSharp, IoOpenOutline} from 'react-icons/io5'


export const PostPage = () => {
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
                            <div>Answer</div>
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

            </div>
            
            <div className="outer-right">

            </div>
        </div>
    </div>
    )
}
