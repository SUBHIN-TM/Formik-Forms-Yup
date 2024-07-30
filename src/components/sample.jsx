import React from 'react'

const sample = () => {
  return (
   const Schema = Yup.object().shape({
        className: Yup.string().required("className is required"),
        classDescription: Yup.string().required("classDescription is required"),
        projectId: Yup.string().required("projectId is required"),
    });

    const formik = useFormik({
        initialValues: {
            className: "",
            classDescription: "",
            projectId: "",
        },
        validationSchema: Schema,
        onSubmit: (values, { resetForm }) => {
            dispatch(addPrjectClass(values)).then((res) => {
                if (res.payload.status === "failed") {
                    enqueueSnackbar(res.payload.message, { variant: "error" });
                } else if (res.payload.status === "success") {
                    setOpen(false);
                    resetForm();
                    dispatch(getProjectClasses());
                    enqueueSnackbar(res.payload.message, {
                        variant: "success",
                    });
                }
            });
        },
    });
                      <FormikProvider value={formik}>
                            <Form onSubmit={formik.handleSubmit}>
                                <Box>
                                    <Stack direction={"column"} spacing={2}>
                                        <Autocomplete
                                            disablePortal
                                            name="projectId"
                                            id="combo-box-demo"
                                            options={data.projectsPreData}
                                            getOptionLabel={(option) =>
                                                option.name
                                            }
                                            onChange={(e, option) => {
                                                formik.setFieldValue(
                                                    "projectId",
                                                    option.id
                                                );
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    disabled
                                                    fullWidth
                                                    {...params}
                                                    label="Project"
                                                    error={
                                                        formik.touched
                                                            .projectId &&
                                                        Boolean(
                                                            formik.errors
                                                                .projectId
                                                        )
                                                    }
                                                    helperText={
                                                        formik.errors.projectId
                                                    }
                                                />
                                            )}
                                        />
                                        <TextField
                                            label="Class Name"
                                            fullWidth
                                            name="className"
                                            value={formik.values.className}
                                            onChange={formik.handleChange}
                                            error={
                                                formik.touched.className &&
                                                Boolean(formik.errors.className)
                                            }
                                            helperText={formik.errors.className}
                                        />

                                        <TextField
                                            label="Class Description"
                                            fullWidth
                                            name="classDescription"
                                            value={
                                                formik.values.classDescription
                                            }
                                            multiline
                                            rows={3}
                                            onChange={formik.handleChange}
                                            error={
                                                formik.touched
                                                    .classDescription &&
                                                Boolean(
                                                    formik.errors
                                                        .classDescription
                                                )
                                            }
                                            helperText={
                                                formik.errors.classDescription
                                            }
                                        />
                                    </Stack>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            marginTop: 2,
                                        }}
                                    >
                                        <Stack spacing={2} direction={"row"}>
                                            <CancelButton
                                                action={() => setOpen(false)}
                                            >
                                                Cancel
                                            </CancelButton>
                                            <SaveButton type="submit">
                                                {data.loading
                                                    ? "Saving..."
                                                    : "Save"}
                                            </SaveButton>
                                        </Stack>
                                    </Box>
                                </Box>
                            </Form>
                        </FormikProvider>
  )
}

export default sample