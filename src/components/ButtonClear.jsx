import '../styles/ButtonClear.css'
const ButtonClear = (props) => (
  <div 
    className='btn-clear'
    onClick={props.eventClick}
  >
    {props.children}
  </div>
);

export default ButtonClear;