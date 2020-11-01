import * as React from 'react';

interface AddCardProps {
    entity: String
}

function AddCard(props: AddCardProps) {
    return (
        <button className="add-card">Add {props.entity} +</button>
    );
}

export default AddCard;