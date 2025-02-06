import { Image, StyleSheet, Dimensions } from "react-native"
import { Bed, Bath, Users, DollarSign } from "lucide-react-native"

import { RoomType } from "../types/room"
import { ThemedView } from "@/components/ThemedView"
import { ThemedText } from "@/components/ThemedText"

interface RoomCardProps {
	room: RoomType
}

export function RoomCard({ room }: RoomCardProps) {
	return (
		<ThemedView style={styles.card}>
			<Image source={{ uri: room.image }} style={styles.image} resizeMode="cover" />

			<ThemedView style={styles.content}>
				<ThemedText style={styles.roomNumber}>Room {room.number}</ThemedText>

				<ThemedView style={styles.priceContainer}>
					<DollarSign size={20} />
					<ThemedText style={styles.price}>{room.price}</ThemedText>
					<ThemedText style={styles.perNight}> / night</ThemedText>
				</ThemedView>

				<ThemedText style={styles.description} numberOfLines={2}>
					{room.description}
				</ThemedText>

				<ThemedView style={styles.amenities}>
					<ThemedView style={styles.amenityItem}>
						<Users size={18} />
						<ThemedText>{room.guestCapacity} guests</ThemedText>
					</ThemedView>

					<ThemedView style={styles.amenityItem}>
						<Bed size={18} />
						<ThemedText>{room.bedCount} beds</ThemedText>
					</ThemedView>

					<ThemedView style={styles.amenityItem}>
						<Bath size={18} />
						<ThemedText>{room.bathroomCount} bath</ThemedText>
					</ThemedView>
				</ThemedView>

				<ThemedText style={styles.category}>{room.category.replace("_", " ").toUpperCase()}</ThemedText>
			</ThemedView>
		</ThemedView>
	)
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 12,
		overflow: "hidden",
		borderWidth: 1,
		borderColor: "#e2e8f0",
		marginBottom: 16,
	},
	image: {
		width: "100%",
		height: 200,
	},
	content: {
		padding: 16,
		gap: 12,
	},
	roomNumber: {
		fontSize: 20,
		fontWeight: "bold",
	},
	priceContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
	},
	price: {
		fontSize: 18,
		fontWeight: "600",
	},
	perNight: {
		fontSize: 14,
		opacity: 0.7,
	},
	description: {
		fontSize: 14,
		lineHeight: 20,
		opacity: 0.8,
	},
	amenities: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingTop: 8,
		borderTopWidth: 1,
		borderTopColor: "#e2e8f0",
	},
	amenityItem: {
		flexDirection: "row",
		alignItems: "center",
		gap: 6,
	},
	category: {
		fontSize: 12,
		opacity: 0.6,
		textTransform: "uppercase",
	},
})
