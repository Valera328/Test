import './Button.css'

function Button({children, onClick}){
   
   return <button 
   className='button active'
   onClick={onClick}>{children}
      </button>
}
export default Button;