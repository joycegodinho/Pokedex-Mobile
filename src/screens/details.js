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
            <StyledText>Ability: {details.abilities[0].ability.name}</StyledText>
            <StyledText>Type: {details.types[0].type.name}</StyledText>
            
        </ViewDetails>

    ):(

        <StyledIndicator>
            <ActivityIndicator size="large" color="#E63F34" />
        </StyledIndicator>

    )
}

export default Details;
