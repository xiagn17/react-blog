import React, { Component } from 'react';
import './index.css';


import Header from '../Header';
import ArticleFullPage from '../ArticleFullPage'
import Main from '../Main';



class App extends Component {

    constructor () {
        super();

        this.state = {
            article: null
        }
    }


    showFullArticle = (article, unixTime) => {
        this.setState({
            article: {
                ...article
            },
            unixTime
        });

        document.body.style.overflow = "hidden";
    };

    hideArticle = () => {
        const fullArticle = document.querySelector('.wrapper-fade');

        if (fullArticle) {
            fullArticle.classList.add('animated', 'fadeOutUp', 'duration-1s');
            fullArticle.style.overflow = 'hidden';

            setTimeout(() => {
                this.setState({
                    article: null,
                    unixTime: null
                });
            }, 1000);

            document.body.style.overflow = "auto";
        }
    };

    render() {
        const { article, unixTime } = this.state;

        return (
            <div className="App">
                <div className="container">
                    <Header />
                    <Main
                        showFullArticle={this.showFullArticle}
                        hideArticle={this.hideArticle}
                    />
                    {
                        article ?
                            <ArticleFullPage
                                unixTime={unixTime}
                                article={article}
                                hideArticle={this.hideArticle}
                            />
                            :
                            null
                    }
                </div>
            </div>
        );
    }
}


export default App;
