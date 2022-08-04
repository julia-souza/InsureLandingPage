// import React from 'react'
// import './css/Cadastra.css'

// const Cadastra = () => {
//     createList() {
//         fetch("http://localhost:3002/posts", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify(this.state.singledata)
//         }).then(
//           this.setState({
//             singledata: {
//               title: "",
//               author: ""
//             }
//           })
//         );
//     }

//     return (
//         <form className='cadastro' onSubmit={this.handleSubmit} >
//             {/* onSubmit={this.handleSubmit} */}
//             <h1>newsletter</h1>
//         <label>
//           Nome:
//           <input className="inpt" type="text" value={this.state.value} onChange={this.handleChange}/>
//           {/* value={this.state.value} onChange={this.handleChange}  */}
//         </label>
//         <label>
//             E-mail:
//             <input className="inpt" type="text" value={this.state.value} onChange={this.handleChange} />
//           {/* value={this.state.value} onChange={this.handleChange}  */}
//         </label>
//         <input className="envia" type="submit" value="Enviar" />
//       </form>
//   );
// }

// export default Cadastra;