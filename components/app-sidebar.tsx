"use client"

import * as React from "react"
import {
  IconApps,
  IconBrain,
  IconBrandHipchat,
  IconCertificate,
  IconClipboardData,
  IconCode,
  IconDashboard,
  IconFileCv,
  IconFileTextSpark,
  IconFlask2,
  IconLeaf,
  IconPencilDollar,
  IconReceipt2,
  IconStack2,
  IconTool,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { NavData } from "./nav-data"

const data = {
  user: {
    name: "Muhammad Akmal",
    email: "makmal316@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Offers",
      url: "/dashboard/offers",
      icon: IconReceipt2,
    },
    {
      title: "Applications",
      url: "/dashboard/applications",
      icon: IconApps,
    },
    {
      title: "Messages",
      url: "/dashboard/messages",
      icon: IconBrandHipchat,
    },
    {
      title: "Prices",
      url: "/dashboard/prices",
      icon: IconPencilDollar,
    },
  ],
  documents: [
    {
      name: "Cover Letter",
      url: "/dashboard/cover-letter",
      icon: IconFileTextSpark,
    },
    {
      name: "Curriculum Vitae",
      url: "/dashboard/curriculum-vitae",
      icon: IconFileCv,
    },
  ],
  master: [
    {
      name: "Levels",
      url: "/dashboard/level",
      icon: IconStack2,
    },
    {
      name: "Feature Types",
      url: "/dashboard/feature-types",
      icon: IconLeaf,
    },
    {
      name: "Biodata",
      icon: IconClipboardData,
      url: "#",
      items: [
        {
          name: "Skills",
          url: "/dashboard/skills",
          icon: IconTool,
        },
        {
          name: "Experiences",
          url: "/dashboard/experiences",
          icon: IconBrain,
        },
        {
          name: "Educations",
          url: "/dashboard/educations",
          icon: IconFlask2,
        },
        {
          name: "Certifications",
          url: "/dashboard/certifications",
          icon: IconCertificate,
        },
      ]
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/">
                <IconCode className="!size-5" />
                <span className="text-base font-semibold">Akmal Dev</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavData items={data.master} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
