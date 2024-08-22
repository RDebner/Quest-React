import './style.css'

const Text = ({ text, color, textTransform }) => {
    return (
        <div class='text-container'>
            <h1 class="text" style={{ color: color, textTransform: textTransform }}>{text}</h1>
        </div>
    )
}

Text.defaultProps = {
    textTransform: "uppercase"
}

export default Text