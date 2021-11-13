import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";

import "./Editor.css";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { postData } from "../../utils/api/postData";

export default class TextEditor extends Component {
    state = {
        editorState: EditorState.createEmpty(),
        answerState: EditorState.createEmpty(),
    };

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState: editorState,
            answerState: draftToHtml(
                convertToRaw(editorState.getCurrentContent())
            ),
        });
    };

    render() {
        function uploadImageCallBack(file) {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open("POST", "https://api.imgur.com/3/image");
                xhr.setRequestHeader(
                    "Authorization",
                    "Client-ID 99fce9f6241279f"
                );
                const data = new FormData();
                data.append("image", file);
                xhr.send(data);
                xhr.addEventListener("load", () => {
                    const response = JSON.parse(xhr.responseText);
                    // console.log(response);
                    resolve(response);
                });
                xhr.addEventListener("error", () => {
                    const error = JSON.parse(xhr.responseText);
                    // console.log(error);
                    reject(error);
                });
            });
        }

        const { editorState, answerState } = this.state;

        // console.log(answerState);
        return (
            <div>
                <div className="edit-author-credentials">
                    <div className="edit-author-image">
                        <div>
                            <img
                                src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png"
                                alt="author"
                            />
                        </div>
                    </div>
                    <div className="edit-author-body">
                        <div>Add your Name</div>
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
                    onEditorStateChange={this.onEditorStateChange}
                    placeholder="Add Your Answer"
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
                />

                <div className="button-edit">
                    <div className="post-answer">Post</div>
                    <div className="draft-answer">Save Draft</div>
                </div>
            </div>
        );
    }
}
