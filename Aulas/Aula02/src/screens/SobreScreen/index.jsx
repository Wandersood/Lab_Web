import React from "react";
import { View, Text } from "react-native";
import { styles } from "./../SobreScreen/styles";

export default function Sobre() {
	return (
		<View style={styleSobre.container}>
			<Text style={styleSobre.texto}>Olá Mundo!!!</Text>
		</View>
	);
}
