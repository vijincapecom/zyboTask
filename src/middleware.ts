
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const token = request.cookies.get('token')?.value
  console.log(token, 'token')
  const isLoginPage = pathname.startsWith('/log-in')

  // if (!token && !isLoginPage) {
  //   return NextResponse.redirect(new URL('/log-in', request.url))
  // }

  if (token) {
    return NextResponse.redirect(new URL('/product-page', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|api).*)'],
}
