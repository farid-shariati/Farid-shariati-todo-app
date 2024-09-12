import * as yup from 'yup'

// Define the schema with correct field names
export const todoSchema = yup.object({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
})

// Infer the TypeScript type from the schema
export type TTodoSchemaOutput = yup.InferType<typeof todoSchema>
