import React, { Component } from 'react'

class Form extends Component {
    userTemplate = {
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    }
    state = {
        users: [this.userTemplate]
    }
    handleSubmit = () => {
        this.setState({
            users: [...this.state.users, this.userTemplate]
        })
    }
    handleChange = (e, index) => {
        // debugger;
        let updateUsers = this.state.users;
        updateUsers = updateUsers.map((user, i) => {
            return (index === i ? {
                ...user,
                [e.target.name]: e.target.value
            } :{  ...user }
            )
        })
        this.setState({
            users: updateUsers
        })
    }
    handleClose = (index) => {
        let updatedUsers = [...this.state.users]
        updatedUsers.splice(index,1)
        // delete updatedUsers[index]
        this.setState({
            users: updatedUsers
        })   
    }
    handleSubmitData = () => {
        console.log(this.state.users);
    }
    render() {
        const userForm = this.state.users;
        return (
            <>
                <form>
                    {userForm && userForm.map((form, index) => {
                        // console.log(form);
                        const display = index === 0? "none" : "initial";
                        return (
                            <div style={{
                                margin: "10px",
                                padding: "10px",
                                background: "#8080800d"
                            }}
                                key={index}
                            >
                                <label htmlFor="firstName">First name:</label>
                                <input type="text" name="firstName" onChange={(e) => this.handleChange(e, index)}  />
                                <label htmlFor="lastName">Last name:</label>
                                <input type="text" name="lastName" onChange={(e) => this.handleChange(e, index)}  />
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" onChange={(e) => this.handleChange(e, index)} />
                                <label htmlFor="phone">Phone:</label>
                                <input type="text" name="phone" onChange={(e) => this.handleChange(e, index)} />
                                <span style={{
                                    color:"red",
                                    fontSize:"20px",
                                    marginLeft:"20px",
                                    display: display
                                }}
                                onClick={()=>this.handleClose(index)}
                                >X</span>
                            </div>
                        )
                    })}
                </form>
                <input type="button" value="Add more" onClick={this.handleSubmit} />
                <input type="button" value="Submit Data" onClick={this.handleSubmitData} />
            </>
        )
    }
}
export default Form;