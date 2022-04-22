import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Form from './Form'
function App() {
  const [employeeDetails, setEmployeeDetails] = useState([
    {
      firstName: '',
      lastName: '',
      designation: '',
      contactNo: '',
    },
  ])

  const [showDetails, setShowDetails] = useState(null)
  const remove = (ind) => {
    const array = employeeDetails.filter((employee, index) => index !== ind)

    setEmployeeDetails(array)
  }
  const edit = (ind) => {
    const edit_array = employeeDetails.filter(
      (employee, index) => index === ind,
    )
  }
  const update = (e, ind) => {
    e.preventDefault()
    const { firstname, lastname, designation, contactno } = e.target.elements

    const update = {
      firstName: firstname.value,
      lastName: lastname.value,
      designation: designation.value,
      contactNo: contactno.value,
    }
    const update_array = employeeDetails.map((employee, index) => {
    
        if (index === ind) {
          employee.firstName = update.firstName,
            (employee.lastName = update.lastName),
            (employee.designation = update.designation),
            (employee.contactNo = update.contactNo)
        }
      }
    
    })
  }
  const add = (e) => {
    e.preventDefault()
    const { firstname, lastname, designation, contactno } = e.target.elements

    setEmployeeDetails([
      ...employeeDetails,
      {
        firstName: firstname.value,
        lastName: lastname.value,
        designation: designation.value,
        contactNo: contactno.value,
      },
    ])
  }
  useEffect(() => {
    setShowDetails(true)
  }, [showDetails])
  const close = () => {}
  return (
    <>
      <div id="container">
        <Form add={add} />
      </div>

      <div id="detailsContainer">
        <table id="employees">
          <tr>
            <th>FIRST NAME</th>

            <th>LAST NAME</th>

            <th>DESIGNATION</th>

            <th>CONTACT NUMBER</th>
          </tr>

          {showDetails &&
            employeeDetails.map((employee, index) => {
              return (
                <tr key={index}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.contactNo}</td>
                  <td>
                    <input
                      type="button"
                      onClick={(e) => edit(index)}
                      className="edit-btn"
                      value="Edit"
                    />
                    <input
                      type="button"
                      className="remove-btn"
                      onClick={(e) => remove(index)}
                      value="Remove"
                    />
                  </td>
                </tr>
              )
            })}
        </table>
      </div>

      <form id="form_conatainer" onSubmit={update}>
        <label for="firstName">First Name*</label>

        <input type="text" placeholder="" name="firstname" required />

        <label for="lastName">Last Name*</label>
        <input
          type="text"
          name="lastname"
          placeholder="Enter last name"
          required
        />
        <label for="designation">Designation*</label>
        <input
          type="text"
          name="designation"
          placeholder="enter designation"
          required
        />
        <label for="contactnumber">Contact Number*</label>
        <input
          type="text"
          name="contactno"
          pattern="[1-9][0-9]{9}"
          placeholder="enter contact number"
          required
        />
        <button type="reset">Clear</button>
        <button tupe="submit">Update</button>
      </form>
    </>
  )
}

export default App
