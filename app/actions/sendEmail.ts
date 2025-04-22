'use server'

import nodemailer from 'nodemailer'

interface SendEmail {
  name: string
  email: string
  subject: string
  message: string
}

export const sendEmail = async (request: SendEmail) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USERNAME,
      to: process.env.GMAIL,
      subject: `${request.subject} from ${request.name}`,
      text: request.message,
      replyTo: request.email,
    })
    return { success: true, message: 'Email sent successfully!' }
  } catch (error) {
    console.error(error)
    return { success: false, message: 'Failed to send email.' }
  }
}
