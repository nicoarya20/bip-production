"use client";
import {Stack, Title, Text, TextInput, Button, Paper } from "@mantine/core";
import BasicAppShell from "../Viewlayout/page";
import { useRouter } from "next/navigation";

export default function Security() {
   const router = useRouter();
   return (
      <BasicAppShell>

      <Stack display="flex" align="center" justify="center" h={"100vh"}>
         <Paper withBorder p={"xl"}>
         <Title>Wait a minute...</Title>
      <Text fw={500} fz={"lg"} mt={10}>This page is your privacy protection</Text>
      <Text>
         You will never know what are you doing with your email address.
      </Text>
      <Text fw={500} mb={5}>Please enter your email</Text>

      <TextInput placeholder="Enter your email" label="Email" mt="md"/>
      <Stack><Button mt="md">Submit</Button>
      <Button onClick={() => router.push("/Viewlayout")}>Back</Button>
      </Stack>
      </Paper>
      </Stack>
      </BasicAppShell>
   );
}