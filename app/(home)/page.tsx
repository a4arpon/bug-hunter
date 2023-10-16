import GroupsGrid from "@/components/others/GroupsGrid"
import StatusGrid from "@/components/others/StatusGrid"

const HomePage = () => {
  return (
    <section className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
      <StatusGrid />
      <GroupsGrid />
    </section>
  )
}

export default HomePage
