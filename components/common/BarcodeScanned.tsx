import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { CameraView, Camera } from "expo-camera";
import BookButton from "../buttons/BookButton";

interface BuyBookViewProps {
    onLockoutBook: () => void;
  }
  
const BarcodeScanned: React.FC<BuyBookViewProps> = ({ onLockoutBook }) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarcodeScanned = ({ type, data }: any) => {
    setScanned(true);
    console.log('--->scan',type, data )
  };

  const lockoutBook = () => {
    setScanned(false);
    onLockoutBook()
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
        <CameraView
            onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
            barcodeScannerSettings={{
            barcodeTypes: ["qr", "pdf417"],
            }}
            style={StyleSheet.absoluteFillObject}
        />
        {scanned && 
            <BookButton 
                title="Odblokuj"
                onPress={() => lockoutBook()}
                leftIconName="image"
                backgroundColor="#f5d066"
                textColor="#000"
                customStyles={{
                    container: { borderWidth: 1, borderColor: '#f5d066' },
                    title: { fontSize: 20 },
                    alignSelf: 'center',
                }}
      />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  }
});

export default BarcodeScanned;