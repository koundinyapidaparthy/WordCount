import React from 'react'

const InvictusOutput = (props) => {
    const Array1=props.Arr1
    const Array2=props.Arr2
    return (
        <>
            {
            Array1.map((value,index) =>{
                return (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{value}</td>
                    <td>{Array2[index]}</td>
                    </tr>
                )
            })
        }
        </>
    )
}

export default InvictusOutput
