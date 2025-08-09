import React, { useState } from 'react';
import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const FILE_DOWNLOAD_URL = 'https://example.com/files/sample.pdf';

const DownloadQrScreen: React.FC = () => {
  const [showCreate, setShowCreate] = useState(false);

  const handleDownload = () => {
    Linking.openURL(FILE_DOWNLOAD_URL).catch(err =>
      console.error('Failed to open URL:', err)
    );
  };

  const handlePlusPress = () => {
    setShowCreate(!showCreate);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerIcon}>⬇️</Text>
          <View>
            <Text style={styles.headerTitle}>Generated Barcodes</Text>
            <Text style={styles.headerSubtitle}>VC FILE GENERATOR</Text>
          </View>
          <Text style={styles.headerCheck}>✔️</Text>
        </View>

        {/* DATA BOX */}
        <View style={styles.dataBox}>
          <Text style={styles.dataTitle}>Sample VC Data</Text>
          <Text style={styles.dataContent}>Student ID:</Text>
          <Text style={styles.dataContentSmall}>0912345578938</Text>
        </View>

        {/* QR CODE */}
        <Text style={styles.sectionTitle}>Barcode & Barcode</Text>
        <View style={styles.qrBox}>
          <QRCode value={FILE_DOWNLOAD_URL} size={180} backgroundColor="#fff" />
        </View>

        {/* INFO */}
        <Text style={styles.autoDownloadTitle}>Automatic Download</Text>
        <Text style={styles.autoDownloadText}>
          Scan it to enable one session-free trusted and clean enhanced
          encryption.
        </Text>

        {/* DOWNLOAD BUTTON */}
        <TouchableOpacity onPress={handleDownload} style={styles.downloadButton}>
          <Text style={styles.buttonText}>Download File</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* "Create" Button (appears when + is pressed) */}
      {showCreate && (
        <View style={styles.createButtonContainer}>
          <Text style={styles.createButtonText}>Create</Text>
        </View>
      )}

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={[styles.navIcon, styles.active]}>📄</Text>
          <Text style={[styles.navLabel, styles.active]}>Initiatives</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🪪</Text>
          <Text style={styles.navLabel}>Credentials</Text>
        </TouchableOpacity>

        {/* Floating "+" Button */}
        <View style={styles.plusWrapper}>
          <TouchableOpacity onPress={handlePlusPress} style={styles.plusButton}>
            <Text style={styles.plusButtonText}>＋</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🔔</Text>
          <Text style={styles.navLabel}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>⚙️</Text>
          <Text style={styles.navLabel}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8ecf4',
    paddingTop: 50,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 200,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    justifyContent: 'space-between',
  },
  headerIcon: {
    fontSize: 26,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#555',
  },
  headerCheck: {
    fontSize: 20,
  },
  dataBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  dataTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  dataContent: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 4,
  },
  dataContentSmall: {
    fontSize: 12,
    color: '#333',
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
    color: '#111',
  },
  qrBox: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    elevation: 4,
    marginBottom: 20,
  },
  autoDownloadTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 6,
    color: '#333',
  },
  autoDownloadText: {
    fontSize: 13,
    textAlign: 'center',
    color: '#666',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  downloadButton: {
    alignSelf: 'center',
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Bottom Nav Styles
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 4,
    elevation: 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navIcon: {
    fontSize: 22,
    color: '#9fa4b1',
  },
  navLabel: {
    fontSize: 12,
    color: '#9fa4b1',
    marginTop: 2,
  },
  active: {
    color: '#3451ec',
    fontWeight: 'bold',
  },

  plusWrapper: {
    position: 'absolute',
    top: -30,
    left: '50%',
    transform: [{ translateX: -30 }],
    zIndex: 2,
  },
  plusButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3451ec',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusButtonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  // Create button above center
  createButtonContainer: {
    position: 'absolute',
    bottom: 90,
    left: '50%',
    transform: [{ translateX: -75 }],
    width: 150,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#3451ec',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DownloadQrScreen;
