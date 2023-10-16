import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"

const GroupsGrid = () => {
  return (
    <>
      <div>
        <Card className="flex h-full items-center justify-center">
          <CardHeader>
            <CardTitle>3</CardTitle>
            <CardDescription>Groups</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="lg:col-span-3">
        <Card>
          <CardHeader>
            <CardTitle>Your Groups</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button>Bug Hunter 365</Button>
            <Button>Bug Hunter 365</Button>
            <Button>Bug Hunter 365</Button>
            <Button>Bug Hunter 365</Button>
            <Button>Bug Hunter 365</Button>
            <Button>Bug Hunter 365</Button>
            <Button>Bug Hunter 365</Button>
            <Button>Bug Hunter 365</Button>
            <Button>Bug Hunter 365</Button>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default GroupsGrid
