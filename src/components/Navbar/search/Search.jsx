import { useState ,useEffect} from "react";
import db from "../../../config/firebase.config";
import styled from 'styled-components';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";



export const Search = ({search,handleOpen}) => {
    
    const [searchData, setsearchData] = useState([]);
    const [result,setResult] =useState([])



    const throttler = () => {
        let timer_ref;

        return function (delay_time,callback) {
            if (timer_ref !== undefined) {
                return;
            }

            timer_ref = setTimeout(() => {
                callback();
                timer_ref = undefined;
            },delay_time)
        }
    }

     const getData = (ref) => {
            console.log("hello");
            let dataArray = [];
            let  dbRef = db.collection(ref);

            // dbRef= dbRef.startAt("react").endAt("react" + "\uf8ff");
            // console.log("dbRef:", dbRef);
            dbRef.onSnapshot((querySnapshot) => {
                // console.log("querySnapshot:", querySnapshot);
                dataArray = [];
                querySnapshot.forEach((doc) => {
                    console.log(doc);
                    let id = doc.id;
                    console.log(id,"id");
                    dataArray.push({
                    ...doc.data(), //spread operator
                    id
                    });

                    console.log(dataArray,"dataArray");
                setsearchData(dataArray);
                
                });

            
            })

            console.log(dataArray,"1");



    }



      
    const Search = () => {
            console.log("Final task", search);
            let dummy = search.trim().split(" ")
            console.log(dummy);
            let returned_function = throttler();
            ///call back fn
        returned_function(1000, () => {
                    
                    
            let data = searchData.map((e) => {
                let id = e.id;
                let question = e.question;
                return {id,question}
            });
            console.log(data);
            let results = data.filter((e) => {
                console.log(e.question);

                if (dummy.length === 1 && dummy[0] === "")
                    return false;

                if (dummy.length >= 1&&dummy[0]!==""&&dummy[0]!=="what"&&dummy[0]!=="wh0"&&dummy[0]!=="when"&&dummy[0]!=="why")
                    return e.question.match(new RegExp(dummy[0], "gi")) !==null ? 1 : 0;
                if (dummy.length >= 2&&dummy[1]!==""&&dummy[1]!=="is")
                    return e.question.match(new RegExp(dummy[1], "gi")) !==null ? 1 : 0;
                if (dummy.length >= 3&&dummy[2]!=="")
                    return e.question.match(new RegExp(dummy[2], "gi")) !==null ? 1 : 0;
                if (dummy.length >= 4&&dummy[3]!=="")
                    return e.question.match(new RegExp(dummy[3], "gi")) != null ? 1 : 0;
                if (dummy.length >= 5&&dummy[4]!=="")
                    return e.question.match(new RegExp(dummy[4], "gi")) != null ? 1 : 0;
                if (dummy.length >= 6&&dummy[5]!=="")
                    return e.question.match(new RegExp(dummy[5], "gi")) != null ? 1 : 0;
                return false;
                        
            })
            console.log(dummy,"dummy");
            console.log(results, "result");
            setResult(results)
        })
    }

    useEffect(() => {
        getData("questions")
        Search();
        
    }, [search])

    return (
        <div>
             {result.length !== 0 && <Dropdown>
            {
              result.map((e, i) => 
                i <= 4 && <Link to={`/answers/${e.id}`} key={e.id} >
                  <div className="searcher">
                    <p>{e.question}</p>
                  </div>
                </Link>
              )
            }
            <div className="addQuestion" onClick={handleOpen}>
              <AiOutlinePlusCircle className="plus"/>
              <p>Add New Question</p>
            </div>
          </Dropdown>}
            
        </div>
    )
}


const Dropdown = styled.div`
box-shadow: 0px 0px 8px grey;
width: 15.5rem;
position: absolute;
border-radius: .3rem;
justify-content: center;
z-index: 1111;
background-color: white;
left: 31.4rem;
top: 2.8rem;
  .searcher{
    min-height:2.5rem;
    border-bottom: 1px solid grey;
    width: 100%;
    padding-left: 1rem;
    font-size: 1rem;
    align-items: center;
    margin: auto;
    cursor: pointer;
    &:hover {
      background-color: #f1f0f0;
    }
    p {
      padding-top: .5rem;
      cursor: pointer;
    }
  }
  .addQuestion{
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
      margin-right:.5rem;
    }
    p{
      color: #2e69ff;
      font-size: 1rem;
      cursor: pointer;
    }
  }


`;