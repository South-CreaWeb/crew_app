import { Request, Response } from "express"
import { Crew } from '../models/Crew'
import { CrewData } from "../types/crew.type"

export const getCrew = async (request: Request, response: Response) => {
    try {
        
        const crew = await Crew.find()

        response.status(200).json(crew)
    } catch (error) {
        response.status(500).json({ error: "Error finding crew" })
    }
}

export const createCrew = async (request: Request, response: Response) => {
    try {
        const data = request.body as CrewData 

        const crew = new Crew({
            ...data,
            customId: crypto.randomUUID()
        })

        await crew.save()

        response.status(201).json(crew)
    } catch (error) {

        response.status(500).json({ error: "error creating crew" })
    }
}

export const updateCrew = async (request: Request, response: Response) => {
    try {
        const { id } = request.params

        const dataCrew: Partial<CrewData> = request.body

        const updateCrew = await Crew.findByIdAndUpdate(
            id,
            dataCrew,
            {new: true}
        )

        if(!updateCrew) {
            return response.status(404).json({ error: "Crew not found" })
        }

        response.status(200).json(updateCrew)
    } catch (error) {
        response.status(500).json({ error: "Not updated Crew" })
    }
}

export const deleteCrew = async (request: Request, response: Response) => {
    try {
        const { id }  = request.params

        const deleteCrew = await Crew.findOneAndDelete({_id: id})

        if(!deleteCrew) {
           return response.status(404).json({ error: "Crew not found" })
        }

        response.status(200).json({ message: "Crew deleted" })

    } catch (error) {
        response.status(500).json({ error: "Error deleting crew" })
    }
}