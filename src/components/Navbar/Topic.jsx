import React from 'react';
import { v4 as uuid } from "uuid";

import SearchIcon from "@mui/icons-material/Search";

export const Topic = ({ Input,handleClose, handleQuestion,setQue}) => {
    const [value, setValue] = React.useState("");
    const [topic,setTopic] = React.useState([])
    const handleChange = (e) => {
        setValue(e.target.value)
  }
  
    handleQuestion = () => {
        handleClose()
        setQue(false);
        setValue("")
  }
  const handleDelete = (e) => {
    let updatedtopic = topic.filter((item) => item.id !== e);
        setTopic(updatedtopic)
    
  }
     React.useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        const data={value: value,id:uuid()}
        setTopic([data, ...topic]);
        setValue("")
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [topic,value]);
    return (
        <div>
            <h3>Edit Topics</h3>
            <div>Make sure this question has the right topics:<br/><span className="question">{Input}</span></div>
            
            <div className="qNav_input input2">
          <div className="svgIcon">
            <SearchIcon />
            </div>
                <input type="text" className="placeholder" value={value} onChange={handleChange}  placeholder="Add topics that best describe your question " />
            
            </div>
            
            {topic.map(e => { return <div className="topics" key={e.id} >{e.value} <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 -3 25 25" onClick={()=>handleDelete(e.id)}><g id="small_close" class="icon_svg-stroke" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke="#666666" stroke-width="1.5"><path d="M12,6 L12,18" transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "/><path d="M18,12 L6,12" transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "/></g></svg></div> })}
             <div className="modal__buttons">
              <br/>
            <button className="cancle" onClick={() => handleClose()}>
              Cancel
            </button>
            <button type="sumbit"  className="add" onClick={handleQuestion}>
              Done
                </button>
                </div>
        </div>
    )
}
