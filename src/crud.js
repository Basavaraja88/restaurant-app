import React, { useState } from "react";

function Crud() {
  const [img, setImg] = useState();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phonenumber: "",
    age: "",
    image: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleChange = (e) => {
  //   const { name, vlaue } = e.target;
  //   setFormData({ ...fromData, [name]: vlaue });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("all data", formData);
  };
  return (
    <div className=" mx-auto container flex justify-center">
      <form onSubmit={handleSubmit} className=" space-y-10">
        <label>Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <br />
        <label>last name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <br />
        <label>Phone number:</label>
        <input
          type="number"
          name="phonenumber"
          value={formData.phonenumber}
          onChange={handleChange}
        />
        <br />
        <label>age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />
        <label>Image</label>
        <input
          type="file"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <button className=" bg-slate-400 px-7 rounded-sm">Submit</button>
      </form>
    </div>
  );
}

export default Crud;
