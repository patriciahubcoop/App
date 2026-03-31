import * as React from "react";
import {Image, StyleSheet, View, Text} from "react-native";

const CardInfo = () => {
  	
  	return (
    		<View style={styles.cardInfo}>
      			<View style={[styles.valoresDestaque, styles.valoresLayout]}>
        				<View style={[styles.icon, styles.iconFlexBox]}>
          					<View style={[styles.icon2, styles.icon2FlexBox]}>
            						<Image style={styles.iconsaxEyeSlash} resizeMode="cover" />
          					</View>
        				</View>
        				<View style={styles.center}>
          					<View style={[styles.textoTopo, styles.iconFlexBox]}>
            						<Text style={styles.faturaAtual}>Fatura Atual</Text>
          					</View>
          					<View style={styles.contedoValor}>
            						<Text style={styles.r}>R$</Text>
            						<Text style={styles.text}>16.250,00</Text>
          					</View>
        				</View>
      			</View>
      			<View style={[styles.valoresSecundrios, styles.conteudoDatasSpaceBlock]}>
        				<View style={styles.contedoValor}>
          					<View style={styles.limiteDisponivel}>
            						<Text style={[styles.limiteDisponvel, styles.r1375000Typo1]}>Limite Disponível:</Text>
            						<Text style={[styles.r1375000, styles.r1375000Typo]}>R$ 13.750,00</Text>
          					</View>
          					<View style={styles.divider}>
            						<View style={styles.dividerChild} />
          					</View>
          					<View style={styles.limiteDisponivel}>
            						<Text style={[styles.prximaFatura, styles.r22623400Typo]}>Próxima Fatura:</Text>
            						<Text style={[styles.r22623400, styles.r22623400Typo]}>R$ 226.234,00</Text>
          					</View>
        				</View>
        				<View style={[styles.conteudoDatas, styles.conteudoDatasSpaceBlock]}>
          					<View style={[styles.vencimento, styles.icon2FlexBox]}>
            						<Text style={[styles.limiteDisponvel, styles.r1375000Typo1]}>Vencimento:</Text>
            						<Text style={[styles.r1375000, styles.r1375000Typo]}>16 de fevereiro</Text>
          					</View>
          					<View style={[styles.vencimento, styles.icon2FlexBox]}>
            						<Text style={[styles.prximaFatura, styles.r22623400Typo]}>Melhor dia para compra:</Text>
            						<Text style={[styles.r22623400, styles.r22623400Typo]}>11 de fevereiro</Text>
          					</View>
        				</View>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	valoresLayout: {
    		borderRadius: 16,
    		overflow: "hidden"
  	},
  	iconFlexBox: {
    		paddingVertical: 4,
    		justifyContent: "center",
    		flexDirection: "row"
  	},
  	icon2FlexBox: {
    		flexDirection: "row",
    		alignItems: "center"
  	},
  	conteudoDatasSpaceBlock: {
    		padding: 8,
    		alignSelf: "stretch",
    		gap: 8
  	},
  	r1375000Typo1: {
    		color: "#404c52",
    		fontSize: 14,
    		textAlign: "left"
  	},
  	r1375000Typo: {
    		fontFamily: "OpenSans-Bold",
    		fontWeight: "700",
    		lineHeight: 21
  	},
  	r22623400Typo: {
    		color: "#889499",
    		fontSize: 14,
    		textAlign: "left"
  	},
  	cardInfo: {
    		width: "100%",
    		gap: 8,
    		flex: 1
  	},
  	valoresDestaque: {
    		overflow: "hidden",
    		alignSelf: "stretch"
  	},
  	icon: {
    		paddingHorizontal: 6,
    		flex: 1
  	},
  	icon2: {
    		width: 16,
    		alignItems: "center",
    		height: 16,
    		justifyContent: "center"
  	},
  	iconsaxEyeSlash: {
    		maxWidth: "100%",
    		height: 16,
    		overflow: "hidden",
    		flex: 1
  	},
  	center: {
    		padding: 4,
    		alignItems: "center",
    		justifyContent: "center",
    		gap: 8,
    		flex: 1
  	},
  	textoTopo: {
    		paddingHorizontal: 0,
    		alignItems: "center",
    		alignSelf: "stretch"
  	},
  	faturaAtual: {
    		fontSize: 10,
    		letterSpacing: 1,
    		lineHeight: 15,
    		textTransform: "uppercase",
    		fontWeight: "600",
    		fontFamily: "OpenSans-SemiBold",
    		color: "#040f14",
    		textAlign: "center",
    		flex: 1
  	},
  	contedoValor: {
    		alignSelf: "stretch"
  	},
  	r: {
    		fontSize: 16,
    		lineHeight: 24,
    		fontWeight: "300",
    		fontFamily: "OpenSans-Light",
    		textAlign: "right",
    		color: "#007452",
    		flex: 1
  	},
  	text: {
    		fontSize: 32,
    		lineHeight: 42,
    		fontWeight: "800",
    		fontFamily: "OpenSans-ExtraBold",
    		textAlign: "left",
    		color: "#007452"
  	},
  	valoresSecundrios: {
    		overflow: "hidden",
    		borderRadius: 16
  	},
  	limiteDisponivel: {
    		justifyContent: "center",
    		gap: 8,
    		flex: 1
  	},
  	limiteDisponvel: {
    		fontFamily: "OpenSans-Regular",
    		lineHeight: 20
  	},
  	r1375000: {
    		color: "#404c52",
    		fontSize: 14,
    		textAlign: "left"
  	},
  	divider: {
    		justifyContent: "center",
    		alignSelf: "stretch"
  	},
  	dividerChild: {
    		width: 1,
    		backgroundColor: "#005d42",
    		flex: 1
  	},
  	prximaFatura: {
    		fontFamily: "OpenSans-Regular",
    		lineHeight: 20
  	},
  	r22623400: {
    		fontFamily: "OpenSans-Bold",
    		fontWeight: "700",
    		lineHeight: 21
  	},
  	conteudoDatas: {
    		justifyContent: "center"
  	},
  	vencimento: {
    		alignItems: "center",
    		alignSelf: "stretch",
    		gap: 8
  	}
});

export default CardInfo;
