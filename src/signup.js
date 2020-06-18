import React,{useState} from 'react';

const Signup = () =>  {

	const [name,setName] = useState("");
	const [email,setEmail] = useState("");
	const [password,setPassword] = useState("");
	const [error,setError] = useState("");


	const clickSubmit = () => {

			const user = {

				name,
				email,
				password
			}

			console.log(user)

		}


		return(
				<div className="container">

		<h2 className="mt-5 mb-5"> Signup </h2>

			<form>
						<div className="form-group">
							    <label for="exampleInputName1">Name</label>
							    <input type="text" onChange = {e => setName(e.target.value)}  className="form-control" id="exampleInputName1" value={name} aria-describedby="emailHelp" placeholder="Enter Name"/>
							    
						</div>

					  <div className="form-group">
							    <label for="exampleInputEmail1">Email address</label>
							    <input type="email" onChange = {e => setEmail(e.target.value)}  className="form-control" id="exampleInputEmail1" value={email} aria-describedby="emailHelp" placeholder="Enter email"/>
							    <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>

					  </div>
					  <div className="form-group">
							    <label for="exampleInputPassword1">Password</label>
							    <input type="password" onChange = {e => setPassword(e.target.value)} className="form-control" value={password} id="exampleInputPassword1" placeholder="Password"/>
					  </div>
					  <div className="form-check">
							    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
							    <label className="form-check-label" for="exampleCheck1">Check me out</label>
					  </div>
					            <button onClick = {clickSubmit()} className="btn btn-raised btn-primary">Submit</button>
			</form>
				


				</div>

               );

	}

export default Signup;