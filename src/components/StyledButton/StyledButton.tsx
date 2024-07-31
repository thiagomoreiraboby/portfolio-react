import { styled } from "@mui/material"

interface StyledButtonProps {
    children: React.ReactNode
}

const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {

    const StyledButton = styled("button")(({ theme }) => ({
      backgroundColor: "transparent",
      border: `1px solid ${theme.palette.primary.contrastText}`,
      borderRadius: "3px",
      padding: "5px 15px",
      width: "100%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.secondary.light,
      }
    }))

  return (
    <>
    <StyledButton>{ children }</StyledButton>
    </>
  )
}



export default StyledButton