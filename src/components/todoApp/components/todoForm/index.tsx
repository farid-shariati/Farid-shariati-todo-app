import Button from '@mui/material/Button'
import CustomTextField from '../../../../common/components/CustomTextField'

const TodoForm = ({ formik }) => {
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <CustomTextField
          id='title'
          label='title'
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <CustomTextField
          id='description'
          label='description'
          value={formik.values.description}
          multiline
          rows={3}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
          sx={{ mt: 2, mb: 2 }}
        />
        <Button variant='contained' type='submit'>
          submit
        </Button>
      </form>
    </div>
  )
}

export default TodoForm
