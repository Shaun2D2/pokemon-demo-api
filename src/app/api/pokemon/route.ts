import { NextResponse } from 'next/server'

import POKEMON_DATA from '../../../data/pokemon.json';

export async function GET(request: Request) {
    return NextResponse.json(POKEMON_DATA);
}