import r from 'react'

function ItemDetail({ match }) {

  r.useEffect(()=>{
    getItem(match.params.itemId)
    return window.stop
  }, [])

  const [item, setItem] = r.useState(undefined)

  return (
    <div>
      {item && <>
      <h1>{item.name}</h1>
      <h2>{item.description}</h2>
      {(()=>console.log(item.images.icon))()}
      <img src={item.images.icon} alt="IMAGE"/>
      </>}
    </div>
  )

  async function getItem(itemId){
    // const itemId = '723a761f-fa59-4cfc-92e7-9309a87c5a9e'
    const url = `https://fortnite-api.theapinetwork.com/item/get?id=${itemId}`
    const data = await fetch(url)
    const item_ = await data.json()
    setItem(item_.data.item)
    console.log(item_.data.item)
  }

}

export default ItemDetail
