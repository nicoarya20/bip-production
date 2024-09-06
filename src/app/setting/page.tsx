"use client"
import { Box, Button, Collapse, Group, Stack, Checkbox, Title, Paper } from "@mantine/core";
import BasicAppShell from "../Viewlayout/page";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Setting() {
   const [open, setOpen  ] = useState(false);
   const [buka, setBuka  ] = useState(false);
   const [open2, setOpen2  ] = useState(false);
   const router = useRouter();
   return (
      <BasicAppShell>
         <Stack align="center" justify="center" h={"100vh"}>
            <Paper withBorder p={"xl"}>
               <Stack>
               <Box>
                  <Stack>
                     <Title>Settings</Title>
                     <Group>
                        <Button onClick={() => setOpen(!open)}>Choose between light and dark mode</Button>
                        <Collapse in={open}>
                           <Checkbox label="White mode" mt="md" />
                           <Checkbox label="Dark mode" mt="md" />
                        </Collapse>
                     </Group>
                  </Stack>
               </Box>
               <Box>
                  <Group>
                     <Button onClick={() => setBuka(!buka)}>Choose Font size</Button>
                     <Collapse in={buka}>
                        <Checkbox label="Small" mt="md" />
                        <Checkbox label="Medium" mt="md" />
                        <Checkbox label="Large" mt="md" />
                     </Collapse>
                  </Group>
               </Box>
               <Box>
               <Group>
                  <Button onClick={() => setOpen2(!open2)}>Choose Languanges</Button>
                  <Collapse in={open2}>
                     <Checkbox label="English" mt="md" />
                     <Checkbox label="Indonesia" mt="md" />
                  </Collapse>
               </Group>
               </Box>
               </Stack>
            </Paper>
            <Button onClick={() => router.push("/Viewlayout")}>Back To Dashboard</Button>
         </Stack>
      </BasicAppShell>


   );
}