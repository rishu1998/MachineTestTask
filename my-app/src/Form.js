import React from 'react'
const Form = ({ add }) => {
  return (
    <form id="form_conatainer" onSubmit={add}>
      <label for="firstName">First Name*</label>

      <input
        type="text"
        placeholder="Enter first name"
        name="firstname"
        required
      />

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
      <button tupe="submit">Add</button>
    </form>
  )
}
export default Form
