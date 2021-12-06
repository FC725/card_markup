import React from "react";
import { Button, Input } from "@material-ui/core";

const History = () => {
    return (
        <div >
            <div style={{position : 'fixed',  top : 590, left : 50}}    >
                <Button style={{height : 20, width : 20, borderRadius : 15,backgroundImage: "linear-gradient(0deg, #670ce7, #cd77e9)", minWidth : 35, zIndex : 2 }}></Button>
                <Button style={{width : 40, height : 20, backgroundColor : '#000', color : '#fff', fontSize : 9 , textAlign : 'right' , right : 8,zIndex : 1}} > 14/7</Button>
            </div>

            
            <div style={{position : 'fixed',  top : 590, left : 170}}    >
                <Button style={{height : 20, width : 20, borderRadius : 15,backgroundImage: "linear-gradient(0deg,  #318b79, #47bb95)", minWidth : 20, zIndex : 2 }}></Button>
                <Button style={{width : 40, height : 20, backgroundColor : '#000', color : '#fff', fontSize : 9 , textAlign : 'right' , right : 8,zIndex : 1}} > 14/7</Button>
            </div>


            <div style={{position : 'fixed', top : 590, left : 280}}    >
                <Button style={{height : 20, width : 20, borderRadius : 15,backgroundImage: "linear-gradient(0deg, #107bc3, #11aad7)", minWidth : 35, zIndex : 2 }}></Button>
                <Button style={{width : 40, height : 20, backgroundColor : '#000', color : '#fff', fontSize : 9 , textAlign : 'right' , right : 8,zIndex : 1}} > 14/7</Button>
            
            </div>
            
        </div>
    );
};

export default History;