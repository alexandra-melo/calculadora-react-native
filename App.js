import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App() {
  const buttons = ['C','DEL','%','0','1','+','2','3','-','4','5','*','6','7','/','8','9','.','='];

  const [newOperation, setNewOperation] = useState("")
  const [previousOperation, setPreviousOperation] = useState("")

  function calculator(){
    const separateNumbers = newOperation.split(' ')
    const fristNumber = parseFloat(separateNumbers[0])
    const secondNumber = parseFloat(separateNumbers[2])
    const operator = separateNumbers[1]
    
    console.log(fristNumber, secondNumber, operator)
  
    switch(operator){
      case '+':
        setNewOperation((fristNumber+secondNumber).toString())
        return
      case '-':
        setNewOperation((fristNumber-secondNumber).toString())
        return
      case '*':
        setNewOperation((fristNumber*secondNumber).toString())
        return
      case '/':
        setNewOperation((fristNumber/secondNumber).toString())
        return
      case '%':
        setNewOperation((fristNumber * (secondNumber/100)).toString())
        return
    }
    

  }

  function veluesToOperate(input){
    console.log(input)
    if( input === '+' | input === '-' | input === '*' | input === '/' | input === '%'){
      setNewOperation(newOperation + " " + input + " ");
      console.log(newOperation);
      return
    }
    switch(input){
      case 'DEL':
        setNewOperation(newOperation.substring(0, (newOperation.length-1)))
        return
      case 'C':
        setNewOperation("")
        setPreviousOperation("")
        return
      case '=':
        setPreviousOperation(newOperation + " = ")
        calculator()
        return
    }
    setNewOperation(newOperation + input)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.result}>

        <Text style = {{fontSize: 25, color: "grey"}}>{previousOperation}</Text>
        <Text style = {{fontSize: 35}}>{newOperation}</Text>

      </View>

      <View style={styles.operators}>
        
        {buttons.map((button) =>
          button === '=' ?

          <TouchableOpacity 
          onPress={() => veluesToOperate(button)}
          key = {button}
          style={[{borderColor: "white",backgroundColor: "green"}, styles.button]}>

            <Text style={{color: "white", fontSize: 30}}>{button}</Text>

          </TouchableOpacity>
          :

          <TouchableOpacity 
          onPress={() => veluesToOperate(button)}
          key={button}
          style={[{borderColor: "white"}, styles.button]}>

            <Text style={{color: "white", fontSize: 25}}>{button}</Text>

          </TouchableOpacity>
        )}

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  result:{
    width: "100%",
    height: "25.5%",
    backgroundColor: "#f2f2f2",
    alignItems: 'flex-end',
    justifyContent: "flex-end",
    paddingRight: "5%"
    
  },
  operators:{
    width: "100%",
    height: "74.5%",
    backgroundColor: "#3C3C3C",
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button:{
    
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
    borderWidth: 1,
    minHeight: 80,
    minWidth: 91,
  }

});
