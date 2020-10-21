import mongoose from '../database/connection'
import { UserSchema, EquipeSchema } from '../types/Schemas'

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

const EquipeSchema = new mongoose.Schema({
	nome: {
		type: String,
		required: true
	},
	participantes: {
		type: [String],
		required: true
	}
})

const User = mongoose.model<UserSchema>('User', UserSchema)
const Equipe = mongoose.model<EquipeSchema>('User', EquipeSchema)

export default { User, Equipe }
