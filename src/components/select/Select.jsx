import PropTypes from 'prop-types';
import "./select.css"

export const Select = ({ title }) => {
    return (
        <div className="select-container">
            <select id="miSelect" className='select-box'>
                <option disabled>{title}</option>
                <option value={1}>Opción 1</option>
                <option value={2}>Opción 2</option>
                <option value={3}>Opción 3</option>
            </select>
        </div>
    )
}

Select.propTypes = {
    title: PropTypes.string.isRequired,
};