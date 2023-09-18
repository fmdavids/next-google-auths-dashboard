import connectToDB from "@/database"
import User from "@/models/user"
import { NextResponse } from "next/server"


export async function POST(req){
    try {
        await connectToDB()
        const {email, name} = await req.json()

        console.log({email, name})

        const newUser = await User.create({email, name})

        if(newUser){
            return NextResponse.json({
                success: true,
                message: 'Your account has been create successfully'
            })
        }else{
            return NextResponse.json({
                success: true,
                message: 'Someting went wrong! Your account could not be created, Please try again'
            })
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            message: 'someting went wrong!Please try again'
        })
    }
}