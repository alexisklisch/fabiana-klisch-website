interface props {
  phone?: number
  address: string
  link: string
}

export const wpLinkCreator = ({phone = 541164243479 ,address, link}: props) => {
  const msg = encodeURI(`Fabiana, me interesa la propiedad ubicada en 📍 ${address}.\n${link}`)
  return `https://api.whatsapp.com/send?phone=${phone}&text=${msg}`
}