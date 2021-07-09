import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, TextInput, ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';

const ViewAbout = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end; 
    width: 90%;
    height: 48px; 
    margin-top: 16px;
`

const ViewType = styled.View`
    justify-content: center;
    align-items: center;   
    display: flex;
    flex-direction: row;
    align-content: space-around
`

const ViewWeight = styled.View`
    align-items: center; 
    justify-content: center;   
    width: auto; 
    height: auto;
    border-right-width: 1px;
    border-right-color: #E0E0E0;
    padding-right: 24px;
    padding-left: 24px;
    margin-left: 0px;
`
const ViewWeightDetails = styled.View`
    display: flex;
    flex-direction: row; 
    width: auto; 
    height: auto;
`

const ViewHeightDetails = styled.View`
    display: flex;
    flex-direction: row;   
    width: auto; 
    height: auto;
`
const ImgWeight = styled.Image`
    width: 16px; 
    height: 16px;
`

const ImgHeight = styled.Image`
    width: 8px; 
    height: 16px;
`

const ViewHeight = styled.View`
    justify-content: center; 
    align-items: center;
    width: auto; 
    height: auto;
    border-right-width: 1px;
    border-right-color: #E0E0E0;
    padding-right: 24px;
    padding-left: 24px;
    margin-left: 0px;
`

const ViewAbility = styled.View`
    align-items: center;
    width: auto; 
    height: auto;
    padding-right: 24px;
    padding-left: 24px;
    margin-left: 0px;
`

const ViewDetails = styled.View`
    flex: 1;
    align-items: center;
`
const StyledImage = styled.Image`
    width: 200px;
    height: 200px;
`
const StyledText = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 16px;
    color: #212121;
    height: 16px;
    margin-left: 8px
`
const StyledTextLight = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 12px;
    color: #666666;
    margin-top: 10px
`

const StyledTextBold = styled.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    margin-top: 15px
`

const StyledIndicator = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const ViewStats = styled.View`
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    width: 90%;
    height: auto; 
    justify-content: center;
`
const StyledStatsName = styled.View`
    border-right-width: 1px;
    border-right-color: #E0E0E0;
    align-items: center;    
    width: auto; 
    height: auto;
    padding-right: 12px
`
const StyledStatsNumber = styled.View`
    align-items: center;    
    width: auto; 
    height: auto;
    padding-right: 8px
    padding-left: 4px
`
const StyledStatsGraph = styled.View`
    align-items: center; 
    justify-content: space-evenly;   
    width: auto; 
    height: auto;
`
const StyledStats = styled.View`
`
const StyledFill = styled.View`
    background-color: #a8d9d5;
    border-radius: 5px;
    height: 5px;
`

const StyledUnFill = styled.View`
    background-color: #E0E0E0;
    border-radius: 5px;
    height: 5px;
`

const StyledType = styled.View`
    background-color: #a8d9d5;
    border-radius: 15px;
    padding: 2px 8px;
    height: 20px;
    width: auto;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
    margin-right: 8px;
`

const StyledTypeText = styled.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 16px;
    color: #FFFFFF
`

const ViewCard = styled.View`

    justify-content: center;
    align-items: center;
    width: 352px;
    height: 412px;

    background: #FFFFFF;
    border-radius: 8px;



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

      const getColor = () => {

            if(details.types[0].type.name == 'normal'){
                return '#AAA67F'
            }
            if(details.types[0].type.name == 'fighting'){
                return '#C12239'
            }
            if(details.types[0].type.name == 'flying'){
                return '#A891EC'
            }
            if(details.types[0].type.name == 'poison'){
                return '#A43E9E'
            }
            if(details.types[0].type.name == 'ground'){
                return '#DEC16B'
            }
            if(details.types[0].type.name == 'rock'){
                return '#B69E31'
            }
            if(details.types[0].type.name == 'bug'){
                return '#A7B723'
            }
            if(details.types[0].type.name == 'ghost'){
                return '#70559B'
            }
            if(details.types[0].type.name == 'steel'){
                return '#B7B9D0'
            }
            if(details.types[0].type.name == 'fire'){
                return '#F57D31'
            }
            if(details.types[0].type.name == 'water'){
                return '#6493EB'
            }
            if(details.types[0].type.name == 'grass'){
                return '#74CB48'
            }
            if(details.types[0].type.name == 'electric'){
                return '#F9CF30'
            }
            if(details.types[0].type.name == 'psychic'){
                return '#FB5584'
            }
            if(details.types[0].type.name == 'ice'){
                return '#9AD6DF'
            }
            if(details.types[0].type.name == 'dragon'){
                return '#7037FF'
            }
            if(details.types[0].type.name == 'dark'){
                return '#75574C'
            }
            if(details.types[0].type.name == 'fairy'){
                return '#E69EAC'
            }
            else {
                return '#7b4173'
            }
    }


    const getColorTwo = () => {

        if(details.types[1].type.name == 'normal'){
            return '#AAA67F'
        }
        if(details.types[1].type.name == 'fighting'){
            return '#C12239'
        }
        if(details.types[1].type.name == 'flying'){
            return '#A891EC'
        }
        if(details.types[1].type.name == 'poison'){
            return '#A43E9E'
        }
        if(details.types[1].type.name == 'ground'){
            return '#DEC16B'
        }
        if(details.types[1].type.name == 'rock'){
            return '#B69E31'
        }
        if(details.types[1].type.name == 'bug'){
            return '#A7B723'
        }
        if(details.types[1].type.name == 'ghost'){
            return '#70559B'
        }
        if(details.types[1].type.name == 'steel'){
            return '#B7B9D0'
        }
        if(details.types[1].type.name == 'fire'){
            return '#F57D31'
        }
        if(details.types[1].type.name == 'water'){
            return '#6493EB'
        }
        if(details.types[1].type.name == 'grass'){
            return '#74CB48'
        }
        if(details.types[1].type.name == 'electric'){
            return '#F9CF30'
        }
        if(details.types[1].type.name == 'psychic'){
            return '#FB5584'
        }
        if(details.types[1].type.name == 'ice'){
            return '#9AD6DF'
        }
        if(details.types[1].type.name == 'dragon'){
            return '#7037FF'
        }
        if(details.types[1].type.name == 'dark'){
            return '#75574C'
        }
        if(details.types[1].type.name == 'fairy'){
            return '#E69EAC'
        }
        else {
            return '#7b4173'
        }
}


      const colors = [ '#7b4173', '#a55194']
      const keys   = [ 'positive', 'negative']

    return details.name ? (
        <ViewDetails style={{backgroundColor: getColor()}}>
            <StyledImage 
            
                source={{
                    uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
                    details.name
                    }.png`,
                }}
            />

            <ViewCard>

                {details.types[1] ? (
                    <ViewType>
                        <StyledType style={{backgroundColor: getColor()}}>
                            <StyledTypeText>{details.types[0].type.name}</StyledTypeText>
                        </StyledType>

                        <StyledType style={{backgroundColor: getColorTwo()}}>
                            <StyledTypeText>{details.types[1].type.name}</StyledTypeText>
                        </StyledType>

                    </ViewType>
                ):(
                    <ViewType>
                        <StyledType style={{backgroundColor: getColor()}}>
                            <StyledTypeText>{details.types[0].type.name}</StyledTypeText>
                        </StyledType>
                    </ViewType>
                
                )}

                <StyledTextBold style={{color: getColor()}}>Sobre</StyledTextBold>

                <ViewAbout>
                    <ViewWeight>

                        <ViewWeightDetails>
                            <ImgWeight source={require('../img/Vectorweight.png')}/>
                            <StyledText> {details.weight/10} Kg</StyledText>

                        </ViewWeightDetails>
                        
                        
                        <StyledTextLight>Peso</StyledTextLight>

                    </ViewWeight>

                    <ViewHeight>
                        <ViewHeightDetails>
                            <ImgHeight source={require('../img/Vectorheight.png')}/>
                            <StyledText> {details.height/10} m</StyledText>

                        </ViewHeightDetails>
                        <StyledTextLight>Altura</StyledTextLight>
                    </ViewHeight>

                        {details.abilities[1] ? (
                            <ViewAbility>
                                <StyledText>{details.abilities[0].ability.name}</StyledText>
                                <StyledText>{details.abilities[1].ability.name}</StyledText>
                                <StyledTextLight>Habilidades</StyledTextLight>
                            </ViewAbility>
                            ):(
                            <ViewAbility>
                                <StyledText>{details.abilities[0].ability.name}</StyledText>
                                <StyledTextLight>Habilidades</StyledTextLight>
                            </ViewAbility>

                            )}                    
            
                </ViewAbout>


                <StyledTextBold style={{color: getColor()}}>Status Base</StyledTextBold>

                <ViewStats>
                    <StyledStatsName>
                        <StyledText style={{fontWeight: 'bold', color: getColor()}}>HP </StyledText>
                        <StyledText style={{fontWeight: 'bold', color: getColor()}}>ATK </StyledText>
                        <StyledText style={{fontWeight: 'bold', color: getColor()}}>DEF </StyledText>
                        <StyledText style={{fontWeight: 'bold', color: getColor()}}>SATK </StyledText>
                        <StyledText style={{fontWeight: 'bold', color: getColor()}}>SDEF </StyledText>
                        <StyledText style={{fontWeight: 'bold', color: getColor()}}>SPD </StyledText>
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
                            <StyledText><StyledFill style={{width:details.stats[0].base_stat, backgroundColor: getColor()}}></StyledFill><StyledUnFill style={{width: 248 - details.stats[0].base_stat}}></StyledUnFill></StyledText>
                        </StyledStats>
                        <StyledStats>
                            <StyledText><StyledFill style={{width:details.stats[1].base_stat, backgroundColor: getColor()}}></StyledFill><StyledUnFill style={{width: 248 - details.stats[1].base_stat}}></StyledUnFill></StyledText>
                        </StyledStats>
                        <StyledStats>
                            <StyledText><StyledFill style={{width:details.stats[2].base_stat, backgroundColor: getColor()}}></StyledFill><StyledUnFill style={{width: 248 - details.stats[2].base_stat}}></StyledUnFill></StyledText>
                        </StyledStats>
                        <StyledStats>
                            <StyledText><StyledFill style={{width:details.stats[3].base_stat, backgroundColor: getColor()}}></StyledFill><StyledUnFill style={{width: 248 - details.stats[3].base_stat}}></StyledUnFill></StyledText>
                        </StyledStats>
                        <StyledStats>
                            <StyledText><StyledFill style={{width:details.stats[4].base_stat, backgroundColor: getColor()}}></StyledFill><StyledUnFill style={{width: 248 - details.stats[4].base_stat}}></StyledUnFill></StyledText>
                        </StyledStats>
                        <StyledStats>
                            <StyledText><StyledFill style={{width:details.stats[5].base_stat, backgroundColor: getColor()}}></StyledFill><StyledUnFill style={{width: 248 - details.stats[5].base_stat}}></StyledUnFill></StyledText>
                        </StyledStats>
                    </StyledStatsGraph>



                </ViewStats>



            </ViewCard>




        </ViewDetails>

    ):(

        <StyledIndicator>
            <ActivityIndicator size="large" color="#E63F34" />
        </StyledIndicator>

    )
}

export default Details;
