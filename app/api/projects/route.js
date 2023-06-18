/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server'
import PROJECTS from '@/app/data/projects'

export async function GET(request) {
    return NextResponse.json(PROJECTS, {
        status: 200,
        statusText: 'The request was fulfilled.'
    })
}
