import { denormalize } from 'denormalizr'
import Schemas from 'schema'

const flatten = (object = {}) => Object.keys(object).map(key => object[key])
const keys = (object = {}) => Object.keys(object)
