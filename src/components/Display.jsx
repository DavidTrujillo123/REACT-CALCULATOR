import '../styles/Display.css'

const Display = ({ input, operation }) => (
  <div className='display'>
    <div className='operations'>
      {operation}
    </div>
    {input}
  </div>
);

export default Display;