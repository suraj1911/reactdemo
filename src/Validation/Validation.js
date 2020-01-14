import React from "react";

const Validation = (props) => {

        let validationMsg = "Text Too Long";

        if(props.inputLength <= 5){
            validationMsg = "Text Too Short";
        }

        return(
            <div>
                    {validationMsg}
            </div>
        );
}

export default Validation;