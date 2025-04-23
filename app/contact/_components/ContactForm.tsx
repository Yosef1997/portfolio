'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { sendEmail } from '@/app/actions/sendEmail'
import { useState } from 'react'
import Alert from '@/components/Alert'

const SEND_EMAIL_SUCCESS =
  'Thank you for reaching out through my portfolio website! I appreciate your message and will get back to you within 2 × 24 hours.'
const SEND_EMAIL_FAILED =
  'Failed to send your message through my portfolio website. Please try again later or contact me directly via email.'

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(50),
  email: z.string().email(),
  subject: z
    .string()
    .min(2, { message: 'Subject must be at least 2 characters.' }),
  message: z
    .string()
    .min(2, { message: 'Message must be at least 2 characters.' }),
})
const ContactForm = () => {
  const [isloading, setIsloading] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState<string>('')
  const [alertDescription, setAlertDescription] =
    useState<string>(SEND_EMAIL_FAILED)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsloading(true)
    const result = await sendEmail(values)
    setAlertMessage(result.message)
    setOpenAlert(true)

    if (result.success) {
      setAlertDescription(SEND_EMAIL_SUCCESS)
      form.reset()
    }
    setIsloading(false)
  }

  return (
    <div>
      <h2 className='text-2xl lg:text-6xl font-medium mb-5 md:mb-9 '>
        Let&apos;s build something cool together
      </h2>
      {openAlert && (
        <Alert
          isOpen={openAlert}
          onOpen={() => setOpenAlert(!openAlert)}
          title={alertMessage}
          description={alertDescription}
          actionStr='Close'
        />
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='John' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='example@mail.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='subject'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input
                    placeholder='For web development work Enquire'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder='Type your Message' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isloading} type='submit'>
            {isloading ? 'Loading...' : 'Submit'}
          </Button>
        </form>
      </Form>
    </div>
  )
}
export default ContactForm
