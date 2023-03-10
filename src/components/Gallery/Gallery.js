import React from 'react'
import datas from '../../data/data'
import Card from '../Card/Card'
import './gallery.scss'

export default function Galley() {
    return (
        <div className="gallery">
            {/*on parcourt le fichier de données pour afficher une Card contenant l'id, le cover et le titre de l'objet */}
            {datas.map((data) => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        cover={data.cover}
                        title={data.title}
                    />
                )
            })}
        </div>
    )
}
