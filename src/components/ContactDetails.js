import { Link, useLocation } from 'react-router-dom';
import user from '../assets/user.png';

const ContactDetails = (props) => {
    // const { id, name, email } = props.contact;
    console.log(props);
    const location = useLocation();
    const propsData = location.state;
    // const {name, email} = location.state.contact;
    return (
        <div>
            <div className="card">
                <img className="card-img-top" src={user} alt="user" style={{ maxWidth: "50px" }} />
                <div className="card-body">
                    <h5 className="card-title">{propsData.name}</h5>
                    <p className="card-text">{propsData.email}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
                <div className="card-body">
                    <a href="/" className="card-link">Card link</a>
                    <a href="/" className="card-link">Another link</a>
                </div>
            </div>
            <Link to="/contacts" >
                <button className='btn btn-primary'>Back to Contact List</button>
            </Link>
        </div>
    )
}

export default ContactDetails;