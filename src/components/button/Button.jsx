import PropTypes from 'prop-types';
import "./Button.css"
import { boolean } from 'yup';

const getStyles = (...args) => ["button", ...args].filter(boolean).join(" ")

export const Button = ({ children, type }) => {
    return (
        <button className={getStyles(type)}>
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["primary", "secondary", "tertiary"])
};
