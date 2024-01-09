import React from 'react'
import { redirect } from 'next/navigation';
import { db } from "@/db";

export default function SnippetCreatePage() {
  
    async function createSnipper(formData: FormData){
        // This needs to be a server action!
        'use server';

        // Chech the user's inputs and make sure they are valid
        const title = formData.get("title") as string;
        const code = formData.get("code") as string;

        // Create a new record in the db
        const snipper = await db.snipper.create({
            data: {
                title,
                code
            }
        })
        console.log(snipper);
        
        // Redirext to the root route
        redirect("/");
    }

    return (
    <form action={createSnipper}>
        <h3 className="font-bold m-3">Create a Snipper</h3>
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <label htmlFor="title" className="w-12">Title</label>
                <input id='title' className='border rounded p-2 w-full' name="title" />
            </div>

            <div className="flex gap-4">
                <label htmlFor="code" className="w-12">Code</label>
                <textarea id='code' className='border rounded p-2 w-full' name="code" />
            </div>

            <button type="submit" className="rounded p-2 bg-blue-200">Create</button>

        </div>
    </form>
  )
}
