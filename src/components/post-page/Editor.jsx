import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import styled from "styled-components";
import { postData, updateData } from "../../utils/api/postData";

import "./Editor.css";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { useParams } from "react-router";

export const TextEditor = () => {
    const { question_id } = useParams();
    const user = useSelector(selectUser);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [answerState, setAnswerState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
        setAnswerState(
            draftToHtml(convertToRaw(editorState.getCurrentContent()))
        );
    };

    const handlePostAnswer = () => {
        postData(`questions/${question_id}/answers`, {
            answer: answerState,
            timestamp: Date.now(),
            up_votes: 0,
            down_votes: 0,
            user_img:
                user.photoURL ||
                "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
            user_name: user.displayName,
            user_email: user.email,
            image: [],
        });

        updateData(`questions`, question_id, {
            isAnswered: true,
        });

        setEditorState(null);
        setAnswerState(null);
    };

    function uploadImageCallBack(file) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "https://api.imgur.com/3/image");
            xhr.setRequestHeader("Authorization", "Client-ID 99fce9f6241279f");
            const data = new FormData();
            data.append("image", file);
            xhr.send(data);
            xhr.addEventListener("load", () => {
                const response = JSON.parse(xhr.responseText);
                resolve(response);
            });
            xhr.addEventListener("error", () => {
                const error = JSON.parse(xhr.responseText);
                reject(error);
            });
        });
    }

    // const { editorState, answerState } = this.state;


    return (
        <div className="editor-container">
            <div className="edit-author-credentials">
                <div className="edit-author-image">
                    <div>
                        <img
                            src={
                                user?.photoURL ||
                                "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png"
                            }
                            alt="author"
                        />
                    </div>
                </div>
                <div className="edit-author-body">
                    <div>{user?.displayName || user?.email}</div>
                    <div style={{ color: "#636466" }}>
                        Edit your Credentials
                    </div>
                </div>
            </div>
            <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange}
                placeholder="  Add Your Answer"
                toolbar={{
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                    image: {
                        uploadCallback: uploadImageCallBack,
                        alt: { present: true, mandatory: true },
                        defaultSize: {
                            height: "auto",
                            width: "100%",
                        },
                        uploadEnabled: true,
                        inputAccept:
                            "image/gif,image/jpeg,image/jpg,image/png,image/svg",
                    },
                }}
                style={{ paddingLeft: "10px" }}
            />

            <div className="button-edit">
                <div className="post-answer" onClick={handlePostAnswer}>
                    Post
                </div>
                <div className="draft-answer">Save Draft</div>
            </div>
        </div>
    );
};
