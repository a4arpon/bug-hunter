import { Anchor, Hammer, LayoutDashboard } from "lucide-react"
import Link from "next/link"
const Navbar = () => {
  const LinkList = [
    {
      title: "Dashboard",
      link: "/",
      icon: <LayoutDashboard />,
    },
    {
      title: "Issues",
      link: "/issues",
      icon: <Hammer />,
    },
  ]
  return (
    <nav className="border-b">
      <div className="container flex h-20 items-center justify-between">
        <h1 className="flex flex-col items-center justify-center gap-2 font-bold uppercase">
          <Anchor size={32} />{" "}
          <span className="hidden lg:inline-block">Bug Hunter</span>
        </h1>
        <ul className="flex space-x-3 text-lg font-medium uppercase">
          {LinkList.map((item, index) => (
            <li key={index}>
              <Link
                href={item?.link || "/"}
                className="flex flex-wrap items-center justify-center gap-1 "
              >
                {item?.icon}{" "}
                <span className="hidden lg:inline-block">{item?.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
