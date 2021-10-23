import React from 'react'
import {Link} from 'react-router-dom'
const Categories = () => {
    return (
        <div className="Categorias">
            <h3>Elija una categoría</h3>
            <Link to={`/category/${'mochilas'}`} className="item">Mochilas</Link>
            <Link to={`/category/${'rinioneras'}`} className="item">Riñoneras</Link>
            <Link to={`/category/${'carteras'}`} className="item">Carteras</Link>
        </div>
    )
}

export default Categories;