import ContactForm from './_components/ContactForm'
import ContactPerson from './_components/ContactPerson'

const Contact = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex flex-col items-center gap-y-14 lg:grid lg:grid-cols-2 px-4 py-24 lg:px-20 lg:pt-56 lg:pb-[100px]'>
        <ContactPerson />
        <ContactForm />
      </div>
    </div>
  )
}
export default Contact
