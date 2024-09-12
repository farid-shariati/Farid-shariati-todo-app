import CustomTextField from '../../../../common/components/CustomTextField'
import { AddTodoButtonStyled } from '../../../styles'

const TodoForm = ({ formik }: { formik: any }) => {
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
        <AddTodoButtonStyled variant='contained' type='submit'>
          Add Todo
        </AddTodoButtonStyled>
      </form>
    </div>
  )
}

export default TodoForm
