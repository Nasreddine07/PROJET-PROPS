import {Button} from "react-bootstrap";
import propTypes from 'prop-types'

const Profile = ({User,children,func}) => {
      return (
        <div>
          <img
            className="d-block w-50"
            src={User.imgUrl}
            alt="First slide"
          />
            <h1>{User.fullName}</h1>
            <p>{User.Bio}</p>
            <Button onClick={func} variant="primary">show my name</Button>
            {children}
        </div>
      );
    };
    Profile.propTypes={
        User: propTypes.object,
        fullName: propTypes.string.isRequired,
        Bio: propTypes.string,
        imgUrl : propTypes.string,
        func: propTypes.func
    }
    
    Profile.defaultProps ={
        name:'user'
    }
  
    
    
    export default Profile;