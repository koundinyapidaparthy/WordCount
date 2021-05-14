import React from 'react'

const InvictusOutput = (props) => {
    const Array1=props.Arr1
    return (
        <>
            {
            Array1.map((value,index) =>{
                return (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{value.dataName}</td>
                    <td>{value.frequency}</td>
                    </tr>
                )
            })
        }
        </>
    )
}

export default InvictusOutput
