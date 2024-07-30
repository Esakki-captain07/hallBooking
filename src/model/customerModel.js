import mongoose from './index.js'

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

},
{
  collection:'customer',
  versionKey:false
})

const customerModel = mongoose.model('Customer', customerSchema)

export default customerModel
