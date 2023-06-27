import React from 'react';
// import { useNavigate } from "react-router-dom";


class AddContact extends React.Component {
    state = {
        name: "",
        email: ""
    }
    add = (e) => {
        e.preventDefault() // to prevent reloading
        if(this.state.name === "" || this.state.email === "") {
            alert("All fields are mandatory !")
        }
        this.props.childContactHandler(this.state)
        // to clear the fields after setting the state in App Component
        this.setState({name: "", email: ""})
        // console.log(this.props);
        // const navigate = useNavigate();
        // navigate("/");
        // this.props.navigate('/');
        // useNavigation();
        window.location.href = "/contacts";
    }
    

    render() {
        return (
            <div >
                <h4>Add Contact</h4>
                <form method="post" onSubmit={this.add}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter Your Name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" name="email" className="form-control" placeholder="Enter Your Email ID"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    {/* <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" className="btn btn-primary" >Add</button>
                </form>
            </div>
        );
    }
}

// function redirect()
// {
//     preventDefault();
// // var url = "/";
// // window.location(url);
// // document.location.href = '/'
// window.location.href = "/contacts";
// }

// function useNavigation() {
//     let navigate = useNavigate();
//     // return <AddContact {...props} navigate={navigate} />
//     // useEffect(() => {
//     //     navigate("/");
//     // })
//     navigate("/");
// }

export default AddContact;