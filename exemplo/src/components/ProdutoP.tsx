import { useLocation } from "react-router-dom";
import { Produto } from "./Produto";
export function ProdutoP() {
    const location = useLocation();
  const username = location
    return (
        <>
        <h1> Wello World ReactJS </h1>
        <Produto 
          nome={"Notebook"} 
          descricao={"Notebook Dell"} 
          qtde={10} 
          preco={5000.00}/>
        <Produto
         nome={"Celular"} 
         descricao={"Samsung S21"} 
         qtde={10} 
         preco={5000.00}
        /> 
      </>        
    )
}