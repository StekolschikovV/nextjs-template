import type {NextFetchEvent, NextRequest} from 'next/server'
import {NextResponse} from "next/server";

export function middleware(request: NextRequest, event: NextFetchEvent) {
    console.log("!!!", request.cookies.getAll())
    return NextResponse.next()
}

export const config = {
    matcher: ['/about', '/articles/:path*']
}
