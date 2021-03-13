import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { storage } from '../../storage'
import firebase from 'firebase';

export default function AddStudentScreen() {
  const [studentID, setStudentID] = useState('');
  const [token, setToken] = useState('');
  let member

  function storageDelete() {
    storage.remove({ key: 'student1' });
    storage.remove({ key: 'student2' });
    storage.remove({ key: 'student3' });
  }

  function storageLog() {
    storage.load({ key: 'student1' }).then(data => {
      console.log(data);
    })
      .catch(() => { console.log('1はない') });
    storage.load({ key: 'student2' }).then(data => {
      console.log(data);
    })
      .catch(() => { console.log('2はない') });
    storage.load({ key: 'student3' }).then(data => {
      console.log(data);
    })
      .catch(() => { console.log('3はない') });
  }

  function saveStorage(id, familyName, firstName) {
    let studentLength = 0
    storage.load({ key: 'student1' }).then(() => {
      storage.load({ key: 'student2' }).then(() => {
        storage.load({ key: 'student3' }).then(() => {
          Alert.alert('空き枠なし');
        }).catch(() => {
          storage.save({
            key: 'student3',
            data: {
              id: id,
              name: [familyName, firstName],
            }
          })
        })
      }).catch(() => {
        storage.save({
          key: 'student2',
          data: {
            id: id,
            name: [familyName, firstName],
          }
        })
      })
    }).catch(() => {
      storage.save({
        key: 'student1',
        data: {
          id: id,
          name: [familyName, firstName],
        }
      });
    }
    )

    // storage.load({ key: 'registeredStudent' }).then(data => {
    //   studentLength = Object.keys(data).length
    //   console.log(studentLength)
    //   const keyName = `student${studentLength + 1}`;
    //   storage.save({
    //     key: 'registeredStudent',
    //     data: {
    //       student1: { id: id, name: [familyName, firstName] }
    //     }
    //   });
    // })
  }


  function pressRegister() {
    const id = studentID.substr(0, 2) + studentID.substr(3)
    const db = firebase.firestore();
    const ref = db.collection('students');
    ref.doc(id).get().then((doc) => {
      if (doc.exists) {
        if (doc.get('token') === token) {
          Alert.alert('確認', `${doc.get('familyName')}   ${doc.get('firstName')}  さんで間違いありませんか？`, [
            {
              text: 'キャンセル',
              onPress: () => { }
            },
            {
              text: '登録',
              onPress: () => { saveStorage(id, doc.get('familyName'), doc.get('firstName')) }
            },
          ]);
        } else {
          Alert.alert('トークンと一致しません', 'トークンをもう一度確認してください。')
        }
      } else {
        Alert.alert('存在しない生徒番号です', '生徒IDをもう一度確認してください。');
      }
    }).catch((error) => {
      Alert.alert('データベースにアクセスできません', '時間をおいて再度お試しください。')
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>生徒IDとトークンを入力してください。</Text>
        <Text>トークンは塾から発行されます。わからない場合塾へお問い合わせください。</Text>
        <View style={{ alignItems: 'center', marginTop: 16 }}>
          <TextInput
            style={styles.textInput}
            label="生徒ID"
            value={studentID}
            onChangeText={studentID => setStudentID(studentID)}
            underlineColor="#3E42A7"
            keyboardType='number-pad'
            maxLength={7}
            theme={{ colors: { primary: '#3E42A7' } }}
          />
          <TextInput
            style={styles.textInput}
            label="トークン"
            value={token}
            onChangeText={token => setToken(token)}
            underlineColor="#3E42A7"
            keyboardType='email-address'
            maxLength={12}
            theme={{ colors: { primary: '#3E42A7' } }}
          />
        </View>
        <Text style={{ fontSize: 12, marginTop: 8 }}>※生徒IDは-（ハイフン）込みの7文字です。</Text>
        <Text style={{ fontSize: 12 }}>※トークンは半角英数字12文字です。</Text>
        <View style={{ marginTop: 16 }}>
          <Button
            mode="contained"
            color='#3E42A7'
            onPress={pressRegister}
          >登録</Button>
          <Button
            mode="contained"
            color='#3E42A7'
            onPress={storageDelete}
          >storage削除</Button>
          <Button
            mode="contained"
            color='#3E42A7'
            onPress={storageLog}
          >storageログ</Button>
        </View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inputContainer: {
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  textInput: {
    width: '90%',
    backgroundColor: '#FFFFFF',
  },
});