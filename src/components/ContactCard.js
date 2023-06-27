
import { Link } from "react-router-dom";
import user from '../assets/user.png';

const ContactCard = (props) => {
    // console.log(props);
    const { id, name, email } = props.contact;
    return (

        <div className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
                {/* <Link to={{ pathname: `/contact/${id}`, state: {contact: props.contact} }}> */}
                <Link   to= {`/contact/${id}`} state={props.contact}>
                    <div className="d-flex" >
                        <div><img src={user} style={{ maxWidth: "30px" }} className="img-fluid mx-1" alt="" /></div>
                        <h5 className="mb-1">{name}</h5>
                    </div>
                </Link>

                {/* <small>3 days ago</small> */}
                <span>
                    <Link to= {`/editcontact/${id}`} state={props.contact}>
                        <i className="bi bi-pencil-square text-primary"></i>
                    </Link>
                    &nbsp;
                    <i className="bi bi-trash3 text-danger"
                        onClick={() => props.getId(id)}
                    ></i>
                </span>
            </div>
            <p className="mb-1 ml-4">{email}</p>
            {/* <small>Donec id elit non mi porta.</small> */}

        </div>

    );
    // return (<p>Hello</p>);
}

export default ContactCard;
