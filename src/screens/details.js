import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, TextInput, ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';

const ViewAbout = styled.View`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    height: auto; 
`

const ViewType = styled.View`

    display: flex;
    flex-direction: row;
    justify-content: center;

`

const ViewWeight = styled.View`
    align-items: center;    
    width: auto; 
    height: auto;
`

const ViewHeight = styled.View`
    align-items: center;
    width: auto; 
    height: auto;
`

const ViewAbility = styled.View`
    align-items: center;
    width: auto; 
    height: auto;
`

const ViewDetails = styled.View`
    flex: 1;
    align-items: center;
`
const StyledImage = styled.Image`
    width: 150px;
    height: 150px;
`
const StyledText = styled.Text`
    font-size: 16px;
    margin-bottom: 15px
`

const StyledIndicator = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const ViewStats = styled.View`

    display: flex;
    flex-direction: row;
    width: 90%;
    height: auto; 
`
const StyledStatsName = styled.View`
    align-items: center;    
    width: auto; 
    height: auto;
`
const StyledStatsNumber = styled.View`
    align-items: center;    
    width: auto; 
    height: auto;
`
const StyledStatsGraph = styled.View`
    align-items: center;    
    width: auto; 
    height: auto;
`
const StyledStats = styled.View`
    margin: 10px;
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
            {details.types[1] ? (
                <ViewType>
                    <StyledText>{details.types[0].type.name}</StyledText>
                    <StyledText>{details.types[1].type.name}</StyledText>
                </ViewType>
            ):(
                <StyledText>{details.types[0].type.name}</StyledText>
            )}

            <StyledText>Sobre</StyledText>

            <ViewAbout>
                <ViewWeight>
                    <StyledText>{details.weight}</StyledText>
                    <StyledText>Peso</StyledText>

                </ViewWeight>

                <ViewHeight>
                    <StyledText>{details.height}</StyledText>
                    <StyledText>Altura</StyledText>
                </ViewHeight>

                <ViewAbility>
                    {details.abilities[1] ? (
                        <View>
                            <StyledText>{details.abilities[0].ability.name}</StyledText>
                            <StyledText>{details.abilities[1].ability.name}</StyledText>
                            <StyledText>Habilidades</StyledText>
                        </View>
                        ):(
                        <View>
                            <StyledText>{details.abilities[0].ability.name}</StyledText>
                            <StyledText>Habilidades</StyledText>
                        </View>

                        )}                    
                </ViewAbility>
            </ViewAbout>
            <StyledText>Status Base</StyledText>
            <ViewStats>
                <StyledStatsName>
                    <StyledText>HP </StyledText>
                    <StyledText>ATK </StyledText>
                    <StyledText>DEF </StyledText>
                    <StyledText>SATK </StyledText>
                    <StyledText>SDEF </StyledText>
                    <StyledText>SPD </StyledText>
                </StyledStatsName>

                <StyledStatsNumber>
                    <StyledText>{details.stats[0].base_stat}</StyledText>
                    <StyledText>{details.stats[1].base_stat}</StyledText>
                    <StyledText>{details.stats[2].base_stat}</StyledText>
                    <StyledText>{details.stats[3].base_stat}</StyledText>
                    <StyledText>{details.stats[4].base_stat}</StyledText>
                    <StyledText>{details.stats[5].base_stat}</StyledText>
                </StyledStatsNumber>

                <StyledStatsGraph>
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
                </StyledStatsGraph>



            </ViewStats>

        </ViewDetails>

    ):(

        <StyledIndicator>
            <ActivityIndicator size="large" color="#E63F34" />
        </StyledIndicator>

    )
}

export default Details;
