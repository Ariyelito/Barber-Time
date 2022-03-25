export const saveLogin = async (activeBarber) => {
    try {
      await AsyncStorage.setItem('login', JSON.stringify(activeBarber))
    } catch (e) {
      console.log('error while saving login info' + e)
    }
  }


