import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { email, password, fullname } = await request.json()
  
  const supabase = await createClient()
  
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${request.headers.get('origin')}`,
      data: {
        first_name: fullname.split(" ").slice(0, 1)[0],
        last_name: fullname.split(" ").slice(1).join(" ")
      }
    }
  })

  if (error) {
    return NextResponse.json(
      { code: error.code },
      { status: 400 }
    )
  }

  return NextResponse.json({ data })
}