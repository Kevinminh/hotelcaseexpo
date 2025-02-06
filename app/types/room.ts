export const RoomCategory = {
	SINGLE_BED: "single_bed",
	DOUBLE_BED: "double_bed",
} as const

export type RoomCategoryType = (typeof RoomCategory)[keyof typeof RoomCategory]

export type RoomType = {
	number: string
	id: string
	image: string
	description: string
	createdAt: Date
	updatedAt: Date | null
	category: RoomCategoryType
	price: string
	guestCapacity: number
	bedCount: number
	bathroomCount: number
}
