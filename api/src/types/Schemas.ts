import mongoose from '../database/connection'

export interface UserSchema extends mongoose.Document {
	nome: string
	email: string
	descrição: string
	calendly: string
	skills: string[]
	empresa: string
}

export interface EquipeSchema extends mongoose.Document {
	nome: string
	participantes: string[]
}
