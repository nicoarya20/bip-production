"use client"

import { AppShell, AppShellNavbar, Burger,  Group,  NavLink, TextInput, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {IconSearch} from "@tabler/icons-react"

import { useRouter } from "next/navigation";
export default function BasicAppShell({children}: {children: React.ReactNode}){
const router = useRouter();
    const [opened, { toggle }] = useDisclosure();

return(
    <AppShell
    header={{height:60}}
    navbar={{width:300, breakpoint:"sm", collapsed: {mobile: !opened}}}
    >
    <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
           <Group>
           <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
           <Title>Coba Dulu</Title>
           </Group>
           <Group>
            <TextInput leftSection={<IconSearch/>} placeholder="search" />
           </Group>
        </Group>
    </AppShell.Header>
    <AppShellNavbar p="md">
    <NavLink onClick={() => router.push("/Dashboard")} label="Dashboard"/>
    <NavLink onClick={() => router.push("/security")} label="Security"/>
    <NavLink onClick={() => router.push("/setting")} label="Setting"/>
    <NavLink label="Account"/>
    <NavLink label="Logout"/>

    </AppShellNavbar>

    <AppShell.Main bg={"biru"}>
    {children}

    </AppShell.Main>

    </AppShell>
);
}