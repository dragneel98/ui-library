import PropTypes from 'prop-types';
import "./accordion.css";

export const Accordion = ({ title, content }) => {
    return (
        <>
            <details name='accordion'>
                <summary>
                    {title}
                </summary>
                <div>
                    <p> {content} </p>
                </div>
            </details>
            <details name='accordion'>
                <summary>
                    {title}
                </summary>
                <div>
                    <p> {content} </p>
                </div>
            </details>
        </>
    )
}
// le podrias agregar modo oscuro
Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};