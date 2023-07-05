import { TextField } from "@mui/material";

export default function Input({label,error,helperText,disabled,classes,handleChange,typeOfInput}){
    return(
        <TextField
            variant="outlined"
            id={`outlined-basic`}
            error={error&&!disabled}
            placeholder={helperText}
            disabled={disabled}
            label={label}
            type={typeOfInput}
            className={
                `specialInput ${classes}
                ${!error&&!disabled&&"active"}
                ${error&&!disabled&&"error"}
                ${!error&&disabled&&"disabled"}
                ${error&&disabled&&"disabled"}`
            }
            onChangeCapture={(e)=>handleChange(e.target.value)}
        />
    )
}