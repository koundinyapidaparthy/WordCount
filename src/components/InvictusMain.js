import React ,{useState}from "react";
import styled from "styled-components";
import InvictusOutput from "./InvictusOutput";
const InvictusMain = () => {
    const [state1, setstate1] = useState([]);
    const [state2, setstate2] = useState(0);
    const submit=()=>{
        const input=document.getElementById("input");

        if(input.value.trim()===""){
            input.style.border=`3px solid red`;
            alert("Enter a value in the red color highlightBox");
        }
        else if(input.value.trim()<=0){
            input.style.border=`3px solid red`;
            alert("Entered value must be greater than zero");
        }
        else if(input.value.trim()>156){
            input.style.border=`3px solid red`;
            alert("Entered value must be less than 156");
        }
        else{
            input.style.border=`1px solid black`;
            fetched(input.value.trim());
            setstate2(input.value.trim());
        }
    }


    const fetched=(input)=>{
        fetch("https://raw.githubusercontent.com/invictustech/test/main/README.md").then(async(data)=>{
            if(data.ok){
                var answer =await  data.text();
                var arr=answer.split(' ');
            }
            const ValuesFetched=[];
            
            for(let i=0;i<arr.length;i++){
                const object={
                    dataName:"",
                    frequency:"",
                }
                object.dataName=arr[i];
                let z=0;
                for(let j=0;j<arr.length;j++){
                    if(arr[i]===arr[j]){
                        z++;
                        object.frequency=z;
                    }
                }
                
                ValuesFetched[i]=object;


            }
            const filteredArr = ValuesFetched.reduce((acc, current) => {
                const x = acc.find(item => item.dataName === current.dataName);
                if (!x) {
                  return acc.concat([current]);
                } else {
                  return acc;
                }
              }, []);
              filteredArr.sort(function(a, b){return b.frequency - a.frequency});
              const outputArr=[];
              for(let a=0; a<input;a++){
                  outputArr[a]=filteredArr[a];
                }

            if(ValuesFetched.length<=0 && filteredArr.length<=0 && outputArr.length<0){
                alert("error our side");
            }
            else{
                setstate1(outputArr);
                document.querySelector(".Invictus__End").style.display="flex";
            }

        }).catch(e=>console.log(e));
    }

    return (
        <DIV>
            <div className="Invictus__Main">
                <input id="input" type="number" max="156" min="1" placeholder="Enter a Number" />
                <button id="submit" onClick={submit}>Submit</button>
            </div>
           <div className="Invictus__End">
           <table >     
                <thead>
                        <tr>
                             <td colSpan = "3" style={{"fontWeight":"bold"}}>Top {state2} words and their frequency</td>
                        </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>S.No</th>
                        <th>Values</th>
                        <th>Frequencies</th>
                    </tr>
                    <InvictusOutput Arr1={state1}  />
                </tbody>
            </table>
           </div>

        </DIV>
    )
}

const centering={
    flex:(fd,jc,ai)=>`display :flex;flex-direction :${fd};justify-content :${jc};align-items :${ai};`
}
const DIV=styled.div`
    ${centering.flex("column","space-around","center")};
    width:100%;
    height:100vh;
    background-color:#99ff99;
    .Invictus__Main{
        width:320px;
        height:15rem;
        border-radius:2rem;
        background-color:white;
        box-shadow:10px 10px 50px -10px black;
        margin-top:5px;
        margin-left:5px;
        transition:all 1.5s  ease-in-out;
        &:hover{
            box-shadow:0 0 50px -40px black;
            margin:0px;
        }
        ${centering.flex("column","space-evenly","center")};
        #input{
            width:200px;
            height:20px;
            padding:10px;
            border-radius:2rem;
            border:2px solid black ;
            &:focus{
                outline:none;
                border-color: #38ef7d;
            }
            &::placeholder{
                font-weight:bold;
            }
        }
        button{
            width:200px;
            border:0px;
            padding:15px;
            border-radius:3rem;
            letter-spacing:1px;
            color:white;
            background-color:black;
            font-weight:bold;
            font-size:13px;
            text-transform:uppercase;
            cursor:pointer;

        }
    }

    .Invictus__End{
        width:320px;
        height:60vh; 
        overflow-y:scroll;
        ${centering.flex("row","center","start")};
        display:none;
        table{
            width:100%;
          &, th, td {
            border: 1px solid black;
            text-align:center;
            border-collapse: collapse;
            }
        }
    }
`;



export default InvictusMain
