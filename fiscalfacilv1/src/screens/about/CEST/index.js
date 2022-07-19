import React from 'react';
import { Text, View, FlatList } from "react-native";
import { SearchBar } from "react-native-elements";
import { getcest } from '../../../api';
import Icon from 'react-native-vector-icons/AntDesign';

import { ViewListagem, ViewListagemItem, TextAlignJustify, TextDestaque } from '../../../assests/style';


const Item = ({ title, description, ncmNum }) => {
    return (
        <ViewListagemItem>
            <TextDestaque>CEST: {title}   -   NCM: {ncmNum}</TextDestaque>
            <TextAlignJustify>Descrição: {description}</TextAlignJustify>
        </ViewListagemItem>
    );
};


export default class AboutCEST extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pesquisarItem: "",
            dadosCEST: []
        };
    }


    atualizarNome = nome => {
        this.setState({
            pesquisarItem: nome,
        })
    }
        
    pesquisarCEST = (pesquisarItem) => {
        if(pesquisarItem !== "") {
            const pesquisa = this.state.allDadosCEST.filter((data) => 
            data.cest === pesquisarItem);

            this.setState({
                dadosCEST: pesquisa
            })
        } else {
            alert(`Sem resultados para a pesquisa. Insira um CEST válido.`)
            this.setState({
                dadosCEST: this.state.allDadosCEST
            })
        }
        
    };

    componentDidMount(){
        getcest()
        .then((responseJson) => {
            this.setState({
                dadosCEST: responseJson,
                allDadosCEST: responseJson
            })
        })
        .catch(function(error) {
            console.log('Erro de conexão: ' + error.message);
        });
    }

    render() {
        return (
            <>
                <ViewListagem >
                    <SearchBar
                        placeholder="Pesquisar Código CEST"
                        searchIcon={false}
                        onChangeText={nome => {
                            this.atualizarNome(nome)
                        }}
                        value={this.state.pesquisarItem}
                        autoCorrect={false}
                        placeholderTextColor={'#c6d2d2'}
                        style={{color:'#c6d2d2'}}
                        onClear={ () => {
                            this.setState({
                                dadosCEST: this.state.allDadosCEST
                            })
                        }
                        }
                    /><Icon
                        style={{ padding: 6 , marginTop: -50, marginBottom: 30, marginLeft: 330, marginRight: 50, color:'#c6d2d2'}}
                        size={20}
                        name="search1"
                        onPress={
                            () => {
                                this.setState({dadosCEST:[]});
                                this.pesquisarCEST(this.state.pesquisarItem);
                            }
                        }
                     ></Icon>
                    <FlatList
                        data={this.state.dadosCEST}
                        renderItem={({ item }) => <Item title={item.cest} description={item.descricao} ncmNum={item.ncm}/>}
                        keyExtractor={(item) => item._id}
                    />
                </ViewListagem>
            </>
        );
    }
}
