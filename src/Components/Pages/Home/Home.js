import React from 'react';
import Categories from '../../Products/Categories/Categories';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Client from '../ClientSay/Client';
import Fetcher from '../ExtraFetcher/Fetcher';

import CallToAction from './CallToAction/CallToAction';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Fetcher></Fetcher>
            <Categories></Categories>
            <Advertise></Advertise>
            <Client></Client>
            |<Blog></Blog>
            <CallToAction></CallToAction>
        </div>
    );
};

export default Home;