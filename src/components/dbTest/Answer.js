import React from "react";
import db from "../../config/firebase.config";

export const Answer = ({ id }) => {
    // console.log("id:", id);
    const [answers, setAnswer] = React.useState("");
    // update firebase data
    const dbRef = db.collection("questions");

    const handleUpdate = async ({ id }) => {
        dbRef.doc(id).delete();
    };
    return (
        <div>
            <input
                type="text"
                placeholder="answer"
                value={answers}
                onChange={(event) => setAnswer(event.target.value)}
            />
            <button onClick={(id) => handleUpdate(id)}>answer</button>
        </div>
    );
};
