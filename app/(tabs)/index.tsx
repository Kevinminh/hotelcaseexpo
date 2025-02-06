import { Image, StyleSheet, Platform } from "react-native"
import { useEffect, useState } from "react"

import ParallaxScrollView from "@/components/ParallaxScrollView"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { RoomType } from "../types/room"
import { getRooms } from "../lib/api"
import { RoomCard } from "../components/RoomCard"

export default function HomeScreen() {
	const [rooms, setRooms] = useState<RoomType[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		async function loadRooms() {
			try {
				const roomData = await getRooms()

				setRooms(roomData)
			} catch (err) {
				setError("Failed to fetch rooms")
			} finally {
				setLoading(false)
			}
		}

		loadRooms()
	}, [])

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
			headerImage={<Image source={require("@/assets/images/partial-react-logo.png")} style={styles.reactLogo} />}
		>
			<ThemedView style={styles.container}>
				{loading && <ThemedText>Loading rooms...</ThemedText>}
				{error && <ThemedText>Error: {error}</ThemedText>}
				{rooms.map((room) => (
					<RoomCard key={room.id} room={room} />
				))}
			</ThemedView>
		</ParallaxScrollView>
	)
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: "absolute",
	},
	container: {
		padding: 16,
	},
	roomCard: {
		padding: 16,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#ccc",
	},
	roomName: {
		fontSize: 18,
		fontWeight: "bold",
	},
})
