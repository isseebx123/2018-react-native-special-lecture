import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CoinDetail from './CoinDetail';
import { getCoinIconUri } from '../libs/Constants';

class CoinView extends React.Component {
    _getCoinDatas(limit) {
        this.setState({
            isLoaded: false,
        })

        fetch(
            'https://api.coinmarketcap.com/v1/ticker/?limit=${limit}'
        )
        .then(response => response.json())
        .then(data => {
            this.setState({
                coinDatas: data,
                isLoaded: true,
            })
        });
    }
    
    componentDidMount() {
        this._getCoinDatas(10);

        setInterval(() => {
            this._getCoinDatas(10);
            console.log('toggled!');
        }, 1000)
    }

    constructor(props) {
        super(props);
        this.state = {
            coinDatas: [],
            isLoaded: false,
        }
    } 

    render(){
        let detailCells = [];

        this.state.coinDatas.map((data, index) => {
            let coinDetail = (
                <CoinDetail
                    iconUri={getCoinIconUri(data.name)} 
                    key={index}
                    rank={data.rank}
                    name={data.name}
                    price={data.price_usd}
                    volumn={data.market_cap_usd}
                />
            );
            
            detailCells.push(coinDetail);
        });

        return (
            <ScrollView style={this.props.style}>
                {detailCells}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
});

export default CoinView;