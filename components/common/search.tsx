import React from 'react';

export const Search = () => {
    return (
        <div className="search">
            <div className="container-fluid">
                <div className="search-width  text-center">
                    <button type="button" className="close">
                        <i className="icon_close" />
                    </button>
                    <form className="search-form" action="#">
                        <input type="search" placeholder="What are you looking for?" />
                        <button type="submit" className="search-btn">search</button>
                    </form>
                </div>
            </div>
        </div>

    );
}
