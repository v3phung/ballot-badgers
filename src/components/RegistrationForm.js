import { useForm } from "../hooks/useForm";

const getInitRegistrationForm = () => ({
    "first-name": '',
    "last-name": '',
    "address": '',
    "city": '',
    "birthday": '',
    "email": '',
    "phone": '',

});

export const RegistrationForm = () => {
    //const [ form, change, resetForm] = useForm(getInitRegistrationForm())
    const [ change ] = useForm(getInitRegistrationForm());
    return (
        <form>
            <div>
                <label htmlFor="first-name-input">First Name</label>
                <input
                    type="text"
                    id="first-name-input"
                    name="first-name"
                    value={null}
                    onChange={null}
                />
            </div>
            <div>
                <label htmlFor="last-name-input">Last Name</label>
                <input
                    type="text"
                    id="last-name-input"
                    name="last-name"
                    value={null}
                    onChange={null}
                />
            </div>
            <div>
                <label htmlFor="address-input">Address</label>
                <input
                    type="text"
                    id="address-input"
                    name="address"
                    value={null}
                    onChange={null}
                />
            </div>
            <div>
                <label htmlFor="city-input">City</label>
                <input
                    type="text"
                    id="city-input"
                    name="city"
                    value={null}
                    onChange={null}
                />
            </div>
            <div>
                <label htmlFor="birthday-input">Birthday</label>
                <input
                    type="date"
                    id="birthday-input"
                    name="birthday"
                    value={null}
                    onChange={change}
                />
            </div>
            <div>
                <label htmlFor="email-input">Email</label>
                <input
                    type="text"
                    id="email-input"
                    name="email"
                    value={null}
                    onChange={change}
                />
            </div>
            <div>
                <label htmlFor="phone-input">Phone</label>
                <input
                    type="text"
                    id="phone-input"
                    name="phone"
                    value={null}
                    onChange={change}
                />
            </div>
        </form>
    );
};