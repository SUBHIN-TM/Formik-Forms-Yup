//DESCRIPTION FORM
import { useState } from 'react'
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';

import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Stack,
  Typography,
  Container,
} from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const Form3 = () => {


  const [output, setOutput] = useState({
    description: "",
    objective: ""
  })

  const objectiveArray = [
    { id: 1, name: "Vocabulary" },
    { id: 2, name: "Grammer" },
    { id: 3, name: "Spoken English" },
  ]

  const InitialValues = {
    description: "",
    objective: "",
  }

  const Schema = Yup.object({
    objective: Yup.string().required('Required'),
    description: Yup.string().required('Required').max(100, 'Must be 100 characters or less')
  })


  const formik = useFormik({
    initialValues: InitialValues,
    validationSchema: Schema,
    onSubmit: (values) => {
      setOutput({
        objective: values.objective,
        description: values.description
      })
      alert(JSON.stringify(values))
      console.log(output);

    }
  })

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ marginBottom: 5 }}>DESCRIPTION FORM</Typography>
      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit} noValidate>
          <Stack direction={"column"} spacing={2} >

            <FormControl sx={{ width: { xs: '100%', sm: '75%', md: '50%' } }} margin='normal' required error={formik.touched.objective && (Boolean(formik.errors.objective))} >
              <InputLabel id="subject">objective</InputLabel>
              <Select
                labelId="objective"
                id="objective"
                value={formik.values.objective}
                label="Objective"
                onChange={formik.handleChange}
                name='objective'
                onBlur={formik.handleBlur}
              >

                <MenuItem>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                    <FormControlLabel required control={<Checkbox />} label="Required" />
                    <FormControlLabel  control={<Checkbox />} label="Disabled" />
                  </FormGroup>
                </MenuItem>

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
              label="description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.errors.description}
            >
            </TextField>
            <Button type='submit' sx={{ width: 100 }} variant='outlined'>Submit</Button>
          </Stack>
        </Form>
      </FormikProvider>

    </Container>
  )
}

export default Form3