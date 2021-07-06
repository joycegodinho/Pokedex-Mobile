import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, TextInput, ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';



const ViewDetails = styled.View`
    flex: 1;
    align-items: center;
`
const StyledImage = styled.Image`
    width: 150px;
    height: 150px;
`
const StyledText = styled.Text`
    font-size: 22px;
    margin-bottom: 15px
`

const StyledIndicator = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const StyledFill = styled.View`
    background-color: #a8d9d5;
    border-radius: 5px;
   
    height: 5px;

`

const StyledUnFill = styled.View`
    background-color: #7b4173;
    border-radius: 5px;
    
    height: 5px;
`

const StyledStats = styled.View`
    margin: 10px;
`

const Details = props => {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetchPokemonDetails();
    }, [])

    const fetchPokemonDetails = () => {
        const {state} = props.navigation;
        fetch(`https://pokeapi.co/api/v2/pokemon/${state.params.pokemon}`)
          .then(res => res.json())
          .then(details => setDetails(details));
      }

      console.log(details)




      const colors = [ '#7b4173', '#a55194']
      const keys   = [ 'positive', 'negative']

    return details.name ? (
        <ViewDetails>
            <StyledImage 
            
                source={{
                    uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
                    details.name
                    }.png`,
                }}
            />
            <StyledText>Name: {details.name}</StyledText>
            <StyledText>Height: {details.height}</StyledText>
            <StyledText>Weight: {details.weight}</StyledText>
            {details.abilities[1] ? (
                <View>
                    <StyledText>Ability: {details.abilities[0].ability.name}</StyledText>
                    <StyledText>Ability 2: {details.abilities[1].ability.name}</StyledText>
                </View>
            ):(
                <StyledText>Ability: {details.abilities[0].ability.name}</StyledText>
            )}
            {details.types[1] ? (
                <View>
                    <StyledText>Type: {details.types[0].type.name}</StyledText>
                    <StyledText>Type 2: {details.types[1].type.name}</StyledText>
                </View>
            ):(
                <StyledText>Type: {details.types[0].type.name}</StyledText>
            )}

            <StyledStats>
                <Text><StyledFill style={{width:details.stats[0].base_stat}}></StyledFill><StyledUnFill style={{width: 300 - details.stats[0].base_stat}}></StyledUnFill></Text>
            </StyledStats>
            <StyledStats>
                <Text><StyledFill style={{width:details.stats[1].base_stat}}></StyledFill><StyledUnFill style={{width: 300 - details.stats[1].base_stat}}></StyledUnFill></Text>
            </StyledStats>
            <StyledStats>
                <Text><StyledFill style={{width:details.stats[2].base_stat}}></StyledFill><StyledUnFill style={{width: 300 - details.stats[2].base_stat}}></StyledUnFill></Text>
            </StyledStats>
            <StyledStats>
                <Text><StyledFill style={{width:details.stats[3].base_stat}}></StyledFill><StyledUnFill style={{width: 300 - details.stats[3].base_stat}}></StyledUnFill></Text>
            </StyledStats>
            <StyledStats>
                <Text><StyledFill style={{width:details.stats[4].base_stat}}></StyledFill><StyledUnFill style={{width: 300 - details.stats[4].base_stat}}></StyledUnFill></Text>
            </StyledStats>
            <StyledStats>
                <Text><StyledFill style={{width:details.stats[5].base_stat}}></StyledFill><StyledUnFill style={{width: 300 - details.stats[5].base_stat}}></StyledUnFill></Text>
            </StyledStats>

            
            
            


            <Text>Stats</Text>
            <StyledText>HP: {details.stats[0].base_stat}</StyledText>
            <StyledText>Attack: {details.stats[1].base_stat}</StyledText>
            <StyledText>Defense: {details.stats[2].base_stat}</StyledText>
            <StyledText>Special-Attack: {details.stats[3].base_stat}</StyledText>
            <StyledText>Special-Defense: {details.stats[4].base_stat}</StyledText>
            <StyledText>Speed: {details.stats[5].base_stat}</StyledText>


            
        </ViewDetails>

    ):(

        <StyledIndicator>
            <ActivityIndicator size="large" color="#E63F34" />
        </StyledIndicator>

    )
}

export default Details;
