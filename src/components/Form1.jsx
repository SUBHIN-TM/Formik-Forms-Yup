//SUBHJECT SELECTION
import { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
    Button,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Box,
    Typography,
    Container,
} from '@mui/material'

const Form1 = () => {

    
    const[output,setOutput]=useState({
        subject:"",
        level:""
    })

    const subjectArray =[
        { id: 1, name: "English" },
        { id: 2, name: "Hindi" },
        { id: 3, name: "Malayalam" },
    ]

    const InitialValues = {
        subject: "",
        level: "",
    }

    const Schema = Yup.object({
        subject: Yup.string().required('Required'),
        level: Yup.string().required('Required').max(100, 'Must be 100 characters or less')
    })


    const formik = useFormik({
        initialValues: InitialValues,
        validationSchema: Schema,
        onSubmit: (values) => {
           setOutput({
            subject: values.subject,
            level: values.level
           })
           alert(JSON.stringify(values))
        }
    })

    return (
        <Container>
            <Typography>SUBJECT SELECTION FORM</Typography>
            <Box component={"form"} noValidate sx={{ mt: 1 }} onSubmit={formik.handleSubmit}   >
                <FormControl fullWidth margin='normal' required error={formik.touched.subject && (Boolean(formik.errors.subject))} >
                    <InputLabel id="subject">Subject</InputLabel>
                    <Select
                        labelId="subject"
                        id="subject"
                        value={formik.values.subject}
                        label="Subject"
                        onChange={formik.handleChange}
                        name='subject'
                        onBlur={formik.handleBlur}
                    >
                        {subjectArray.map((course) => (
                            <MenuItem key={course.id} value={course.id}>
                                {course.name}
                            </MenuItem>
                        ))}
                    </Select>
                    {formik.touched.subject && formik.errors.subject ? (
                        <Typography color="error">{formik.errors.subject}</Typography>
                    ) : null}
                </FormControl>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="level"
                    label="Level"
                    name="level"
                    value={formik.values.level}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.level && Boolean(formik.errors.level)}
                    helperText={formik.errors.level}
                >
                </TextField>
                <Button type='submit' variant='outlined'>Submit</Button>

            </Box>
        </Container>
    )
}

export default Form1