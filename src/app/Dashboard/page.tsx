"use client"
import { AppShell, AppShellNavbar, Avatar, Burger, Button, Group, Menu, MenuTarget, NavLink, rem, Text, TextInput, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {FaSearch} from 'react-icons/fa'
import{
    IconSettings,
    IconSearch,
    IconPhoto,
    IconMessageCircle,
    IconTrash,
    IconArrowsLeftRight,
} from '@tabler/icons-react';
export default function BasicAppShell(){
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
           <Title>Dashboard</Title>
           </Group>
           <Group>
            <TextInput leftSection={<FaSearch />} placeholder="search" />
           </Group>

        </Group>
    </AppShell.Header>
    <AppShellNavbar p="md">
    Navbar
    <NavLink href="" label="Security"/>
    <NavLink label="Setting"/>
    <NavLink label="Account"/>
    <NavLink label="Logout"/>

    
    </AppShellNavbar>
    <AppShell.Main>

        <Text>Ini Dashboard</Text>
        <Menu shadow="md" width={200}>
        <Menu.Target>
        <Button>Menu</Button>
        </Menu.Target>

        <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item leftSection={<IconSettings style={{width: rem(14), height: rem(14)}} />}>Settings</Menu.Item>
        <Menu.Item leftSection={<IconMessageCircle style={{width: rem(14), height: rem(14)}} />}>Messages</Menu.Item>
        <Menu.Item leftSection={<IconPhoto style={{width: rem(14), height: rem(14)}} />}>Gallery</Menu.Item>
        <Menu.Item
        leftSection={<IconSearch style={{width: rem(14), height: rem(14)}} />}>
            Search
        </Menu.Item>
        <Menu.Divider />
        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
        leftSection={<IconArrowsLeftRight style={{width: rem(14), height: rem(14)}} />}
        >
            Transfer My Data
        </Menu.Item>
        <Menu.Item
        color="red"
        leftSection={<IconTrash style={{width: rem(14), height: rem(14)}} />}>
            Delete My Account
        </Menu.Item>


        </Menu.Dropdown>
        </Menu>
    </AppShell.Main>
   
    </AppShell>
);
}