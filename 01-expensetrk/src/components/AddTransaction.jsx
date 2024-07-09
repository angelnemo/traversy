import React from 'react'
import { useState } from 'react'


const AddTransaction = () => {

const [transaction, setTransaction] = useState('')
const [amount, setAmount] = useState(0)


const [formData, setFormData] = useState({
  transaction:"",
  amount:0
})
const handleChange = (event) => {
  const{name, value} = event.target
  //console.log('contro tipo: ', event.target.valueAsNumber)
  console.log('contro tipo: ', event.target.currentTarget)
  setFormData({...formData, [name]:value})
  
}



  return (
    <>
        <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" name='transaction' id='transaction' value={ formData.transaction}  placeholder="Enter text..." 
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" name='amount' id='amount' placeholder="Enter amount..."  value={formData.amount} 
            onChange={handleChange}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction