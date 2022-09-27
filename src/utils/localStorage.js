import AsyncStorage from '@react-native-async-storage/async-storage'

export async function setData(key, value) {
  try {
    await AsyncStorage.setItem(key, value)
    console.log('set', value)
  } catch (e) {
    console.log(e)
  }
}

export async function getData(key) {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null || value !== undefined) {
      console.log('get', value)
      return value
    }
  } catch (e) {
    console.log(e)
  }
}

export async function removeItem(item) {
  try {
    await AsyncStorage.removeItem(item)
  } catch (e) {
    alert(e)
  }

  console.log('removedOne.')
}

export async function removeFew() {
  const keys = [
    'first_name',
    'access_token',
    'utilisateur_id',
    'accessToken',
    'userId',
  ]
  try {
    await AsyncStorage.multiRemove(keys)
  } catch (e) {
    // remove error
  }

  console.log('removedFew')
}

export async function clearAll() {
  try {
    await AsyncStorage.clear()
  } catch (e) {
    // clear error
  }

  console.log('Cleared.')
}