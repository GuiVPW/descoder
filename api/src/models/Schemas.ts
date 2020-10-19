import mongoose from '../database/connection'
import { UserSchema } from '../types/UserSchema'

const UserSchema = new mongoose.Schema(
	{
		nome: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		descrição: {
			type: String
		},
		calendly: {
			type: String,
			required: true
		},
		skills: {
			type: [String],
			required: true
		},
		empresa: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
)

const User = mongoose.model<UserSchema>('User', UserSchema)

export default User
