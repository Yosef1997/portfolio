import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

interface AlertInterface {
  isOpen: boolean
  onOpen: () => void
  title: string
  description: string
  cancelStr?: string
  actionStr?: string
}

const Alert: React.FC<AlertInterface> = ({ ...props }) => {
  return (
    <AlertDialog open={props.isOpen} onOpenChange={props.onOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{props.title}</AlertDialogTitle>
          <AlertDialogDescription>{props.description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {props.cancelStr && (
            <AlertDialogCancel>{props.cancelStr}</AlertDialogCancel>
          )}
          {props.actionStr && (
            <AlertDialogAction>{props.actionStr}</AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
export default Alert
