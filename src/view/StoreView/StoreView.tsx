import { useEffect, useState } from "react"
import axios from 'axios';
import "./style.css"
export function StoreView() {
    type Objects = [{
        userId: number,
        id: number,
        title: string,
        completed: boolean
    }]

    const [itemObject, setObject] = useState<Objects>([{}] as Objects)
    const [visivel, setVisivel] = useState(true);

    const handleClick = () => {

        setVisivel(false);
    };

    const handle = () => {
        console.log(itemObject)
        setVisivel(false);
    };

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(e => {
            setObject(e.data)
        })
    }, [])

    if (!visivel) {
        return (
            <section onClick={handle} className="d-flex  justify-content-center flex-column my-4 mx-3">
                <section>
                    {
                        itemObject.map((e) => {
                            let classes = ''
                            if(e.completed == false){
                                classes += 'error'
                            }else{
                                classes += 'success'
                            }
                            return (
                                <article 
                                key={e.id}
                                className="mb-4 w-100 item-class d-flex flex-column justify-content-center gap-3 px-4 item-container"
                                >
                                    <header className='item-header'>
                                        <span className="fw-bold">Title:</span>
                                        {e.title+""}
                                    </header>
                                    <article className={classes}>
                                        <span>Completed: </span>
                                        {""+e.completed }
                                    </article>
                                </article>
                            )
                        })
                    }
                </section>
            </section>
        )
    }


    return (
        <section onClick={handleClick} className="border border-dark vh-100 d-flex align-items-center justify-content-center flex-column">
            <h1>Welcom To Store</h1>
            <small>Enter the Store</small>
        </section>
    )

}