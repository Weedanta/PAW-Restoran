import { Link } from '@inertiajs/react'
import React from 'react'

const NavbarAdmin = () => {
  return (
    <div className="w-72">
            <div className="bg-primary-1 h-full flex justify-center text-primary-10 pt-8">
                <div className="flex flex-col">
                    <div className="font-extrabold text-xl flex flex-row">
                        <img
                            src="/images/Logo.png"
                            alt="Logo"
                            className="h-10 object-contain"
                        />
                        <h1 className="ml-2 content-center">UrbanFeast</h1>
                    </div>
                    <div className="mt-14 font-normal text-xl text-white">
                        <Link href="/admin">
                            <div className="flex flex-row gap-7">
                                <img
                                    src="/images/Admin/Dashboard.svg"
                                    alt=""
                                    className="relative -mt-10"
                                />
                                <p className="mb-10">Dashboard</p>
                            </div>
                        </Link>
                        <Link href="/admin/artikel">
                            <div className="flex flex-row gap-7">
                                <img
                                    src="/images/Admin/Artikel.svg"
                                    alt=""
                                    className="relative -mt-10"
                                />
                                <p className="mb-10">Artikel</p>
                            </div>
                        </Link>
                        <Link href="/admin/recently">
                            <div className="flex flex-row gap-7">
                                <img
                                    src="/images/Admin/Recently.svg"
                                    alt=""
                                    className="relative -mt-10"
                                />
                                <p className="mb-10">Recently</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Link href="/">
                <div className="bg-secondary-50 h-[4vh] flex justify-center items-center font-medium text-white relative -mt-[4vh]">
                    <h3>Log Out</h3>
                </div>
            </Link>
        </div>
  )
}

export default NavbarAdmin
