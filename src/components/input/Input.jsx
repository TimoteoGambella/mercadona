import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField, ThemeProvider, createTheme } from "@mui/material";

export default function Input({type,label,error,helperText,disabled,classes,handleChange,pass,showPass,setShowPass}){
    const theme = createTheme({
        palette: {
            primary: {
                main: '#000000',
            },
            secondary: {
                main: '#EBAC00',
            },
        },
    });
    return(
        <ThemeProvider theme={theme}>
            <TextField
                variant="outlined"
                id={`outlined-basic`}
                error={error&&!disabled}
                placeholder={helperText}
                disabled={disabled}
                label={label}
                color={!error?"primary":"secondary"}
                type={!pass?"text":showPass?"text":"password"}
                className={
                    `specialInput ${classes}
                    ${!error&&!disabled&&"active"}
                    ${error&&!disabled&&"error"}
                    ${!error&&disabled&&"disabled"}
                    ${error&&disabled&&"disabled"}`
                }
                onChangeCapture={(e)=>handleChange(e.target.value)}
                InputProps={{
                    endAdornment: 
                        pass?
                            showPass ? <VisibilityOff onClick={()=>setShowPass(!showPass)}/> : <Visibility onClick={()=>setShowPass(!showPass)}/>
                        :<></>
                    ,
                }}
            />
        </ThemeProvider>
    )
}