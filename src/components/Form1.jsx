//SUBJECT SELECTION
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
    Stack,
    Typography,
    Container,
} from '@mui/material'

const Form1 = () => {


    const [output, setOutput] = useState({
        subject: "",
        level: ""
    })

    const subjectArray = [
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
            console.log(output);

        }
    })

    return (
        <Container>
            <Typography variant="h4" gutterBottom  sx={{marginBottom:5}}>SUBJECT SELECTION FORM</Typography>
            <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit} noValidate>
                    <Stack direction={"column"} spacing={2} >
                        <FormControl sx={{ width: { xs: '100%', sm: '75%', md: '50%' } }} margin='normal' required error={formik.touched.subject && (Boolean(formik.errors.subject))} >
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
                            sx={{ width: { xs: '100%', sm: '75%', md: '50%' } }}
                            margin="normal"
                            required
                            id="level"
                            label="Level"
                            name="level"
                            value={formik.values.level}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.level && Boolean(formik.errors.level)}
                            helperText={formik.touched.level && formik.errors.level}
                        >
                        </TextField>
                        <Button type='submit' sx={{ width: 100 }} variant='outlined'>Submit</Button>
                    </Stack>
                </Form>
            </FormikProvider>

        </Container>
    )
}

export default Form1