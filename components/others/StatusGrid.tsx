import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const StatusGrid = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>365</CardTitle>
          <CardDescription>Error Solved</CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-[#FE214F]">790</CardTitle>
          <CardDescription>Error Listed</CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>3</CardTitle>
          <CardDescription>Sectors Assigned</CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>49%</CardTitle>
          <CardDescription>Profile Health</CardDescription>
        </CardHeader>
      </Card>
    </>
  )
}

export default StatusGrid
