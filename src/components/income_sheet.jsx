import React,{useEffect, useState} from "react";

function income_sheet(){
    const [incomeData, setIncomeData] = useState([]);

    useEffect(()=> {
        // fetch income data from api
        fetch('http://localhost/expensetrackerpt3/src/backend/read.php',{
            method: 'POST'
        })
        .then(response => response.json())
        .then(data =>setIncomeData(data))
        .catch(error => console.error("Error fetching data: ", error))
    },[])
    return(
        
    )
}