/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
import Head from 'next/head'
import Script from "next/script"

import React, { useEffect } from 'react'
import {Footer, Loading, Nav, Search} from '../components/common'
import { useAppSelector } from '../store/hooks'
import { selectLoading as loadingPost } from '../store/post/postSlice'
import { selectLoading as loadingCategory } from '../store/category/categorySlice'
import { selectLoading as loadingInstagram } from '../store/instagram/instagramSlice'
import { selectLoading as loadingTag } from '../store/tag/tagSlice'

import { Load } from '../ultis/load'
interface LayoutProps {
}
const ClientLayout: React.FC<LayoutProps> = ({children}) => {

    const isLoadPost = useAppSelector(loadingPost) 
    const isLoadCategory = useAppSelector(loadingCategory)
    const isLoadTag = useAppSelector(loadingTag)
    const isLoadInstagram = useAppSelector(loadingInstagram)

    const isLoad = isLoadCategory || isLoadInstagram || isLoadPost || isLoadTag

    useEffect(()=>{
        Load()
    },[])
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link rel="icon" sizes="16x16" href="favicon.ico" />
                <base href="/" />
                <title> TTH-BLOG </title>
                <link href="https://fonts.googleapis.com/css?family=Muli:300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="assets/css/all.css" />
                <link rel="stylesheet" href="assets/css/elegant-font-icons.css" />
                <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
                <link rel="stylesheet" href="assets/css/owl.carousel.css" />
                <link rel="stylesheet" href="assets/css/style.css" />
                <link rel="stylesheet" href="assets/css/custom.css" />
            </Head>   
            {
                isLoad ? <Loading /> : null
            } 
            <Nav />
            <div>
                {children}
            </div>
            <Footer />
            <Search />
            <Script strategy="beforeInteractive" src="assets/js/jquery-3.5.0.min.js"></Script>
            <Script strategy="beforeInteractive" src="assets/js/popper.min.js"></Script>
            <Script strategy="beforeInteractive" src="assets/js/bootstrap.min.js"></Script>
            <Script strategy="beforeInteractive" src="assets/js/owl.carousel.min.js"></Script>
        </div>
    )
}

export default ClientLayout
