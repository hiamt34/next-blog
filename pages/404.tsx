/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import ClientLayout from '../layouts/client'
import Link from 'next/link'
const ErrorPage: NextPage = () => {
    return (
        <ClientLayout>
            <section className="section pt-55 mb-50">
                <div className="container-fluid">
                    <div className="page404  widget">
                        <div className="content">
                            <h1>404</h1>
                            <h3>Page Not Found.</h3>
                            <p>It looks like nothing was found at this location. </p>
                            <a href="/" className="btn-custom">Go back to Home</a>
                        </div>
                    </div>
                </div>
            </section>

        </ClientLayout>
    )
}

export default ErrorPage
