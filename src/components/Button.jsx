import '../styles/Button.css';

function Button(props){
  const isOperator = (value) => {
    return isNaN(value) && (value != '.') && (value != '=')
  }
  return (
    <div 
      className={
        `btn-container 
        ${isOperator(props.children) ? 'operator' : ''
        }`.trimEnd()
      }
      onClick={()=> props.eventClick(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Button;