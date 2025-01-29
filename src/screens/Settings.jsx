import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Switch, Button } from 'react-native-elements';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      
      <View style={styles.settingItem}>
        <Text>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>
      
      <View style={styles.settingItem}>
        <Text>Enable Notifications</Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>
      
      <Button title="Log Out" onPress={() => alert('Logged out')} buttonStyle={styles.logoutButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: 'red',
  },
});

export default Settings;