import './button.css';

function Button(props)
{
    const className = 'btn '+ props.className;
    return(
        <button className={className}>{props.name}</button>
    );
}

export default Button;