import { useEffect, useState, useMemo } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import MyButton from './src/MyButton';


function passwordSecurity(password: string | undefined): string | undefined {
  let startTime = performance.now();
  while (performance.now() - startTime < 2000) { }

  if (password == null)
    return undefined;

  if (password.length < 3)
    return "faible";
  else if (password.length < 6)
    return "moyen";
  else
    return "fort";
}

export default function App() {
  const [pseudo, setPseudo] = useState<string | undefined>();
  const [mdp, setMdp] = useState<string | undefined>();
  const security = useMemo(() => { 
    console.log("rendu")
    return passwordSecurity(mdp);
  }, [mdp]);


  useEffect(() => {
    console.log("--------------------------");
  }, [])

  function cancel(): void {
    setPseudo(undefined);
    setMdp(undefined);
  }

  function connexion(): void {
    console.log("coucou");
    setPseudo(undefined);
    setMdp(undefined);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <View style={{ width: "100%" }}>
        <TextInput style={styles.textInput} placeholder="Entrez pseudo" onChangeText={(text) => setPseudo(text)} value={pseudo} />
        <TextInput style={styles.textInput} placeholder="Entrez mot de passe" onChangeText={(text) => setMdp(text)} value={mdp} />
        <Text>Sécurité : {security}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonView}>
          <MyButton title="Annuler" pressed={cancel} color={"#9E9E9E"} colorPress={"#616161"} />
        </View>
        <View style={styles.buttonView}>
          <MyButton title="Connexion" pressed={connexion} color="#43A047" colorPress="#2E7D32" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 16
  },
  textInput: {
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 4,
    padding: 8
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
  buttonView: {
    flex: 1
  },
  title: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
});