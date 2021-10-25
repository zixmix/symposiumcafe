import React from "react";
import Head from "next/head";
import HomeBody from "../components/Layout/components/Body/HomeBody";
import location from "/data/location"



export default function Page({page})
{
    return (
        <>
            <Head>
                <title>{page.name} | {location.name}</title>
            </Head>
            <h1>{page.name}</h1>
            <div dangerouslySetInnerHTML={{__html: page.location}}></div>
        </>
    );
    export async function getStaticPaths() {
        const paths = location.pages.map(page => {
            const slug = page.path.split('/').slice(1);
            return {params: {slug}};
        });
        return {paths, fallback: true};
    }

    export async function getStaticProps({params}) {
        const currentPath = `/${params.slug.join('/')}`;
        const page = location.pages.find(page => page.path === currentPath) || {notfound: true};
        return {props: {page}};
    }

}