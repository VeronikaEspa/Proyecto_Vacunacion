import React, {useEffect} from 'react'
import LinkForm from './LinkForm'
import {db} from '../firebase'

const Links = () => {

    const addOrEditLink = async (LinkObjets) => {
        await db.collection("DocumentacionPersonas").doc().set(LinkObjets)
        console.log("new task added")
    }
    const getLinks = async() =>{
        db.collection("DocumentacionPersonas")
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data())
        });
    });
}

    useEffect( () => {
        getLinks();
    }, []);

    return(
    <div>
        <LinkForm addOrEditLink={addOrEditLink}/>
        <h1>Links</h1>
    </div>
    )
};
export default Links;