import React from 'react';
import './PostPage.css';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export const PostPage = () => {
    return (

    <div style={{width: '100%'}}>
        <div className="outer">
            <div className="outer-left">
                <div className="left-tags">
                    <div>Opinions</div>
                    <div>Perspective</div>
                    <div>India</div>
                    <EditOutlinedIcon></EditOutlinedIcon>
                </div>

                <div className="left-title">
                    How is India Viewed From Outside?
                </div>
            </div>
            
            <div>

            </div>
        </div>
    </div>
    )
}
