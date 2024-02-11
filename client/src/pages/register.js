import Layout from "../components/layout"
import { useState } from "react"
import { onRegistration } from "../api/auth"

const Register = () => {
    const [values, setValues] = useState({
      email: "",
      password: "",
    });
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const onChange = (e) => {
      setValues({...values, [e.target.name]: e.target.value});
    }

    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        const {data} = await onRegistration (values)
        
        setError("")
        setSuccess(data.message)
        setValues({email: "", password: ""})
      } catch (error) {
        console.log(error.response.data.errors[0].msg)
        setError(error.response.data.errors[0].msg)
        setSuccess("")
      }
    }
    
    return (
      <Layout> 
        <form onSubmit={(e) => onSubmit(e)} className="container mt-3">
          <h1>Ro'yxatdan o'tish / Register</h1>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input 
              onChange={(e) => onChange(e)} 
              type="email" 
              className="form-control" 
              id="email"
              name="email"
              placeholder="falonchi@gmail.com"
              aria-describedby="emailHelp"    
              required
              value={values.email} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password"
              name="password"
              placeholder="kalit so'zni kiriting" 
              onChange={(e) => onChange(e)}
              required
              value={values.password} />
          </div>

          <div style={{color: "red", margin: "10px 0"}}>{error}</div>
          <div style={{color: "green", margin: "10px 0"}}>{success}</div>
          <button type="submit" className="btn btn-primary">Ro'yxatdan o'tish /register </button>
        </form>
      </Layout>
    ) 
  }
  
  export default Register