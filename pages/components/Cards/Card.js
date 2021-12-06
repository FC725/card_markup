import React from "react";
// import styled from 'styled-components';
// import {Box} from '@material-ui/core';


const Card = (props) => {

    const _cardUrl = props.card_num + "_of_" + props.card_type + ".png";
    const _back = props.back;
    
    const _pos = {x : props.x, y : props.y};
    const _rotate = props.rotate;
    
    return (
        <div style={{   backgroundImage: "url('/assets/images/cards/" + (_back ? "back.png" : _cardUrl) + "')" , 
                        backgroundSize:'cover',
                        transform : ("rotate(" + _rotate + "deg)"),
                        position : 'absolute',
                        top : _pos.y,
                        left : _pos.x,
                        width : 40,
                        height : 70 }}>
        </div>    

    );
}

export default Card;