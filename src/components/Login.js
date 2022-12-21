import React from 'react'
import "./login.css"
export default function Login() {
  return (
    <div>

<div class="container">
		<div class="form">
			<h2>Login To Your Account</h2>
			<form>
				<input type="text" name="username" placeholder="Username" />
				<input type="password" name="password" placeholder="Password" />
				<button>Login</button>
			</form>
		</div>
	</div>
    </div>
  )
}
