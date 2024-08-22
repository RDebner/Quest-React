import './style.css'

const Button = ({ label }) => {
    return (
    <div class="buttons-container">
        <button onClick={() => alert(`A label desse botão é "${label}"`)}>{label}</button>
    </div>
    )
}

export default Button