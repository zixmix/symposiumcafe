import React from "react";
import Link from "next/link";


export const getStaticPaths = async () =>{
    const res = await fetch("https://my-json-server.typicode.com/typicode/demo/posts");
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
    const res = await fetch("https://my-json-server.typicode.com/typicode/demo/posts/"+ id);
    const data = await res.json();
    return{
        props: {location: data}
    }
}

export default function Details({location}) {
    return (
        <div>
            <>
               <h1>Nalsov</h1>
                <h3>{location.id}</h3>
                <h1>{location.title}</h1>
                <Link href={"/location"}>Back</Link>
            </>
        </div>
    )
}