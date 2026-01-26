import { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Typography
} from "@mui/material";
import { updateProfile } from "../services/api";

function EditProfile({ profile, onCancel, onSave }) {
  const [form, setForm] = useState({
    name: profile.name || "",
    phoneNumber: profile.phoneNumber || "",
    gender: profile.gender || "",
    location: profile.location || ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await updateProfile(form);
    onSave(res.user);
  };

  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h6" mb={2}>
          Edit Profile
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="name"
              label="Name"
              fullWidth
              value={form.name}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="phoneNumber"
              label="Phone"
              fullWidth
              value={form.phoneNumber}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="gender"
              label="Gender"
              fullWidth
              value={form.gender}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="location"
              label="Location"
              fullWidth
              value={form.location}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={6}>
            <Button fullWidth variant="outlined" onClick={onCancel}>
              Cancel
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button fullWidth variant="contained" onClick={handleSubmit}>
              Save
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default EditProfile;
