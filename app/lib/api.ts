import { Room } from "@/types/room"

export async function getRooms(): Promise<Room[]> {
	try {
		const response = await fetch("https://hotelcase.vercel.app/api/v1/rooms")

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		const data = await response.json()
		return data as Room[]
	} catch (error) {
		console.error("Error fetching rooms:", error)
		throw error
	}
}
