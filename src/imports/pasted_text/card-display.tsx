import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Position2 = () => {
  	
  	return (
    		<View style={styles.position2}>
      			<View style={[styles.view, styles.viewPosition]}>
        				<View style={[styles.cardMockup, styles.cardLayout]}>
          					<View style={styles.card}>
            						<View style={styles.icon}>
              							<Image style={[styles.iconsaxCardAdd, styles.image1IconLayout]} resizeMode="cover" />
            						</View>
            						<View style={styles.texto}>
              							<Text style={styles.solicitarNovoCarto}>Solicitar novo cartão</Text>
              							<Text style={styles.peaUmCarto}>Peça um cartão substituo ou um adicional para você ou seu dependente</Text>
            						</View>
          					</View>
        				</View>
      			</View>
      			<View style={[styles.view2, styles.view2Layout]}>
        				<View style={[styles.cardMockup2, styles.cardLayout]}>
          					<LinearGradient style={[styles.card2, styles.cardBorder]} locations={[0,1]} colors={['#404c52','#69757b']} useAngle={true} angle={111.02}>
            						<View style={styles.topo}>
              							<View style={styles.tagTipo}>
                								<View style={[styles.badgeText, styles.badgeFlexBox]}>
                  									<Text style={styles.texto2}>adiconal</Text>
                								</View>
              							</View>
              							<View style={styles.cartoLinha}>
                								<Text style={[styles.signature, styles.signatureTypo]}>Signature</Text>
              							</View>
            						</View>
            						<View style={styles.meio}>
              							<View style={styles.nome}>
                								<Text style={[styles.janainaVFagundes, styles.janainaTypo]}>JANAINA V FAGUNDES</Text>
              							</View>
              							<View style={styles.cartoNmero}>
                								<Text style={[styles.text, styles.textTypo]}>•••• •••• •••• 3633</Text>
              							</View>
            						</View>
            						<View style={styles.base}>
              							<View style={styles.validadeCvv}>
                								<View style={styles.validade}>
                  									<View style={styles.paragraph}>
                    										<Text style={[styles.validade2, styles.validadeTypo]}>Validade</Text>
                  									</View>
                  									<View style={styles.paragraph2}>
                    										<Text style={[styles.text, styles.textTypo]}>••/••</Text>
                  									</View>
                								</View>
                								<View style={styles.validade}>
                  									<View style={styles.paragraph}>
                    										<Text style={[styles.validade2, styles.validadeTypo]}>CVV</Text>
                  									</View>
                  									<View style={styles.paragraph2}>
                    										<Text style={[styles.text, styles.textTypo]}>•••</Text>
                  									</View>
                								</View>
              							</View>
              							<View style={styles.bandeira}>
                								<Image style={[styles.image1Icon, styles.image1IconLayout]} resizeMode="cover" />
              							</View>
            						</View>
          					</LinearGradient>
        				</View>
      			</View>
      			<View style={[styles.view3, styles.viewPosition]}>
        				<View style={[styles.cardMockup2, styles.cardLayout]}>
          					<LinearGradient style={[styles.card3, styles.cardBorder]} locations={[0,1]} colors={['#005d42','#009a44']} useAngle={true} angle={110.98}>
            						<View style={styles.topo}>
              							<View style={styles.tagTipo}>
                								<View style={[styles.badgeText2, styles.badgeFlexBox]}>
                  									<Text style={styles.texto2}>Adicional</Text>
                								</View>
              							</View>
              							<View style={styles.cartoLinha}>
                								<Text style={[styles.signature2, styles.signatureTypo]}>Signature</Text>
              							</View>
            						</View>
            						<View style={styles.meio}>
              							<View style={styles.nome}>
                								<Text style={[styles.janainaVFagundes2, styles.janainaTypo]}>ANTÔNIO SOARES FAGUNDES</Text>
              							</View>
              							<View style={styles.cartoNmero}>
                								<Text style={[styles.text4, styles.textTypo]}>•••• •••• •••• 5266</Text>
              							</View>
            						</View>
            						<View style={styles.base}>
              							<View style={styles.validadeCvv}>
                								<View style={styles.validade}>
                  									<View style={styles.paragraph}>
                    										<Text style={[styles.validade4, styles.validadeTypo]}>Validade</Text>
                  									</View>
                  									<View style={styles.paragraph2}>
                    										<Text style={[styles.text4, styles.textTypo]}>••/••</Text>
                  									</View>
                								</View>
                								<View style={styles.validade}>
                  									<View style={styles.paragraph}>
                    										<Text style={[styles.validade4, styles.validadeTypo]}>CVV</Text>
                  									</View>
                  									<View style={styles.paragraph2}>
                    										<Text style={[styles.text4, styles.textTypo]}>•••</Text>
                  									</View>
                								</View>
              							</View>
              							<View style={styles.bandeira}>
                								<Image style={[styles.image1Icon, styles.image1IconLayout]} resizeMode="cover" />
              							</View>
            						</View>
          					</LinearGradient>
        				</View>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	viewPosition: {
    		overflow: "hidden",
    		top: "50%",
    		position: "absolute",
    		justifyContent: "center"
  	},
  	cardLayout: {
    		maxHeight: 268,
    		maxWidth: 420,
    		minHeight: 204,
    		minWidth: 320,
    		padding: 8
  	},
  	image1IconLayout: {
    		maxWidth: "100%",
    		overflow: "hidden"
  	},
  	view2Layout: {
    		width: 320,
    		justifyContent: "center"
  	},
  	cardBorder: {
    		backgroundColor: "transparent",
    		padding: 24,
    		borderStyle: "solid",
    		gap: 16,
    		borderWidth: 1,
    		borderRadius: 12,
    		elevation: 8,
    		boxShadow: "0px 4px 8px rgba(20, 53, 38, 0.4)",
    		alignSelf: "stretch",
    		overflow: "hidden"
  	},
  	badgeFlexBox: {
    		paddingVertical: 4,
    		paddingHorizontal: 8,
    		borderRadius: 8,
    		alignSelf: "stretch",
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	signatureTypo: {
    		textAlign: "right",
    		fontFamily: "OpenSans-Regular",
    		lineHeight: 20,
    		fontSize: 14,
    		flex: 1
  	},
  	janainaTypo: {
    		lineHeight: 21,
    		fontSize: 16,
    		fontFamily: "OpenSans-Regular",
    		textAlign: "left"
  	},
  	textTypo: {
    		lineHeight: 24,
    		fontSize: 16,
    		textAlign: "left",
    		fontFamily: "OpenSans-Bold",
    		fontWeight: "700"
  	},
  	validadeTypo: {
    		lineHeight: 2,
    		fontSize: 12,
    		fontFamily: "OpenSans-Regular",
    		textAlign: "left"
  	},
  	position2: {
    		height: 219,
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row",
    		width: "100%"
  	},
  	view: {
    		right: 0,
    		zIndex: 0,
    		marginTop: -102,
    		overflow: "hidden"
  	},
  	cardMockup: {
    		width: 320,
    		justifyContent: "center"
  	},
  	card: {
    		height: 191,
    		backgroundColor: "#161616",
    		borderStyle: "dashed",
    		borderColor: "#005d42",
    		paddingHorizontal: 40,
    		paddingVertical: 24,
    		gap: 40,
    		borderWidth: 1,
    		borderRadius: 12,
    		elevation: 8,
    		boxShadow: "0px 4px 8px rgba(20, 53, 38, 0.4)",
    		alignSelf: "stretch",
    		overflow: "hidden",
    		justifyContent: "center",
    		alignItems: "center"
  	},
  	icon: {
    		width: 32,
    		height: 32,
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	iconsaxCardAdd: {
    		height: 33,
    		flex: 1
  	},
  	texto: {
    		gap: 24,
    		alignSelf: "stretch",
    		alignItems: "center"
  	},
  	solicitarNovoCarto: {
    		fontSize: 18,
    		lineHeight: 22,
    		color: "#cce3dc",
    		textAlign: "left",
    		fontFamily: "OpenSans-Bold",
    		fontWeight: "700"
  	},
  	peaUmCarto: {
    		textAlign: "center",
    		color: "#a7b0b5",
    		fontFamily: "OpenSans-Regular",
    		lineHeight: 20,
    		fontSize: 14,
    		alignSelf: "stretch"
  	},
  	view2: {
    		height: 206,
    		left: 0,
    		zIndex: 1,
    		top: "50%",
    		position: "absolute",
    		width: 320,
    		marginTop: -102,
    		alignItems: "center"
  	},
  	cardMockup2: {
    		width: "100%"
  	},
  	card2: {
    		height: 190,
    		borderColor: "#404c52"
  	},
  	topo: {
    		gap: 16,
    		alignSelf: "stretch",
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	tagTipo: {
    		width: 76
  	},
  	badgeText: {
    		backgroundColor: "#a7b0b5"
  	},
  	texto2: {
    		fontSize: 10,
    		letterSpacing: 1,
    		lineHeight: 15,
    		textTransform: "uppercase",
    		fontWeight: "600",
    		fontFamily: "OpenSans-SemiBold",
    		color: "#040f14",
    		textAlign: "left"
  	},
  	cartoLinha: {
    		flex: 1,
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	signature: {
    		color: "#a7b0b5"
  	},
  	meio: {
    		justifyContent: "flex-end",
    		gap: 8,
    		flex: 1,
    		alignSelf: "stretch"
  	},
  	nome: {
    		alignSelf: "stretch",
    		justifyContent: "center"
  	},
  	janainaVFagundes: {
    		color: "#a7b0b5"
  	},
  	cartoNmero: {
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	text: {
    		color: "#a7b0b5"
  	},
  	base: {
    		justifyContent: "space-between",
    		gap: 20,
    		alignSelf: "stretch",
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	validadeCvv: {
    		gap: 24,
    		flexDirection: "row"
  	},
  	validade: {
    		gap: 8
  	},
  	paragraph: {
    		alignSelf: "stretch",
    		flexDirection: "row"
  	},
  	validade2: {
    		color: "#a7b0b5"
  	},
  	paragraph2: {
    		alignSelf: "stretch",
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	bandeira: {
    		width: 50,
    		alignSelf: "stretch",
    		justifyContent: "center",
    		alignItems: "center"
  	},
  	image1Icon: {
    		height: 16,
    		alignSelf: "stretch",
    		width: "100%"
  	},
  	view3: {
    		width: 340,
    		marginTop: -109,
    		marginLeft: -170,
    		left: "50%",
    		alignItems: "flex-end",
    		zIndex: 2
  	},
  	card3: {
    		height: 203,
    		borderColor: "#007452"
  	},
  	badgeText2: {
    		backgroundColor: "#aadb1e"
  	},
  	signature2: {
    		color: "#fff"
  	},
  	janainaVFagundes2: {
    		color: "#fff"
  	},
  	text4: {
    		color: "#fff"
  	},
  	validade4: {
    		color: "rgba(255, 255, 255, 0.6)"
  	}
});

export default Position2;
