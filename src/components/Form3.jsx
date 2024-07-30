import { useState } from 'react';
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Typography,
  Container,
  Chip,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

const Form3 = () => {

  const objectiveArray = [
    { id: 1, name: "Vocabulary" },
    { id: 2, name: "Grammar" },
    { id: 3, name: "Spoken English" },
  ];

  const InitialValues = {
    description: "",
    objective: [],
  };

  const Schema = Yup.object({
    objective: Yup.array().min(1, 'Select at least one objective').required('Required'),
    description: Yup.string().required('Required').max(100, 'Must be 100 characters or less')
  });

  const formik = useFormik({
    initialValues: InitialValues,
    validationSchema: Schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      console.log(values);
    },
  });

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) { //IF MARKED CHECK IT WILL INCLUDED
      formik.setFieldValue('objective', [...formik.values.objective, value]);
    } else { //IF CHECKED IS FALSE IT WILL REMOVE
      formik.setFieldValue('objective', formik.values.objective.filter(item => item !== value));
    }
  };


  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ marginBottom: 5 }}>DESCRIPTION FORM</Typography>
      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit} noValidate>
          <Stack direction={"column"} spacing={2}>

            <FormControl sx={{ width: { xs: '100%', sm: '75%', md: '50%' } }} margin='normal' required error={formik.touched.objective && (Boolean(formik.errors.objective))}>
              <InputLabel id="objective-label">Objective</InputLabel>
              <Select
                multiple
                labelId="objective-label"
                id="objective"
                value={formik.values.objective}
                label="Objective"
                onChange={formik.handleChange}
                name='objective'
                onBlur={formik.handleBlur}
                renderValue={(selectedItems) => (
                  <Stack gap={1} direction="row" flexWrap="wrap">
                    {selectedItems.map((value) => (
                      <Chip
                        key={value}
                        label={value}
                        onDelete={() => formik.setFieldValue('objective', formik.values.objective.filter(item => item !== value))}
                      />
                    ))}
                  </Stack>
                )}
              >
                {objectiveArray.map((data) => (
                  <MenuItem key={data.id} value={data.name}>
                    <FormControlLabel
                      control={<Checkbox onChange={handleCheckboxChange} value={data.name}  checked={formik.values.objective.includes(data.name)} />} //checked if the name already marked it will mark it as tick name
                      label={data.name}
                    />
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.objective && formik.errors.objective ? (
                <Typography color="error">{formik.errors.objective}</Typography>
              ) : null}
            </FormControl>

            <TextField
              sx={{ width: { xs: '100%', sm: '75%', md: '50%' } }}
              margin="normal"
              required
              id="description"
              label="Description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
            />

            <Button type='submit' sx={{ width: 100 }} variant='outlined'>Submit</Button>
          </Stack>
        </Form>
      </FormikProvider>
    </Container>
  );
}

export default Form3;
