import React, { Fragment, useContext, useEffect, useState } from "react";
import { QuotesContext } from "../context/QuotesContext";

const Quote = () => {
    const { quoteData, RandomQuote } = useContext(QuotesContext);

    const [currentQuote, setCurrentQuote] = useState({
        content: "",
        author: "",
    });
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex === quoteData.length - 1) {
            RandomQuote();
        }
        quoteData[currentIndex] && setCurrentQuote(quoteData[currentIndex]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quoteData, currentIndex]);

    return (
        <div className="quote__container">
            <div className="card__body">
                <div className="card__data">
                    {currentQuote.content === "" ? (
                        <div className="loader__container">
                            <div className="loader"></div>
                        </div>
                    ) : (
                        <Fragment>
                            <div className="content">
                                {currentQuote.content}
                            </div>
                            <footer className="blockquote-footer">
                                <cite>{currentQuote.author}</cite>
                            </footer>
                        </Fragment>
                    )}
                </div>
                <div className="button__container">
                    <div className="share_btn">
                        <a
                            href={`https://twitter.com/intent/tweet?text=${currentQuote.content}%0A%0A${currentQuote.author}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href={`https://api.whatsapp.com/send?text=${currentQuote.content}%0A%0A${currentQuote.author}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                    <div className="nav_btn">
                        <button
                            disabled={currentIndex === 0 ? true : false}
                            onClick={() => {
                                setCurrentIndex(currentIndex - 1);
                            }}
                        >
                            Prev
                        </button>
                        <button
                            disabled={
                                !quoteData[currentIndex + 1]?.content
                                    ? true
                                    : false
                            }
                            onClick={() => {
                                setCurrentIndex(currentIndex + 1);
                            }}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quote;
