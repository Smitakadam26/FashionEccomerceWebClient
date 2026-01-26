import { Box, Typography, Button } from "@mui/material";

export default function EditProduct() {
  return (
    <Box>
      <Typography variant="h6" mb={2}>
        Edit / Delete Product
      </Typography>

      <Typography color="text.secondary">
        
      </Typography>

      <Button variant="outlined" sx={{ mt: 2 }}>
        Edit
      </Button>
      <Button variant="contained" color="error" sx={{ mt: 2, ml: 2 }}>
        Delete
      </Button>
    </Box>
  );
}
