/** use client is needed with next JS as it supports different types of rendering, Since we are using hooks from React, hooks can only be used with client side rendering. */
'use client'

import MenuItem from "../menu/elements/MenuItem";
import useScrollPos from "@/hooks/useScrollPos"

function Navbar() {
    const isAtTop = useScrollPos();

    return <div className={`mobile:hidden sticky -mt-14 top-0 z-50 ${isAtTop?'opacity-100':'opacity-0 hover:opacity-100 transition-opacity duration-500'} flex justify-end items-center h-14 w-full bg-gradient-to-r from-transparent to-black text-white`} >
        <div className="flex justify-around text-2xl w-1/2">
        <MenuItem title={"About"} />
        {/* <MenuItem title={"Projects"} />
        <MenuItem title={"Services"} /> */}
        </div>
    </div>
}

export default Navbar;