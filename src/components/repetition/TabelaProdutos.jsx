import './TabelaProdutos.css'
import products from '../../data/products'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    function getLinhas() {
        return products.map((prod, index) => {
            return (
                <tr className={index % 2 === 0 ? 'Par' : 'Impar'} key={prod.id}>
                    <td>{prod.id}</td>
                    <td>{prod.nome}</td>
                    <td>R$ {prod.valor}</td>
                </tr>
            )
        })
    }

    return (
        <div className='TabelaProdutos'>
            <table border="1">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Nome</td>
                        <td>Valor</td>
                    </tr>
                </thead>
                <tbody>
                    { getLinhas() }
                </tbody>
            </table>
        </div>
    )
}