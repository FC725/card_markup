import React from "react";
// import styled from 'styled-components';
// import {Box} from '@material-ui/core';


const Person = (props) => {

    const _back = props.back;
    const _pos = {x : props.x, y : props.y};    
    const _liveStatus = props.live_status;

    return (
        <div style={{   backgroundImage: "url('/assets/images/persons/person.png')" , 
                        backgroundSize:'cover',
                        position : 'absolute',
                        top : _pos.y,
                        left : _pos.x,
                        width : 30,
                        height : 40,
                        opacity : _liveStatus ? 1 : 0.5
                         }}>
        </div>    

    );
}

export default Person;