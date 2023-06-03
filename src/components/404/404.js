import React from 'react'
import { Link } from 'react-router-dom'

import './404.css'

function Page404() {
    return (
        <section className="page_404">
            <div className="container">
                <div className="four_zero_four_bg">

                </div>
                <div className="contant_box_404">
                    <h3 className="h2">
                        Look like you're lost
                    </h3>
                    <p>The page you were looking for was not found!</p>
                    <Link to="/" className="link_404 t-5">
                        <span>Go Home</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Page404