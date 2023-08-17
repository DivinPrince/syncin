'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form"
import { toast } from 'react-hot-toast';
import ImageUpload from '@/components/ImageUpload';
import { BiImageAdd, BiTrash } from 'react-icons/bi';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
import Upload from '@/components/upload';
import { format } from 'date-fns';
const formSchema = z.object({
   description: z.string().min(1),
   image: z.string().min(1).optional(),
});

type PostFormValues = z.infer<typeof formSchema>

const PostForm = () => {
   const [loading, setLoading] = useState(false);
   const router = useRouter();

   const defaultValues = {
      description: '',
      image: '',
   }
   const form = useForm<PostFormValues>({
      resolver: zodResolver(formSchema),
      defaultValues
   });

   const onSubmit = (data: PostFormValues) => {
      setLoading(false);
      axios.post('/api/posts', data)
         .then(() => {
            form.reset()
            router.push('/')
         })
         .catch((error) => {
            form.reset()
            toast.error("something went wrong")
         }).finally(() => {
            setLoading(false)
         })
   };
   const cancel = () =>{
      form.reset()
      router.push("/")
   }
   const formattedDate = format(new Date("2023-09-15T09:57:14.302Z"), "MMMM d, yyyy");
   console.log(formattedDate);
   
   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="w-full md:w-[500px] space-y-8">
            <FormField
               control={form.control}
               name="image"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Image</FormLabel>
                     <FormControl>
                        <>
                           <Upload
                              value={field.value}
                              disabled={loading}
                              onChange={(url) => { field.onChange(url) }}
                              onRemove={(url) => field.onChange('')}
                           />
                           {/* {field.value} */}

                        </>
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <div className="md:grid md:grid-cols-3 gap-8">
               <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                           <input className='shadow-sm text-white w-full md:w-[500px] bg-transparent ring-1 ring-inset ring-gray-300 placeholder: text-gray-400 focus:ring-2 px-4 py-2 focus:ring-inset focus:ring-white-600 sm:text-sm mt-3' disabled={loading} {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

            </div>
            
            <div className='flex justify-end gap-2'>
               <Button disabled={loading} onClick={cancel} type='button' variant="secondary" className="w-[100px]">
                  Cancel
               </Button>
               <Button disabled={loading}className="w-[100px]" type="submit">
                  Post
               </Button>
            </div>
         </form>
      </Form>
   )
}

export default PostForm