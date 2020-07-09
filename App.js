/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';
import { getCurrentRun } from "./apiGateway";
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const [runTheme, setRunTheme] = useState(null)
  const [loading, setLoading] = useState(true)
  const [pun, changePun] = useState(null)
  
  const setRun = (theme) => {
    setRunTheme(theme);
    setLoading(false);
  }
  useEffect(() => {
    getCurrentRun(setRun)
  }, [])
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{loading ? "..." : runTheme}</Text>
            <TextInput
              style={styles.punEntryBox}
              editable
              multiline
              numberOfLines={4}
              blurOnSubmit
              placeholder={"Your pun here..."}
              style={{ borderColor: 'gray', borderWidth: 1 }}
              onChangeText={text => changePun(text)}
              value={pun}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: '50%',
    paddingHorizontal: 24,
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center',
    flex: 1,
  },
  highlight: {
    fontWeight: '700',
  },
  punEntryBox: {
    textAlignVertical: 'top',
    paddingTop: '4px',
    flex: 2
  }
});

export default App;
