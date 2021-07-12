import { Hteg } from '../components/Htag/Htag'
import { Button } from '../components/Button/Button'
import { Ptag } from '../components/Ptag/Ptag'
import { Tag } from '../components/Tag/Tag'
import { Rating } from '../components/Rating/Rating'
import { useState } from 'react'

export default function Home(): JSX.Element {
    const [rating, setRating] = useState(4)
    return (
        <>
            <Hteg tag="h1">Hello world</Hteg>
            <Button appearence={'primary'} arrow="down">
                Primary
            </Button>
            <Button appearence={'ghost'} arrow="right">
                ghost
            </Button>
            <Ptag size="big">big</Ptag>
            <Ptag size="middle">middle</Ptag>
            <Ptag size="small">small</Ptag>
            <Tag size="small">111</Tag>
            <Tag size="middle" color="green">
                111
            </Tag>
            <Tag size="middle" color="red">
                111
            </Tag>
            <Tag size="middle" color="primary" href="https://hh.ru">
                111
            </Tag>
            <Rating isEditable={true} rating={rating} setRating={setRating} />
        </>
    )
}
