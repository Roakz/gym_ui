import * as React from 'react';
import {useState, useEffect, Dispatch, SetStateAction} from 'react';

interface AddCardProps {
    entity: string
    setCreatable: Dispatch<SetStateAction<boolean>>;
}

function AddCard(props: AddCardProps) {

    const [entity, setEntity] = useState<string>("");
   

    useEffect(()=>{
        setEntity(props.entity)
    }, [])

    const createEntity = () => {
      props.setCreatable(true)     
    }

    return (
        <button className="add-card" onClick={createEntity} >Add {entity} +</button>
    );
}

export default AddCard;