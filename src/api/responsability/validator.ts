import * as yup from 'yup'
import { ValidatorSchema } from '../../middleware'

const schema = yup.object().shape({
    description: yup.string().required('Preencha o campo de descrição'),
})

export default ValidatorSchema(schema)
