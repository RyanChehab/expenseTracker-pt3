import { dblClick } from "@testing-library/user-event/dist/click";
import React,{useEffect, useState} from "react";


function Income_sheet(){
    const [incomeData, setIncomeData] = useState([]);

    const fetchIncome = ()=> {
        // fetch income data from api
        fetch('http://localhost/expensetrackerpt3/src/backend/read.php',{
            method: 'POST'
        })
        .then(response => response.json())
        .then(data =>{
            setIncomeData(data)
            console.log(data)
            console.log(incomeData)
            })
        
        .catch(error => console.error("Error fetching data: ", error))
    }

    // calls the fetchIncome when the component mounts
    useEffect(() => {
        fetchIncome(); 
    }, []);

    if (incomeData.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <div>
        <button className="add-income" id="add-income">Add Income</button>
        
            {incomeData.length > 0 ? (
                incomeData.filter(({type}) => type === "income")
                .map(({ id, type, amount, date, notes }) => (
                    <div key={id} className={`transForm-${type}`}>
                        <div className="flex space-between m-1">
                            <p>{type}</p>
                            <i className="delete fas fa-minus" title="Delete transaction"></i>
                        </div>
                        <hr />
                        <p>Amount: {amount}</p>
                        <p>Date: {date}</p>
                        <p>Description: {notes}</p>
                    </div>
                ))
            ) : (
                <p>No transactions found.</p>
            )}
        </div>
    );
}
export default Income_sheet;
