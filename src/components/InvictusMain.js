import React ,{useState}from "react";
import styled from "styled-components";
import InvictusOutput from "./InvictusOutput";
const InvictusMain = () => {
    const [state1, setstate1] = useState([])
    const [state2, setstate2] = useState([])
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
        else if(input.value.trim()>227){
            input.style.border=`3px solid red`;
            alert("Entered value must be less than 277");
        }
        else{
            input.style.border=`1px solid black`;
            fetched(input.value.trim());
        }
    }


    const fetched=(input)=>{
        fetch("https://raw.githubusercontent.com/invictustech/test/main/README.md").then(async(data)=>{
            if(data.ok){
                var answer =await  data.text();
                var arr=answer.split(' ');
            }
            const ValuesFetched=[];

            for(let i=0;i<input;i++){
                ValuesFetched[i]=arr[i];
            }
            const Frequencies=[];
            for(let j=0;j<ValuesFetched.length;j++){
                let z=0;
                for(let k=0;k<arr.length;k++){
                    if(ValuesFetched[j]===arr[k]){
                        z++;
                        Frequencies[j]=z;
                    }
                }
            }

            if(ValuesFetched.length<=0 && Frequencies.length<=0){
                alert("error our side");
            }
            else{
                setstate1(ValuesFetched);
                setstate2(Frequencies);
                document.querySelector(".Invictus__End").style.display="flex";
            }

        }).catch(e=>console.log(e));
    }

    return (
        <DIV>
            <div className="Invictus__Main">
                <input id="input" type="number" max="227" min="1" placeholder="Enter a Input " />
                <button id="submit" onClick={submit}>Submit</button>
            </div>
           <div className="Invictus__End">
           <table >
                <tbody>
                    <tr>
                        <th>S.No</th>
                        <th>Values</th>
                        <th>Frequencies</th>
                    </tr>
                    <InvictusOutput Arr1={state1} Arr2={state2} />
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
