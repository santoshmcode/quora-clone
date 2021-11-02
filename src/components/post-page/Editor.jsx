import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";

import './Editor.css'

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default class TextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    return (
      <div>
          <div className="edit-author-credentials">
              <div className="edit-author-image">
                  <div>
                    <img src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png" alt="author" />
                  </div>
              </div>
              <div className="edit-author-body">
                    <div>Add your Name</div>
                    <div style={{color: "#636466"}}>Edit your Credentials</div>
              </div>
          </div>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
        />
        <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        ></textarea>
        <div className="post-answer">Post</div>
      </div>
    );
  }
}