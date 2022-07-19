import React from 'react';
import { Text, View, FlatList } from "react-native";
import { SearchBar } from "react-native-elements";
import Icon from 'react-native-vector-icons/AntDesign';
import { getcst } from '../../../api';

import { ViewListagem, ViewListagemItem, TextDestaque, TextAlignJustify } from '../../../assests/style';


const Item = ({ title, description, regime }) => {
    return (
        <ViewListagemItem>
            <TextDestaque>Código CST: {title}</TextDestaque>
            <TextAlignJustify>Descrição: {description}</TextAlignJustify>
            <Text>Regime Tributário: {regime}</Text>
        </ViewListagemItem>
    );
};


export default class AboutCST extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pesquisarItem: "",
            dadosCST: []
        };

    }

    componentDidMount(){
        getcst()
        .then((responseJson) => {
            this.setState({
                allDadosCST: responseJson,
                dadosCST: responseJson
            })
        })
        .catch(function(error) {
            console.log('Erro de conexão: ' + error.message);
        });

    }

    atualizarNome = nome => {
        this.setState({
            pesquisarItem: nome,
        })
    }
        
    pesquisarCST = (pesquisarItem) => {
        if(pesquisarItem !== "") {
            const pesquisa = this.state.allDadosCST.filter((data) => 
            data.cst === pesquisarItem);
        
            this.setState({
                dadosCST: pesquisa
            })
        } else {
            alert(`Sem resultados para a pesquisa. Insira um CST válido.`)
            this.setState({
                dadosCST: this.state.allDadosCST
            })
        }
        
    };
 
    render() {
        return (
            <>
                <ViewListagem >
                    <SearchBar
                        placeholder="Pesquisar Código CST"
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
                                dadosCST: this.state.allDadosCST
                            })
                        }
                        }
                    /><Icon
                        style={{ padding: 6 , marginTop: -50, marginBottom: 30, marginLeft: 330, marginRight: 50, color:'#c6d2d2'}}
                        size={20}
                        name="search1"
                        onPress={
                            () => {
                                this.setState({dadosCST:[]});
                                this.pesquisarCST(this.state.pesquisarItem);
                            }
                        }
                     ></Icon>
                    <FlatList
                        data={this.state.dadosCST}
                        renderItem={({ item }) => <Item title={item.cst} description={item.descricao} regime={item.regime}/>}
                        keyExtractor={(item) => item._id}
                    />
                </ViewListagem>
            </>
        );
    }
}
