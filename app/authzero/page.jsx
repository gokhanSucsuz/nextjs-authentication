import Link from 'next/link'
import React from 'react'

import ProfileClient from '../components/authzeroClient'
import ProfileServer from '../components/authzeroServer'

const AuthZeroPage = () => {
    return (
        <div>
            <div className='gap-2 flex m-2'>
                <Link className="p-2 bg-red-500 text-white" href="/api/auth/login">Login</Link>
                <Link className="p-2 bg-red-500 text-white" href="/api/auth/logout">Logout</Link>
            </div>
            <ProfileClient />
            <ProfileServer />
        </div>
    )
}

export default AuthZeroPage
