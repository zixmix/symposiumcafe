import React from "react";
import Link from "next/link";
import Head from "next/head";


export const getStaticPaths = async () =>{
    const res = await fetch("https://my-json-server.typicode.com/zixmix/json-data-sympo/locations");
    const data = await res.json();

    const paths = data.map(location=>{
        return{
            params: {id: location.id.toString()},
        }
    })
    return{
        paths,
        fallback:false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch("https://my-json-server.typicode.com/zixmix/json-data-sympo/locations/"+ id);
    const data = await res.json();
    return{
        props: {location: data}
    }
}

export default function Details({location}){
    return(
        <>
            <Head>
                <title>Home</title>
            </Head>
        <div>
               <h1>Nalsov</h1>
                <h1>{location.id}</h1>
                <h1>{location.name}</h1>
                <Link href={"/location"}>Back</Link>
        </div>
        </>
    )
}