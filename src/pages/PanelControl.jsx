import Card from '../components/Card'
import MenuLateral from '../components/MenuLateral'
<<<<<<< HEAD
import { envios } from '../services/database'


const PanelControl = () => {
  
=======
import { envios } from '../services/dataBase'
const PanelControl = () => {

>>>>>>> 6e50b29055121fd7e9f3a036daa41bdbc8c26264
  return (
    <section className="panel-control">
      <MenuLateral />
      <div className="panel-control-contenido">
        {
          envios.map((envio) => {
            return <Card info={envio} />
          })
        }
      </div>
    </section>
  )
}


export default PanelControl

