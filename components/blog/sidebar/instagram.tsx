/* eslint-disable @next/next/no-img-element */

import { useSelector } from "react-redux"
import { selectInstagrams } from "../../../store/instagram/instagramSlice"
const baseURL = process.env.baseURL as string
export const Instagram = () => {
    const instagrams = useSelector(selectInstagrams)
    return (
        <div className="widget">
            <div className="section-title">
                <h5>Instagram</h5>
            </div>
            <ul className="widget-instagram">
                {
                    instagrams.map((instagram, key)=>{
                        return (
                            <li key={key}>
                            <a className="image" >
                                <img src={baseURL + instagram.url} alt="đò án website miễn phí free" />
                            </a>
                        </li>
                        )
                    })
                }
               
                
                
            </ul>
        </div>
    )
}