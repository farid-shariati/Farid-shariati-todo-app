import { TOutput } from '@/components/todoApp/types'

export type TSelectOptions = { name: string; value: string; id: number }[]

export type TSelectProps = Pick<TOutput, 'handleChangeTodoType' | 'todoType'>
