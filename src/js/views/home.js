import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [data, setData] = useState({
    full_name: "", email: "", phone: "", address: "", agenda_slug: "David"
  })
  const Agregar = (event) => {
    event.preventDefault()
    actions.createContact()
  }

  const info = (event) => {
    setData({
      ...data, [event.target.name]: event.target.value
    })
  }
  return (
    <div className="text-center mt-5">
      {/* <h1>Contact List!</h1> */}
      {/* <p>
      <img src={rigoImage} alt="Rigo Baby" />
    </p> */}
      {/* <a href="#" className="btn btn-success">
      If you see this green button, bootstrap is working
    </a> */}
      <ul className="list-group">
        <li className="list-group-item">
          <h1 className="title">Add a new contact</h1>
          {/* <form> */}
          <div>
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="Full Name" onChange={info} name="full_name" required value={data.full_name} />
          </div>
          <div>
            <label className="form-label">Email</label>
            <input type="text" className="form-control" placeholder="Enter email" onChange={info} name="email" required value={data.email} />
          </div>
          <div>
            <label className="form-label">Phone</label>
            <input type="text" className="form-control" placeholder="Enter phone" onChange={info} name="phone" required value={data.phone} />
          </div>
          <div>
            <label className="form-label">Address</label>
            <input type="text" className="form-control" placeholder="Enter address" onChange={info} name="address" required value={data.address} />
          </div>

          <div>
            <label className="form-label">agenda_slug</label>
            <input type="text" className="form-control" placeholder="Agenda Slug" onChange={info} name="agenda_slug" required value={data.agenda_slug} />
          </div>

          <br />
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button" onClick={Agregar}>
              Enviar
            </button>
          </div>
          <br />
          <Link to="/">
            <span>Or get back to contacts</span>
          </Link>
          {/* </form> */}
        </li>
      </ul>
    </div>
  );
};

export default Home;