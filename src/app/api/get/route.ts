import { NextResponse } from 'next/server'

import { db } from '@/app/db/index'
import { userTable } from '@/app/db/schema'

export const GET = async () => {
  const users = await db.select().from(userTable).execute()
  return NextResponse.json({ users })
}
