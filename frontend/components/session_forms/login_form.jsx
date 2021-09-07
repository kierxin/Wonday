// import React from "react";
// import { Link } from "react-router-dom";

// import DemoLogin from "./demo_login";


// class LoginForm extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             user: {
//                 email: '',
//                 password: '',
//                 full_name: ''
//             },
//             page: 'first'
//         }

//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleInput(formField) {
//         console.log(this.state.user);

//         return e => this.setState(
//             { user: { ...this.state.user, [formField]: e.currentTarget.value } }
//         );
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         let user = Object.assign({}, this.state.user);
//         this.props.processForm(user);
//     }

//     formErrors(formType) {
//         if (this.props.errors.length > 0) {
//             return (
//                 <ul id={`${formType}-session-form-errors`}>
//                     {this.props.errors.map((error, i) => (
//                         <li key={`error${i}`}>
//                             {error}
//                         </li>
//                     ))}
//                 </ul>
//             )
//         }
//     }

//     render() {

//         const formType = this.props.formType;
//         let submitBtnText = ""

//         formType === "login" ? (
//             submitBtnText = "Log in →") : (
//             submitBtnText = "Continue");

//         return (
//             <main className={`${formType}-main`}>

//                 {this.formErrors(formType)}

//                 {(formType === "signup") && (
//                     <label id={`${formType}-full-name-label`}>
//                         <span>Full Name</span>
//                         <input type="text"
//                             value={this.state.user.full_name}
//                             onChange={this.handleInput("full_name")}
//                             id={`${formType}-full-name-input`} />
//                     </label>
//                 )}

//                 <form onSubmit={this.handleSubmit}
//                     className="session-form"
//                     id={`${formType}-session-form`} >
//                     <label id={`${formType}-email-label`}>
//                         <span>Email</span>
//                         <input type="text"
//                             value={this.state.user.email}
//                             onChange={this.handleInput("email")}
//                             id={`${formType}-email-input`} />
//                     </label>

//                     <label id={`${formType}-password-label`}>
//                         <span>Password</span>
//                         <input type="password"
//                             value={this.state.user.password}
//                             onChange={this.handleInput("password")}
//                             id={`${formType}-password-input`} />
//                     </label>

//                     <button className="session-form-submit-btn"
//                         value={formType}
//                         type="submit"
//                         id={`${formType}-submit-btn`} >
//                         {submitBtnText}
//                     </button>
//                 </form>

//                 <DemoLogin processForm={this.props.processForm.bind(this)} />

//                 <div id="session-call-to-action">

//                     {this.props.formType === "login" ? (
//                         <>
//                             <p>Don't have an account yet?</p>
//                             <Link className="swap-session-form" to="/signup">
//                                 Sign Up
//                             </Link>
//                         </>
//                     ) : (
//                         <>
//                             <p>Already have an account?</p>
//                             <Link className="swap-session-form" to="/login">
//                                 Log In
//                             </Link>
//                         </>
//                     )}
//                 </div>
//             </main>
//         )
//     }

// }


// export default LoginForm;