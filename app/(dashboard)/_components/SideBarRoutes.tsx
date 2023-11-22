"use client"
// "use server";

import React from 'react'
import SideBarItem from './SideBarItem'
import { Layout, Compass, Star, User } from 'lucide-react'

const guestRoutes = [
    {
        icon: Layout,
        label: "DashBoard",
        href: "/"
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/search"
    }, {
        icon: Star,
        label: "Favourites",
        href: "/favourites"
    }
    , {
        icon: User,
        label: "Sign In",
        href: "/sign-in"
    }
]


export const SidebarRoutes = () => {
    const routes = guestRoutes
    return (
        <div className='flex flex-col '>
            {routes.map((route) => (
                <SideBarItem key={route.href} icon={route.icon} label={route.label} href={route.href} />
            ))}
        </div>
    )
}

