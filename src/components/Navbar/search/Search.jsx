import { useState, useEffect } from "react";
import db from "../../../config/firebase.config";
import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Search = ({ search, handleOpen,setSearch }) => {
    const [searchData, setsearchData] = useState([]);
    const [result, setResult] = useState([]);

    const throttler = () => {
        let timer_ref;

        return function (delay_time, callback) {
            if (timer_ref !== undefined) {
                return;
            }

            timer_ref = setTimeout(() => {
                callback();
                timer_ref = undefined;
            }, delay_time);
        };
    };

    const getData = (ref) => {
        let dataArray = [];
        let dbRef = db.collection(ref);

      
        dbRef.onSnapshot((querySnapshot) => {
            dataArray = [];
            querySnapshot.forEach((doc) => {
                let id = doc.id;
                dataArray.push({
                    ...doc.data(), //spread operator
                    id,
                });

                setsearchData(dataArray);
            });
        });

    };

    const Search = () => {
        let dummy = search.trim().split(" ");
        let returned_function = throttler();
        ///call back fn
        returned_function(1000, () => {
            let data = searchData.map((e) => {
                let id = e.id;
                let question = e.question;
                return { id, question };
            });
            let results = data.filter((e) => {

                if (dummy.length === 1 && dummy[0] === "") return false;

                if (
                    dummy.length >= 1 &&
                    dummy[0] !== "" &&
                    dummy[0] !== "what" &&
                    dummy[0] !== "wh0" &&
                    dummy[0] !== "when" &&
                    dummy[0] !== "why"
                )
                    return e.question.match(new RegExp(dummy[0], "gi")) !== null
                        ? 1
                        : 0;
                if (dummy.length >= 2 && dummy[1] !== "" && dummy[1] !== "is")
                    return e.question.match(new RegExp(dummy[1], "gi")) !== null
                        ? 1
                        : 0;
                if (dummy.length >= 3 && dummy[2] !== "")
                    return e.question.match(new RegExp(dummy[2], "gi")) !== null
                        ? 1
                        : 0;
                if (dummy.length >= 4 && dummy[3] !== "")
                    return e.question.match(new RegExp(dummy[3], "gi")) != null
                        ? 1
                        : 0;
                if (dummy.length >= 5 && dummy[4] !== "")
                    return e.question.match(new RegExp(dummy[4], "gi")) != null
                        ? 1
                        : 0;
                if (dummy.length >= 6 && dummy[5] !== "")
                    return e.question.match(new RegExp(dummy[5], "gi")) != null
                        ? 1
                        : 0;
                if (dummy.length >= 6 && dummy[6] !== "")
                    return e.question.match(new RegExp(dummy[6], "gi")) != null
                        ? 1
                        : 0;
                if (dummy.length >= 7 && dummy[7] !== "")
                    return e.question.match(new RegExp(dummy[7], "gi")) != null
                        ? 1
                        : 0;
                if (dummy.length >= 8 && dummy[8] !== "")
                    return e.question.match(new RegExp(dummy[8], "gi")) != null
                        ? 1
                        : 0;
                return false;
            });
            setResult(results);
        });
    };

    useEffect(() => {
        getData("questions");
        Search();
    }, [search]);

    return (
        <div>
            {result.length !== 0 && (
                <Dropdown>
                    {result.map(
                        (e, i) =>
                            i <= 5 && (
                                <Link to={`/question/${e.id}`} key={e.id} onClick={() => { setSearch("") }}>
                                    <div className="searcher">
                                        <p>{e.question}</p>
                                    </div>
                                </Link>
                            )
                    )}
                    <div className="addQuestion" onClick={() => { handleOpen(); setSearch("")}}>
                        <AiOutlinePlusCircle className="plus" />
                        <p>Add New Question</p>
                    </div>
                </Dropdown>
            )}
        </div>
    );
};

const Dropdown = styled.div`
    box-shadow: 0px 0px 8px grey;
    width: 100%;
    position: absolute;
    border-radius: 0.3rem;
    justify-content: center;
    z-index: 1111;
    background-color: white;
    left: 0;
    top: 2.6rem;
    box-shadow: 0px 1000000px 0px 1000000px rgba(78, 78, 78, 0.37);
    .searcher {
        min-height: fit-content;
        border-bottom: 1px solid grey;
        width: 100%;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        font-size: 0.9rem;
        align-items: center;
        margin: auto;
        cursor: pointer;
        overflow-y: hidden;
        &:hover {
            background-color: #f1f0f0;
        }
        p {
            /* padding-top: 0.8rem; */
            cursor: pointer;
        }
    }
    .addQuestion {
        min-height: 2.5rem;
        display: flex;
        align-items: center;
        margin: auto;
        cursor: pointer;
        padding-left: 1rem;
        &:hover {
            background-color: #f1f0f0;
        }
        .plus {
            color: #2e69ff;
            font-size: 1.3rem;
            margin-right: 0.5rem;
        }
        p {
            color: #2e69ff;
            font-size: 1rem;
            cursor: pointer;
        }
    }
`;
