import {FC} from 'react'
import './helloScreen.scss'

interface HelloScreenProps {
    setIsReadHelloScreen: (type: boolean) => void;
}

const HelloScreen: FC<HelloScreenProps> = ({setIsReadHelloScreen}) => {
    
    const onClickStartGame = () =>{
        setIsReadHelloScreen(true);
    }

    return (
        <div className='HelloScreen'>
            <div className="wrapper">
                <div className="frame-modal">
                    <div className="window-modal">
                        <p>Hi everyone, this is my pet project on <b>React</b> and <b>TypeScript</b> This is a simple in-game inventory prototype where you can craft and collect items taken from the in-game store. It is possible to expand the number of items, also use one item to craft different items</p>
                        <br/>
                        <h3>Have fun ;)</h3>
                    </div>
                </div>

            </div>
            <button onClick={onClickStartGame} className='big-btn'>Start Game</button>
        </div>
    )
}

export default HelloScreen;