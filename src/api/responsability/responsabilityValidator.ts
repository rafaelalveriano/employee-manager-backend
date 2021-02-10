import * as yup from 'yup'
import { ValidatorSchema } from '../../middleware'

const schema = yup.object().shape({
    description: yup.string().required(),
})

export default ValidatorSchema(schema)
