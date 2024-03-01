
import React, { useState } from "react";
function App() {

  const [data, setData] = useState({})
  const [register, setRegister] = useState([])

  const getInputValue = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  const getSubmit = (e) => {
    e.preventDefault();
    setRegister([...register, data]);
    e.target.reset();
  }
  console.log(register)
  return (

    <div className="container mt-5 ">

      <h1>Registartion-form</h1>
      <div className='row'>
        <form onSubmit={(e) => {
          getSubmit(e)
        }}>
          <div className='col-12'>
            <div className='row '>

              <div className='col-6 mt-2'>
                <input type='text' name='name' placeholder='Ad' className='form-control' onChange={(e) => {
                  getInputValue(e)
                }} required />
              </div>

              <div className='col-6 mt-2'>
                <input type='text' name='surname' placeholder='Soyad' className='form-control' onChange={(e) => {
                  getInputValue(e)
                }} required />
              </div>

              <div className='col-6 mt-2'>
                <input type='nummber' name='age' placeholder='Yashi' className='form-control' onChange={(e) => {
                  getInputValue(e)
                }} required />
              </div>

              <div className='col-6 mt-2'>
                <input type='text' name='phone' placeholder='Telefon nomresi' className='form-control' onChange={(e) => {
                  getInputValue(e)
                }} required />
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <button className="btn btn-success mt-3 ">Submit</button>
            </div>
          </div>
        </form>

        <div className="col-12 mt-5">
          <table className="table table-dark table-stripet table-bordered table-hover">
            <thead>

              <tr>
                <td>
                  #
                </td>

                <td>
                  Ad
                </td>

                <td>
                  Soyad
                </td>

                <td>
                  Yashi
                </td>

                <td>
                  Telefon
                </td>
              </tr>
            </thead>

            <tbody>
              {
                register.map((index, key) => {
                  return (
                    <tr>
                      <td>
                        {key + 1}
                      </td>
                      <td>
                        {index.name}
                      </td>

                      <td>
                        {index.surname}
                      </td>

                      <td>
                        {index.age}
                      </td>

                      <td>
                        {index.phone}
                      </td>


                    </tr>
                  )


                })
              }

            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}

export default App;
