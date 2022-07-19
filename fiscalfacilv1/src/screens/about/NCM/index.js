import React from 'react';
import { Text, View, FlatList } from "react-native";
import { SearchBar } from "react-native-elements";
import Icon from 'react-native-vector-icons/AntDesign';

import { ViewListagem, ViewListagemItem, TextAlignJustify, TextDestaque } from '../../../assests/style';

import {  getncm } from '../../../api';

const Item = ({ title, description }) => {
    return (
        <ViewListagemItem>
            <TextDestaque>Código NCM: {title}</TextDestaque>
            <TextAlignJustify>Descrição: {description}</TextAlignJustify>
        </ViewListagemItem>
    );
};


export default class AboutNCM extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pesquisarItem: "",
            dadosNCM:[]

        };
    }

    atualizarNome = nome => {
        this.setState({
            pesquisarItem: nome,
        })
    }
        
    pesquisarNCM = (pesquisarItem) => {
        if(pesquisarItem !== "") {
            const pesquisa = this.state.allDadosNCM.filter((data) => 
            data.ncm === pesquisarItem);

            this.setState({
                dadosNCM: pesquisa
            })
        }else {
            alert(`Sem resultados para a pesquisa. Insira um NCM válido.`)
            this.setState({
                dadosNCM: this.state.allDadosNCM
            })
        }
        
    };

    componentDidMount(){
        getncm()
        .then((responseJson) => {
            this.setState({
                dadosNCM: responseJson,
                allDadosNCM: responseJson
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
                        placeholder="Pesquisar Código NCM"
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
                                dadosNCM: this.state.allDadosNCM
                            })
                        }
                        }
                    /><Icon
                        style={{ padding: 6 , marginTop: -50, marginBottom: 30, marginLeft: 330, marginRight: 50, color:'#c6d2d2'}}
                        size={20}
                        name="search1"
                        onPress={
                            () => {
                                this.setState({dadosNCM:[]});
                                this.pesquisarNCM(this.state.pesquisarItem);
                            }
                        }
                     ></Icon>
                    <FlatList
                        data={this.state.dadosNCM}
                        renderItem={({ item }) => <Item title={item.ncm} description={item.descricao}/>}
                        keyExtractor={(item) => item._id}
                    />
                </ViewListagem>
            </>
        );
    }
}
