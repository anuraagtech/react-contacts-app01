import {useState, useRef} from 'react';
// import { useNavigate } from "react-router-dom";
import { Link, useLocation } from 'react-router-dom';


const EditContact = (props) => {
    
    const editEl = useRef({});
    const location = useLocation();
    const propsData = location.state;

    const {contact, setContact} = useState({});
    console.log(propsData);
    const updating = (e) => {
        // e.preventDefault() // to prevent reloading
        if (propsData.name === "" || propsData.email === "") {
            alert("All fields are mandatory !")
        }
        props.updateContactHandler(propsData)
        // to clear the fields after setting the state in App Component
        // location.setState({ name: "", email: "" }) ////////
        // console.log(location.props);
        // const navigate = useNavigate();
        // navigate("/");
        // location.props.navigate('/');
        // useNavigation();
        // window.location.href = "/contacts";
    }



    return (
        <div >
            <h4>Update Contact</h4>
            <form method="post" onSubmit={updating}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" placeholder="Enter Your Name"
                        value={propsData.name}
                        // onChange={(e) => { name: e.target.value }}
                        onChange={(e) => ({ name: e.target.value })}
                        // ref={editEl}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="email" className="form-control" placeholder="Enter Your Email ID"
                        value={propsData.email}
                        onChange={(e) => ({ email: e.target.value })}
                        // onChange={e.target.value}
                        // ref={editEl}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                {/* <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                <button type="submit" className="btn btn-primary" >Update</button>
            </form>
        </div>
    );

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
//     // return <EditContact {...props} navigate={navigate} />
//     // useEffect(() => {
//     //     navigate("/");
//     // })
//     navigate("/");
// }

export default EditContact;