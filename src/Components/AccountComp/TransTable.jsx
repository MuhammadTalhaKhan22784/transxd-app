import React,{useContext} from 'react'
import { ColorContext } from '../../Context/Context'
import { Link } from 'react-router-dom'
import up from '../../Assets/Group 4450.png'
import down from '../../Assets/Group 4451.png'

const TransTable = ({ className }) => {
    const { color } = useContext(ColorContext)
    let { mode } = color
    let style = {
        bgClr: mode === 'light' ? '#27BDAD' : '#112626',
        bgblnce: mode === 'light' ? 'black' : 'white'
    }

    return (
        <div>
            <div className={`transaction_table_main_div ${className}`}>
                <table>
                    <thead >
                        <tr 
                        style={{ backgroundColor: mode === 'light' ? '#B5EEE8' : '#1b3b3a',color:style.bgblnce }}
                        >
                            <th>Transaction id</th>
                            <th>Transaction type</th>
                            <th>Source</th>
                            <th>Transaction Date/Time</th>
                            <th>Beneficiary</th>
                            <th>Amount</th>
                            <th>Balance</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={mode==='dark'? 'dark_mode_table':'light_mode_table'}>
                            <td>abcsdfdfrerfdf</td>
                            <td>Credit</td>
                            <td>Card</td>
                            <td>december 23,2020</td>
                            <td>Miss Cecilia Kerluke</td>
                            <td style={{ color: '#1EE834', fontWeight: 'bold' }}>12323</td>
                            <td style={{ color: '#27BDAD', fontWeight: 'bold' }}>1243</td>
                            <td><img src={up} alt="" /></td>
                        </tr>
                        <tr className={mode==='dark'? 'dark_mode_table':'light_mode_table'}>
                            <td>abcsdfdfrerfdf</td>
                            <td>Credit</td>
                            <td>Card</td>
                            <td>december 23,2020</td>
                            <td>Miss Cecilia Kerluke</td>
                            <td style={{ color: '#1EE834', fontWeight: 'bold' }}>12323</td>
                            <td style={{ color: '#27BDAD', fontWeight: 'bold' }}>1243</td>
                            <td><img src={down} alt="" /></td>
                        </tr>
                        <tr className={mode==='dark'? 'dark_mode_table':'light_mode_table'}>
                            <td>abcsdfdfrerfdf</td>
                            <td>Credit</td>
                            <td>Card</td>
                            <td>december 23,2020</td>
                            <td>Miss Cecilia Kerluke</td>
                            <td style={{ color: '#1EE834', fontWeight: 'bold' }}>12323</td>
                            <td style={{ color: '#27BDAD', fontWeight: 'bold' }}>1243</td>
                            <td><img src={up} alt="" /></td>
                        </tr>
                        <tr className={mode==='dark'? 'dark_mode_table':'light_mode_table'}>
                            <td>abcsdfdfrerfdf</td>
                            <td>Credit</td>
                            <td>Card</td>
                            <td>december 23,2020</td>
                            <td>Miss Cecilia Kerluke</td>
                            <td style={{ color: '#1EE834', fontWeight: 'bold' }}>12323</td>
                            <td style={{ color: '#27BDAD', fontWeight: 'bold' }}>1243</td>
                            <td><img src={down} alt="" /></td>
                        </tr>
                        <tr className={mode==='dark'? 'dark_mode_table':'light_mode_table'}>
                            <td>abcsdfdfrerfdf</td>
                            <td>Credit</td>
                            <td>Card</td>
                            <td>december 23,2020</td>
                            <td>Miss Cecilia Kerluke</td>
                            <td style={{ color: '#1EE834', fontWeight: 'bold' }}>12323</td>
                            <td style={{ color: '#27BDAD', fontWeight: 'bold' }}>1243</td>
                            <td><img src={down} alt="" /></td>
                        </tr>
                        <tr className={mode==='dark'? 'dark_mode_table':'light_mode_table'}>
                            <td>abcsdfdfrerfdf</td>
                            <td>Credit</td>
                            <td>Card</td>
                            <td>december 23,2020</td>
                            <td>Miss Cecilia Kerluke</td>
                            <td style={{ color: '#1EE834', fontWeight: 'bold' }}>12323</td>
                            <td style={{ color: '#27BDAD', fontWeight: 'bold' }}>1243</td>
                            <td><img src={up} alt="" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TransTable
