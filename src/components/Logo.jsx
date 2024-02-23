import logo from '../img/logo192.png'

function Logo(props) {
  return (
    <div className='title-container'>
      <h1>{props.title}</h1>
      <img
        className='logo'
        src={logo}
        alt='Logo'
      />
    </div>
  );
}

export default Logo;