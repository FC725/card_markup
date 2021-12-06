import React from "react";
import { Button } from "@material-ui/core";

const ActionButton = () => {
    return (
        <div>
            <div style={{position : 'fixed',  top : 500, left : 280}}  >
                <Button variant="outlined" size="small" style={{border : '2px solid #5bdd76', color : 'white', width : 90, fontSize:8}}>
                    Your Turn
                </Button>
            </div>
            <div style={{position : 'fixed',  top : 540, left : 20}}  >
                <Button className="btn-action" variant="contained" size="large" style={{backgroundColor : '#e53434', color : 'white', marginLeft : 30 }}>
                    Fold
                </Button>
                <Button className="btn-action" variant="contained" size="large" color="primary" style={{marginLeft : 30 }}>
                    Call
                </Button>
                <Button variant="contained" size="large" style={{backgroundColor : '#187c03f5', color : 'white', marginLeft : 30 }}>
                    Raise
                </Button>
            </div>
      </div>
    );
};

export default ActionButton;