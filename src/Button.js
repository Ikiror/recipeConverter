//button that can be reused in multiple scenarios 
import React from 'react';

const Button = (props) => {
    const text = props.text;
    const onClickProp = props.onClickProp;
    return(
        <button onClick={ onClickProp}> { text}</button>
    )
}

export default Button;