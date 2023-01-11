import React, {useState} from 'react'

const PokeItem = ({name, url}) => {

    const [pokeInfo, setPokeInfo] = useState({})
    const [showInfo, setShowInfo] = useState(false)

    const showInfoFetch = async (pokUrl) => {
        try {
            const info = await fetch(`${pokUrl}`)
            const infoFull = await info.json()
            setPokeInfo(infoFull)   
            console.log(pokeInfo, infoFull)
        } catch (error) {
            console.log(error) 
        }
        setShowInfo(!showInfo)
    }

  return (
    <li>
        <span onClick={()=>showInfoFetch(url)}>{name}</span>
        {
            showInfo &&
            <>
            <span>Height: {pokeInfo.height}</span>
            <p>
            {
                pokeInfo.abilities.map((ability, index) => {
                    return <span key={index}>{ability.name}</span>
                })
                
            }
            </p>
            </>
        }
    </li>
  )
}

export default PokeItem