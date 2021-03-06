import React from 'react';
import { handleResponse } from '../helpers';
import { API_URL } from '../config';
import Loading from '../common/Loading';
import Table from './Table';
import Pagination from './Pagination';

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            currencies: [],
            error: null,
            totalPages: 0,
            page: 1,
        };

        this.handlePaginationClick = this.handlePaginationClick.bind(this)
    }

    componentDidMount() {
        this.fetchCurrencies();
    }

    fetchCurrencies(){
        this.setState({ loading: true })

        const { page } = this.state;

        fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
            .then(handleResponse)
            .then((data) => {
                //console.log('Success', data);
                const {currencies, totalPages} = data;

                this.setState({
                    currencies,
                    totalPages,
                    loading: false
                });
            })
            .catch((error) => {
                this.setState({
                    error: error.errorMessage,
                    loading: false
                })
                console.log('Error', error);
            });
    }

    handlePaginationClick(direction){ 
        //this is undelcated here use handlePaginationClick = (direction) => { or the way we do now
        let nextPage = this.state.page;
        /**
        if (direction === 'next'){
            nextPage++;
        }
        else{
            nextPage--;
        }
        */
        //increment if next otherwise decrememnt
        nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1;
        this.setState({page: nextPage}, () => {
            this.fetchCurrencies();
        });
    }

    render() {
        //console.log(this.state);
        const { loading, error, currencies, page, totalPages } = this.state;
        /** 
         * const loading = this.state.loading;
         * const error = this.state.error;
         * const currencies = this.state.currencies;
        */


        //Render only loading component, if loading state is set to true
        if (loading) {
            return <div className="loading-container"><Loading /></div>
        }
        //render error message if error occured while fetching data
        if (error) {
            return <div className="error">{error}</div>
        }

        return (
            <div>
                <Table
                    currencies={currencies}
                    renderChangePercent={this.renderChangePercent}
                />
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    handlePaginationClick={this.handlePaginationClick}
                />
            </div>
        );
    }
}

export default List;