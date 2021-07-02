import { useForm } from "../hooks/useForm";
import { useHistory } from "react-router-dom";

const getInitVoterForm = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  birthday: "",
  email: "",
  phoneNumber: "",
};

export const VoterForm = ({ onSubmitVoter }) => {
  const history = useHistory();

  const [voterForm, change, resetVoterForm] = useForm({ ...getInitVoterForm });

  const submitVoter = () => {
    onSubmitVoter(voterForm);
    history.push("/successReg");
    resetVoterForm();
  };

  return (
    <form className="custom-form">
      <p>Please enter your info and register to vote!</p>
      <div className="form-element">
        <label htmlFor="first-name-input">First Name: </label>
        <input
          type="text"
          id="first-name-input"
          name="firstName"
          value={voterForm.firstName}
          onChange={change}
        />
      </div>
      <div className="form-element">
        <label htmlFor="last-name-input">Last Name: </label>
        <input
          type="text"
          id="last-name-input"
          name="lastName"
          value={voterForm.lastName}
          onChange={change}
        />
      </div>
      <div className="form-element">
        <label htmlFor="address-input">Address: </label>
        <input
          type="text"
          id="address-input"
          name="address"
          value={voterForm.address}
          onChange={change}
        />
      </div>
      <div className="form-element">
        <label htmlFor="city-input">City: </label>
        <input
          type="text"
          id="city-input"
          name="city"
          value={voterForm.city}
          onChange={change}
        />
      </div>
      <div className="form-element">
        <label htmlFor="birthday-input">Birthday: </label>
        <input
          type="text"
          id="birthday-input"
          name="birthday"
          value={voterForm.birthday}
          onChange={change}
        />
      </div>
      <div className="form-element">
        <label htmlFor="email-input">Email: </label>
        <input
          type="text"
          id="email-input"
          name="email"
          value={voterForm.email}
          onChange={change}
        />
      </div>
      <div className="form-element">
        <label htmlFor="phone-input">Phone: </label>
        <input
          type="text"
          id="phone-input"
          name="phoneNumber"
          value={voterForm.phoneNumber}
          onChange={change}
        />
      </div>
      <button type="button" onClick={submitVoter}>
        Complete Registration
      </button>
    </form>
  );
};
