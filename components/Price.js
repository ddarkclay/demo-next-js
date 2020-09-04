import Layout from './Layout';
import React from 'react'

const Price = ({ bpi }) => {
    const [currency, setCurrency] = React.useState('USD')

    return (
        <div>
            <ul className="list-group">
                <select className="form-control" onChange={e => setCurrency(e.target.value)}>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
                <br />
                {currency == 'USD' && <li className="list-group-item">
                    Bitcoin rate for {bpi.USD.description}
                    : <span className="badge badge-primary">{bpi.USD.code} </span>
                    <strong> {bpi.USD.rate}</strong>
                </li>}
                {currency == 'GBP' && <li className="list-group-item">
                    Bitcoin rate for {bpi.GBP.description}
                    : <span className="badge badge-primary">{bpi.GBP.code} </span>
                    <strong> {bpi.GBP.rate}</strong>
                </li>}
                {currency == 'EUR' && <li className="list-group-item">
                    Bitcoin rate for {bpi.EUR.description}
                    : <span className="badge badge-primary">{bpi.EUR.code} </span>
                    <strong> {bpi.EUR.rate}</strong>
                </li>}
            </ul>
        </div>
    )
}

export default Price;